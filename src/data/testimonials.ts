export interface Testimonial {
  name: string;
  photo: string;
  content: string;
  role?: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Saiyam Pathak",
    photo: "https://avatars.githubusercontent.com/u/8190114",
    role: "Head of Developer Relations",
    company: "vCluster",
    content: `I am pleased to write this recommendation for Dipankar, who I've worked alongside on the "ksctl" project initiated at Kubesimplify. Dipankar has demonstrated exceptional expertise within the cloud-native ecosystem, showcasing not only his deep understanding but also his ability to drive and expand projects with significant impact.

From the onset of the ksctl project, Dipankar assumed a pivotal role, single-handedly steering it towards success with his dedication and technical skills. His ability to handle complex challenges and transform them into strategic opportunities is truly commendable.

Beyond his technical prowess, Dipankar embodies the spirit of continuous learning. He consistently seeks to enhance his existing skills while remaining open and enthusiastic about exploring new territories. His passion for knowledge and improvement is evident in the quality of his work and his approach to problem-solving.

In conclusion, Dipankar's contributions to our project have been invaluable. His blend of skill, dedication, and eagerness to learn makes him a standout individual. I have no doubt that he will continue to excel and bring about positive changes wherever he goes. I wholeheartedly recommend Dipankar for any endeavor he chooses to pursue.`,
  },
  {
    name: "Ross Fairbanks",
    photo: "https://avatars.githubusercontent.com/u/311527",
    role: "Lead Platform Engineer",
    company: "FlatPeak",
    content: `I've had the pleasure of working alongside Dipankar at CNCF, where we both contribute to the Green Reviews working group, measuring the environmental impact of CNCF projects by building a CI/CD pipeline to measure their energy consumption and collect related metrics.

Dipankar was one of our first and most active contributors. His knowledge of the cloud-native ecosystem and passion for green software practices make him an asset to the team. In addition to contributing code and implementing complex features, he is an active participant in code reviews and community meetings, bringing valuable feedback.

With his technical expertise and collaborative approach, Dipankar would be an asset to any team. I highly recommend him for any endeavour he chooses to pursue.`,
  },
  {
    name: "Antonio Di Turi",
    photo: "https://avatars.githubusercontent.com/u/43536425",
    role: "Manager",
    company: "Data Reply DE",
    content: `I've had the pleasure of working with Dipankar at CNCF, where we both contribute to the Green Reviews working group. The goal of the group is to set a vision for CNCF sustainability and energy measurements of different projects across releases.

Dipankar was able to join the technical discussion and deliver some important milestones for the project like the development of a Prometheus client to query the sre and sustainability metrics produced by our infrastructure set up in k8s.

With his cuoriosity and proactivity, alongside the technical expertise I would highly recommend Dipankar as a team member.`,
  },
];
