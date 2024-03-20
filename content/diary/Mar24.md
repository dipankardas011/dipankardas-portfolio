+++
title = "[2024-03] Diary for March 2023"
date = 2024-03-01
author = "Dipankar Das"
description = "Let's talk about my March 2023"
+++

# Date 2024-03-19 2024-03-20
* Fixed Production server
* some stress testing
* book reads
* ksctl kubeadm support work

# Date 2024-03-17 2024-03-18
* kubernetes ci/cd with argocd with image tag updates and wordpress deployyment with s3
* etcd support for the k3s is completed
* kubeadm and faster k8s bootstrap for ksctl

# Date 2024-03-10 2024-03-16
* learning about challenges in RWX mode of PVC and what are the solutions
  * all the managed solutions have there file store but we need to use and find what things to use
  * used the google cloud bucket fuse in gke for rwx with quite good solutions but issues with no support of file permissions store as it is a bucket
* ksctl updates
  * etcd supprt added
  * ksctl agent got a pretty good start
  * aws ha support got its first phase of review done
* reading a lot of books and enjoying them
* helping frends in there journey

# Date 2024-03-07 2024-03-09
* tryed gke with wordpress
  * came to know about standard-rwx and when to use 
  * how to setup the certmanager in the gke
  * tls
* blog post on the above as wel
* ksctl autoscaler design done now implementation started
* came to know about finailizers in k8s controllers importace
* enjoy

# Date 2024-03-06
* tried the wordpress deployment for the wordpress
  * catch is need to use a different custom image
  * which can push the data to s3 so that the wordpress data can be scaled
* some cool stuff about the android A/B volume partition from my friend
* read books

# Date 2024-03-01 2024-03-05
* reading some nice books
* came to know about a lot of kubernetes
* created custom controllers and webhooks
* worked on kactl improves hostname and k8s nodenames for upcomming aws support 
