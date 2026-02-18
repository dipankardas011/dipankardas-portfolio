export interface Service {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export const services: Service[] = [
  {
    title: "DevOps & Platform Engineering",
    icon: "mdi:cloud-cog",
    description:
      "CI/CD pipelines, infrastructure automation, deployment dashboards, and self-hosted runner architectures. From GitHub Actions to ArgoCD GitOps workflows.",
    skills: [
      "CI/CD",
      "GitHub Actions",
      "ArgoCD",
      "Jenkins",
      "Docker",
      "Dagger",
    ],
  },
  {
    title: "Kubernetes & Cloud Infrastructure",
    icon: "mdi:kubernetes",
    description:
      "Multi-cloud Kubernetes deployments (EKS, GKE, AKS, K3s), cluster lifecycle management, Helm charts, and production-grade infrastructure with Terraform.",
    skills: [
      "Kubernetes",
      "Terraform",
      "Helm",
      "AWS",
      "GCP",
      "Azure",
    ],
  },
  {
    title: "Golang & System Design",
    icon: "mdi:language-go",
    description:
      "High-performance Go services, distributed systems (Raft consensus, actor model), gRPC APIs, and event-driven architectures with NATS messaging.",
    skills: [
      "Go",
      "gRPC",
      "Distributed Systems",
      "NATS",
      "REST APIs",
      "PostgreSQL",
    ],
  },
  {
    title: "Sustainability & Observability",
    icon: "mdi:leaf",
    description:
      "Carbon-aware provisioning, cost optimization, OpenTelemetry instrumentation, Prometheus/Grafana monitoring, and resource-efficient cloud workloads.",
    skills: [
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "Green Computing",
      "Cost Optimization",
      "New Relic",
    ],
  },
];

export interface Certification {
  name: string;
  badgeImage?: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Academy Cloud Architecting",
    badgeImage: "/img/badges/aws-academy-architecting-kiit.png",
    link: "https://www.credly.com/badges/63a7c0ba-6f8b-40c8-b97d-b65e2b857aeb/public_url",
  },
  {
    name: "AWS Academy Cloud Foundations",
    badgeImage: "/img/badges/aws-academy-kiit.png",
    link: "https://www.credly.com/earner/earned/badge/b37dea43-f280-4983-918b-e3544d4764cc",
  },
  {
    name: "AWS Academy Introduction to Cloud",
    badgeImage:
      "/img/badges/aws-academy-graduate-aws-academy-introduction-to-cloud-semester-1.png",
    link: "https://www.credly.com/badges/b5388332-916b-4118-9da1-a8c05a6166e9/public_url",
  },
  {
    name: "CKA (KodeKloud)",
    link: "https://kodekloud.com/certificate-verification/2D03EB671CD0-2D01CCFFAE35-2D01CCC2F228/",
  },
  {
    name: "CKAD (KodeKloud)",
    link: "https://kodekloud.com/certificate-verification/2D03EB671CD0-2D01CCFF5DBB-2D01CCC2F228/",
  },
  {
    name: "HashiCorp Vault Associate (KodeKloud)",
    link: "https://kodekloud.com/certificate-verification/2D03EB671CD0-2D1219437F4C-2D01CCC2F228/",
  },
  {
    name: "Terraform Basics (KodeKloud)",
    link: "https://kodekloud.com/certificate-verification/2D03EB671CD0-2D01CD002300-2D01CCC2F228/",
  },
  {
    name: "Cilium Cluster Mesh",
    badgeImage: "/img/badges/cilium-cluster-mesh.png",
    link: "https://www.credly.com/badges/4cca6123-05fe-4446-9f1a-b7aa00fad681/public_url",
  },
  {
    name: "Cilium Service Mesh",
    badgeImage: "/img/badges/cilium-service-mesh.png",
    link: "https://www.credly.com/badges/55f26118-8541-4836-9347-6cf8b404f5e9/public_url",
  },
  {
    name: "Cilium Getting Started",
    badgeImage: "/img/badges/cilium-getting-started.png",
    link: "https://www.credly.com/badges/886d4bec-332f-461d-8747-d676ce3eb1e2/public_url",
  },
  {
    name: "Cisco Network Introduction (CCNA)",
    badgeImage: "/img/badges/ccna-introduction-to-networks.png",
    link: "https://drive.google.com/file/d/1litYROTDl_F-MBmwyQrz-efayT3ZogXT/view?usp=sharing",
  },
  {
    name: "Cisco Cybersecurity Essentials",
    badgeImage: "/img/badges/cybersecurity-essentials.png",
    link: "https://drive.google.com/file/d/1g-evjWia3Kb6dQW7qaPu50q3rX_wqc5u/view?usp=sharing",
  },
  {
    name: "Cisco Cybersecurity Introduction",
    badgeImage: "/img/badges/introduction-to-cybersecurity.png",
    link: "https://drive.google.com/file/d/1Q4SLZ0tPtWD0wmflEnougjnAfWzU4kJu/view?usp=sharing",
  },
  {
    name: "Istio Ambient Mesh (Solo.io)",
    badgeImage:
      "/img/badges/fundamentals-for-istio-ambient-mesh-by-solo-io.png",
    link: "https://www.credly.com/badges/66b3471a-394c-4f3e-b882-09969368d4bf/public_url",
  },
  {
    name: "Linux Kernel Development (LFD103)",
    badgeImage:
      "/img/badges/lfd103-a-beginner-s-guide-to-linux-kernel-development.png",
    link: "https://www.credly.com/badges/f158dc79-d161-4c73-a921-491f5c0d4c54/public_url",
  },
  {
    name: "GitOps Fundamentals with Argo (Codefresh)",
    link: "https://drive.google.com/file/d/1bEVjKmpoGEXRH1133Tdaj7kAoPbp39b5/view?usp=sharing",
  },
  {
    name: "DevOps Internship (Viamagus)",
    link: "https://drive.google.com/file/d/1T04L-b_93_B_BnlGlyzfGjH5aP-_lP-m/view?usp=sharing",
  },
  {
    name: "Developing a Winning Marketing Strategy",
    link: "https://drive.google.com/file/d/1ahQh8KIY_Q22VUekZArCzQ9IlAPGgd85/view?usp=sharing",
  },
];
