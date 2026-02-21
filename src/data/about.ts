export interface Contribution {
  title: string;
  why: string;
  what: string;
  how: string;
}

export interface Experience {
  company: string;
  role: string;
  tenure: string;
  logo?: string;
  link?: string;
  contributions: Contribution[];
}

export const experiences: Experience[] = [
  {
    company: "rtCamp",
    role: "DevOps Engineer",
    tenure: "Jan 2024 - Present",
    logo: "/img/experience/rtcamp.png",
    link: "https://rtcamp.com",
    contributions: [
      {
        title: "Enterprise IaC & Migration — Cox Automotive",
        why: "S3 buckets, CloudFront distributions, and WAF policies for prod, dev, and staging environments were created manually via aws console and have some legacy settings",
        what: "Migrated and standardized S3, CloudFront, and WAF configurations across all three environments into Terraform. with 0 drift terraform drift and 0 downtime.",
        how: "Established a multi-environment GitOps workflow with a rigorous Plan-Review-Apply SOP, eliminating click-ops and achieving consistent, repeatable infrastructure across prod, dev, and staging.",
      },
      {
        title: "Cloud-Native Scaling & Observability — Global FinTech",
        why: "A monolithic Frappe/ERPNext platform was buckling under high-concurrency traffic with no visibility into where production bottlenecks occurred.",
        what: "Migrated the platform to a distributed Kubernetes cluster and implemented full-stack OpenTelemetry instrumentation.",
        how: "Decomposed the monolith into individual services and migrated to Kubernetes — gaining autohealing, rolling deployments, and the broader ecosystem benefits. Layered OTel logs, traces, and metrics across the stack while deliberately keeping the architecture as simple as possible to reduce operational overhead.",
      },
      {
        title: "Cloud FinOps & Cost Engineering",
        why: "Memory-intensive background jobs and cron workloads were running on always-on instances, inflating cloud spend without any performance benefit.",
        what: "Achieved a 20% reduction in cloud OpEx across Kubernetes compute.",
        how: "Engineered specialized Node Groups with Spot Instances and implemented scale-to-zero logic for background and cron workloads, eliminating idle resource waste while maintaining throughput.",
      },
      {
        title: "Product Engineering — EasyDash / EasyEngine",
        why: "Manual WordPress/PHP deployment processes were slow and error-prone, blocking a commercial product launch.",
        what: "Co-developed a high-scale Cloud Provisioning Engine for dash.easyengine.io.",
        how: "Built the automated backend with Python, Terraform, and Ansible — enabling rapid deployments that generated $200+ in subscription revenue within 60 days of launch.",
      },
      {
        title: "Developer Experience & CI Optimization",
        why: "Shared CI runners were creating queue bottlenecks and long wait times that disrupted engineering flow across teams.",
        what: "Optimized GitHub Self-Hosted Runners across the organization.",
        how: "Applied resource-aware labeling and multi-container environments, drastically reducing CI/CD wait times and improving overall build reliability.",
      },
    ],
  },
  {
    company: "Kubmin - Ksctl",
    role: "Founder & Principal Engineer",
    tenure: "Jun 2025 - Present",
    logo: "/img/experience/kubmin-logo.png",
    link: "https://ksctl.com/product/kubmin/",
    contributions: [
      {
        title: "Distributed Orchestration Engine",
        why: "Managing Kubernetes cluster lifecycles across AWS and Azure required a reliable, cloud-agnostic solution without heavy infrastructure overhead.",
        what: "Architected a Go-based cloud-agnostic provisioning engine for full Kubernetes lifecycle management.",
        how: "Built a high-availability state layer with Turso (Edge SQLite) and Redis, enabling idempotent cluster operations with a minimal infrastructure footprint.",
      },
      {
        title: "Event-Driven Task Orchestration with NATS",
        why: "Long-running infrastructure tasks needed guaranteed execution without introducing the operational burden of heavy frameworks like Temporal.",
        what: "Developed a lightweight event-driven state machine using NATS JetStream.",
        how: "Implemented custom NAK/ACK and retry logic ensuring 100% task reliability during long-running cluster operations while keeping the system operationally simple.",
      },
      {
        title: "Relationship-Based Access Control (ReBAC)",
        why: "Flat RBAC couldn't model the complex sharing hierarchies needed for multi-tenant teams across shared infrastructure.",
        what: "Implemented a full Relationship-Based Access Control system using Authzed (SpiceDB).",
        how: "Designed a hierarchical model spanning Org, Cluster, and Workload levels, enabling fine-grained permission enforcement and quota management across distributed engineering teams.",
      },
      {
        title: "Developer Efficiency Analytics",
        why: "Teams had no visibility into whether container image changes improved or degraded performance and energy consumption across versions.",
        what: "Designed an engine to track container image behavior across versions.",
        how: "Delivered data-driven insights into performance and energy regressions, enabling teams to baseline and optimize software efficiency within the Kubernetes deployment pipeline.",
      },
      {
        title: "AI-Agents Orchestration",
        why: "Platform delivery velocity needed to scale without proportionally growing the team.",
        what: "Orchestrated AI agents (Claude Code, Gemini CLI) into the core development workflow to autonomously handle well-scoped engineering tasks.",
        how: "Leveraged agentic patterns — task decomposition, tool use, and iterative feedback loops — to boost team productivity by 40% while maintaining high code quality and architectural consistency.",
      },
      {
        title: "Workload Recommendation Engine",
        why: "Teams had no structured way to understand the true profile of their running workloads — efficiency waste, energy consumption, and resource behaviour were all invisible.",
        what: "Developed a recommendation system that analyses workload image insights across versions.",
        how: "Built profiling pipelines that surface each workload's resource profile, waste analysis, and energy footprint — giving teams the data to make informed decisions on right-sizing, scheduling, and sustainability.",
      },
    ],
  },
  {
    company: "Viamagus",
    role: "DevSecMLOps Consultant",
    tenure: "Feb 2025 - Apr 2025",
    logo: "/img/experience/viamagus.jpg",
    link: "https://viamagus.com",
    contributions: [
      {
        title: "API Security Testing with OWASP ZAP",
        why: "Client web applications and APIs had undetected vulnerabilities posing real regulatory and business risk.",
        what: "Implemented automated API security testing using OWASP ZAP.",
        how: "Deployed a custom proxy to surface SQL injection, MITM, and other OWASP Top 10 risks across the application surface, giving the team actionable findings.",
      },
      {
        title: "Continuous Vulnerability Scanning with Snyk",
        why: "Security issues were caught late in the development cycle, making remediation expensive and disruptive.",
        what: "Integrated Snyk into CI/CD for shift-left vulnerability scanning.",
        how: "Enabled detection and remediation of dependency and code vulnerabilities at pull request level, before they ever reached production.",
      },
      {
        title: "LLM Containerization & Performance Benchmarking",
        why: "The team had no baseline data on containerization efficiency, making optimization decisions purely speculative.",
        what: "Optimized internal LLM-based projects for containerization and produced detailed performance benchmarks.",
        how: "Measured image size, network throughput, and disk I/O to give the team a clear, data-backed picture of real-world efficiency tradeoffs.",
      },
      {
        title: "Scalable LLM Deployment on AWS",
        why: "LLM inference at scale required elastic capacity and strict network isolation without exposing endpoints publicly.",
        what: "Deployed vLLM and Ollama on AWS for production-scale LLM inference.",
        how: "Used Auto Scaling Groups and VPC PrivateLink to deliver secure, elastic inference capacity without public endpoint exposure.",
      },
    ],
  },
  {
    company: "kli - ksctl",
    role: "Creator",
    tenure: "Jul 2022 - Jul 2025",
    logo: "/img/experience/ksctl-logo.png",
    link: "https://ksctl.com/product/kli/",
    contributions: [
      {
        title: "High-Performance CLI Engineering",
        why: "Provisioning Kubernetes clusters across multiple cloud providers required deep provider expertise and many tedious manual steps.",
        what: "Architected kli — a multi-cloud CLI using Cobra and Viper — to abstract the full Kubernetes lifecycle.",
        how: "Built a pluggable architecture with robust configuration management, enabling single-command cluster creation and teardown across AWS, Azure, and Civo.",
      },
      {
        title: "Custom Kubernetes Controllers",
        why: "Cluster state could drift between local CLI metadata and remote cloud infrastructure, causing hard-to-debug inconsistencies.",
        what: "Developed custom Kubernetes controllers and reconciliation logic using client-go.",
        how: "Ensured idempotent state management that reliably kept local metadata and remote infrastructure in sync.",
      },
      {
        title: "Automated Addon & Helm Integration",
        why: "Manual post-provisioning addon setup was repetitive, error-prone, and delayed clusters reaching a ready state.",
        what: "Automated deployment of core cluster components — CNI, Storage Classes, and Ingress — as part of provisioning.",
        how: "Leveraged native Helm SDKs and Go client packages to install components consistently on every cluster without manual intervention.",
      },
      {
        title: "Secure Distribution & Artifact Signing",
        why: "Users needed confidence that CLI binaries were tamper-free and reliably distributed across all platforms.",
        what: "Implemented secure artifact signing and automated multi-platform binary releases.",
        how: "Integrated Cosign for signing and GitHub Actions for cross-platform builds, delivering a trusted and seamless developer distribution experience.",
      },
    ],
  },
  {
    company: "Kubesimplify",
    role: "Ambassador",
    tenure: "Mar 2022 - Jul 2024",
    logo: "/img/experience/kubesimplify.png",
    contributions: [
      {
        title: "Technical Content & Education",
        why: "Developers onboarding to cloud-native lacked approachable, practical resources for Kubernetes and Go.",
        what: "Authored blogs and tutorials on Kubernetes and Go.",
        how: "Published accessible technical content aligned with real-world use cases for the Kubesimplify community.",
      },
      {
        title: "Live Cloud-Native Sessions",
        why: "Complex topics like cloud-native architecture benefit more from interactive live walkthroughs than static articles.",
        what: "Conducted Twitch live sessions on cloud-native development and Golang best practices.",
        how: "Engaged the community through live demos and real-time Q&A, making advanced topics approachable.",
      },
      {
        title: "Open Source Maintenance",
        why: "The CNCF ecosystem needed reliable, community-maintained tooling for Kubernetes workflows.",
        what: "Maintained and improved Ksctl, contributing to CNCF-aligned open-source tooling.",
        how: "Contributed code, fixes, and documentation to keep the project active and aligned with community standards.",
      },
    ],
  },
  {
    company: "Viamagus",
    role: "DevOps Intern",
    tenure: "Mar 2023 - Sep 2023",
    logo: "/img/experience/viamagus.jpg",
    link: "https://viamagus.com",
    contributions: [
      {
        title: "Kubernetes Migration to EKS",
        why: "The existing cluster lacked the scalability and traffic management needed for production workloads.",
        what: "Supported Kubernetes migration to EKS with NGINX Gateway API for traffic management.",
        how: "Configured EKS and set up Gateway API routing rules to handle production-grade traffic reliably.",
      },
      {
        title: "Application Containerization",
        why: "Node.js applications weren't containerized, limiting deployment consistency and portability across environments.",
        what: "Dockerized Node.js applications and migrated the reverse proxy from Apache to NGINX.",
        how: "Wrote Dockerfiles for each service and reconfigured NGINX for improved routing and performance.",
      },
      {
        title: "CI/CD Automation",
        why: "Manual Jenkins job setup for new projects was repetitive and slowed pipeline delivery for the team.",
        what: "Automated Jenkins job creation using a CLI tool.",
        how: "Built a CLI automation layer that provisioned jobs from config, eliminating manual setup overhead.",
      },
      {
        title: "Security & Observability Integration",
        why: "The team had no visibility into vulnerabilities or runtime metrics before production deployments.",
        what: "Integrated Snyk for vulnerability scanning and Prometheus for real-time observability.",
        how: "Configured Snyk in CI for early detection and set up Prometheus scraping for live service metrics.",
      },
      {
        title: "Infrastructure & SSL Automation",
        why: "Manual SSL provisioning and repository management were error-prone and time-consuming at scale.",
        what: "Migrated repositories to AWS CodeCommit and automated SSL provisioning.",
        how: "Set up Let's Encrypt automation for SSL certificates alongside the CodeCommit migration.",
      },
    ],
  },
];

export const skills = {
  "Cloud & Infrastructure": [
    "AWS",
    "GCP",
    "Azure",
    "Kubernetes",
    "Terraform",
    "Helm",
    "ArgoCD",
  ],
  "Programming & Automation": [
    "Go",
    "Python",
    "Bash",
    "Ansible",
    "Docker",
    "Dagger",
    "GitHub Actions",
  ],
  "Security & Observability": [
    "OWASP ZAP",
    "Snyk",
    "Prometheus",
    "Grafana",
    "New Relic",
    "OpenTelemetry",
  ],
  "Sustainability & Efficiency": [
    "Carbon-aware provisioning",
    "Multi-cloud optimization",
    "Resource-efficient ML",
    "Cost observability",
  ],
};

export const languages = [
  "Go",
  "Rust",
  "Python",
  "Java",
  "C",
  "JavaScript",
  "Bash",
];

export const tools = [
  "Kubernetes",
  "Docker",
  "Linux",
  "Git",
  "AWS",
  "Azure",
  "GCP",
  "Terraform",
  "Ansible",
  "Helm",
  "Prometheus",
  "Grafana",
  "Nginx",
  "Jenkins",
];

export interface Achievement {
  title: string;
  year: number;
}

export const achievements: Achievement[] = [
  {
    title: "OSS contributions to Kubernetes, CNCF TAG Green, Kubescape, Monokle, and more",
    year: 2024,
  },
  {
    title: "Invited to GitHub Maintainers repo",
    year: 2024,
  },
  {
    title: "PR Wrangler in sig-docs (Kubernetes)",
    year: 2024,
  },
  {
    title: "Member of Kubernetes and Kubernetes-Sigs Organization",
    year: 2023,
  },
  {
    title: "Winner of Napptive + WeMakeDevs Cloud Native Hackathon (Track 2)",
    year: 2022,
  },
];
