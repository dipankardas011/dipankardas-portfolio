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

> **Note**: If you are the owner/developer of the application you can go for manual instrumentation as you have full control over the codebase, but if you are working on a 3rd party application where you dont have access to the codebase automatic instrumentation is the way to go as you most likely will not be able to change the codebase. But Remember with automatic instrumentation it can sometimes make more resources than manual instrumentation as it instruments everything by default.


## What you actually get in return so that you are motivated to instrument your application with OpenTelemetry?
Yes you get the unified way to collect telemetry data from your application but what actual benefits you get from it.
When you have all the 3 components working then we can create grafana dashboard with the datasources set to those backends.

1. Now as you have added traces information you can understand what actually is happening under the hood of your application. what functions get called, time it takes even some times you don't even need stack trace as you can actually see the function calls into the span which failed (easier to follow along)
2. Bonus with the first point of traces now you can even coorelate traces with your logs and by that when you want to get logs for any particular span (for now just think of span as a function call)
3. With Metrics you can do something interesting like monitor some parts of your application like request per second, error rate of specific parts of your system, Get to know which backgrounder worker which has subscribed to a queue is failing or passing, are the events being properly loadbalanced among the workers, etc.
4. You can even make a good enough admin dashboard without the need for additional frontend just your otel and your grafana setup is enough to give you insights about your application health.

## My takeaways and learnings from instrumenting an application with OpenTelemetry

### What the hack are spans and when to use them?

Spans are the building blocks of traces in OpenTelemetry. A span represents a single operation or unit of work within a trace. Each span has a start time and an end time, and it can contain additional metadata such as attributes, events, and status information.

> **NOTE**: These are expensive resource so use them wisely.
> Recommended way is to use it for api calls to external APIs/services like Database, cache, instead of tainting all the function call.

For Programming language like Go we would need to have context variabled passed along with the functions/method you need to add to the otel visibility then only you can work with creating addSpan things.

Also our goal is to only add functions/methods to traces only if they are something significant otherwise too many spans will make your life harded to reack what is happening.

For example

![](/img/blogs/tracetolog002.png)

### Why we need Events for spans?
In spans even though we have start time and end time but sometime we need to know what actually happened inside the span during its lifetime. For that we have events which can be added to spans to give more context about what happened during the span's execution.

also this feature can be useful when you want to log some important checkpoints inside a span without the need to create new spans for them.

### Good Spans vs Bad Spans


Instead of focusing on a hard number like 50, the key is to ensure your spans are **meaningful** and **manageable**.

* **Focus on Key Operations (The Good Spans):**
    * **External Boundaries:** A span for the inbound request to your service (the Root Span).
    * **Network Calls:** Spans for external HTTP requests, RPC calls (gRPC), and database queries.
    * **Messaging:** Spans for producing and consuming messages from queues/topics.
    * **Significant Internal Steps:** Spans for important, time-consuming business logic or internal function calls (e.g., `process_payment`, `generate_report`).

* **Avoid Excessive Spans (The Bad Spans):**
    * **Trivial or Repetitive Functions:** Creating a new span for every single getter/setter or a quick helper function inside a loop rapidly bloats your trace without adding useful context.
    * **High Cardinality in Names:** Span names should be generic (e.g., `GET /users`) not include IDs or dynamic values (e.g., `GET /users/123`). Use **span attributes** for unique identifiers.

* **Leverage Other Signals:**
    * For single points in time, like a state change or an exception, use a **Span Event** instead of creating a whole new span.
    * For verbose, general debugging, continue to use **Logs** and ensure they are correlated to the active `trace_id` and `span_id`.


### Evential consistency
Traces and spans in OpenTelemetry are designed to be eventually consistent. This means that the telemetry data collected by OpenTelemetry may not be immediately available for analysis or querying.


### Sharing across services

Most of the times used for event based or API based microservices where one service calls another service and you want to have the full trace of the request as it flows through multiple services.

For those we have `TextMapPropagator` which helps in propagating the trace context across service boundaries. This allows you to maintain the trace context as requests move between different services, enabling end-to-end tracing of distributed systems. Mostly are stored as Headers in HTTP/gRPC calls. or for a message broker you can set a header/metadata field for the message/event with the trace context.

```go
type TextMapPropagator interface {

	// Inject set cross-cutting concerns from the Context into the carrier.
	Inject(ctx context.Context, carrier TextMapCarrier)

	// Extract reads cross-cutting concerns from the carrier into a Context.
	// Implementations may check if the carrier implements ValuesGetter,
	// to support extraction of multiple values per key.
	Extract(ctx context.Context, carrier TextMapCarrier) context.Context

	// Fields returns the keys whose values are set with Inject.
	Fields() []string
}
```

> Using with the help of Headers is quite easy to implement and mostly available across message or api based communication.

### Sampling strategies
When instrumenting applications with OpenTelemetry, it's important to consider sampling strategies to manage the volume of telemetry data collected. Sampling helps reduce the amount of data sent to backends, which can help control costs and improve performance.
There are several sampling strategies available in OpenTelemetry, including:
1. Head-based Sampling: This strategy samples traces based on the initial part of the trace (the "head"). For example, you might choose to sample only a certain percentage of traces that start with specific attributes or conditions.
2. Tail-based Sampling: This strategy samples traces based on their duration or other criteria. For example, you might choose to sample only traces that exceed a certain duration threshold.

Choosing the right sampling strategy depends on your application's requirements, the volume of telemetry data generated, and the capabilities of your backend systems. It's important to strike a balance between collecting enough data for effective monitoring and analysis while avoiding excessive data volumes that can lead to increased costs and performance issues. For more details check [Official Sampling Documentation](https://opentelemetry.io/docs/concepts/sampling/)


TODO
Also need to talk about the span linking.

