import { Project, Skill, Experience, Education, SocialLink } from "../types";
import socialMedia from "../assets/social-media-app.jpeg";
import eCommerce from "../assets/ecommerce.png";
import chatApp from "../assets/chat-app.jpg";

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

export const skills: Skill[] = [
  { name: "HTML", icon: "html", level: 95, category: "frontend" },
  { name: "CSS", icon: "css", level: 90, category: "frontend" },
  { name: "JavaScript", icon: "javascript", level: 92, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 85, category: "frontend" },
  { name: "React", icon: "react", level: 90, category: "frontend" },
  { name: "Bootstrap", icon: "bootstrap", level: 88, category: "frontend" },
  { name: "Node.js", icon: "nodejs", level: 88, category: "backend" },
  { name: "Express.js", icon: "express", level: 85, category: "backend" },
  { name: "MongoDB", icon: "mongodb", level: 82, category: "database" },
  { name: "MySQL", icon: "mysql", level: 80, category: "database" },
  { name: "Python", icon: "python", level: 75, category: "other" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Netizens Technology",
    role: "Full Stack Developer",
    duration: "2023 - Present",
    description:
      "Working as a Full Stack Developer on various web applications and client projects.",
    responsibilities: [
      "Developing responsive web applications using React and Node.js",
      "Building RESTful APIs and server-side applications",
      "Database design and implementation with MongoDB and MySQL",
      "Collaborating with cross-functional teams to deliver high-quality software",
      "Implementing authentication systems and security measures",
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Application",
    institution: "University Institute",
    duration: "2023 - 2025",
    details:
      "Final Year Student focusing on advanced computing concepts and software development.",
    cgpa: "In Progress",
  },
  {
    id: 2,
    degree: "Bachelor of Mathematics",
    institution: "University College",
    duration: "2020 - 2023",
    details:
      "Graduated with honors in Mathematics with a focus on Computer Science electives.",
    cgpa: "9.45",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/patelhasmi",
    icon: "linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/Mohammedhasmi-Patel",
    icon: "github",
  },
  // {
  //   platform: "Twitter",
  //   url: "https://twitter.com/mohasmi",
  //   icon: "twitter",
  // },
  // {
  //   platform: "Email",
  //   url: "mailto:mohammedhasmi.p@gmail.com",
  //   icon: "mail",
  // },
  {
    platform: "Call",
    url: "tel:+917096844859", // replace with your number
    icon: "phone",
  },
];

export const aboutMe = {
  name: "Mo.Hasmi",
  title: "Full Stack Developer",
  bio: `I am a passionate Full Stack Developer with expertise in building modern web applications. 
  With a strong foundation in Mathematics and ongoing studies in Computer Applications,
  I combine analytical thinking with technical skills to create efficient and elegant solutions.
  
  I enjoy working on challenging projects that push my boundaries and allow me to learn new technologies.
  My goal is to build applications that not only solve problems but also provide an exceptional user experience.`,

  careerGoal: `My career objective is to become a senior software architect, leading teams in building
  innovative solutions that make a meaningful impact. I'm continuously learning and staying
  updated with the latest technologies in web development.`,
};
