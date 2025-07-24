# 🚀 Shashank Umar Vaishy - Portfolio

A modern, interactive portfolio website built with React, Three.js, and Framer Motion, showcasing my journey as a Full Stack Developer with expertise in mobile app development, IoT systems, and web technologies.

![Portfolio Preview](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.174.0-black?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.13-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.5.0-0055FF?style=for-the-badge&logo=framer)

## ✨ Features

### 🎨 Design & User Experience
- **Modern Dark Theme**: Sleek dark interface with purple accent colors (#915eff)
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for fluid page transitions and element animations
- **3D Interactive Elements**: Three.js integration for immersive 3D models and animations
- **Parallax Effects**: React Parallax Tilt for engaging hover interactions

### 📱 Sections & Components
- **Hero Section**: Dynamic introduction with animated 3D desktop model
- **About**: Personal introduction with service offerings and animated cards
- **Experience**: Interactive timeline showcasing professional journey
- **Tech Stack**: Animated technology icons with hover effects
- **Projects**: Detailed project showcase with live demos and source code links
- **Mini Projects**: Elegantly designed cards highlighting smaller projects
- **Contact**: Functional contact form with 3D Earth model

### 🛠️ Technical Features
- **Email Integration**: EmailJS service for contact form functionality
- **3D Models**: Interactive 3D scenes using React Three Fiber
- **Performance Optimized**: Vite build system for fast development and production builds
- **Modern React**: Built with React 19 and modern hooks
- **Type Safety**: ESLint configuration for code quality

## 🏗️ Architecture & Design

### Component Structure
```
src/
├── components/
│   ├── About.jsx          # About section with services
│   ├── Contact.jsx        # Contact form with EmailJS
│   ├── Experience.jsx     # Professional timeline
│   ├── Hero.jsx          # Landing section
│   ├── Navbar.jsx        # Navigation component
│   ├── Tech.jsx          # Technology showcase
│   ├── Works.jsx         # Projects and mini-projects
│   └── canvas/           # 3D components
├── constants/
│   └── index.js          # Data constants
├── hoc/
│   └── SectionWrapper.jsx # Higher-order component
├── utils/
│   └── motion.js         # Animation variants
└── styles.js             # Tailwind style configurations
```

### Design System
- **Color Palette**: 
  - Primary: `#915eff` (Purple)
  - Background: `#050816` (Dark Navy)
  - Cards: `#151030` (Dark Purple)
  - Text: `#ffffff` (White), `#aaa6c3` (Light Gray)
- **Typography**: Clean, modern font hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Animations**: Staggered animations with spring physics

## 📧 Contact Service Integration

### EmailJS Configuration
The portfolio uses **EmailJS** for handling contact form submissions without a backend server.

**Service Details:**
- **Service ID**: `service_ucx3aew`
- **Template ID**: `template_e6xgyvm`
- **Public Key**: `_PHxC0HAAOVTRPANE`

**Features:**
- Real-time form validation
- Loading states during submission
- Success/error feedback
- Direct email delivery to: `umarshashank@gmail.com`

**Form Fields:**
- Name (required)
- Email (required, validated)
- Message (required, textarea)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShashankUmarVaishy/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.0.0** - Latest React with modern features
- **Vite 6.2.0** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4.0.13** - Utility-first CSS framework
- **Framer Motion 12.5.0** - Production-ready motion library
- **React Parallax Tilt** - Smooth tilt hover effects

### 3D Graphics
- **Three.js 0.174.0** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Communication
- **EmailJS** - Email service for contact forms
- **React Router DOM** - Client-side routing

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📱 Projects Showcase

### Major Projects

1. **Sensible** - Healthcare IoT Application
   - React Native mobile app with BLE connectivity
   - ESP32 wearable device integration
   - Firebase Cloud Messaging for notifications
   - Real-time health monitoring

2. **Campus Connect** - Student Management System
   - Course and assignment management
   - Social media features for campus
   - Web scraping integration
   - AWS deployment with NeonDB

3. **Admin Connect** - Administrative Portal
   - Role-based access control
   - Attendance management system
   - Announcement and grievance handling
   - Teaching assistant assignment

### Mini Projects
- **Image Generator SAAS**: AI-powered image generation with Razor Pay integration
- **Rock Paper Scissors**: Real-time multiplayer game with WebSocket
- **Tic Tac Toe**: React state management demonstration

## 🎯 Performance & Optimization

- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized assets for web delivery
- **Bundle Splitting**: Code splitting for faster initial loads
- **Animation Performance**: Hardware-accelerated animations
- **Responsive Images**: Adaptive image loading based on device

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Shashank Umar Vaishy**
- Email: umarshashank@gmail.com
- Portfolio: [Live Demo](https://your-portfolio-url.com)
- GitHub: [@ShashankUmarVaishy](https://github.com/ShashankUmarVaishy)

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ using React, Three.js, and modern web technologies*
