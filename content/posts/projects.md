
+++
title = "Projects"
author = "Dipankar Das"
description = "Projects and OSS contribs"
cover = "/img/cover-projects.png"
+++

# My project collection

## Raft based Distributed Consensus enabled datastore

### Description
it demonstrates the use of distributed consensus model. Using Raft developed the node with peer and client connections with GRPC.
And using the cli client you can save key=value data in the raft model
also under the hood it helps to read,write,delete data from the external database through leader of the raft nodes

{{< image src="https://gitlab.com/dipankardas011/go-playground/-/raw/main/raft-based-distributed-consensus/img/read.png" alt="Raft based Distributed Consensus enabled datastore" position="center" style="border-radius: 8px;" >}}


### Links
https://gitlab.com/dipankardas011/go-playground/-/tree/main/raft-based-distributed-consensus?ref_type=heads


## Universal CI/CD pipeline manager

### Description

this tool provides a convenient way to create a workflow aka pipeline for automated testing or CI workflow

{{< image src="https://gitlab.com/dipankardas011/universalci-cd/-/raw/main/cover.png" alt="Universal CI/CD pipeline manager" position="center" style="border-radius: 8px;" >}}


### Links
https://gitlab.com/dipankardas011/universalci-cd

## AWS Resource Dependency-graph generator

### Description

As AWS doesn't provide a way to get a dependency graph of how all resources are connected,
this tool will help you generate the diagram for all the dependencies between resources

{{< image src="https://gitlab.com/dipankardas011/aws-resource-dependency-graph/-/raw/main/cover_cloudformation.png" alt="AWS Resource Dependency-graph generator" position="center" style="border-radius: 8px;" >}}


### Links
https://gitlab.com/dipankardas011/aws-resource-dependency-graph

## Chat Bot using GPT-2

### Description

It shows how to create a basic http server using rust and have it to handle my text2text generator bot in huggingface

{{< image src="https://raw.githubusercontent.com/dipankardas011/my-wasm-learning/main/wasi-bot/coverpage.png" alt="Chat Bot using GPT-2" position="center" style="border-radius: 8px;" >}}

### Links (Wasmedge using Rust)
https://github.com/dipankardas011/my-wasm-learning/tree/main/wasi-bot

### Links (Spin by Fermyon using Rust)
https://github.com/dipankardas011/my-wasm-learning/tree/main/gpt2-bot

### Links (Tokio, Async using Rust)
https://github.com/dipankardas011/bot-request-handler-rust


## ksctl

### Description

Cloud Agnostic Kubernetes Management tool which can manage Kubernetes clusters on multiple cloud providers. Option to choose between self-managed HA clusters and cloud managed clusters

{{< image src="https://github.com/kubesimplify/ksctl/raw/main/img/ksctl-cover.png" alt="PDF-Editor" position="center" style="border-radius: 8px;" >}}

### Links
https://github.com/kubesimplify/ksctl
https://github.com/kubesimplify/ksctl-cli
https://github.com/kubesimplify/ksctl-dashboard
https://github.com/kubesimplify/ksctl-docs


## PDF-Editor

### Description

A web app to merge and rotate PDFs

{{< image src="https://github.com/dipankardas011/PDF-Editor/raw/main/coverpage.png" alt="PDF-Editor" position="center" style="border-radius: 8px;" >}}

### Links
https://github.com/dipankardas011/PDF-Editor


## Weather-App

A web app to get weather report for a given location

### Description

{{< image src="https://github.com/dipankardas011/Weather-App/raw/main/CoverPage.jpeg" alt="PDF-Editor" position="center" style="border-radius: 8px;" >}}

### Links
https://github.com/dipankardas011/Weather-App

## Flight Booking System

### Description

An application that is used to book Aeroplane tickets and also visualization of seating arrangement via a generated picture

{{< image src="https://github.com/dipankardas011/AirportBooking/raw/main/CoverPage.jpg" alt="PDF-Editor" position="center" style="border-radius: 8px;" >}}

### Links
https://github.com/dipankardas011/AirportBooking

# My Open Source contributions

- CNCF TAG Green
  - [Issue on design docs](https://github.com/cncf-tags/green-reviews-tooling/issues/1)
  - [Provision-cluster-with-OpenTofu-and-K3s-cilium-cni](https://github.com/cncf-tags/green-reviews-tooling/pull/6)
  - [flux-based-helm-install-of-kepler](https://github.com/cncf-tags/green-reviews-tooling/pull/17)
- Fermyon (WASM)
  - [Added cargo build via --bin flag](https://github.com/fermyon/developer/pull/744)
  - [fix: added error handling `spin trigger [USAGE]`](https://github.com/fermyon/spin/pull/1671)
- CNCF Glossary
  - [Missing link for Vertical-scaling in bare_metal_machine.md](https://github.com/cncf/glossary/pull/628)
  - [Missing link to Vertical Scaling](https://github.com/cncf/glossary/pull/634)
  - [Typo Changes from 'document' to 'manifest file'](https://github.com/cncf/glossary/pull/635)
- Kubernetes
  - [added Note for secret in same namespace as the Deployment, Pods](https://github.com/kubernetes/website/pull/42329)
  - [Removal of the bases field as it is deprecated by kustomize](https://github.com/kubernetes-sigs/node-feature-discovery/pull/1246)
  - [Use of exponentialTimeout instead of ImmediateTimeout for resource scaling](https://github.com/kubernetes/kubernetes/pull/116961)
  - [Code Refactoring of Pod under pkg/api](https://github.com/kubernetes/kubernetes/pull/112085)
  - [Error Suppression in printer/internalversion/printers3](https://github.com/kubernetes/kubernetes/pull/113870)
  - [Added error handling in ValidateAdmissionPolicy](https://github.com/kubernetes/kubernetes/pull/114894)
  - [modifications to taint-and-tolerations page2](https://github.com/kubernetes/website/pull/34067)
  - [Added make module-init command in Readme](https://github.com/kubernetes/website/pull/36667)
- Monokle by KubeShop
  - [Addition of more in-build templates](https://github.com/kubeshop/monokle-default-templates-plugin/pull/4)
  - [feat(terminal): added ZSH shell for Linux based OS ](https://github.com/kubeshop/monokle/pull/2308)
- Komiser by tailwarden
  - [fix: Dockerfile MAINTAINER label](https://github.com/tailwarden/komiser/pull/835)
  - [enhancement: add new ascii art logo](https://github.com/tailwarden/komiser/pull/833)
- Meshery by Layer5
  - [\[UI\] Removal of unused variables with comments](https://github.com/meshery/meshery/pull/6422)
  - [\[Server\] Refactoring of Function Comments](https://github.com/meshery/meshery/pull/6421)
- Datreeio
  - [docs: add uninstall for helm release](https://github.com/datreeio/admission-webhook-datree/pull/77)
- Kubescape by Armo
  - [Cosign for quay.io in Github Action](https://github.com/kubescape/kubescape/pull/826)

