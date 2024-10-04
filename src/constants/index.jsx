import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import user7 from "../assets/profile-pictures/user7.png";

export const navItems = [
  {label: "AboutUs" ,href:"#"},  
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
 
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

// src/constants.jsx

// Existing exports...
export const aboutUs = {
  title: "About Us",
  description: `
    VirtualR is at the forefront of innovation in virtual reality (VR) development, offering a state-of-the-art platform that simplifies the creation of immersive, interactive experiences. Whether you're a seasoned developer or a newcomer to VR, our platform provides intuitive tools and extensive resources designed to streamline the development process. By supporting multiple platforms, VirtualR ensures that creators can build, test, and deploy VR applications without the complexities of cross-platform development. Our commitment is to enable users to bring their creative ideas to life, making high-quality VR experiences accessible to all
  `,
  mission: `
    At VirtualR, our mission is clear: to democratize virtual reality development for everyone. We believe that the future of VR should be within reach of all creators, regardless of their technical expertise. That’s why we’re focused on building a platform that is not only user-friendly but also highly efficient. Our goal is to empower individuals, teams, and businesses to seamlessly collaborate and develop next-level VR applications, reducing the barriers to entry and encouraging innovation. By providing accessible tools and features, we aim to inspire creators to push the boundaries of what’s possible in virtual reality.
  `,
  vision: `
    We envision VirtualR as the leading global platform for VR development, one that fosters creativity, innovation, and growth across industries. Our vision is to become the go-to hub for virtual reality creators, enabling businesses, educators, and entertainers to unlock the transformative potential of VR. We aim to create a world where virtual reality is a cornerstone of education, entertainment, and industry solutions, driving forward new possibilities and immersive experiences. By continuously evolving and enhancing our platform, we hope to support innovators in shaping the future of virtual reality.
  `,
  team: [
    {
      name: "Mounish",
      role: "Founder & CEO",
      bio: "Mounish has 15 years of experience in VR and AR technologies, leading the company's vision and strategy.",
      image: user1,  // You can use the images you already imported
    },
    {
      name: "Sampath",
      role: "Lead Developer",
      bio: "Sampath is a seasoned software engineer specializing in VR development and cross-platform integration.",
      image: user5,
    },
    {
      name: "Pavan Kumar",
      role: "java developer",
      bio: "Pavan Kumar is a junior developer passionate about Java, JavaScript, and React programming.",
        
      image: user7,
    },
    {
      name: "Donald",
      role: "MERN Stack Dev",
      bio: "A dedicated MERN Stack Developer focused on creating dynamic, scalable full-stack web solutions.",
      image: user3,  // You can use the images you already imported
    },
    {
      name: "Dakshu",
      role: "UI/UX Developer",
      bio: "Creative UI/UX Developer crafting seamless user experiences with a focus on design innovation.",
      image: user2,
    },
    {
      name: "Kumar",
      role: "junior developer",
      bio: "Junior developer passionate about learning new technologies and improving web applications through coding.",       
      image: user4,
    },
  ],
};
