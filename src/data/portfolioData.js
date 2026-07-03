// ============================================================
// portfolioData.js — Centralized configuration for Md Meraj's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Md Meraj",
  firstName: "Md Meraj",
  brandName: "Meraj",
  title: "Full Stack Web Developer & Software Developer",
  location: "Bhopal, Madhya Pradesh, India",
  phone: "+91 6207956566",
  emails: {
    primary: "merajahmad69261@gmail.com",
    secondary: "",
  },
  summary:
    "Aspiring software engineer and B.Tech Computer Science student specializing in Full Stack Web Development (MERN Stack) and Software Development. Skilled in Java, JavaScript, Python, React.js, Node.js, Express.js, and MongoDB, with a solid foundation in database design, REST APIs, and structured software architecture. Passionate about solving real-world challenges through clean, scalable, and responsive web applications.",
  resumeUrl: "/Meraj_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/merajahmad69261",
  linkedin: "https://www.linkedin.com/in/md-meraj06/",
  email: "merajahmad69261@gmail.com",
  instagram: "https://www.instagram.com/meraj_io",
  whatsapp: "https://wa.me/916207956566",
};

export const heroContent = {
  greeting: "Hi, I'm Md Meraj",
  titleHighlight: "Full Stack & MERN Developer",
  subtitle:
    "Building scalable web applications, secure APIs, and responsive digital experiences with the MERN Stack and modern technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:merajahmad69261@gmail.com?subject=Inquiry – Portfolio&body=Hello Meraj,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Meraj_Resume.pdf" },
};

export const aboutContent = {
  heading: "About Me",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Meraj</span>. I am a Computer Science Engineering student and Web Developer based in Bhopal, Madhya Pradesh. I focus on full-stack development, building performant backends, and designing database-driven web applications. With expertise in Java, JavaScript, and React, I enjoy translating requirements into clean, scalable code and participating in collaborative technical environments like hackathons.`,
  techStack: ["React.js", "Java", "JavaScript"],
};

// Process Data
export const skillsContent = {
  badge: "My Development Pipeline",
  heading: "Engineering Scalable Web Solutions",
  description:
    "I follow structured software development methodologies to conceptualize interfaces, write server-side integrations, and maintain solid database layouts.",
  cards: [
    {
      number: "01",
      title: "Understand & Define",
      text: "Analyzing project requirements, mapping database collections, and designing the flow of user interaction states."
    },
    {
      number: "02",
      title: "Design System & Schema",
      text: "Structuring relational databases in MySQL or document-oriented clusters in MongoDB Atlas, creating clean endpoint endpoints."
    },
    {
      number: "03",
      title: "Build Backend & APIs",
      text: "Developing secure backend frameworks using Node.js and Express, implementing validation policies and robust business rules."
    },
    {
      number: "04",
      title: "Develop Interface",
      text: "Crafting beautiful, responsive client-side applications in React, binding application states dynamically to API endpoints."
    },
    {
      number: "05",
      title: "Test, Optimize & Deploy",
      text: "Verifying security logic (JWT, password hashes), refactoring responsive styling grids, and publishing builds."
    }
  ],
  endText: "Ready to deploy!"
};

// Technical Skills (No percentage bars)
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "C", "C++"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Vite", "Tailwind CSS", "AOS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "API Design"]
    },
    {
      title: "Databases & Storage",
      skills: ["MongoDB", "MongoDB Atlas", "MySQL", "Relational Databases", "Document Modeling"]
    },
    {
      title: "Authentication & Security",
      skills: ["JWT (JSON Web Tokens)", "bcrypt Password Encryption", "Session Validation", "Role-Based Access Control"]
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Powershell"]
    }
  ]
};

// Projects Data
export const projects = [
  {
    id: "internshiphub-platform",
    number: "01",
    badge: "🚀 MERN Stack Flagship",
    title: "InternshipHub - Full-Stack Internship Portal",
    description:
      "Developed a full-stack portal linking students, companies, and administrators. Integrated customizable student portfolios, employer vacancy manager tools, and a secure moderation command center. Implemented JWT session handling, hashed authentication, and dynamic tracking feeds.",
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "bcrypt", "Vite", "CSS3"],
    links: {
      github: "https://github.com/merajahmad69261/InternshipHub",
      githubProfile: "https://github.com/merajahmad69261",
      instagram: "https://www.instagram.com/merajahmad69261",
      whatsapp: "https://wa.me/916207956566",
      demo: null,
    },
    isFlagship: true,
    caseStudy: {
      problem: "Students struggle with fragmented, manual application channels, and companies lack centralized tools to moderate applicant pipelines and screen candidates.",
      solution: "A consolidated platform housing distinct student dashboards, company vacancy postings, and administrative control centers. Provides a unified portal with automated review flows.",
      architecture: "A decoupled MERN architecture utilizing React for client interactions, Express and Node.js for API routing, and MongoDB Atlas for real-time document storage.",
      features: [
        "Student Workspace: Profile builder, real-time vacancy search, and active application tracking.",
        "Recruiter Dashboard: Vacancy constructor, applicant profile screening, and status updates.",
        "System Admin Panel: User moderations, audit logs, and platform health dashboard.",
        "Secure Layer: bcrypt-hashed passwords and JSON Web Token verification middleware."
      ]
    }
  },
  {
    id: "agritech-innovation",
    number: "02",
    badge: "🌱 AgriTech Hackathon Project",
    title: "AgriTech Innovation Platform - BGI Hackathon",
    description:
      "Created an agricultural collaboration concept under the track 'Agriculture, FoodTech & Rural Innovation' during BGI Hackathon 2026. Built interactive frontend views for supply management and farmer-vendor communication pipelines.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "BGI Hackathon", "Teamwork"],
    links: {
      github: null,
      githubProfile: "https://github.com/merajahmad69261",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "tech-sageathon-project",
    number: "03",
    badge: "💻 Hackathon Solution",
    title: "Collaborative Hackathon Solution - Tech Sageathon",
    description:
      "Collaborated in a development team during the Tech Sageathon 2K26. Focused on translating application mockups into responsive layouts, managing Git conflicts, and organizing system routes.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Git/GitHub", "Collaborative Development"],
    links: {
      github: null,
      githubProfile: "https://github.com/merajahmad69261",
      demo: null,
    },
    isFlagship: false,
  },
];

// Certificates Data
export const certificates = {
  featured: [
    {
      name: "Programming In Java",
      issuer: "NPTEL (IIT Kharagpur)",
      icon: "☕",
      link: "/certificates/Programming_In_Java.pdf",
      verifyLink: "https://nptel.ac.in/noc/",
      desc: "12-week intensive certification course validating core understanding of object-oriented programming, multithreading, exceptions, streams, and interface design in Java. Scored 67/100 (Elite Class)."
    },
    {
      name: "Python for Data Science",
      issuer: "NPTEL (IIT Madras)",
      icon: "🐍",
      link: "/certificates/Python_for_Data_Science.pdf",
      verifyLink: "https://nptel.ac.in/noc/",
      desc: "4-week certification course covering statistical analysis, regression, data visualization, and analytical operations using Python packages."
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte (via Forage)",
      icon: "📊",
      link: "/certificates/Deloitte_Data_Analytics.pdf",
      verifyLink: "https://www.theforage.com/simulations-sitemap",
      desc: "Practical job simulation task completion focusing on data analysis schemas, database architecture optimization, forensic trace workflows, and business dashboards. User Verification: 5JrrhEHGit6JFc8by."
    },
    {
      name: "BGI Hackathon 2026",
      issuer: "Bansal Group of Institutes, Bhopal",
      icon: "🏆",
      link: "/certificates/BGI_Hackathon_2026.pdf",
      verifyLink: null,
      desc: "Certificate of Participation in the national-level BGI Hackathon 2026 under the theme 'Agriculture, FoodTech & Rural Innovation' held at BGI-Kokta Campus, Bhopal."
    },
    {
      name: "Tech Sageathon 2K26",
      issuer: "SIRT Bhopal & Cybrom Technology",
      icon: "💡",
      link: "/certificates/Tech_Sageathon_2026.pdf",
      verifyLink: null,
      desc: "Certificate of Participation in Tech Sageathon 2K26, showcasing dedication, strategic problem-solving, and collaborative programming."
    },
  ]
};

// Education Data
export const educationList = [
  {
    institution: "IES College of Technology (RGPV)",
    degree: "Bachelor of Technology - Computer Science Engineering",
    duration: "2023 – Present",
    location: "Bhopal, Madhya Pradesh",
    gpa: "CGPA: 7.00/10.00"
  },
  {
    institution: "Bhagwanpur College (BSEB)",
    degree: "Intermediate (12th) - Science",
    duration: "2021 – 2023",
    location: "Siwan, Bihar",
    gpa: "Percentage: 67%"
  },
  {
    institution: "Ravi Shankar Public School (CBSE)",
    degree: "Secondary (10th)",
    duration: "2019 – 2020",
    location: "Samastipur, Bihar",
    gpa: "CGPA: 64.4% (6.8 CGPA equivalent)"
  }
];

// Experience Data
export const experienceList = [
  {
    organization: "Deloitte (Virtual Simulation via Forage)",
    role: "Data Analytics & Forensic Technology Intern",
    duration: "June 2025",
    location: "Remote Simulation Work environment",
    responsibilities: [
      "Completed structured analytical simulations simulating real Deloitte client project workflows.",
      "Conducted analysis on structured databases to identify trace threats, exceptions, and layout optimizations.",
      "Designed dashboard layouts and metrics to showcase security risk metrics and operational parameters.",
      "Authored reporting schemas detailing data-driven forensic solutions to guide management teams."
    ],
    tech: ["Data Analysis", "Forensic Technology", "Database Querying", "Operational Dashboards"]
  }
];

export const footerContent = {
  taglines: [
    "Full Stack Web Developer & MERN Specialist",
    "Computer Science Engineer & Software Developer",
    "Java, JavaScript & Relational Database Design",
  ],
  credential: "B.Tech CSE Candidate · IES College of Technology",
  copyright: `© ${new Date().getFullYear()} Md Meraj | Built with React & Tailwind`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
