+++
title = "[2025-10] Diary for October 2025"
date = 2025-10-01
author = "Dipankar Das"
description = "Let's talk about my October 2025"
+++

# Date 2025-10-25 2025-10-26
* learning about SCI calculation and some of the proper way to cacluate some like emboddied emissions
* some learning on the virtio on what does these virtual devices mean

# Date 2025-10-24
* learning when to use RWO based storage class in k8s. Using Cluster Backup says a lot of things.
* learning about longhron backup and velero backups.

# Date 2025-10-21 2025-10-23
* working on Gateway APi in k8s, helm upgrade hooks and some more longhorn specific learning
* EKS deployment with Terraform with cluster autoscaler provisined with IRSA and OIDC things.
* learning about RAPL and its sile structure and what all info it provides us with.

# Date 2025-10-20
* diwali celebrations :)
* learning about how to use longhorn and a hack for putting things inside the workernodes in a EKS setup via daemonset.
* Learning about go embed for sql migrations and how to use it with golang-migrate tool.

# Date 2025-10-17 2025-10-19
* working on kepler and understanding how it used to work with the model estimators.
* learning about cpu/\[0,N\]/msr, rapl and how does kepler use that to estimate.
* wrote a blog post on resolve-virtmanager-network
* able to make zero downtime deployments when there is a event based worker processing events and about draining it before making releases, all thanks to helm 
* learning how to better check for suitable limits, requests for cpu and memory for k8s workloads.

# Date 2025-10-15 2025-10-16
* working on helm hooks and some of the edge cases associated with them.

# Date 2025-10-14
* learning about _helpers.tpl and hooks in Helm charts. some more advance reusable functions.
* learning of otel context propgatioand sand when to switch off/on telemetry for certain parts of the code based on the logic.

# Date 2025-10-13
* learning about configMapGenerator and SecretMapGenerator with disable random suffix for kustomize. with debugging env variables play.
* learning about when do we use Otel Event vs Otel Span for tracing the HARD WAY.
* when to use otel span at all and all about the different context propagation methods and its evential consistency property which traces have.

# Date 2025-10-10 2025-10-12
* learning about placement groups usage any Cloud provider also the microsecond latencies and how to measure them.
* learning about how to instrument a go app with opentelemetry for better logging and tracing for a production workload having multiple external services and find bottlenecks.
* learning about longhorn RWX across workernodes and how it does replication among them and what happens if all the nodes loose data when its being used by applications.
* learning about Linux Bluetooth and Audio codecs and AAC vs HAAC... and things ike pipewire and bluez and alsa and pulseaudio and how they interact with each other.
* k8s sidecar containers which is now official feature since k8s 1.30

# Date 2025-10-07 2025-10-09
* learning about k8s sidecar containers. new feature
* learning about stripe compitator polar
* bluetooth sound systems differen codec and when its used aka available bandwidth and quality tradeoff.
* working on k8s for frappe
* otel app instrumentation for better logging and tracing.
* writing blog post with n8n aka automation. ;)

# Date 2025-10-06
* Tried out n8n workflow to start automating my social media posts.
* learning about why do people use longhorn and its usacase where it shines.

# Date 2025-10-05
* working on NATS Subscrioption Terminate vs NACK and ACK in production practical usecase.
* Learning about complicaated EMAIL SPF entrie and email forwardings.
* overall system architecture and the design decisions

# Date 2025-10-03 2025-10-04
* was able to make the cluster create and cluster delete statemachine work with Emails and SES with postHooks.
* nice waterfall hiking

# Date 2025-10-02
* learning about how to create Finite State machines in go to make complex workflows easier to manage.

# Date 2025-10-01
* learning about AWS SES configurations and also email anti spam and DKIM, SPF, DMARC records.
* working on new features like email notifications.
