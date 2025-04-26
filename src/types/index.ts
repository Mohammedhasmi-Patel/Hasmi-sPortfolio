// Removed conflicting import of 'Project'

import socialMedia from "../assets/social-media-app.jpeg";
import eCommerce from "../assets/ecommerce.png";
import chatApp from "../assets/chat-app.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  features: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "database" | "other";
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  details: string;
  cgpa?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media App",
    description:
      "An Instagram-like platform with comprehensive social networking features",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: socialMedia,
    liveLink: "https://social-media-app.example.com",
    githubLink: "https://github.com/mohasmi/social-media-app",
    features: [
      "User authentication with JWT",
      "Post creation with image uploads",
      "Like and comment functionality",
      "Real-time chat using WebSockets",
      "User profiles and followers system",
    ],
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "Full-featured web store with comprehensive shopping experience",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: eCommerce,
    liveLink: "https://ecommerce.example.com",
    githubLink: "https://github.com/mohasmi/ecommerce-website",
    features: [
      "Product listings with search and filters",
      "Shopping cart and checkout system",
      "User authentication and profiles",
      "Admin panel for product management",
      "Payment processing with Stripe",
    ],
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Secure, scalable chat application with modern features",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: chatApp,
    liveLink: "https://chat-app.example.com",
    githubLink: "https://github.com/mohasmi/chat-application",
    features: [
      "Real-time messaging with WebSockets",
      "User authentication and profiles",
      "Group chat functionality",
      "Message read receipts",
      "File and media sharing",
    ],
  },
];
