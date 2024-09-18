+++
title = "[2024-04] Diary for April 2024"
date = 2024-04-01
author = "Dipankar Das"
description = "Let's talk about my April 2024"
+++

# Date 2024-04-25 2024-04-30
* got selected for jaeger gsoc but got rejected due to internal reasons
* ksctl relase for the v1.1.4 done
* ksctl core got updated
* ksctl event driven architecture new interface was merged

# Date 2024-04-24
* Kubernetes controller build
  * nice makefile improvements
  * helm go client to uninstall charts
  * leaderElectionID in each k8s controller is important otherwise if > 1 share the same one will acquire the leader lock and another cannt
* Ansible scripting

# Date 2024-04-22 2024-04-23
* written kubernetes gke blog post
* ksctlstorage importer and crd apply using kubernetes client go
* ksctl application feature
* improved my makefile skills
* ansible script at work

# Date 2024-04-21
* ksctl automation of ksctl agent and the controller deployment

# Date 2024-04-15 2024-04-20
* write some blogs on rate limiting wit nginx
* ksctl storage and automation of ksctl specific apps componenets updates
* hardened my vault server
* did k6 test on my friends server and destroyed this server
* understanding wasm by watching wasmio talks
* knowledge sharing on infra and coding aspects

# Date 2024-04-14
* discussion on ksctl future
* discussion on the finaly project submittion in college
* play with wasm with binary and also grayscale image as well
  {{<tweet user="DipankarDas011" id="1779567112891031952">}}

# Date 2024-04-13
* portfolio updates
* apply some for places

# Date 2024-04-12
* came to understand how to do ssl renew better
  * dns-cloudflare
  * webroot (initially generate the certificate with nginx 80 and then expose 443 after reciving certs)

# Date 2024-04-11
* used fail2ban and cloudflare with abuseip
* updated the issue tracking in ksctl
* added some fixes and docs for the ksctl feature of ksctl agent and storage controller

# Date 2024-04-08 2024-04-10
* started the integration of ksctl agent and importstorage controller
  * did fixing the controller and the kubernetes storage and added docs for it to run
  * did the tryout and it all worked
  * left to determine how we are going to deploy it
* came to use k6 lot thanks to work
* come contributions to cncf-green-reviews
* came to know about dagger and gptscript

# Date 2024-04-07
* added export and import functions
* worked with kubebuilder and folder structre in ksctl
* also added controllers for storage.ksctl.com and grpc client and server
* discussion on standarization of error in ksctl with one of the contributor

# Date 2024-04-03 2024-04-06
* terraform with hpa and vpa with cluster autoscaler with k6 stress test to see how it works in real GKE tf
* ksctl agent and ksctl storage drivers with export and import
  * bi-weekly community calls
* you can use docker to do log rotations for you [Refer](https://docs.docker.com/config/containers/logging/local/), [Why is in Tips](https://docs.docker.com/config/containers/logging/configure/)

# Date 2024-04-02
* kubernetes and cloud sql infra in terraform for gke
* how to use mongosh for fetching data and fixed ksctl support for mongodb as ext datastore
* did some yoga

# Date 2024-04-01
* ksctl project roadmp for this iteration
* ksctl agent planning and coding
* fixed github actions with reusing workflows as a job

