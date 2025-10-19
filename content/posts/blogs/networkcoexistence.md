+++
title = "When Docker's Firewall Blocks Your Virt-Manager VM"
author = "Dipankar Das"
date = 2025-10-19
description = "How to resolve network connectivity issues between Docker and virt-manager VMs"
cover = "img/blogs/networkcoexistence.png"
tags = ["docker", "virt-manager", "networking", "linux", "virtualization", "troubleshooting"]
[build]
  list = 'never'
  render = 'always'
+++

## **Resolving Network Forwarding Conflicts Between Libvirt and Docker**

### **1. Introduction**

On a Linux development host, it is common to run both virtual machines managed by `libvirt`/KVM and containers managed by Docker. While powerful, this combination can lead to a networking conflict that isolates virtual machines from the internet. This article provides a technical root cause analysis of this issue and presents a robust, persistent solution using `firewalld`.

The primary symptom is that a `libvirt` VM, configured with the default NAT network, can be reached from the host but cannot access external networks. A key diagnostic indicator is the ability of the VM to resolve public DNS names while failing to receive responses from `ping` or other network requests.

### **2. Root Cause Analysis**

The issue stems from the interaction between how Docker and `libvirt` manage the host's `netfilter` (iptables) framework, specifically the `FORWARD` chain.

*   **Libvirt's Networking Model:** By default, `libvirt` creates a virtual bridge (`virbr0`) and uses a NAT-based network (`192.168.122.0/24`). For a VM to access the internet, the host's kernel must be configured to forward packets from the `virbr0` interface to the primary network interface. This process also requires a corresponding `iptables` `POSTROUTING` rule to apply Source Network Address Translation (SNAT), typically via the `MASQUERADE` target.

*   **Docker's Network Configuration:** For security and container isolation, the Docker daemon aggressively manages the host's firewall. Upon startup, it inserts a number of rules into `iptables`. Critically, **it sets the default policy of the `FORWARD` chain to `DROP`**. It then inserts rules to selectively accept traffic related to its own managed networks (e.g., `DOCKER-USER`, `DOCKER-FORWARD` chains).

**The Conflict:** Docker's `DROP` policy on the `FORWARD` chain is evaluated before `libvirt`'s less-specific rules. Consequently, packets originating from the `virbr0` interface, which are not explicitly matched by a higher-priority `ACCEPT` rule, are dropped by the default policy. Standard `firewalld` zone-based rules or policies can fail to take precedence over the rules Docker injects directly into the top of the chain.

The solution requires two components:
1.  **Explicit Forwarding Rules:** We must inject high-priority rules to explicitly `ACCEPT` traffic to and from the `virbr0` interface, ensuring these rules are evaluated before Docker's chains.
2.  **Masquerading:** We must ensure that NAT is correctly enabled for the `libvirt` zone to handle the source IP address translation.

### **3. Solution Implementation**

This solution uses `firewalld` to manage the configuration persistently and correctly.

#### **Step 3.1: Configure Explicit Packet Forwarding Rules**

We will use `firewalld`'s `--direct` interface to insert `iptables` rules at a specific priority in the `FORWARD` chain. A priority of `0` places them at the top, guaranteeing they are processed first.

```bash
# Add a permanent rule to accept traffic originating from the virbr0 interface for forwarding.
sudo firewall-cmd --permanent --direct --add-rule ipv4 filter FORWARD 0 -i virbr0 -j ACCEPT

# Add a permanent rule to accept return traffic destined for the virbr0 interface 
# for established or related connections.
sudo firewall-cmd --permanent --direct --add-rule ipv4 filter FORWARD 0 -o virbr0 -m state --state RELATED,ESTABLISHED -j ACCEPT
```
*   `-i virbr0`: Specifies the input interface.
*   `-o virbr0`: Specifies the output interface.
*   `-m state --state RELATED,ESTABLISHED`: This is a stateful rule that only matches packets that are part of an existing connection, which is essential for return traffic.
*   `-j ACCEPT`: Specifies the target; in this case, to accept the packet.

#### **Step 3.2: Enable Network Address Translation (NAT)**

The `libvirt` zone in `firewalld` must be configured to masquerade outgoing traffic. This will rewrite the source IP of packets from the VM to the host's IP address.

```bash
# Enable masquerading on the libvirt zone permanently.
sudo firewall-cmd --permanent --zone=libvirt --add-masquerade
```

##### **Step 3.3: Apply Configuration**

The permanent rules must be applied to the running firewall configuration.

```bash
# Reload firewalld to apply all permanent changes.
sudo firewall-cmd --reload
```

### **4. Verification**

After applying the configuration, verify that the rules are correctly implemented.

**1. Inspect the `iptables` FORWARD Chain:**
Confirm that the new rules are at the top of the chain.

```bash
sudo iptables -L FORWARD -n --line-numbers
```
*Expected Output:*
```
Chain FORWARD (policy DROP)
num  target     prot opt source               destination
1    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED
2    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0
3    DOCKER-USER  all  --  0.0.0.0/0            0.0.0.0/0
...
```

**2. Verify Masquerading Status:**
Confirm that masquerading is enabled for the `libvirt` zone.

```bash
sudo firewall-cmd --zone=libvirt --query-masquerade
```
*Expected Output:*
```
yes
```

**3. Test VM Connectivity:**
Restart the virtual machine to ensure it obtains a fresh network lease, then test external connectivity.

```bash
# From inside the VM
ping 8.8.8.8
```
The ping should now succeed, confirming that the network conflict has been resolved. This configuration is persistent across reboots and service restarts.

## Conclusion

I hope you liked blog post on troubleshooting things. Stay tuned for more such articles. 🫡
