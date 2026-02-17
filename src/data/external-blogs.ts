export interface ExternalBlog {
  title: string;
  description?: string;
  image?: string;
  url: string;
  platform: string;
}

export const externalBlogs: ExternalBlog[] = [
  {
    title: "Kubernetes GKE Setup (Batteries Included)",
    description:
      "From Terraform setup to Cluster autoscaler, WordPress app with HPA, ingress controller, monitoring, load testing.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/6IsCeQBIPmo/upload/d82a9a2f1cc4faf1d31d60e230af48a7.jpeg",
    url: "https://dipankardas011.hashnode.dev/kubernetes-gke-setup-batteries-included",
    platform: "Hashnode",
  },
  {
    title: "Deploy GKE with WordPress HTTPS",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1709911236457/e5e1c66d-0127-44d5-bb58-0bc12eb56ade.png",
    url: "https://dipankardas011.hashnode.dev/deploy-gke-with-wordpress-with-https",
    platform: "Hashnode",
  },
  {
    title: "GitHub Action to Deploy Docker-Compose on Remote SSH Server",
    image:
      "https://rtcampblogsdipankardas.files.wordpress.com/2024/02/snettscom-github-actions-ssh-deploy-featured-1100x575-1.jpg",
    url: "https://rtcampblogsdipankardas.wordpress.com/2024/02/15/github-action-to-deploy-docker-compose-on-a-remote-ssh-based-server/",
    platform: "WordPress",
  },
  {
    title:
      "Seamless DevOps: Automating Deployment and Releases with GitHub Actions",
    image:
      "https://rtcampblogsdipankardas.files.wordpress.com/2024/02/dallc2b7e-2024-02-15-16.27.38-illustrate-a-dynamic-and-modern-technological-thumbnail-for-a-blog-post.-the-scene-should-depict-a-seamless-integration-of-several-key-processes_-a-gi.webp",
    url: "https://rtcampblogsdipankardas.wordpress.com/2024/02/15/seamless-devops-automating-deployment-and-releases-with-github-actions/",
    platform: "WordPress",
  },
  {
    title: "WordPress Dockerization (HTTP)",
    image:
      "https://rtcampblogsdipankardas.files.wordpress.com/2024/02/wpdock.jpg",
    url: "https://rtcampblogsdipankardas.wordpress.com/2024/02/12/wordpress-dockerization/",
    platform: "WordPress",
  },
  {
    title: "WordPress Dockerization (HTTPS)",
    image:
      "https://rtcampblogsdipankardas.files.wordpress.com/2024/02/images.png",
    url: "https://rtcampblogsdipankardas.wordpress.com/2024/02/12/dockerization-of-wordpress-with-https/",
    platform: "WordPress",
  },
  {
    title: "WordPress Site Without WP-CLI",
    image:
      "https://rtcampblogsdipankardas.files.wordpress.com/2024/02/pexels-photo-847393.jpeg",
    url: "https://rtcampblogsdipankardas.wordpress.com/2024/02/08/wordpress-site-without-wp-cli/",
    platform: "WordPress",
  },
  {
    title: "WordPress with WP-CLI",
    image:
      "https://rtcampblogsdipankardas.files.wordpress.com/2024/02/automating-installation-wordpress-unit_topology.png",
    url: "https://rtcampblogsdipankardas.wordpress.com/2024/02/08/wordpress-using-wp-cli/",
    platform: "WordPress",
  },
  {
    title: "OpenResty with HTTPS Using Certbot",
    image:
      "https://rtcampblogsdipankardas.files.wordpress.com/2024/02/http2https.jpg",
    url: "https://rtcampblogsdipankardas.wordpress.com/2024/02/05/openresty-with-https/",
    platform: "WordPress",
  },
  {
    title: "Nginx Basics and PHP with FPM",
    image:
      "https://rtcampblogsdipankardas.files.wordpress.com/2024/02/pexels-photo-11035538.jpeg",
    url: "https://rtcampblogsdipankardas.wordpress.com/2024/02/05/nginx-basics-and-php/",
    platform: "WordPress",
  },
  {
    title: "Creating Your Own Kubernetes HA Cluster",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/GSiEeoHcNTQ/upload/0dd732f706f64bd2a9872854072fe738.jpeg",
    url: "https://blog.kubesimplify.com/ha-kubernetes",
    platform: "Kubesimplify",
  },
  {
    title:
      "Deploying Docusaurus on Fermyon Cloud with Spin and AWS CloudFront",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1688792089271/a310523d-05c6-4fec-9cc1-8f6e730f6577.png",
    url: "https://dipankardas011.hashnode.dev/deploying-docusaurus-website-using-spin-wasm",
    platform: "Hashnode",
  },
  {
    title: "How to Get Started with HashiCorp Vault",
    image:
      "https://logowik.com/content/uploads/images/hashicorp-vault8233.jpg",
    url: "https://blog.kubesimplify.com/how-get-started-with-hashicorp-vault",
    platform: "Kubesimplify",
  },
  {
    title: "Introduction to Container Runtime Interface (CRI)",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1668191377402/x4qkVeLse.png",
    url: "https://blog.kubesimplify.com/introduction-to-cri",
    platform: "Kubesimplify",
  },
  {
    title: "About My PDF Editor Project",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1661415076760/mhZE7pjlD.png",
    url: "https://blog.kubesimplify.com/about-my-pdf-editor-project",
    platform: "Kubesimplify",
  },
  {
    title: "Let's Talk About Ansible",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1658056796638/ZwPYZ8Y4U.webp",
    url: "https://blog.kubesimplify.com/lets-talk-about-ansible",
    platform: "Kubesimplify",
  },
  {
    title: "Progressive Rollouts with Argo CD Rollouts",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1658943762321/EV-JEEAPM.jpg",
    url: "https://blog.kubesimplify.com/progressive-rollouts-with-argo-cd-rollouts",
    platform: "Kubesimplify",
  },
  {
    title: "Deploy a Simple Server Using AWS Terraform",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1651289565605/29PIM4Ndn.png",
    url: "https://blog.kubesimplify.com/deploy-a-simple-server-using-aws-terraform",
    platform: "Kubesimplify",
  },
  {
    title: "Pods in Kubernetes",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1650022399645/Fgr-0VxVx.webp",
    url: "https://blog.kubesimplify.com/pods-in-kubernetes",
    platform: "Kubesimplify",
  },
  {
    title: "Important Concepts of Operating Systems",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/unsplash/jXd2FSvcRr8/upload/v1654969924100/w4pykhnV9.jpeg",
    url: "https://blog.kubesimplify.com/important-concepts-of-operating-systems",
    platform: "Kubesimplify",
  },
  {
    title: "My Learnings and Achievements from 2022",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/Pf5Pj7A5ddA/upload/263629064bc0ad0584eb69b258d9922d.jpeg",
    url: "https://dipankardas011.hashnode.dev/my-learnings-and-achievements-from-2022",
    platform: "Hashnode",
  },
  {
    title: "Let's Learn YAML Using Examples",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1644166626754/WWevY1-F6.png",
    url: "https://dipankardas011.hashnode.dev/lets-learn-yaml-using-examples",
    platform: "Hashnode",
  },
  {
    title: "Let's Learn Docker",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1647360792117/4_9hX-5B2.png",
    url: "https://dipankardas011.hashnode.dev/lets-learn-docker",
    platform: "Hashnode",
  },
  {
    title: "Create Your Own K8s Cluster in Azure",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1647950304968/X2_I11UsZX.png",
    url: "https://dipankardas011.hashnode.dev/create-your-own-k8s-cluster-in-azure",
    platform: "Hashnode",
  },
];
