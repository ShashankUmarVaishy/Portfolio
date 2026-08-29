import {
  sensible,
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
    id: "tech",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Java", "C++", "JavaScript", "C", "Python", "TypeScript"],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    skills: ["Express.js", "Node.js", "REST APIs", "JWT", "Zod", "API Security", "Flask"],
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    skills: ["React Native", "NativeWind CSS", "Flutter", "BLE Services"],
  },
  {
    title: "AI / ML & Gen-AI",
    icon: "🤖",
    skills: [
      "Agentic-AI",
      "Generative-AI",
      "RAG Pipelines",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "YOLOv8",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "🗄️",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "NeonDB", "AWS (EC2)", "Firebase", "Redis"],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git", "Docker", "Ansible", "Linux", "Microsoft Power Automate", "Workday EIB"],
  },
];

export const experiences = [
  {
    title: "Advanced Application Engineer Analyst Intern",
    company_name: "Accenture",
    icon: "/company/accenture.png",
    iconBg: "#ffffff",
    date: "June 2026 - July 2026",
    points: [
      "Developed and configured Workday Enterprise Interface Builders (EIBs) to build secure, automated ETL pipelines for bulk data migration and inbound/outbound enterprise processing.",
      "Engineered automated workflows using Microsoft Power Automate to streamline enterprise data pipelines, reducing operational redundancy by 90%.",
      "Worked across Gen-AI, Agentic AI, Cybersecurity, and Workday Core Integration frameworks.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Centre for Indian Knowledge Systems, IIT Guwahati",
    icon: "/company/iitg.png",
    iconBg: "#ffffff",
    date: "June 2025 - July 2025",
    points: [
      "Engineered an IoT-enabled wearable glove system utilizing ESP32 and BLE to translate gestures into real-time health data and audio alerts for patients with mobility impairments.",
      "Built a cross-platform mobile app using React Native and NativeWind to visualize sensor data (SpO2, heart rate, gestures, motion).",
      "Integrated Firebase Cloud Messaging (FCM) and persistent BLE background services for emergency alert notifications.",
    ],
  },
];

export const projects = [
  {
    name: "NeuraNexus",
    subtitle: "Enterprise Multi-Modal RAG Platform",
    description:
      "Multi-modal RAG engine utilizing BM25 and vector search, integrating BLIP, CLIP-ViT, YOLOv8, and Vosk for real-time document indexing, OCR, and speech recognition. Architected decoupled microservices with Redis/BullMQ background job queues and Server-Sent Events (SSE) streaming.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Python (Flask)", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "Upstash Vector", color: "blue-text-gradient" },
      { name: "Redis & BullMQ", color: "orange-text-gradient" },
      { name: "Ollama", color: "green-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/ShashankUmarVaishy/NeuraNexus",
  },
  {
    name: "Auto-Resume-AI",
    subtitle: "AI-Powered Application Data Parser & Predictor",
    description:
      "AI assistant tool that parses user-fed background and career data, intelligently predicting and auto-generating tailored responses for job application portals and forms.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "AI / NLP", color: "green-text-gradient" },
      { name: "Automation", color: "orange-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/ShashankUmarVaishy/Auto-Resume-AI",
  },
  {
    name: "Sensible",
    subtitle: "Assistive Communication Glove & App",
    description:
      "Assistive communication ecosystem developed during research internship at IIT Guwahati. Android application and custom BLE wearable glove supporting real-time gesture recognition, continuous background health monitoring, and FCM emergency notifications.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "NativeWind CSS", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "Firebase FCM", color: "orange-text-gradient" },
      { name: "BLE / Sensors", color: "blue-text-gradient" },
    ],
    image: sensible,
    source_code_link: "https://github.com/ShashankUmarVaishy/Sensible_Wearable.git",
  },
  {
    name: "Campus Connect",
    subtitle: "Student College Management Portal",
    description:
      "Android application enabling students to manage courses, assignments, grievances, lost and found items, intra-campus social feeds, and web-scraped campus updates.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Flask & Express", color: "green-text-gradient" },
      { name: "AWS (EC2)", color: "orange-text-gradient" },
      { name: "NeonDB", color: "pink-text-gradient" },
      { name: "Web Scraping", color: "blue-text-gradient" },
    ],
    image: cc,
    source_code_link: "https://github.com/CampusConnect-NovaNexus/CC-frontend-student.git",
  },
  {
    name: "Admin Connect",
    subtitle: "Faculty & Admin Management Portal",
    description:
      "Android application enabling professors and admins to post announcements, manage class attendance, resolve student grievances, and assign teaching assistants.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Flask & Express", color: "green-text-gradient" },
      { name: "AWS (EC2)", color: "orange-text-gradient" },
      { name: "NeonDB", color: "pink-text-gradient" },
      { name: "REST APIs", color: "blue-text-gradient" },
    ],
    image: ac,
    source_code_link: "https://github.com/CampusConnect-NovaNexus/CC-frontend-teacher.git",
  },
  {
    name: "Image Generator SAAS",
    subtitle: "AI Image Generation & Payments",
    description:
      "Comprehensive SAAS platform featuring AI-powered image generation integrated with Razorpay payment processing and subscription tier management.",
    tags: [
      { name: "SAAS", color: "blue-text-gradient" },
      { name: "RazorPay", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/ShashankUmarVaishy",
  },
  {
    name: "Rock Paper Scissors",
    subtitle: "Real-Time Multiplayer Matchmaking",
    description:
      "Real-time multiplayer game featuring automated matchmaking that connects players with online opponents via WebSockets and user presence tracking.",
    tags: [
      { name: "Multiplayer", color: "blue-text-gradient" },
      { name: "WebSockets", color: "green-text-gradient" },
      { name: "RealTime", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/ShashankUmarVaishy",
  },
  {
    name: "Tic Tac Toe",
    subtitle: "Interactive Game & State Management",
    description:
      "Interactive game built to master React state management concepts, featuring custom turn logic, winner detection algorithms, and smooth UI transitions.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "StateManagement", color: "green-text-gradient" },
      { name: "GameLogic", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/ShashankUmarVaishy",
  },
];
