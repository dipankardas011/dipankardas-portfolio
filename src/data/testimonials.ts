export interface Testimonial {
  name: string;
  photo: string;
  content: string;
  role?: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    photo: "/img/testimonials/john-doe.jpg",
    role: "CTO",
    company: "TechCorp",
    content:
      "Dipankar's expertise in Kubernetes and cloud infrastructure helped us scale our platform 10x. His deep understanding of DevOps best practices and automation transformed our deployment pipeline.",
  },
  {
    name: "Jane Smith",
    photo: "/img/testimonials/jane-smith.jpg",
    role: "Engineering Manager",
    company: "CloudStart",
    content:
      "Working with Dipankar on our infrastructure migration was a game-changer. His systematic approach to platform engineering and focus on observability gave us confidence in our systems.",
  },
  {
    name: "Mike Johnson",
    photo: "/img/testimonials/mike-johnson.jpg",
    role: "Lead Developer",
    company: "DevOps Inc",
    content:
      "Dipankar's contributions to our open-source projects demonstrate his deep technical knowledge and collaborative spirit. His work on Ksctl has been invaluable to the cloud-native community.",
  },
];
