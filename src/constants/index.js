import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  sensible,
  threejs,
  iitg,
  cc,
  ac,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Research Intern",
    company_name: "IIT Guwahati",
    icon: iitg,
    iconBg: "#ffffff",
    date: "June 2025 - July 2025",
    points: [
      "Contributed to a live demonstration of the system as a prototype for assistive communication of patients with speech / mobility impairments",
      "Designed and developed a wearable glove system using ESP32 with BLE integration for real-time health monitoring and gesture recognition.",
      "Built a cross-platform mobile app using React Native and NativeWind to visualize sensor data such as SpO2, heart rate, gestures and motion.",
      "Integrated Firebase Cloud Messaging (FCM) to enable emergency and background BLE alert notifications to connected users.",
      "Implemented persistent BLE connectivity with background service support to maintain reliable data sync and user alerts.",
    ],
  },
];

const projects = [
  {
    name: "Sensible",
    description:
      "Android application designed for seamless connectivity between patients and their caretakers together with a custom BLE device that supports background activity and FCM notifications",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "NativeWind",
        color: "green-text-gradient",
      },
      {
        name: "FCM V1 Notifications",
        color: "pink-text-gradient",
      },
      {
        name: "Background Activity",
        color: "blue-text-gradient",
      },
    ],
    image: sensible,
    source_code_link: "https://github.com/ShashankUmarVaishy/Sensible_Wearable.git",
  },
  {
    name: "Campus Connect",
    description:
      "Android application that enables students to manage their courses, assignments, keep track of assignments and exams, post their grievances, access to inter-campus-social-media, lost and found item management, get campus news update, etc ",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "Web-Scraping",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "NeonDB",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: cc,
    source_code_link: "https://github.com/CampusConnect-NovaNexus/CC-frontend-student.git",
  },
  {
    name: "Admin Connect",
    description:
      "Android application that enables professors, assistants, admin to manage their actions as per their role, post announcements, take attendance, view grievances posted by students, manage their class, assign teaching assistants and more.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "Web-Scraping",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "NeonDB",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: ac,
    source_code_link: "https://github.com/CampusConnect-NovaNexus/CC-frontend-teacher.git",
  },
];

export { technologies, experiences, projects };
