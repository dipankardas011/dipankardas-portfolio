export interface Experience {
  company: string;
  role: string;
  tenure: string;
  logo?: string;
  link?: string;
  contributions: string[];
}

export const experiences: Experience[] = [
  {
    company: "rtCamp",
    role: "DevOps Engineer",
    tenure: "Jan 2024 - Present",
    logo: "/img/experience/rtcamp.png",
    link: "https://rtcamp.com",
    contributions: [
      "Implemented self-hosted multi-runner architecture, improving CI/CD velocity by 50% and optimizing infra utilization by 40%",
      "Migrated to self-hosted Google Tag Manager, reducing third-party network calls and improving page performance",
      "Designed Kubernetes-based WordPress deployments with 10x higher availability and fault tolerance",
      "Built deployment dashboard with Terraform-powered BYOC support, reducing site go-live time by 2x",
      "Developed internal automation tools with Frappe and Ansible (multi-runner provisioning, certbot, New Relic monitoring)",
      "Implemented AWS Savings Plans (EC2 + RDS) and integrated Cloudflare + Fail2Ban for enhanced security",
    ],
  },
  {
    company: "Kubmin - Ksctl",
    role: "Founder & Principal Engineer",
    tenure: "Jun 2025 - Present",
    logo: "/img/experience/kubmin-logo.png",
    link: "https://ksctl.com/product/kubmin/",
    contributions: [
      "Architected Go-based stateless service backed by SQLite (Turso), Redis caching, Rate Limiting, and NATS messaging for event-based cluster lifecycle management",
      "Built event-driven worker system with NATS for long-running cluster operations, with custom state machine for retry logic",
      "Implemented RBAC with Authzed and multi-tenant quota enforcement across organization hierarchies",
      "Developed Next.js SaaS frontend with TypeScript, Tailwind CSS, and shadcn/ui with real-time monitoring",
      "Leveraging Claude Code and Gemini CLI for autonomous agent-driven development workflows",
    ],
  },
  {
    company: "Viamagus",
    role: "DevSecMLOps Consultant",
    tenure: "Feb 2025 - Apr 2025",
    logo: "/img/experience/viamagus.jpg",
    link: "https://viamagus.com",
    contributions: [
      "Implemented OWASP ZAP for automated security testing with custom proxy deployment",
      "Integrated Snyk for continuous vulnerability detection in CI/CD pipelines",
      "Optimized internal LLM project for containerization, disk/network efficiency, and faster inference",
      "Deployed vLLM on AWS using Auto Scaling Groups and VPC PrivateLink for secure, scalable ML workloads",
      "Conducted DevSecOps best-practice audits across multiple projects",
    ],
  },
  {
    company: "kli - ksctl",
    role: "Creator",
    tenure: "Jul 2022 - Jul 2025",
    logo: "/img/experience/ksctl-logo.png",
    link: "https://ksctl.com/product/kli/",
    contributions: [
      "Developed single-command CLI for fully automated Production/Dev/Staging Kubernetes cluster creation",
      "Engineered network-resilient, concurrent SSH bootstrapper, reducing setup time by 20x",
      "Integrated carbon-aware provisioning, recommending regions and instance types with lower emissions and cost",
      "Built dynamic GitHub Actions runner pipeline (0->N->0) that scales without Kubernetes, minimizing idle costs",
      "Unified multi-cloud support (EKS, GKE, AKS, K3s, kubeadm) and addon management under single CLI",
    ],
  },
  {
    company: "Kubesimplify",
    role: "Ambassador",
    tenure: "Mar 2022 - Jul 2024",
    logo: "/img/experience/kubesimplify.png",
    contributions: [
      "Authored blogs and tutorials on Kubernetes and Go",
      "Conducted Twitch live sessions on cloud-native development and Golang best practices",
      "Maintained and improved Ksctl, contributing to CNCF-aligned open-source tooling",
    ],
  },
  {
    company: "Viamagus",
    role: "DevOps Intern",
    tenure: "Mar 2023 - Sep 2023",
    logo: "/img/experience/viamagus.jpg",
    link: "https://viamagus.com",
    contributions: [
      "Supported Kubernetes migration to EKS with NGINX Gateway API for traffic management",
      "Dockerized Node.js applications and migrated reverse proxy from Apache to NGINX",
      "Automated Jenkins job creation using CLI tool, streamlining CI/CD workflows",
      "Integrated Snyk for vulnerability scanning and Prometheus for real-time observability",
      "Migrated repositories to AWS CodeCommit and automated SSL provisioning with Let's Encrypt",
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
