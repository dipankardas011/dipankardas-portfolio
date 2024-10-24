+++
title = "[2024-10] Diary for October 2024"
date = 2024-10-01
author = "Dipankar Das"
description = "Let's talk about my October 2024"
+++

# Date 2024-10-24
* reading about redhat openshift multi cluster engine, Operator Lifecycle Manager, Platform Lifecycle Manager
* reading books
* buildsafedev work

# Date 2024-10-23
* cncf tag green PR help
* office work
* reading books

# Date 2024-10-22
* completed the buildsafe ci/cd end to end
* reading books
* learning about redhat openshift

# Date 2024-10-21
* reading books
* call with harsh and saiyam on new ideas and plans on ksctl future
* learning about h2c and http1 in gcloud cloud run service
* writing some technical documentation in dayjob

# Date 2024-10-19 2024-10-20
* learning about OpenShift Platform Plus
* call with Harsh on another aspect of interesting alternative arch for k8s
* Completed and understood about gcloud run service
* artifact registry with CI/CD
* Ksctl work
* eBPF learnings

# Date 2024-10-18
* learning about gcloud run and artifact registry and secret management
* office work
* buildsafe work

# Date 2024-10-17
* learning about SLSA concepts
* office work
* buildsafe work

# Date 2024-10-16
* learning about SLSA `verify build platform` `threats and migrations`
* learning about crowdsec

# Date 2024-10-15
* learning about Distributing provenance, verifying artifacts in SLSA
* buildsafedev working on CI/CD
* learning about the key differences b/w kafka and nats more about consumers and different modesl of getting data (push and pull)
  * kafka based consumers need to handle the offset and also the partition and sequence number
  * need to fix the no of partitiions for each topic as each pariton of a given sequence in kafka can be consumed by only one consumer
  * nats based consumers are more like pubsub model and can be consumed by multiple consumers no need to handle the offset and partition

# Date 2024-10-14
* learning about SLSA security levels, Producing artifacts
* frappe after_migrate hook, inbuilt slack webhook with notification doctype usecase
* reading books
* learning about the key differences b/w kafka and nats

# Date 2024-10-13
* reading about SLSA <https://slsa.dev/spec/v1.0/terminology> and docker buildx build support for it <https://docs.docker.com/reference/cli/docker/buildx/build/#sbom>
* completed one market research for ksctl
* reading book
* read about graceful termination and how to avoid getting new requests in k8s pod when doing so
  * one hacky way or correct way is to have an endpoint `/v1/healthz` which will return 200 when pod is ready to terminate and 503 when it is not, which we can control as a global variable in the code and when we recieve a sigterm from runtime we can set that variable to some value and it in return make the endpoint to return 503, so if we have the liveliness probe setup k8s will stop sending new requests to the terminating pod and by that time we can gracefully terminate the exeiting connections and then exit the pod
* epereienced the choopstick way of holding a landing 1st stage booster (ctx: spaceX)

# Date 2024-10-12
* some nice good night walk 
* some more market research for ksctl
* reading about git clone advance blog post by the github team
* came to know about alternatiev solution for k8s

# Date 2024-10-11
* finally utlized set() in real world problem
* some advance git clone commands
  * `--filter=blob:none` (These clones download all reachable commits and trees while fetching blobs on-demand.)
  * `--filter=tree:0` (These clones download all reachable commits while fetching trees and blobs on-demand.)
  * `--depth=1` (These clones truncate the commit history to reduce the clone size. This creates some unexpected behavior issues, limiting which Git commands are possible.)
  * blobs: These represent file contents.
  * trees: These represent directories.
  * commits: These are snapshots in time
  * reference: <https://github.blog/open-source/git/get-up-to-speed-with-partial-clone-and-shallow-clone/>
* started to learn how to do market research
* youtube system design from bytebytego

# Date 2024-10-10
* learning about git shallow-since argument
* debugging docker and k8s issues
* debugging and working with shit python untyped dict and list

# Date 2024-10-09
* came to know more about integrating frappe with static page
* buildsafe github ci work
  * nix os and its build as a docker image
* azure k8s management

# Date 2024-10-07 2024-10-08
* created a market analysis doc for ksctl
* learning 100go.co
  * errorGroups
  * sync.Cond
  * many more
* python coding

# Date 2024-10-06
* reading about more blog posts on Problems of IaC 
* explored GLassKube
* a lot of though on ksctl and how to make it better
* getting into green software foundation's **Carbon aware SDK**

# Date 2024-10-04 2024-10-05
* more thought about ksctl goals and the problem it solves
* came to know how to do git log with os exec in go
* Reading more articles and Problems in IAC and Gitops space
* review one of the cncf green reviews PR

# Date 2024-10-03
* reading article on why cloud UX sucks
* buildsafe work
* some python automation scripting
* rclone for s3 backups

# Date 2024-10-01 2024-10-02
* reading about Software design principles
  * reading about caching, high avability ,...
* traveling back to Pune
* some more learning and requirements gathering for ksctl
* doing some buildsafe work
