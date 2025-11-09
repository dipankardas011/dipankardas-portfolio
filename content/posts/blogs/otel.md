+++
title = "My learnings from instrumenting an application with OpenTelemetry"
author = "Dipankar Das"
date = 2025-11-07
description = "It give guidelines and advice on why, when and how to use OpenTelemetry to instrument your projects."
cover = "https://github.com/dipankardas011/wae/blob/main/cover.png?raw=true"
tags = ["go", "otel", "troubleshooting", "debugging", "grafana", "prometheus"]
[build]
  list = 'never'
  render = 'always'
+++

## What exactly is OpenTelemetry?

OpenTelemetry (often abbreviated as OTEL) is an open-source observability framework that provides a set of tools, APIs, and SDKs for collecting, processing, and exporting telemetry data from applications and services.

It changes how we monitor our application with Observability data like Traces, Metrics and Logs (3 core pillars of observability) to help developers and operators understand the performance and behavior of their software systems.

It has 2 main components which you need to take note of:
1. Programming APIs and SDKs: OpenTelemetry provides language-specific APIs and SDKs (like Go, Java, Python, etc.) that developers can use to instrument their applications. These SDKs allow you to create and manage telemetry data, such as traces and metrics.
2. Collectors and Exporters: OpenTelemetry includes a collector component that can receive telemetry data from instrumented applications. The collector can process and export this data to various backends, such as Promtheus, Jaeger, Tempo, Loki, etc.

the the collector is the main component in this as it manages the event comming from various instrumented applications perform some processing on them and export them to the desired backend. Thats it by this we get a unified way to collect and export telemetry data from different applications and services. only otel sdk is needed to be installed in the application and a single grpc/http endpoint to connect and you are ready to go. and all the main storage part is handled by the upstream backends like prometheus, jaeger, loki, etc.

## what are the ways we can instrument an application with OpenTelemetry?
1. Manual Instrumentation: This involves adding OpenTelemetry SDK calls directly into your application code. You can use the SDK to create spans, record metrics, and log events at specific points in your code. This method provides fine-grained control over what telemetry data is collected but requires more effort from developers. (I will not tell lies this is the most common way of instrumenting an application, and is actually fun but can be tedious at times)
2. Automatic Instrumentation: Some OpenTelemetry SDKs provide automatic instrumentation capabilities. This means that the SDK can automatically instrument certain libraries and frameworks without requiring manual code changes. This is often done through instrumentation plugins or middleware that intercepts calls to popular libraries. This method is easier to implement but may not provide as much control over the collected data. (This is very easy to get going but may not cover all use cases, You also need to know how your application runs and whatare the system level tools it runs on like in python check if it rungs via WSGI/ASGI server or simple script, ....)

> *Note*: If you are the owner/developer of the application you can go for manual instrumentation as you have full control over the codebase, but if you are working on a 3rd party application where you dont have access to the codebase automatic instrumentation is the way to go as you most likely will not be able to change the codebase. But Remember with automatic instrumentation it can sometimes make more resources than manual instrumentation as it instruments everything by default.


## What you actually get in return so that you are motivated to instrument your application with OpenTelemetry?
Yes you get the unified way to collect telemetry data from your application but what actual benefits you get from it.
When you have all the 3 components working then we can create grafana dashboard with the datasources set to those backends.

1. Now as you have added traces information you can understand what actually is happening under the hood of your application. what functions get called, time it takes even some times you don't even need stack trace as you can actually see the function calls into the span which failed (easier to follow along)
2. Bonus with the first point of traces now you can even coorelate traces with your logs and by that when you want to get logs for any particular span 



context go, When do we add spans?
