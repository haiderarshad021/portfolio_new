export interface ProjectItem {
  title: string;
  subtitle: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  featured: boolean;
  category: "Enterprise" | "AI & Health" | "Fintech & Mobility";
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  summary: string;
  projects?: {
    name: string;
    description: string;
  }[];
  keyContributions?: string[];
  technologies: string[];
}

export const siteConfig = {
  name: "Haider Arshad",
  preferredName: "Haider",
  handle: "@haiderarshad206",
  title: "Full-Stack Web Developer & Software Engineer",
  tagline: "4+ Years of Hands-on Engineering Across 3 Organizations",
  location: "Pakistan",
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Native" },
    { name: "Hindi", level: "Fluent" },
    { name: "German", level: "Conversational" },
    { name: "Spanish", level: "Conversational" },
    { name: "Italian", level: "Basic" },
    { name: "French", level: "Basic" },
  ],
  contact: {
    email: "haiderarshad206@gmail.com",
    phone: "+92 300 0000000",
    fiverr: "https://www.fiverr.com/users/haiderarshad206",
    github: "https://github.com/haiderarshad206",
    linkedin: "https://www.linkedin.com/in/haiderarshad206",
  },
  about: {
    intro:
      "Hi! I'm Haider, a Full-Stack Web Developer with 4+ years of hands-on experience across 3 organizations. I specialize in building modern, scalable web applications using React.js, Next.js, Node.js, NestJS, Express.js, PostgreSQL, MongoDB, MySQL, and Firebase.",
    details:
      "My expertise includes responsive UI development, backend architecture, REST APIs, database management, authentication (JWT, Keycloak, RBAC, ABAC), Docker, and AI-based systems. I focus on clean code, secure solutions, performance, clear communication, and timely delivery. Let's bring your ideas to life!",
    highlights: [
      { label: "Years Experience", value: "4+" },
      { label: "Organizations", value: "3" },
      { label: "Enterprise Projects", value: "8+" },
      { label: "Client Satisfaction", value: "100%" },
    ],
  },
  fiverrSkills: [
    { name: "Web development", level: "Pro", icon: "code" },
    { name: "Web design", level: "Pro", icon: "layout" },
    { name: "System architecture", level: "Pro", icon: "cpu" },
    { name: "Design system", level: "Pro", icon: "palette" },
    { name: "Database optimization", level: "Pro", icon: "database" },
    { name: "API integration", level: "Pro", icon: "plug" },
    { name: "API development", level: "Pro", icon: "terminal" },
    { name: "AI development", level: "Pro", icon: "bot" },
    { name: "SQL", level: "Pro", icon: "server" },
  ],
  techStackCategories: [
    {
      category: "Frontend & UI",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Design Systems", "HTML5/CSS3", "Responsive UI"],
    },
    {
      category: "Backend & Architecture",
      skills: ["NestJS", "Node.js", "Express.js", "REST APIs", "Microservices", "System Architecture", "WebSockets / Socket.IO"],
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "PostGIS", "MongoDB", "MySQL", "Redis", "Firebase", "Database Optimization", "SQL Query Tuning"],
    },
    {
      category: "DevOps, Security & AI",
      skills: ["Docker", "Keycloak", "RBAC & ABAC", "JWT Auth", "AI / ML Integration", "Geospatial Processing", "Git / CI/CD"],
    },
  ],
  experience: [
    {
      company: "Sybrid Private Limited",
      role: "Software Engineer",
      type: "Part-time",
      period: "May 2026 - Present",
      duration: "6 mos",
      summary:
        "Developing TravelSync, a large-scale travel and intelligent ride management project across web and mobile platforms with real-time tracking, geospatial processing, and AI fare prediction.",
      keyContributions: [
        "Frontend Development: Engineered responsive web interfaces utilizing Next.js for high performance and SEO.",
        "Backend Development: Built scalable backend microservices and RESTful APIs using NestJS and Node.js.",
        "Real-Time Tracking: Implemented live vehicle location tracking, dynamic route visualization, and distance monitoring.",
        "AI & Machine Learning: Contributed to ML-based fare prediction algorithms recommending optimal fares based on multi-parameter ride data.",
        "Geospatial Processing: Configured PostgreSQL with PostGIS extension for rapid spatial queries and geographic data processing.",
        "Cloud Integration: Integrated Firebase for instant data synchronization and resilient real-time state management.",
      ],
      technologies: [
        "Next.js",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "PostGIS",
        "Firebase",
        "REST APIs",
        "AI / ML",
        "Geospatial Tech",
      ],
    },
    {
      company: "HiveWorx",
      role: "Software Engineer",
      type: "Full-time",
      period: "May 2024 - May 2026",
      duration: "2 yrs",
      summary:
        "Architected and delivered three mission-critical enterprise platforms (E-Office, ALMS, and in-house PMT), driving backend microservices, granular access control (RBAC & ABAC), and system scalability.",
      projects: [
        {
          name: "E-Office – Enterprise Management System",
          description:
            "Built an enterprise management platform from scratch featuring isolated departmental panels for HR, Software, AI, Data, and Finance. Implemented complex RBAC and ABAC for fine-grained authorization.",
        },
        {
          name: "ALMS – Attendance & Leave Management System",
          description:
            "Enterprise-wide system featuring automated attendance tracking integrated with external biometric fingerprint hardware. Engineered complex organizational leave policy engines and executive approval workflows for HR Directors and the CEO.",
        },
        {
          name: "PMT – Project Management Tool (In-house)",
          description:
            "Comprehensive in-house platform connecting SQA, Programmers, PMO, Directors, and the CEO. Engineered project hierarchies, sprint tracking, code review stages, task assignments, and executive reports.",
        },
      ],
      keyContributions: [
        "Architected enterprise backend with NestJS, Node.js, and Redis caching layers.",
        "Implemented enterprise-grade security and authentication using Keycloak, JWT, and multi-tenant RBAC/ABAC.",
        "Integrated external biometric IoT/hardware devices for real-time employee attendance capture.",
        "Containerized core microservices with Docker for seamless continuous deployments.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Microservices",
        "Docker",
        "Keycloak",
        "RBAC",
        "ABAC",
        "JWT",
        "REST APIs",
      ],
    },
    {
      company: "Revive Medical Technologies",
      role: "Software Engineer",
      type: "Full-time",
      period: "Sep 2022 - May 2024",
      duration: "1 yr 8 mos",
      summary:
        "Contributed to four production medical and enterprise systems including legacy migrations, multi-tenant healthcare portals, real-time doctor-patient communications, and AI skin disease detection.",
      projects: [
        {
          name: "E-Vitals – Legacy System Modernization",
          description:
            "Re-architected and modernized a legacy PHP & HTML platform into a high-performance MERN + MySQL architecture with increased scalability and fault-tolerance.",
        },
        {
          name: "RPM 22 – Healthcare Management Platform",
          description:
            "Multi-organization clinical platform with dedicated portals for patients, physicians, hospitals, and administrators. Enabled live tele-consultation telemetry and appointment dispatching using WebSockets and Socket.IO.",
        },
        {
          name: "EDMS – Electronic Document Management System",
          description:
            "Secure enterprise document repository with structured workflow approval stages, audit logs, and encryption for regulatory compliance.",
        },
        {
          name: "Dermoscope – AI-Powered Skin Disease Detection",
          description:
            "Engineered backend microservices for AI-powered dermatological analysis, processing high-res skin images uploaded from React Native mobile clients and returning classification inferences.",
        },
      ],
      keyContributions: [
        "Built responsive client portals with React.js and robust backend services with Express.js.",
        "Implemented real-time bidirectional messaging and telemetry using Socket.IO and WebSockets.",
        "Optimized relational and document database schemas in PostgreSQL, MySQL, and MongoDB.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "REST APIs",
        "Socket.IO",
        "WebSockets",
        "JWT",
        "MERN Stack",
      ],
    },
  ],
  projects: [
    {
      title: "TravelSync",
      subtitle: "Intelligent Ride & Mobility Management Platform",
      company: "Sybrid Private Limited",
      period: "2026 - Present",
      category: "Fintech & Mobility",
      description:
        "Large-scale travel and intelligent ride management platform built for web and mobile. Features live vehicle telemetry, geospatial route queries via PostGIS, Firebase real-time state synchronization, and an ML-powered fare prediction engine.",
      highlights: [
        "Next.js high-performance web dashboard with real-time route tracing",
        "NestJS & Node.js scalable backend microservices",
        "PostgreSQL & PostGIS spatial queries for proximity search",
        "Machine Learning fare calculation model based on traffic and ride parameters",
      ],
      tags: ["Next.js", "NestJS", "PostgreSQL", "PostGIS", "Firebase", "AI/ML", "REST APIs"],
      featured: true,
      liveUrl: "https://www.fiverr.com/users/haiderarshad206/portfolio",
      githubUrl: "https://github.com/haiderarshad206",
    },
    {
      title: "E-Office",
      subtitle: "Multi-Department Enterprise Operations Platform",
      company: "HiveWorx",
      period: "2024 - 2026",
      category: "Enterprise",
      description:
        "Complete enterprise resource management system built from scratch with dedicated, sandboxed panels for HR, Software, AI, Data, and Finance divisions. Powered by granular RBAC and ABAC access control.",
      highlights: [
        "Fine-grained RBAC & ABAC security architecture",
        "Keycloak enterprise SSO and JWT authentication",
        "Multi-department data isolation and granular audit logs",
        "High-throughput PostgreSQL schema with Redis caching",
      ],
      tags: ["Next.js", "NestJS", "Keycloak", "PostgreSQL", "Redis", "RBAC/ABAC", "Docker"],
      featured: true,
      liveUrl: "https://www.fiverr.com/users/haiderarshad206/portfolio",
      githubUrl: "https://github.com/haiderarshad206",
    },
    {
      title: "ALMS",
      subtitle: "Biometric Attendance & Leave Management System",
      company: "HiveWorx",
      period: "2024 - 2026",
      category: "Enterprise",
      description:
        "Organization-wide attendance and leave management system connected to hardware biometric fingerprint devices. Automates complex organizational leave policies and multi-tier approval workflows for HR Directors and executive leadership.",
      highlights: [
        "Direct integration with external biometric fingerprint hardware",
        "Automated attendance processing and leave balance calculations",
        "Executive approval hierarchies restricted to HR Directors & CEO",
        "Real-time policy configuration and compliance tracking",
      ],
      tags: ["React.js", "NestJS", "PostgreSQL", "Biometric IoT", "RBAC", "Docker"],
      featured: true,
      liveUrl: "https://www.fiverr.com/users/haiderarshad206/portfolio",
      githubUrl: "https://github.com/haiderarshad206",
    },
    {
      title: "PMT (In-House)",
      subtitle: "Full-Lifecycle Project Management Tool",
      company: "HiveWorx",
      period: "2024 - 2026",
      category: "Enterprise",
      description:
        "In-house engineering project tracker uniting SQA, Developers, PMO, Engineering Directors, and the CEO. Manages end-to-end software lifecycle from task assignment and sprint tracking to QA sign-off and executive oversight.",
      highlights: [
        "Dedicated role-specific portals (SQA, PMO, Dev, Executive)",
        "End-to-end sprint progression and automated QA review gates",
        "Strict role-based permissions and timeline milestone tracking",
        "Microservices architecture with REST APIs and Redis pub/sub",
      ],
      tags: ["Next.js", "Node.js", "NestJS", "Redis", "Microservices", "JWT"],
      featured: true,
      liveUrl: "https://www.fiverr.com/users/haiderarshad206/portfolio",
      githubUrl: "https://github.com/haiderarshad206",
    },
    {
      title: "RPM 22",
      subtitle: "Multi-Organization Healthcare Management Platform",
      company: "Revive Medical Technologies",
      period: "2022 - 2024",
      category: "AI & Health",
      description:
        "Large-scale healthcare management platform featuring separate portal experiences for patients, doctors, hospitals, and hospital network administrators. Incorporates real-time patient consultation sessions using WebSockets.",
      highlights: [
        "Multi-organization clinical tenant management",
        "Real-time doctor-patient communication via WebSockets & Socket.IO",
        "Automated appointment scheduling and medical record encryption",
        "MERN Stack with MySQL data consistency",
      ],
      tags: ["MERN Stack", "MySQL", "Socket.IO", "WebSockets", "Healthcare Tech", "JWT"],
      featured: true,
      liveUrl: "https://www.fiverr.com/users/haiderarshad206/portfolio",
      githubUrl: "https://github.com/haiderarshad206",
    },
    {
      title: "Dermoscope AI",
      subtitle: "AI-Powered Skin Disease Detection & Triage",
      company: "Revive Medical Technologies",
      period: "2022 - 2024",
      category: "AI & Health",
      description:
        "AI-driven diagnostic system that analyzes clinical skin lesion imagery uploaded through a mobile client and returns disease classification insights with confidence scoring.",
      highlights: [
        "High-throughput image processing pipeline in Node.js & Express.js",
        "PostgreSQL structured storage for clinical evaluations",
        "Integration with mobile client built on React Native",
        "Secure HIPAA-compliant image handling and triage routing",
      ],
      tags: ["Node.js", "Express.js", "PostgreSQL", "AI/ML", "React Native", "REST APIs"],
      featured: true,
      liveUrl: "https://www.fiverr.com/users/haiderarshad206/portfolio",
      githubUrl: "https://github.com/haiderarshad206",
    },
    {
      title: "EDMS",
      subtitle: "Enterprise Document Management & Compliance",
      company: "Revive Medical Technologies",
      period: "2022 - 2024",
      category: "Enterprise",
      description:
        "Internal enterprise document system built to securely catalog, version, and authorize critical corporate and medical documents with multi-panel access controls and compliance audits.",
      highlights: [
        "Structured document lifecycle approval workflows",
        "Granular access control and immutable audit trails",
        "Fast document indexing with MongoDB and Express.js",
      ],
      tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Access Control"],
      featured: false,
      liveUrl: "https://www.fiverr.com/users/haiderarshad206/portfolio",
      githubUrl: "https://github.com/haiderarshad206",
    },
    {
      title: "E-Vitals",
      subtitle: "Legacy System Modernization (PHP to MERN)",
      company: "Revive Medical Technologies",
      period: "2022 - 2024",
      category: "AI & Health",
      description:
        "Comprehensive migration and refactoring of an aging PHP/HTML legacy portal into a modular, maintainable MERN + MySQL stack, reducing page load latency by over 50%.",
      highlights: [
        "Complete architecture migration from PHP to MERN + MySQL",
        "Database normalization and query optimization",
        "Refactored UI with responsive React components",
      ],
      tags: ["MERN Stack", "MySQL", "System Modernization", "Performance", "REST APIs"],
      featured: false,
      liveUrl: "https://www.fiverr.com/users/haiderarshad206/portfolio",
      githubUrl: "https://github.com/haiderarshad206",
    },
  ],
  education: [
    {
      degree: "B.Sc. Degree in Computer Science",
      institution: "Foundation University School of Science & Technology",
      location: "Pakistan",
      year: "Graduated 2022",
      description:
        "Comprehensive 4-year degree focusing on Software Engineering, Data Structures & Algorithms, Distributed Systems, Database Architecture, and Web Engineering.",
    },
  ],
  certifications: [
    {
      title: "OPSWAT Academy Cyber Security Job Simulation",
      issuer: "OPSWAT Academy",
      year: "2022",
      badge: "Cyber Security",
    },
    {
      title: "Supervised Industrial Training",
      issuer: "HiveWorx Pvt Ltd.",
      year: "2021",
      badge: "Industry Training",
    },
  ],
  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end development of modern web applications using React.js, Next.js, NestJS, and Node.js. Fast, accessible, and production-tested.",
      icon: "code",
    },
    {
      title: "Enterprise Backend Architecture",
      description:
        "High-performance microservices, REST APIs, and event-driven backends with PostgreSQL, MongoDB, Redis, and Docker.",
      icon: "server",
    },
    {
      title: "Authentication & Security (RBAC/ABAC)",
      description:
        "Enterprise-grade authentication and authorization setups including Keycloak SSO, JWT, and granular Role/Attribute-Based Access Control.",
      icon: "lock",
    },
    {
      title: "Database Optimization & SQL",
      description:
        "PostgreSQL (PostGIS), MySQL, and MongoDB architecture, query tuning, indexing, and scalable relational schema design.",
      icon: "database",
    },
    {
      title: "Real-Time Tracking & Telemetry",
      description:
        "Live location tracking, geospatial calculations, and bidirectional communications using WebSockets, Socket.IO, and Firebase.",
      icon: "radar",
    },
    {
      title: "AI Integration & Systems",
      description:
        "Integrating machine learning models for predictive pricing, automated classification, and intelligent data processing.",
      icon: "brain",
    },
  ],
  testimonials: [
    {
      name: "Sybrid Project Lead",
      role: "Engineering Director",
      content:
        "Haider was instrumental in architecting TravelSync. His expertise with NestJS, PostGIS geospatial queries, and real-time tracking ensured an ultra-responsive platform for our fleet and passenger apps.",
      rating: 5,
    },
    {
      name: "Enterprise Client",
      role: "VP of Product",
      content:
        "Superb full-stack execution on our E-Office and ALMS systems. Haider implemented intricate Role-Based Access Controls and biometric IoT integrations flawlessly. Outstanding communication and punctuality.",
      rating: 5,
    },
    {
      name: "Healthcare Tech Founder",
      role: "CEO & Medical Lead",
      content:
        "Haider modernized our legacy platforms and engineered high-performance APIs for RPM 22 and Dermoscope AI. Clean code, rock-solid security, and deep database optimization.",
      rating: 5,
    },
    {
      name: "Verified Fiverr Client",
      role: "Global Product Manager",
      content:
        "Haider delivered beyond our expectations on Fiverr. His technical mastery across React, Next.js, and Node.js combined with clear milestones made collaboration seamless. Highly recommended!",
      rating: 5,
    },
  ],
};
