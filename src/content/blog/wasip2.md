---
title: "My Experience with WASI Preview 2"
author: "Dipankar Das"
date: 2024-10-28
description: "Created a working project using the wasi's new composition feature"
cover: "https://github.com/dipankardas011/wae/blob/main/cover.png?raw=true"
---
## Why I wanted to try WASI Preview 2?

I have been following the development of WebAssembly for quite some time now. I have been fascinated by the idea of running code in a sandboxed environment and single executable format but runnable on any architecture.

In this blog I will share my experience with the new WASI Preview 2 and how I created a working project using the new composition feature. Aka this is your KT ;)

Yes it has been almost 1 year since I have written this blog but I am still excited about it and I think it is a good time to share my experience with the WASI Preview 2.

## Introduction

A little introduction for you all. `WASI` is a system interface for WebAssembly. It is a standard that defines a set of system calls that can be used by WebAssembly modules. This allows WebAssembly modules to interact with the host system in a secure and portable way.

It is has properites like
- `cross-platform portability`: copy the *.wasm file and run it anyware as long as you have a WASI runtime like wasmtime, wasmedge, etc.
- `enhanced security`: linear memory architecture and no access by default to any external resources
- `improved performance`
- and `streamlined development`

Some interesting new feature of WASI preview 2 are :-
1. `Composition`: which allows you to compose multiple WASI modules into a single module. This is useful when you want to combine multiple modules into a single module for better performance or to reduce the size of the module and keeping local developer knowledge of specific components to a minimum and also increasing the changes of code reusability by just importing wasm module which implement the WIT (you can think of it as a contract).
2. `Socket`: which allows you to create TCP and UDP sockets and perform DNS lookups from within a WebAssembly module. This is useful when you want to build networking software that runs on WebAssembly.
3. `Filesystem`: which allows you to interact with the filesystem from within a WebAssembly module. This is useful when you want to read and write files from within a WebAssembly module.

Lets assume your team has expertise in building a specific component like a payment gateway or a video processing module. You can build a WASI module for that component and then compose it with other modules to build a complete application. This way you can keep the knowledge of the specific component within the team that built it and reuse it in multiple applications.

> We first have repos for individiual components like this
![](/img/blogs/initial_wasi.svg)

> Then here comes the interesting part of composition
![](/img/blogs/composition_wasi.svg)

> And here comes the complete picture of these
![](/img/blogs/final_wasi.svg)


With this you will have a SaaS product :) 🚀

### Details about wasi@v0.2.0
Okay before we jump to my experience here are some summary of current features by `wasi@v0.2.0`
- `wasi-http`: a collection of interfaces for sending and receiving HTTP requests and responses. WASI-http additionally defines a world, wasi:http/proxy, that circumscribes a minimal execution environment for wasm HTTP proxies.
- `wasi-cli`: a World proposal for a Command-Line Interface (CLI) environment. It provides APIs commonly available in such environments, such as filesystems and sockets, and also provides command-line facilities such as command-line arguments, environment variables, and stdio.
- `wasi-sockets`: adds TCP & UDP sockets and domain name lookup to WASI. It adds the basic BSD socket interface with the intent to enable server and client networking software running on WebAssembly.
- `wasi-filesystem`: is a WASI API primarily for accessing host filesystems. It has function for opening, reading, and writing files, and for working with directories.
- `wasi-random`: for obtaining pseudo-random data.
- `wasi-clocks`: API for reading the current time and measuring elapsed time.
- `wasi-io`: API providing I/O stream abstractions. There are two types, input-stream, and output-stream, which support read and write, respectively, as well as a number of utility functions.

### How I created a project out of it 🏗️

I created a simple project to learn about composition feature [Source Code](https://github.com/dipankardas011/wae).

**Goal**: To make a simple CLI which can read a `.env` file for secrets or user input to cli tool, will in-turn use the WIT file to talk to the different WASI module and perform the tasks.

**Challanges**: Didn't have a wasi http module for openai (for text-to-image, text-to-text) or for wasmtime (CO<sub>2</sub> moer for a given region) and also async support for wasi modules is not there so had to use a hacky way to make it work. like made the custom implementation of the `wasi-http` module for openai and `wasi-cli` for wasmtime. and later switched to already available crate `waki`.

By this tried out the http functionality of wasi, composition, filesystem, random.

Here is a sample of run ;)

> Random Password generation
![](/img/blogs/wae-pass.png)

> Talk with github api to get repo details
![](/img/blogs/wae-release.png)

> Talk with openai api to get image from text
![](/img/blogs/wae-openai.png)

> Talk with wasmtime api to get CO<sub>2</sub> moer emission for a given region
![](/img/blogs/wae-green.png)


## Conclusion

Thus it was a fun experience to work on this. The community is very helpful even some of them went as far as helping me in SUnday night that is some dedication. I am looking forward to the next release of WASI and see what new features it brings.
Special thanks to  `Joel Dice` and `Fermyon Team` for helping me out.
