import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Esrom Basazinew",
  title: "Hi, I'm Esrom Basazinew",
  subTitle: emoji(
    "Full-Stack Software Engineer | Backend Developer | Mobile App Developer. I build scalable web applications, backend systems, and cross-platform mobile apps using modern technologies. I enjoy transforming ideas into reliable, user-focused software through clean architecture, secure APIs, and intuitive interfaces."
  ),
  resumeLink: require("./assets/resume/esrom cv.pdf"),
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/yemom",
  linkedin: "https://www.linkedin.com/in/esrom-basazinew",
  gmail: "12yemom@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "I build full-stack, backend, frontend, and mobile solutions with modern tools and clean architecture.",
  skills: [
    emoji("⚡ Build responsive web applications"),
    emoji("⚡ Develop RESTful APIs"),
    emoji("⚡ Design secure authentication systems"),
    emoji("⚡ Create admin dashboards and management systems"),
    emoji("⚡ Integrate databases and third-party APIs"),
    emoji("⚡ Build scalable full-stack applications")
  ],
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Addis Ababa University",
      logo: require("./assets/images/AAU.wpg.jpg"), // Reusing existing image as a placeholder since Wolkite logo isn't provided
      subHeader: "Bachelor's Degree in Software Engineering",
      duration: "Academic Background",
      desc: "I have developed a strong foundation in software engineering principles, including software development methodologies, algorithms and data structures, database systems, web and mobile application development, software architecture, and computer programming. Throughout my academic journey, I have gained practical experience designing and developing software solutions, applying problem-solving techniques, and building scalable applications using modern technologies. My studies have strengthened my understanding of both theoretical concepts and real-world software engineering practices.",
      descBullets: [
        "Software Development and Engineering Practices",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Application Development",
        "Mobile Application Development",
        "Software Architecture and Design Patterns",
        "Computer Networks and Operating Systems",
        "Artificial Intelligence and Machine Learning Fundamentals"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer / Full Stack Developer",
      company: "Bridge Technology Solution",
      companylogo: require("./assets/images/codeInLogo.webp"),
      date: "6+ Months",
      desc: "Developed and maintained modern web applications using React.js, Next.js, TypeScript, and Node.js. Built responsive and scalable user interfaces following modern UI/UX principles. Integrated RESTful APIs and implemented frontend-backend communication. Improved application performance through component optimization and clean architecture. Collaborated with development teams to design, test, and deploy software solutions. Used Git and GitHub for version control and collaborative development. Implemented reusable React components and optimized application structure.",
      descBullets: [
        "Technologies: React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, Tailwind CSS, Git, REST API"
      ]
    },
    {
      role: "Frontend Developer / Full Stack Developer",
      company: "Tamcon Software Solution",
      companylogo: require("./assets/images/saayaHealthLogo.webp"),
      date: "8+ Months",
      desc: "Developed responsive web interfaces and interactive applications. Created reusable UI components and improved user experience. Worked on customer-focused software solutions and technical support. Analyzed user requirements and provided software-based solutions. Collaborated with teams to troubleshoot issues and improve application reliability. Applied modern frontend development practices and clean coding standards.",
      descBullets: [
        "Technologies: React.js, JavaScript, HTML5, CSS3, UI/UX Design, Git"
      ]
    },
    {
      role: "Freelance Software Developer",
      company: "Independent Projects",
      companylogo: require("./assets/images/pwaLogo.webp"),
      date: "2023 - Present",
      desc: "Designed and developed full-stack web and mobile applications. Built mobile applications using Flutter and Firebase. Developed backend APIs using Node.js, Express.js, and Spring Boot. Created database-driven applications using MySQL, MongoDB, and Firebase Firestore. Implemented authentication systems using JWT and Firebase Authentication. Designed modern interfaces using Figma and implemented responsive layouts. Deployed applications and managed project lifecycle from development to production.",
      descBullets: [
        "Technologies: Flutter, Dart, Firebase, React, Next.js, Node.js, Spring Boot, MySQL, MongoDB, Docker"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "Selected work across healthcare, education, architecture, real-time apps, and mobile learning.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Clinic Management System",
      projectDesc:
        "Developed a healthcare management platform with separate dashboards for Admin, Doctor, Patient, Pharmacy, and Laboratory. Implemented authentication and authorization using JWT and BCrypt. Built appointment management, medical records, prescriptions, and laboratory workflows. Developed frontend using Next.js + TypeScript and backend using Spring Boot.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Spring Boot",
        "MySQL",
        "JWT",
        "REST API"
      ],
      githubLink: "https://github.com/yemom",
      liveLink: ""
    },
    {
      image: require("./assets/images/codeInLogo.webp"),
      projectName: "NeuroParent Mobile Application",
      projectDesc:
        "Developed a mobile application focused on intelligent parenting assistance. Implemented Firebase authentication and cloud data storage. Designed responsive mobile UI following modern mobile UX principles.",
      techStack: ["Flutter", "Dart", "Firebase"],
      githubLink: "https://github.com/yemom",
      liveLink: ""
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "AAiT School Exam Application",
      projectDesc:
        "Built a mobile exam management application. Implemented user authentication and data management. Created clean and interactive mobile interfaces.",
      techStack: ["Flutter", "Firebase", "Dart"],
      githubLink: "https://github.com/yemom",
      liveLink: ""
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Studio 21 Architects Website",
      projectDesc:
        "Developed a professional company website. Created responsive pages and modern UI components. Integrated backend services and optimized website performance.",
      techStack: ["React.js", "Vite", "Node.js", "Express.js"],
      githubLink: "https://github.com/yemom",
      liveLink: ""
    }
  ],
  display: true
};

const achievementSection = {
  title: "Current Learning",
  subtitle:
    "I continuously improve my knowledge in backend development, system design, software architecture, microservices, Docker, cloud computing, Kubernetes, CI/CD pipelines, artificial intelligence, and machine learning.",
  achievementsCards: [
    {
      title: "Advanced Backend Development",
      subtitle:
        "Node.js, Express.js, Spring Boot, secure authentication, REST APIs, database design, and Prisma ORM.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Backend Development",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/yemom"
        }
      ]
    },
    {
      title: "System Design and Cloud Computing",
      subtitle:
        "Distributed systems, Docker, Kubernetes, CI/CD pipelines, and cloud computing.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Cloud Computing",
      footerLink: [
        {
          name: "Portfolio",
          url: "https://esromportfolio.vercel.app/"
        }
      ]
    },
    {
      title: "Development Philosophy",
      subtitle:
        "I write clean, maintainable, and efficient code while solving real problems and building scalable systems.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Development Philosophy",
      footerLink: [
        {
          name: "Contact",
          url: "12yemom@gmail.com"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Writing",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download or view my full resume below.",
  display: true
};

/* ---- Certificates Data ---- */
const certificatesSection = {
  title: "Certificates",
  subtitle:
    "Professional development certificates from industry-leading platforms.",
  display: true,
  certificates: [
    {
      title: "Complete React Developer (v9)",
      issuer: "Frontend Masters",
      date: "2024",
      credentialId: "complete-react-v9",
      pdfLink: require("./assets/certificates/complete-react-v9-dark.pdf")
    },
    {
      title: "Intermediate React (v6)",
      issuer: "Frontend Masters",
      date: "2024",
      credentialId: "intermediate-react-v6",
      pdfLink: require("./assets/certificates/intermediate-react-v6-dark.pdf")
    },
    {
      title: "Web Development Bootcamp (v3)",
      issuer: "Frontend Masters",
      date: "2024",
      credentialId: "web-dev-v3",
      pdfLink: require("./assets/certificates/web-development-v3-dark.pdf")
    },
    {
      title: "Flutter Development",
      issuer: "Frontend Masters",
      date: "2024",
      credentialId: "flutter-dark",
      pdfLink: require("./assets/certificates/flutter-dark.pdf")
    },
    {
      title: "Android with Kotlin",
      issuer: "Frontend Masters",
      date: "2024",
      credentialId: "android-kotlin",
      pdfLink: require("./assets/certificates/android-kotlin-dark.pdf")
    },
    {
      title: "Angular Fundamentals",
      issuer: "Frontend Masters",
      date: "2024",
      credentialId: "angular-fundamentals",
      pdfLink: require("./assets/certificates/angular-fundamentals-dark.pdf")
    }
  ]
};

const contactInfo = {
  title: emoji("Let's Work Together"),
  subtitle:
    "I'm always open to collaborating on innovative projects, contributing to open-source software, and working with teams that value quality engineering and continuous learning.",
  number: "",
  email_address: "12yemom@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  certificatesSection,
  contactInfo,
  twitterDetails,
  isHireable
};
