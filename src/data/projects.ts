export interface Project {
  title: string;
  description: string;
  image?: string;
  links: { label: string; url: string }[];
  category: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "kubmin",
    description:
      "Workload Intelligence. Brings workload intelligence provisioned on runners. Monitor, analyze, and optimize your workloads with energy-powered intelligence.",
    image: "https://ksctl.com/kubmin-logo.svg",
    links: [
      { label: "Website", url: "https://ksctl.com/product/kubmin" },
    ],
    category: "Infra Tools",
    tags: ["Go", "Kubernetes", "Multi-Cloud", "Sustainability"],
    featured: true,
  },
  {
    title: "kli",
    description:
      "Cloud-agnostic Kubernetes management tool supporting multi-cloud clusters (EKS, GKE, AKS, K3s, kubeadm). Features carbon-aware provisioning and cost-optimized region selection.",
    image: "https://ksctl.com/kli-logo.svg",
    links: [
      { label: "GitHub", url: "https://github.com/ksctl/kli" },
      { label: "Website", url: "https://ksctl.com/product/kli" },
    ],
    category: "Infra Tools",
    tags: ["Go", "Kubernetes", "Multi-Cloud", "Sustainability"],
    featured: true,
  },
  {
    title: "wae (WASI App Experiment)",
    description:
      "Showcases latest WASI v0.2 development with composition features. Combines ML, Green Software, and WASI learnings into a single project.",
    image:
      "https://github.com/dipankardas011/wae/blob/main/cover.png?raw=true",
    links: [
      { label: "GitHub", url: "https://github.com/dipankardas011/wae" },
      { label: "Tweet", url: "https://twitter.com/DipankarDas011/status/1809538678835847218" },
    ],
    category: "Distributed Systems",
    tags: ["Rust", "WASI", "WebAssembly", "Green Software"],
    featured: true,
  },
  {
    title: "Raft-based Distributed Consensus Datastore",
    description:
      "Distributed consensus model using Raft with peer and client connections via gRPC. CLI client for key-value storage with leader-based external database operations.",
    image:
      "https://gitlab.com/dipankardas011/go-playground/-/raw/main/raft-based-distributed-consensus/img/read.png?raw=true",
    links: [
      {
        label: "GitLab",
        url: "https://gitlab.com/dipankardas011/go-playground/-/tree/main/raft-based-distributed-consensus",
      },
      { label: "Tweet", url: "https://twitter.com/DipankarDas011/status/1738513901753352687" },
    ],
    category: "Distributed Systems",
    tags: ["Go", "Raft", "gRPC", "Distributed Systems"],
  },
  {
    title: "Actor Model Implementation",
    description:
      "Understanding the Actor model through reverse engineering and blog study. Exploration of concurrent computation patterns.",
    links: [
      {
        label: "GitLab",
        url: "https://gitlab.com/dipankardas011/go-playground/-/tree/main/actor-system",
      },
      { label: "Tweet", url: "https://twitter.com/DipankarDas011/status/1740682428396527678" },
    ],
    category: "Distributed Systems",
    tags: ["Go", "Actor Model", "Concurrency"],
  },
  {
    title: "Universal CI/CD Pipeline Manager",
    description:
      "Tool for creating convenient workflows and pipelines for automated testing and CI workflows.",
    image:
      "https://gitlab.com/dipankardas011/universalci-cd/-/raw/main/cover.png",
    links: [
      {
        label: "GitLab",
        url: "https://gitlab.com/dipankardas011/universalci-cd",
      },
      {
        label: "Tweet",
        url: "https://twitter.com/DipankarDas011/status/1709901427731038677",
      },
    ],
    category: "Infra Tools",
    tags: ["Go", "CI/CD", "Automation"],
  },
  {
    title: "AWS Resource Dependency-graph Generator",
    description:
      "Generates dependency diagrams showing how all AWS resources are connected. Fills the gap AWS doesn't provide natively.",
    image:
      "https://gitlab.com/dipankardas011/aws-resource-dependency-graph/-/raw/main/cover_cloudformation.png",
    links: [
      {
        label: "GitLab",
        url: "https://gitlab.com/dipankardas011/aws-resource-dependency-graph",
      },
      {
        label: "Tweet",
        url: "https://twitter.com/DipankarDas011/status/1667853065372794882",
      },
    ],
    category: "Infra Tools",
    tags: ["AWS", "CloudFormation", "Visualization"],
  },
  {
    title: "Chat Bot using GPT-2",
    description:
      "HTTP server using Rust with a text-to-text generator bot via HuggingFace. Multiple implementations: WasmEdge, Spin by Fermyon, and Tokio/Async.",
    image:
      "https://raw.githubusercontent.com/dipankardas011/my-wasm-learning/main/wasi-bot/coverpage.png",
    links: [
      {
        label: "WasmEdge",
        url: "https://github.com/dipankardas011/my-wasm-learning/tree/main/wasi-bot",
      },
      {
        label: "Spin",
        url: "https://github.com/dipankardas011/my-wasm-learning/tree/main/gpt2-bot",
      },
      {
        label: "Tokio",
        url: "https://github.com/dipankardas011/bot-request-handler-rust",
      },
    ],
    category: "AI/ML",
    tags: ["Rust", "WASM", "GPT-2", "HuggingFace"],
  },
  {
    title: "PDF Editor",
    description: "Web application for merging and rotating PDF documents.",
    image:
      "https://github.com/dipankardas011/PDF-Editor/raw/main/coverpage.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/dipankardas011/PDF-Editor",
      },
    ],
    category: "Web Apps",
    tags: ["JavaScript", "PDF", "Web App"],
  },
  {
    title: "Weather App",
    description:
      "Web application providing weather reports for a given location.",
    image:
      "https://github.com/dipankardas011/Weather-App/raw/main/CoverPage.jpeg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/dipankardas011/Weather-App",
      },
    ],
    category: "Web Apps",
    tags: ["JavaScript", "API", "Web App"],
  },
  {
    title: "Flight Booking System",
    description:
      "Application for booking aeroplane tickets with visualization of seating arrangement via generated pictures.",
    image:
      "https://github.com/dipankardas011/AirportBooking/raw/main/CoverPage.jpg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/dipankardas011/AirportBooking",
      },
    ],
    category: "Web Apps",
    tags: ["Java", "Visualization", "Booking System"],
  },
];

export const ossContributions = [
  {
    org: "CNCF TAG Green",
    prs: [
      {
        title: "Project Trigger",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/106",
      },
      {
        title: "Proposal: Trigger and Deploy",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/88",
      },
      {
        title: "Upgrade flux and use latest API versions",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/81",
      },
      {
        title: "NodeSelector for kube-prometheus, kepler",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/44",
      },
      {
        title: "Port-forward permission for read-only kubeconfig",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/35",
      },
      {
        title: "Install Kepler dashboard",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/22",
      },
      {
        title: "Read-only kubeconfig",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/23",
      },
      {
        title: "Flux-based Helm install of Kepler",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/17",
      },
      {
        title: "Provision cluster with OpenTofu and K3s+Cilium",
        url: "https://github.com/cncf-tags/green-reviews-tooling/pull/6",
      },
      {
        title: "Design docs issue",
        url: "https://github.com/cncf-tags/green-reviews-tooling/issues/1",
      },
    ],
  },
  {
    org: "Kubernetes",
    prs: [
      {
        title: "Secret namespace note",
        url: "https://github.com/kubernetes/website/pull/42329",
      },
      {
        title: "Remove deprecated bases field (NFD)",
        url: "https://github.com/kubernetes-sigs/node-feature-discovery/pull/1246",
      },
      {
        title: "ExponentialTimeout for resource scaling",
        url: "https://github.com/kubernetes/kubernetes/pull/116961",
      },
      {
        title: "Code refactoring Pod under pkg/api",
        url: "https://github.com/kubernetes/kubernetes/pull/112085",
      },
      {
        title: "Error suppression in printers",
        url: "https://github.com/kubernetes/kubernetes/pull/113870",
      },
      {
        title: "Error handling in ValidateAdmissionPolicy",
        url: "https://github.com/kubernetes/kubernetes/pull/114894",
      },
      {
        title: "Taint-and-tolerations page fixes",
        url: "https://github.com/kubernetes/website/pull/34067",
      },
    ],
  },
  {
    org: "Bytecode Alliance (WASI)",
    prs: [
      {
        title: "TinyGo wasip2 support patch",
        url: "https://github.com/bytecodealliance/component-docs/pull/142",
      },
    ],
  },
  {
    org: "Fermyon (WASM)",
    prs: [
      {
        title: "Cargo build --bin flag",
        url: "https://github.com/fermyon/developer/pull/744",
      },
      {
        title: "Error handling for spin trigger",
        url: "https://github.com/fermyon/spin/pull/1671",
      },
    ],
  },
  {
    org: "Kubeshop Monokle",
    prs: [
      {
        title: "Additional in-build templates",
        url: "https://github.com/kubeshop/monokle-default-templates-plugin/pull/4",
      },
      {
        title: "ZSH shell for Linux",
        url: "https://github.com/kubeshop/monokle/pull/2308",
      },
    ],
  },
  {
    org: "Other CNCF Projects",
    prs: [
      {
        title: "Komiser: Dockerfile label fix",
        url: "https://github.com/tailwarden/komiser/pull/835",
      },
      {
        title: "Meshery: Unused variables cleanup",
        url: "https://github.com/meshery/meshery/pull/6422",
      },
      {
        title: "Kubescape: Cosign for quay.io",
        url: "https://github.com/kubescape/kubescape/pull/826",
      },
      {
        title: "CNCF Glossary: Vertical scaling links",
        url: "https://github.com/cncf/glossary/pull/628",
      },
    ],
  },
];

export const categories = [
  "Infra Tools",
  "Distributed Systems",
  "AI/ML",
  "Web Apps",
];
