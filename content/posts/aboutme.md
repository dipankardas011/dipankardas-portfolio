
+++
title = "About Me"
author = "Dipankar Das"
description = "Let's talk about me"
cover = "img/cover.png"
+++

# About Me

{{< image 
    src="/img/profile_v2.jpeg" 
    alt="profile image" 
    style="float: left; margin: 0 15px 15px 0; border-radius: 8px; width: 350px;" 
>}}

I am **Dipankar Das**, an automation and platform engineer passionate about building **reliable, scalable, and sustainable systems** that eliminate repetitive tasks and accelerate developer productivity. I specialize in **DevOps, Kubernetes, cloud-native platforms, and infrastructure automation**, with a strong interest in **environmentally conscious computing** and reducing the carbon footprint of cloud workloads.  

I am an active **member of the Kubernetes organization** and have contributed to several **CNCF and open-source projects**, including **CNCF TAG Green**, **Kubernetes**, **Armo**, **Kubeshop**, **Cilium**, and more. My open-source work focuses on **improving developer workflows, benchmarking cloud-native applications, and building sustainable infrastructure tooling**.  

Currently, I work as a **DevOps Engineer (Platform Engineer) at [rtCamp](/posts/aboutme/#rtcamp)**, and I am also the **Founder of Ksctl**, a cloud-agnostic and carbon-aware Kubernetes lifecycle management tool. I have experience across **platform engineering, DevSecOps, MLOps, and infrastructure automation**, and I enjoy building solutions that **reduce operational complexity, increase reliability, and improve developer productivity**.  

🏆 **Achievements & Recognitions**  
- Winner of the **Napptive + WeMakeDevs Cloud Native Hackathon** (Track 2) – [Results Link](https://napptive.com/blog/napptive-wemakedevs-cloud-native-hackathon-results/)  
- Built **Ksctl**, a sustainable Kubernetes management CLI supporting multi-cloud, carbon-aware provisioning, and dynamic GitHub Actions runners.  
- Developed internal **DevSecOps and MLOps pipelines** for automated security testing, scalable LLM deployments, and CI/CD optimization.  

## Core Skills & Expertise
- **Cloud & Infrastructure:** AWS, GCP, Azure, Kubernetes (EKS/GKE/AKS/K3s), Terraform, Helm, GitOps (ArgoCD)  
- **Programming & Automation:** Go, Python, Bash, Ansible, Makefile, Docker, Dagger, CI/CD pipelines, GitHub Actions  
- **Security & Observability:** OWASP ZAP, Snyk, Prometheus, New Relic, SSL automation, network security integrations  
- **Sustainability & Efficiency:** Carbon-aware provisioning, multi-cloud optimization, resource-efficient ML deployments  


## Experience

### rtCamp
{{< image src="/img/experience/rtcamp.png" alt="profile image" style="border-radius: 8px;margin-right: 20px;" scale="5" >}}

`Tenure`: 01/2024 to Present  
`Role`: **DevOps Engineer**  

`Key Contributions`
- Implemented **self-hosted multi-runner architecture**, improving CI/CD developer velocity by **50%** and optimizing infrastructure utilization by **40%**.  
- Migrated to **self-hosted Google Tag Manager**, reducing network calls to third-party consumers and improving page performance.  
- Designed **Kubernetes-based WordPress deployments** with **10× higher availability and fault tolerance**.  
- Built a **deployment dashboard** with Terraform-powered **BYOC support**, reducing site go-live time by **2×**.  
- Developed **internal automation tools** with Frappe and Ansible (multi-runner provisioning, certbot integration, monitoring with New Relic).  
- Implemented optimizations for **AWS Savings Plans** (EC2 + RDS) and integrated **Cloudflare + Fail2Ban** for enhanced security.  

### Kubmin - Ksctl
{{< image src="/img/experience/kubmin-logo.png" alt="kubmin image" style="border-radius: 8px;margin-right: 20px;" scale="10" >}}

`Tenure`: 06/2025 to Present  
`Role`: **Founder & Principal Engineer**  

`Key Contributions`
- **System Design**: Architected Go-based stateless service which can share horizontally which is bascked by SQLite (Turso), Redis caching, Rate Limiting, and NATS messaging for event based system, thus enabling cluster's workload lifecycle management across AWS, Azure, and GCP.
- **Asynchronous Task Processing**: Built event-driven worker system with NATS messaging for long-running cluster operations, improving API responsiveness and enabling horizontal scalability. In Process got to create custom Statemachine for handling complex workflows from retry logic to what all errors can be retried with exploiting NAK and ACK mechanism.
- **Enterprise RBAC & Quota System**: Implemented role-based access control with Authzed and multi-tenant quota enforcement for workload management across organization hierarchies.
- **Full-Stack Platform**: Developed Next.js (App Router) SaaS frontend with TypeScript, Tailwind CSS, and shadcn/ui, featuring real-time monitoring and developer-centric UI.
- **Agentic Workflows**: Leveraging Claude Code and Gemini CLI models to build autonomous agents during development phase of this paltform to help developers with higher velocity and less cognitive load.

[Project Link](https://ksctl.com/product/kubmin/)


### Viamagus
{{< image src="/img/experience/viamagus.jpg" alt="profile image" style="border-radius: 8px;margin-right: 20px;" scale="5" >}}

`Tenure`: 02/2025 to 04/2025  
`Role`: **DevSecMLOps Consultant**  

`Key Contributions`
- Implemented **OWASP ZAP** for automated security testing with custom proxy deployment.  
- Integrated **Snyk** for continuous vulnerability detection in CI/CD pipelines.  
- Optimized an **internal LLM project** for containerization, disk/network efficiency, and faster inference.  
- Deployed **vLLM on AWS** using **Auto Scaling Groups and VPC PrivateLink**, enabling secure, scalable ML workloads.  
- Conducted **DevSecOps best-practice audits** across multiple projects, ensuring compliance and reliability.  


### KsctlCLI - ksctl
{{< image src="/img/experience/ksctl-logo.png" alt="profile image" style="border-radius: 8px;margin-right: 20px;" scale="10" >}}

`Tenure`: 07/2022 to 07/2025
`Role`: **Creator**  

`Key Contributions`
- Developed **Ksctl**, a **single-command CLI** for fully automated Production/Dev/Staging Kubernetes cluster creation.  
- Engineered a **network-resilient, concurrent SSH bootstrapper**, reducing setup time by **20×**.  
- Integrated **carbon-aware provisioning**, recommending regions and instance types with lower emissions and cost.  
- Built a **dynamic GitHub Actions runner pipeline (0→N→0)** that scales without Kubernetes, minimizing idle costs.  
- Unified **multi-cloud support (EKS, GKE, AKS, K3s, kubeadm)** and **addon management** under a single CLI interface.  

[Project Link](https://ksctl.com/product/ksctl/)

### Kubesimplify
{{< image src="/img/experience/kubesimplify.png" alt="profile image" style="border-radius: 8px;margin-right: 20px;" scale="10" >}}

`Tenure`: 03/2022 to 07/2024  
`Role`: **Ambassador**  

`Key Contributions`
- Authored blogs and tutorials on Kubernetes and Go ([**Refer**](/posts/blogs/)).  
- Conducted **Twitch live sessions** on cloud-native development and Golang best practices.  
- Maintained and improved **Ksctl**, contributing to CNCF-aligned open-source tooling.  


### Viamagus
{{< image src="/img/experience/viamagus.jpg" alt="profile image" style="border-radius: 8px;margin-right: 20px;" scale="5" >}}

`Tenure`: 03/2023 to 09/2023  
`Role`: **DevOps Intern**  

`Key Contributions`
- Supported **Kubernetes migration to EKS** with **NGINX Gateway API** for traffic management.  
- **Dockerized Node.js applications** and migrated reverse proxy from Apache → NGINX.  
- Automated **Jenkins job creation** using a CLI tool, streamlining CI/CD workflows.  
- Integrated **Snyk** for vulnerability scanning and **Prometheus** for real-time observability.  
- Migrated repositories to **AWS CodeCommit** and automated SSL provisioning with **Let’s Encrypt**.  


## Interests
- Full **project lifecycle management**, from development to deployment.  
- Designing **scalable and sustainable cloud-native infrastructures**.  
- Automating repetitive tasks with **programming and DevOps tools**.  
- Contributing to **open-source projects** that improve developer productivity and sustainability.

## Tools and Technologies

`#Kubernetes` `#Docker` `#Linux` `#Git` `#AWS` `#Azure` `#Restful-API` `#GRPC` `#Github` `#GitLab` `#Ansible` `#Terraform` `#Jenkins` `#Civo`


## Programming Languages
`#Go` `#Rust` `#Python` `#Java` `#C` `#Javascript` `#Bash`


## Achievements

- Member of Kubernetes and Kubernetes-Sigs Org
- Got invited for joining Github maintainers repo
- almost got selected for LFX mentorship
- Create a few projects based on software development, DevOps knowledge I attained
- a PR wrangler in sig-docs
- OSS Kubernetes code contributions and many CNCF related projects like monokle, kubescape, etc
- created a PDF-editor project which taught me about microservice architecture design pattern and devops tools to automate things
- Created a Ksctl project to learn more about golang, cloud platforms, advance concepts like logging, cli, threading, .. and also learn how to interact with kubernetes client-go

## Certificates and Badges

Name | link
-|-
AWS Academy Graduate - AWS Academy Cloud Architecting | [![Badge](/img/badges/aws-academy-architecting-kiit.png)](https://www.credly.com/badges/63a7c0ba-6f8b-40c8-b97d-b65e2b857aeb/public_url)
AWS Academy Graduate - AWS Academy Cloud Foundations | [![Badge](/img/badges/aws-academy-kiit.png)](https://www.credly.com/earner/earned/badge/b37dea43-f280-4983-918b-e3544d4764cc)
DevOps Internship Completion Certificate (Viamagus) | [Certificate link](https://drive.google.com/file/d/1T04L-b_93_B_BnlGlyzfGjH5aP-_lP-m/view?usp=sharing)
Certified Kubernetes Administrator (CKA) (KodeKloud) | [Certificate link](https://kodekloud.com/certificate-verification/2D03EB671CD0-2D01CCFFAE35-2D01CCC2F228/)
Certified Kubernetes Application Developer (CKAD) (KodeKloud) | [certificate link](https://kodekloud.com/certificate-verification/2D03EB671CD0-2D01CCFF5DBB-2D01CCC2F228/)
Developing a Winning Marketing Strategy | [Certificate link](https://drive.google.com/file/d/1ahQh8KIY_Q22VUekZArCzQ9IlAPGgd85/view?usp=sharing)
Developing a Marketing Mix for Growth | [Certificate link](https://drive.google.com/file/d/1onKFKXSuoY-72fhIF8eyCp_9xLDjEYOg/view?usp=sharing)
Cisco Network Introduction | [![Badge Link](/img/badges/ccna-introduction-to-networks.png)](https://drive.google.com/file/d/1litYROTDl_F-MBmwyQrz-efayT3ZogXT/view?usp=sharing)
Cisco Cybersecurity Essentials | [![Badge Link](/img/badges/cybersecurity-essentials.png)](https://drive.google.com/file/d/1g-evjWia3Kb6dQW7qaPu50q3rX_wqc5u/view?usp=sharing)
Cisco Cybersecurity Introduction | [![Badge Link](/img/badges/introduction-to-cybersecurity.png)](https://drive.google.com/file/d/1Q4SLZ0tPtWD0wmflEnougjnAfWzU4kJu/view?usp=sharing)
Cisco Programming Essentials on Python | [Badge Link](https://drive.google.com/file/d/1a456llJhGmlh9lqQUGOJhjwtH5Soyhrp/view?usp=sharing)
AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1 | [![badge image](/img/badges/aws-academy-graduate-aws-academy-introduction-to-cloud-semester-1.png)](https://www.credly.com/badges/b5388332-916b-4118-9da1-a8c05a6166e9/public_url)
HashiCorp Certified: Vault Associate Certification (KodeKloud) | [certificate Link](https://kodekloud.com/certificate-verification/2D03EB671CD0-2D1219437F4C-2D01CCC2F228/)
Terraform Basics Training Course (KodeKloud) | [certificate link](https://kodekloud.com/certificate-verification/2D03EB671CD0-2D01CD002300-2D01CCC2F228/)
Cilium Cluster Mesh | [![badge image](/img/badges/cilium-cluster-mesh.png)](https://www.credly.com/badges/4cca6123-05fe-4446-9f1a-b7aa00fad681/public_url)
Clilium Service Mesh | [![badge image](/img/badges/cilium-service-mesh.png)](https://www.credly.com/badges/55f26118-8541-4836-9347-6cf8b404f5e9/public_url)
Cilium Getting Started | [![badge image](/img/badges/cilium-getting-started.png)](https://www.credly.com/badges/886d4bec-332f-461d-8747-d676ce3eb1e2/public_url)
GitOps Fundamentals with ArgoGitOps Fundamentals with Argo(Codefresh) | [Certificate Link](https://drive.google.com/file/d/1bEVjKmpoGEXRH1133Tdaj7kAoPbp39b5/view?usp=sharing)
Fundamentals for Istio Ambient Mesh by Solo.io | [![badge image](/img/badges/fundamentals-for-istio-ambient-mesh-by-solo-io.png)](https://www.credly.com/badges/66b3471a-394c-4f3e-b882-09969368d4bf/public_url)
LFD103: A Beginner's Guide to Linux Kernel Development | [![badge image](/img/badges/lfd103-a-beginner-s-guide-to-linux-kernel-development.png)](https://www.credly.com/badges/f158dc79-d161-4c73-a921-491f5c0d4c54/public_url)

# Latest Resume

[![resume-preview](/img/resume-preview.jpg)](https://raw.githubusercontent.com/dipankardas011/dipankardas011/main/Resume.pdf)
