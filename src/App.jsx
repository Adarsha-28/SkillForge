import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame, 
  Award, 
  Star, 
  X, 
  Github, 
  Linkedin, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  Plus, 
  Sparkles, 
  TrendingUp, 
  Briefcase,
  ExternalLink,
  Search,
  Filter,
  BarChart3,
  Trophy,
  ShieldCheck,
  Zap,
  Info,
  ChevronDown,
  ChevronUp,
  Cpu,
  Globe,
  Settings,
  Users,
  Compass,
  ListTodo,
  Unlock,
  Lock,
  User,
  LineChart,
  CalendarDays,
  Mail,
  ChevronLeft,
  Sun,
  Moon
} from 'lucide-react';


// ==========================================
// MOCK DATA: 8 INDIAN STUDENT PROFILES
// ==========================================
const INITIAL_STUDENTS = [
  {
    id: 1,
    name: "Arjun Krishnan",
    dept: "CSE",
    year: "3rd Year",
    avatar: "AK",
    avatarBg: "linear-gradient(135deg, #ff6b35 0%, #e45c3a 100%)",
    bio: "Passionate AI researcher working on computer vision and large language models.",
    endorsements: 124,
    skills: [
      { name: "AI/ML", level: 95 },
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "React", level: 80 }
    ],
    topTags: ["AI/ML", "Python", "TensorFlow"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    projects: [
      {
        title: "VisionGuard AI",
        desc: "Real-time hazard and hazard object detection using YOLOv8 for smart factory environments, deployed with FastAPI and React.",
        tech: ["Python", "PyTorch", "FastAPI", "React"],
        github: "https://github.com",
        live: "https://example.com"
      },
      {
        title: "NeuroScribe",
        desc: "Medical audio transcriber and clinical notes summarizer powered by custom fine-tuned Whisper and Llama-3 models.",
        tech: ["Python", "OpenAI API", "Hugging Face", "Vite"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ],
    certifications: [
      { title: "AWS Certified Machine Learning - Specialty", issuer: "Amazon Web Services", date: "2024" },
      { title: "TensorFlow Developer Certificate", issuer: "Google / DeepLearning.AI", date: "2023" }
    ],
    timeline: [
      { year: "2025", title: "AI Research Intern", desc: "IISc Computational & Data Sciences Department" },
      { year: "2024", title: "Smart India Hackathon Winner", desc: "First prize in AI/ML solutions for disaster management" },
      { year: "2023", title: "CSE Core Lead", desc: "Admitted into advanced Artificial Intelligence cluster" }
    ],
    commits: 432,
    streak: 28,
    activeDays: 198
  },
  {
    id: 2,
    name: "Priya Sharma",
    dept: "ECE",
    year: "4th Year",
    avatar: "PS",
    avatarBg: "linear-gradient(135deg, #ff6b35 0%, #f7a855 100%)",
    bio: "Building hardware-software bridges to automate the future with smart energy grids.",
    endorsements: 98,
    skills: [
      { name: "IoT", level: 92 },
      { name: "Embedded Systems", level: 90 },
      { name: "C++", level: 85 },
      { name: "Microcontrollers", level: 88 }
    ],
    topTags: ["IoT", "Embedded Systems", "C++"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    projects: [
      {
        title: "SmartGrid IoT Node",
        desc: "An ESP32-based multi-sensor power metering device sending telemetry to AWS IoT Core via MQTT with local OLED visual dashboards.",
        tech: ["C++", "ESP32", "MQTT", "AWS IoT Core"],
        github: "https://github.com",
        live: "https://example.com"
      },
      {
        title: "PulseSync Wearable",
        desc: "Low-power BLE wristband utilizing FreeRTOS to track ECG data, oxygen saturation, and body temperature with minimal battery consumption.",
        tech: ["FreeRTOS", "nRF52840", "BLE", "C++"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ],
    certifications: [
      { title: "Cisco IoT Fundamentals", issuer: "Cisco Academy", date: "2024" },
      { title: "NPTEL Advanced Embedded Systems (Elite Gold)", issuer: "IIT Madras", date: "2023" }
    ],
    timeline: [
      { year: "2025", title: "Firmware Engineer Intern", desc: "Robert Bosch Engineering India" },
      { year: "2024", title: "Tech Fest Organizer", desc: "Headed the robotics circuit challenge workshop" },
      { year: "2022", title: "Joined ECE Core", desc: "Focused on low-power digital designs" }
    ],
    commits: 284,
    streak: 12,
    activeDays: 142
  },
  {
    id: 3,
    name: "Rahul Mehta",
    dept: "CSE",
    year: "3rd Year",
    avatar: "RM",
    avatarBg: "linear-gradient(135deg, #e45c3a 0%, #f7c59f 100%)",
    bio: "Full-stack engineer crafting pixel-perfect, highly responsive interactive web applications.",
    endorsements: 110,
    skills: [
      { name: "Web Dev", level: 96 },
      { name: "React", level: 94 },
      { name: "Node.js", level: 88 },
      { name: "MongoDB", level: 85 }
    ],
    topTags: ["Web Dev", "React", "Node.js"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    projects: [
      {
        title: "DevConnect Social",
        desc: "Developer-focused community workspace with live markdown editors, collaborative voice rooms, and user portfolio sharing.",
        tech: ["React", "Node.js", "Socket.io", "MongoDB"],
        github: "https://github.com",
        live: "https://example.com"
      },
      {
        title: "TaskFlow Kanban",
        desc: "Drag-and-drop task management tool supporting offline-first sync, rich nesting lists, and customizable team swimlanes.",
        tech: ["React", "Redux Toolkit", "Tailwind CSS", "IndexedDB"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ],
    certifications: [
      { title: "MongoDB Associate Developer", issuer: "MongoDB University", date: "2024" },
      { title: "Meta Front-End Developer Professional", issuer: "Meta / Coursera", date: "2023" }
    ],
    timeline: [
      { year: "2025", title: "Frontend Engineering Intern", desc: "Razorpay Development Team" },
      { year: "2024", title: "Open Source Contributor", desc: "Merged multiple styling fixes into standard Tailwind CSS package" },
      { year: "2023", title: "Web Dev Lead", desc: "College Developer Club" }
    ],
    commits: 512,
    streak: 35,
    activeDays: 240
  },
  {
    id: 4,
    name: "Divya Nair",
    dept: "Design",
    year: "2nd Year",
    avatar: "DN",
    avatarBg: "linear-gradient(135deg, #ff6b35 0%, #f7c59f 100%)",
    bio: "Visual storyteller obsessed with creating intuitive, accessible, and delightful digital product interfaces.",
    endorsements: 87,
    skills: [
      { name: "Design", level: 95 },
      { name: "UI/UX", level: 98 },
      { name: "Figma", level: 96 },
      { name: "Adobe XD", level: 85 }
    ],
    topTags: ["Design", "UI/UX", "Figma"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    projects: [
      {
        title: "AeroTravel mobile UX",
        desc: "Complete overhaul of the flight booking dashboard for simplified micro-copy decisions, leading to a 30% speedup in booking time.",
        tech: ["Figma", "User Research", "Wireframing"],
        github: "https://figma.com",
        live: "https://example.com"
      },
      {
        title: "FinGlow Gamified App",
        desc: "High-fidelity mockups and interactive design system for a teen budgeting app featuring dark themes, neon highlights, and custom widgets.",
        tech: ["Figma", "Design System", "Adobe Illustrator"],
        github: "https://figma.com",
        live: "https://example.com"
      }
    ],
    certifications: [
      { title: "Google UX Design Professional Certificate", issuer: "Google Career Certificates", date: "2024" },
      { title: "Certified Interaction Design Specialist", issuer: "Interaction Design Foundation", date: "2023" }
    ],
    timeline: [
      { year: "2025", title: "Freelance UI Designer", desc: "Designed websites for 5 global Web3 startups" },
      { year: "2024", title: "UI/UX National Hackathon Gold", desc: "First prize in outstanding accessibility designs" },
      { year: "2024", title: "Entered Design Academy", desc: "Immersed in behavioral design systems" }
    ],
    commits: 110,
    streak: 5,
    activeDays: 68
  },
  {
    id: 5,
    name: "Karthik Rajan",
    dept: "CSE",
    year: "4th Year",
    avatar: "KR",
    avatarBg: "linear-gradient(135deg, #e45c3a 0%, #ff6b35 100%)",
    bio: "DevOps advocate automating infrastructure configurations and multi-cloud scalability solutions.",
    endorsements: 105,
    skills: [
      { name: "Cloud", level: 93 },
      { name: "AWS", level: 90 },
      { name: "Kubernetes", level: 87 },
      { name: "Terraform", level: 85 }
    ],
    topTags: ["Cloud", "AWS", "Kubernetes"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    projects: [
      {
        title: "KubeScale Autoscaler",
        desc: "Automated custom-metric autoscaling configuration on Kubernetes utilizing Prometheus metrics and multi-region routing.",
        tech: ["Kubernetes", "Docker", "AWS EKS", "Prometheus"],
        github: "https://github.com",
        live: "https://example.com"
      },
      {
        title: "TerraVault IaC",
        desc: "Reusable Terraform modules defining secure, audit-compliant three-tier architectures on GCP with automated billing alerts.",
        tech: ["Terraform", "GCP", "GitHub Actions", "Shell Scripting"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ],
    certifications: [
      { title: "AWS Solutions Architect - Associate", issuer: "Amazon Web Services", date: "2024" },
      { title: "Certified Kubernetes Administrator (CKA)", issuer: "The Linux Foundation", date: "2023" }
    ],
    timeline: [
      { year: "2025", title: "Cloud Infrastructure Intern", desc: "Amazon Web Services (AWS) India" },
      { year: "2024", title: "DevOps Lead", desc: "Architected automated deployment for college TechFest dashboard" },
      { year: "2022", title: "Infrastructure Specialization", desc: "Deep dived into Unix systems and distributed setups" }
    ],
    commits: 345,
    streak: 18,
    activeDays: 165
  },
  {
    id: 6,
    name: "Sneha Patel",
    dept: "MBA",
    year: "2nd Year",
    avatar: "SP",
    avatarBg: "linear-gradient(135deg, #ff6b35 0%, #f7c59f 100%)",
    bio: "Bridging the gap between technology capabilities, market strategies, and empathetic leadership.",
    endorsements: 76,
    skills: [
      { name: "Soft Skills", level: 98 },
      { name: "Leadership", level: 95 },
      { name: "Product Management", level: 92 },
      { name: "Strategy", level: 88 }
    ],
    topTags: ["Soft Skills", "Leadership", "Product Management"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    projects: [
      {
        title: "MarketForge Launch",
        desc: "Full GTM validation, competitor sizing, and pricing models for a residential hydrogen fuel cell startup, presenting to angel syndicates.",
        tech: ["Market Research", "Financial Modeling", "Product Positioning"],
        github: "https://github.com",
        live: "https://example.com"
      },
      {
        title: "EduBloom NGO Model",
        desc: "Operational scalability plan and fundraising prospectus mapping rural educational milestones to impact-driven investment criteria.",
        tech: ["Operational Strategy", "Grant Structuring", "Data Analysis"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ],
    certifications: [
      { title: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", date: "2025" },
      { title: "Google Project Management Certificate", issuer: "Google Career Certificates", date: "2024" }
    ],
    timeline: [
      { year: "2025", title: "Product Management Intern", desc: "Flipkart Product Strategy Team" },
      { year: "2024", title: "President of E-Cell", desc: "Mentored 15 student startups and organized college SharkTank events" },
      { year: "2024", title: "Commenced MBA Program", desc: "Focused on technical product management and leadership" }
    ],
    commits: 84,
    streak: 3,
    activeDays: 45
  },
  {
    id: 7,
    name: "Vikram Das",
    dept: "Mech",
    year: "3rd Year",
    avatar: "VD",
    avatarBg: "linear-gradient(135deg, #e45c3a 0%, #ff6b35 100%)",
    bio: "Designing heavy-load autonomous mechanics and aerodynamic structures for industrial aviation.",
    endorsements: 92,
    skills: [
      { name: "CAD", level: 94 },
      { name: "SolidWorks", level: 92 },
      { name: "3D Printing", level: 89 },
      { name: "ANSYS CFD", level: 85 }
    ],
    topTags: ["CAD", "SolidWorks", "3D Printing"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    projects: [
      {
        title: "AeroQuad Drone Chassis",
        desc: "Generative mechanical layout design of a carbon-fiber heavy-lift drone frame, optimization resulting in a 14% drag reduction.",
        tech: ["SolidWorks", "ANSYS Fluent", "Generative Design"],
        github: "https://github.com",
        live: "https://example.com"
      },
      {
        title: "RoboClaw Actuator",
        desc: "A custom 3-axis mechanical end-effector with local micro-controllers executing smart torque sensor algorithms.",
        tech: ["Fusion 360", "Arduino C", "Rapid Prototyping"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ],
    certifications: [
      { title: "Certified SolidWorks Professional (CSWP)", issuer: "Dassault Systèmes", date: "2024" },
      { title: "Autodesk Certified Fusion 360 Expert", issuer: "Autodesk", date: "2023" }
    ],
    timeline: [
      { year: "2025", title: "Mechanical Engineering Intern", desc: "Team Indus Autonomous Lunar Rover Project" },
      { year: "2024", title: "SAE Aero Design Captain", desc: "Led the 12-member team to a top-5 finish in the national airframe flyoff" },
      { year: "2023", title: "Admitted into Propulsion Labs", desc: "Researched high-temperature composite materials" }
    ],
    commits: 195,
    streak: 8,
    activeDays: 98
  },
  {
    id: 8,
    name: "Ananya Iyer",
    dept: "CSE",
    year: "3rd Year",
    avatar: "AI",
    avatarBg: "linear-gradient(135deg, #ff6b35 0%, #e45c3a 100%)",
    bio: "Translating messy, high-dimensional datasets into beautiful, automated intelligence systems.",
    endorsements: 115,
    skills: [
      { name: "Data Science", level: 96 },
      { name: "Python", level: 92 },
      { name: "SQL", level: 90 },
      { name: "R Studio", level: 85 }
    ],
    topTags: ["Data Science", "Python", "SQL"],
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    projects: [
      {
        title: "HealthAnalytics Dashboard",
        desc: "An interactive R Shiny application modeling lifestyle factors against historical cardiac health data with automated regression plotting.",
        tech: ["R Studio", "Shiny Server", "ggplot2", "PostgreSQL"],
        github: "https://github.com",
        live: "https://example.com"
      },
      {
        title: "ChurnRadar Engine",
        desc: "A Python-based predictive engine using random forests to identify high-probability churn accounts from multi-channel user metrics.",
        tech: ["Python", "Pandas", "Scikit-Learn", "FastAPI"],
        github: "https://github.com",
        live: "https://example.com"
      }
    ],
    certifications: [
      { title: "Google Advanced Data Analytics Specialist", issuer: "Google Career Certificates", date: "2024" },
      { title: "IBM Data Science Professional", issuer: "IBM / Coursera", date: "2023" }
    ],
    timeline: [
      { year: "2025", title: "Data Science Intern", desc: "Mu Sigma Analytics Decision Center" },
      { year: "2024", title: "National Kaggle Hackathon Winner", desc: "Top 0.5% ranking out of 3,200 teams on synthetic housing predictions" },
      { year: "2023", title: "Data Operations Lead", desc: "Set up central database cluster for college housing operations" }
    ],
    commits: 398,
    streak: 22,
    activeDays: 182
  }
];

const FILTER_TAGS = ["All", "Web Dev", "AI/ML", "Design", "Cloud", "Mobile", "Data Science", "Soft Skills", "IoT", "CAD"];

export default function App() {
  // --- Theme State & Persistent Effect ---
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // --- SPA VIEW ROUTER STATE ---
  const [currentPage, setCurrentPage] = useState("explore"); // explore | leaderboard | about | login | student-detail
  
  // --- AUTHENTICATION STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // { name, role: 'student'|'judge' }

  // --- Core States ---
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  // Inner student profile tabs
  const [selectedStudentTab, setSelectedStudentTab] = useState("about"); // about | skills | projects | certs | timeline

  // Custom states for judge features
  const [loading, setLoading] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [hoveredChartBar, setHoveredChartBar] = useState(null);
  const [isJoinFormOpen, setIsJoinFormOpen] = useState(false);
  
  // FAQs Toggles for About Page
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Login credentials form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRole, setLoginRole] = useState("judge");

  // Form states for creating profile (Adding custom student)
  const [formData, setFormData] = useState({
    name: "",
    dept: "CSE",
    year: "3rd Year",
    bio: "",
    skills: "Web Dev, React, Python",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    project1Title: "",
    project1Desc: "",
    project1Tech: "",
    project2Title: "",
    project2Desc: "",
    project2Tech: "",
    certificationTitle: "",
    certificationIssuer: "",
    timelineYear: "2025",
    timelineTitle: "",
    timelineDesc: ""
  });

  // Endorsement animation trigger track
  const [endorsedEffectId, setEndorsedEffectId] = useState(null);

  // Stats Counters state with animation trigger
  const [studentsCount, setStudentsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [skillsCount, setSkillsCount] = useState(0);

  // References
  const cursorGlowRef = useRef(null);

  // --- Scroll Detection for Sticky Glass Navbar ---
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Cursor Glow Effect ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- Stats Incrementor Animation on Mount ---
  useEffect(() => {
    let currentStudentsCount = 0;
    let currentProjectsCount = 0;
    let currentSkillsCount = 0;
    
    const interval = setInterval(() => {
      let isDone = true;
      if (currentStudentsCount < 1200) {
        currentStudentsCount += 24;
        setStudentsCount(currentStudentsCount);
        isDone = false;
      } else {
        setStudentsCount(1200);
      }
      if (currentProjectsCount < 340) {
        currentProjectsCount += 10;
        setProjectsCount(currentProjectsCount);
        isDone = false;
      } else {
        setProjectsCount(340);
      }
      if (currentSkillsCount < 85) {
        currentSkillsCount += 3;
        setSkillsCount(currentSkillsCount);
        isDone = false;
      } else {
        setSkillsCount(85);
      }
      if (isDone) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [currentPage]);

  // --- Filter Category Change with Shimmer Skeleton Delay ---
  const handleFilterChange = (tag) => {
    if (tag === activeFilter) return;
    setLoading(true);
    setActiveFilter(tag);
    setTimeout(() => {
      setLoading(false);
    }, 550);
  };

  // --- Endorse Student (Micro Animation + State Persistence) ---
  const handleEndorse = (studentId, e) => {
    if (e) e.stopPropagation();
    
    setEndorsedEffectId(studentId);
    setTimeout(() => setEndorsedEffectId(null), 1000);

    setStudents(prev => 
      prev.map(student => {
        if (student.id === studentId) {
          return { ...student, endorsements: student.endorsements + 1 };
        }
        return student;
      })
    );
  };

  // --- Form Handling ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const skillList = formData.skills.split(',').map(s => s.trim()).filter(Boolean);
    const structuredSkills = skillList.map((s, idx) => ({
      name: s,
      level: 90 - (idx * 5) > 60 ? 90 - (idx * 5) : 70
    }));

    const initials = formData.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || "ST";

    const pList = [];
    if (formData.project1Title) {
      pList.push({
        title: formData.project1Title,
        desc: formData.project1Desc || "Advanced technical project showing skill implementation.",
        tech: formData.project1Tech.split(',').map(t => t.trim()).filter(Boolean),
        github: "https://github.com",
        live: "https://example.com"
      });
    }
    if (formData.project2Title) {
      pList.push({
        title: formData.project2Title,
        desc: formData.project2Desc || "Secondary project solving real-world challenges.",
        tech: formData.project2Tech.split(',').map(t => t.trim()).filter(Boolean),
        github: "https://github.com",
        live: "https://example.com"
      });
    }
    if (pList.length === 0) {
      pList.push({
        title: "InnovateForge Hub",
        desc: "Decentralized skills portfolio manager with localized state syncing and SVG analytics rendering.",
        tech: ["React", "Tailwind CSS", "HTML5"],
        github: "https://github.com",
        live: "https://example.com"
      });
    }

    const newStudent = {
      id: Date.now(),
      name: formData.name,
      dept: formData.dept,
      year: formData.year,
      avatar: initials,
      avatarBg: "linear-gradient(135deg, #ff6b35 0%, #e45c3a 100%)",
      bio: formData.bio || "Enthusiastic developer expanding their boundaries.",
      endorsements: 10,
      skills: structuredSkills,
      topTags: skillList.slice(0, 3),
      githubUrl: formData.githubUrl,
      linkedinUrl: formData.linkedinUrl,
      projects: pList,
      certifications: formData.certificationTitle ? [{
        title: formData.certificationTitle,
        issuer: formData.certificationIssuer || "Professional Academy",
        date: "2025"
      }] : [{ title: "Certified Foundation Expert", issuer: "SkillForge Academy", date: "2025" }],
      timeline: formData.timelineTitle ? [{
        year: formData.timelineYear,
        title: formData.timelineTitle,
        desc: formData.timelineDesc
      }] : [{ year: "2025", title: "Joined SkillForge Platform", desc: "Created student developer showcase profile" }],
      commits: 215,
      streak: 6,
      activeDays: 95
    };

    setStudents(prev => [newStudent, ...prev]);
    setIsJoinFormOpen(false);
    
    // Clear Form
    setFormData({
      name: "",
      dept: "CSE",
      year: "3rd Year",
      bio: "",
      skills: "Web Dev, React, Python",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
      project1Title: "",
      project1Desc: "",
      project1Tech: "",
      project2Title: "",
      project2Desc: "",
      project2Tech: "",
      certificationTitle: "",
      certificationIssuer: "",
      timelineYear: "2025",
      timelineTitle: "",
      timelineDesc: ""
    });

    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };

  // --- Filtering Logic for Grid ---
  const filteredStudents = students.filter(student => {
    const matchesTag = activeFilter === "All" || 
      student.skills.some(skill => skill.name.toLowerCase() === activeFilter.toLowerCase()) ||
      student.topTags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());

    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.skills.some(skill => skill.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTag && matchesSearch;
  });

  // --- Calculate Analytics for SVG Chart (Judge Dashboard) ---
  const deptStats = students.reduce((acc, current) => {
    acc[current.dept] = (acc[current.dept] || 0) + 1;
    return acc;
  }, {});

  const totalEndorsements = students.reduce((acc, curr) => acc + curr.endorsements, 0);
  const avgEndorsements = Math.round(totalEndorsements / students.length);

  const chartData = Object.keys(deptStats).map(key => ({
    name: key,
    count: deptStats[key]
  }));

  const maxChartCount = Math.max(...chartData.map(d => d.count), 1);

  // --- Trigger viewing student Detail Page ---
  const openStudentDetails = (student) => {
    setSelectedStudent(student);
    setSelectedStudentTab("about");
    navigateToPage("student-detail");
  };

  // --- Page navigation helper ---
  const navigateToPage = (pageName) => {
    setLoading(true);
    setCurrentPage(pageName);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  // --- Login authentication handling ---
  const handleLoginSubmit = (e) => {
    if (e) e.preventDefault();
    setIsLoggedIn(true);
    setCurrentUser({
      name: loginRole === "judge" ? "Curation Board Judge" : "Arjun Krishnan",
      role: loginRole
    });
    navigateToPage("explore");
  };

  // --- Logout handling ---
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigateToPage("explore");
  };

  // --- Helper to calculate dynamic points for the SVG Radar chart ---
  // Coordinates are mapped inside a 300x300 canvas (center: 150, 150)
  const getRadarCoordinates = (skills) => {
    const N = skills.length;
    const center = 150;
    const maxRadius = 100;
    
    return skills.map((skill, i) => {
      const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      return { x, y, skillName: skill.name, level: skill.level };
    });
  };

  // ==========================================
  // VIEW RENDERER 1: EXPLORE VIEW (Grid, Hero, Dashboard)
  // ==========================================
  const renderExplorePage = () => {
    return (
      <div className="space-y-4">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">
          {/* Floating 3D Geometric Vector Shapes */}
          <div className="absolute right-0 top-1/6 w-80 h-80 opacity-25 pointer-events-none hidden lg:block animate-float">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#ff6b35] animate-[spin_25s_linear_infinite]">
              <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" stroke="currentColor" strokeWidth="0.75" />
              <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" stroke="#e45c3a" strokeWidth="1" fill="rgba(255,107,53,0.15)" />
            </svg>
          </div>
          
          <div className="absolute left-4 top-1/4 w-60 h-60 opacity-15 pointer-events-none hidden lg:block animate-floatSlow">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#f7c59f]">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
            </svg>
          </div>

          <div className="text-center relative z-10 max-w-4xl mx-auto">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/30 text-xs font-semibold text-[#f7c59f] tracking-wide mb-6 uppercase shadow-[0_0_15px_rgba(255,107,53,0.05)] animate-pulse">
              <Trophy className="w-3.5 h-3.5 text-[#ff6b35]" />
              National Student Showcase Arena 2026
            </div>

            {/* Giant Gradient Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight font-spaceGrotesk mb-6 leading-[1.1] text-white">
              <span className="block mb-2 text-white/90">Forge & Display Your Talents</span>
              <span className="block bg-gradient-to-r from-[#ff6b35] via-[#f7a855] to-[#e45c3a] bg-clip-text text-transparent pb-2 drop-shadow-sm">
                Student Skill Showcase Platform
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#a8a4a0] max-w-2xl mx-auto font-plusJakarta mb-10 leading-relaxed">
              Discover elite technical student builders. Inspect comprehensive verified portfolios, interactive progress levels, and real projects. Get noticed by structural judges & industry captains.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => setIsJoinFormOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] rounded-2xl shadow-[0_8px_32px_rgba(255,107,53,0.35)] hover:brightness-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Showcase Your Skills <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById("explore-grid");
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center px-8 py-4 font-bold border-1.5 border-[#ff6b35] text-[#ff6b35] rounded-2xl bg-transparent hover:bg-[#ff6b35] hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Explore Students
              </button>
            </div>

            {/* Stat Counters Widget */}
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-0 rounded-3xl border border-[#ff6b35]/20 pointer-events-none" />
              
              <div className="text-center border-r border-white/10">
                <div className="text-2xl sm:text-4xl md:text-5xl font-black font-spaceGrotesk text-[#fffffe] mb-1">
                  {studentsCount.toLocaleString()}+
                </div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#a8a4a0] font-plusJakarta">
                  Students Listed
                </div>
              </div>

              <div className="text-center border-r border-white/10">
                <div className="text-2xl sm:text-4xl md:text-5xl font-black font-spaceGrotesk text-[#fffffe] mb-1">
                  {projectsCount}+
                </div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#a8a4a0] font-plusJakarta">
                  Projects Made
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-black font-spaceGrotesk text-[#fffffe] mb-1">
                  {skillsCount}+
                </div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#a8a4a0] font-plusJakarta">
                  Skills Cataloged
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE DYNAMIC DASHBOARD */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="w-full rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 md:p-10 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/5 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-xs font-bold text-[#f7c59f] tracking-wide mb-3 uppercase">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Live Judge Analytics
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-spaceGrotesk text-white">
                  Platform Talents Breakdown
                </h2>
                <p className="text-sm text-[#a8a4a0] font-plusJakarta mt-1">
                  Dynamically generated telemetry based on registered student records. Click any department bar to filter instantly!
                </p>
              </div>
              
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="flex items-center gap-2 px-5 py-3 bg-[#1a1a2e] border border-[#ff6b35]/30 hover:border-[#ff6b35] text-sm font-semibold rounded-xl text-[#f7c59f] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                {dashboardOpen ? "Hide Detailed Visualizations" : "Expand Visualizations & Telemetry"}
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b35]/30 transition-all">
                <div className="text-xs font-semibold text-[#a8a4a0] uppercase tracking-wider font-spaceGrotesk">Average Endorsements</div>
                <div className="text-3xl font-black font-spaceGrotesk text-[#ff6b35] mt-1">{avgEndorsements}</div>
                <div className="text-[10px] text-[#5c5755] mt-1">Per registered talent</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b35]/30 transition-all">
                <div className="text-xs font-semibold text-[#a8a4a0] uppercase tracking-wider font-spaceGrotesk">Top Department</div>
                <div className="text-3xl font-black font-spaceGrotesk text-[#fffffe] mt-1">CSE</div>
                <div className="text-[10px] text-[#5c5755] mt-1">Leading candidate volume</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b35]/30 transition-all">
                <div className="text-xs font-semibold text-[#a8a4a0] uppercase tracking-wider font-spaceGrotesk">Projects Enrolled</div>
                <div className="text-3xl font-black font-spaceGrotesk text-[#f7c59f] mt-1">
                  {students.reduce((acc, curr) => acc + curr.projects.length, 0)}
                </div>
                <div className="text-[10px] text-[#5c5755] mt-1">Verified repository links</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b35]/30 transition-all">
                <div className="text-xs font-semibold text-[#a8a4a0] uppercase tracking-wider font-spaceGrotesk">Global Talent Index</div>
                <div className="text-3xl font-black font-spaceGrotesk text-emerald-400 mt-1">Tier-1</div>
                <div className="text-[10px] text-[#5c5755] mt-1">Validated skills metrics</div>
              </div>
            </div>

            {/* Collapsible Chart Panel */}
            {dashboardOpen && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8 animate-[pageFadeIn_0.4s_ease-out]">
                {/* Left Column: Interactive SVG Chart */}
                <div className="lg:col-span-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-bold uppercase text-[#fffffe]/70 font-spaceGrotesk flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#ff6b35] animate-bounce" />
                      Department Distribution Bar-Telemetry
                    </div>
                    {hoveredChartBar && (
                      <span className="text-xs text-[#ff6b35] font-semibold animate-pulse">
                        Selected: {hoveredChartBar.name} ({hoveredChartBar.count} Students)
                      </span>
                    )}
                  </div>

                  {/* SVG Rendered Interactive Bar Chart */}
                  <div className="w-full h-64 flex items-end justify-between px-2 pt-6 relative border-b border-white/10">
                    {chartData.map((d) => {
                      const heightPercent = (d.count / maxChartCount) * 80;
                      return (
                        <div 
                          key={d.name}
                          className="flex flex-col items-center flex-1 group cursor-pointer"
                          onMouseEnter={() => setHoveredChartBar(d)}
                          onMouseLeave={() => setHoveredChartBar(null)}
                          onClick={() => {
                            setLoading(true);
                            setActiveFilter(d.name === "Mech" ? "CAD" : d.name === "ECE" ? "IoT" : d.name === "Design" ? "Design" : "Web Dev");
                            setTimeout(() => setLoading(false), 550);
                            const el = document.getElementById("explore-grid");
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute mb-2 bg-[#ff6b35] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg translate-y-[-100%] z-10" style={{ bottom: `${heightPercent + 20}%` }}>
                            {d.count} candidates
                          </div>

                          <div 
                            className="w-12 sm:w-16 rounded-t-lg transition-all duration-300 relative overflow-hidden"
                            style={{ 
                              height: `${Math.max(heightPercent, 8)}%`,
                              background: hoveredChartBar?.name === d.name 
                                ? 'linear-gradient(180deg, #ff6b35 0%, #e45c3a 100%)' 
                                : 'linear-gradient(180deg, rgba(255, 107, 53, 0.4) 0%, rgba(228, 92, 58, 0.15) 100%)',
                              border: hoveredChartBar?.name === d.name 
                                ? '1.5px solid #ff6b35' 
                                : '1.5px solid rgba(255, 107, 53, 0.2)'
                            }}
                          >
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          <span className="text-xs font-bold text-[#a8a4a0] mt-3 group-hover:text-white transition-colors duration-200">
                            {d.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#5c5755] mt-4 font-plusJakarta">
                    <Info className="w-3.5 h-3.5" />
                    Hover bars to fetch metadata count. Click to immediately filter and view matching profiles in the grid.
                  </div>
                </div>

                {/* Right Column: Platform Audit Log & Quick Join */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase text-[#fffffe]/70 font-spaceGrotesk mb-4 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b35]" />
                      Audit Logs & Activities
                    </div>
                    <div className="space-y-4 max-h-[220px] overflow-y-auto pr-1">
                      <div className="text-xs border-l-2 border-[#ff6b35] pl-3 py-0.5">
                        <div className="text-[#a8a4a0] font-plusJakarta">System compiled profile listings.</div>
                        <span className="text-[10px] text-[#5c5755]">Just now · Success</span>
                      </div>
                      <div className="text-xs border-l-2 border-emerald-400 pl-3 py-0.5">
                        <div className="text-[#a8a4a0] font-plusJakarta">Arjun Krishnan endorsed with star.</div>
                        <span className="text-[10px] text-[#5c5755]">3 mins ago · Persisted</span>
                      </div>
                      <div className="text-xs border-l-2 border-[#ff6b35] pl-3 py-0.5">
                        <div className="text-[#a8a4a0] font-plusJakarta">Added custom project VisionGuard.</div>
                        <span className="text-[10px] text-[#5c5755]">10 mins ago · Validated</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsJoinFormOpen(true)}
                    className="w-full py-3 bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(255,107,53,0.3)] hover:brightness-110 transition-all duration-200 mt-6 cursor-pointer"
                  >
                    ⚡ Register New Candidate Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* EXPLORE GRID SECTION */}
        <section id="explore-grid" className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-spaceGrotesk text-white tracking-tight">
                Discover Outstanding Creators
              </h2>
              <p className="text-sm md:text-base text-[#a8a4a0] font-plusJakarta mt-2 max-w-xl">
                Use horizontal tags or the input bar to narrow down matching skills. Filtered results load below with premium state shimmers.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder="Search by name, skills or dept..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-[#a8a4a0]/50 text-sm focus:outline-none focus:border-[#ff6b35]/70 focus:ring-1 focus:ring-[#ff6b35]/30 transition-all"
              />
              <Search className="absolute right-4 top-3.5 w-4.5 h-4.5 text-[#a8a4a0]/60" />
            </div>
          </div>

          {/* SKILLS FILTER BAR */}
          <div className="w-full overflow-x-auto pb-4 mb-8 flex items-center gap-3 no-scrollbar scroll-smooth">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#ff6b35] uppercase tracking-wider pr-3 border-r border-white/10 select-none">
              <Filter className="w-3.5 h-3.5" />
              Skills:
            </div>

            {FILTER_TAGS.map((tag) => {
              const isActive = activeFilter.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={tag}
                  onClick={() => handleFilterChange(tag)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] text-white shadow-[0_4px_15px_rgba(255,107,53,0.35)]'
                      : 'border border-[#ff6b35]/20 text-[#f7a855] bg-transparent hover:bg-[#ff6b35]/10 hover:border-[#ff6b35]/50'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* GRID */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton-box h-80 rounded-2xl border border-white/5 p-6 flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/5" />
                    <div className="space-y-2">
                      <div className="w-32 h-4 bg-white/5 rounded" />
                      <div className="w-20 h-3 bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="space-y-3 my-4">
                    <div className="w-full h-4 bg-white/5 rounded" />
                    <div className="w-2/3 h-4 bg-white/5 rounded" />
                  </div>
                  <div className="w-full h-10 bg-white/5 rounded-xl mt-4" />
                </div>
              ))}
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="text-center py-20 bg-white/[0.02] rounded-3xl border border-white/5 font-plusJakarta">
              <Flame className="w-12 h-12 text-[#5c5755] mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-bold font-spaceGrotesk text-white">No Talent Found Matching Query</h3>
              <p className="text-sm text-[#a8a4a0] mt-1 max-w-sm mx-auto">
                Try adjusting your search queries or selecting a wider skill pill search tag filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredStudents.map((student) => {
                const hasJustEndorsed = endorsedEffectId === student.id;

                return (
                  <div
                    key={student.id}
                    onClick={() => openStudentDetails(student)}
                    className="group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between h-[360px] bg-white/[0.03] border border-white/10 hover:border-[#ff6b35]/50 shadow-[0_8px_32px_rgba(255,107,53,0.04)] hover:shadow-[0_16px_48px_rgba(255,107,53,0.15)] transform hover:-translate-y-2 backdrop-blur-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-base font-extrabold text-white shadow-lg relative overflow-hidden"
                            style={{ background: student.avatarBg }}
                          >
                            {student.avatar}
                          </div>

                          <div>
                            <h3 className="text-base font-bold font-spaceGrotesk text-[#fffffe] group-hover:text-[#ff6b35] transition-colors duration-200">
                              {student.name}
                            </h3>
                            <span className="text-xs text-[#a8a4a0] font-plusJakarta">
                              {student.year} · {student.dept}
                            </span>
                          </div>
                        </div>

                        {/* Endorse */}
                        <button
                          onClick={(e) => handleEndorse(student.id, e)}
                          className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-[#ff6b35]/20 border border-white/5 hover:border-[#ff6b35]/30 transition-all group/star text-xs text-[#fffffe] cursor-pointer"
                        >
                          {hasJustEndorsed && (
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-black text-[#ff6b35] animate-bounce">
                              +1
                            </span>
                          )}
                          <Star className={`w-3.5 h-3.5 text-[#ff6b35] transition-transform duration-300 ${hasJustEndorsed ? 'scale-150 fill-[#ff6b35]' : 'group-hover/star:rotate-[72deg]'}`} />
                          <span className="font-bold text-xs text-[#fffffe]">{student.endorsements}</span>
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm text-[#a8a4a0] line-clamp-3 leading-relaxed mb-4 font-plusJakarta h-15">
                        {student.bio}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {student.topTags.map((tag) => (
                          <span 
                            key={tag}
                            className="bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#f7a855] rounded-full px-3 py-1 text-[11px] font-semibold transition-colors group-hover:border-[#ff6b35]/40 font-plusJakarta"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                          <a 
                            href={student.githubUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-[#5c5755] hover:text-[#ff6b35] transition-colors p-1.5 rounded-lg hover:bg-white/[0.02]"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a 
                            href={student.linkedinUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-[#5c5755] hover:text-[#ff6b35] transition-colors p-1.5 rounded-lg hover:bg-white/[0.02]"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff6b35] group-hover:translate-x-1.5 transition-transform duration-300 font-spaceGrotesk">
                          Inspect Portfolio <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    );
  };

  // ==========================================
  // VIEW RENDERER 2: LEADERBOARD PAGE
  // ==========================================
  const renderLeaderboardPage = () => {
    const rankedStudents = [...students].sort((a, b) => b.endorsements - a.endorsements);
    const firstPlace = rankedStudents[0];
    const secondPlace = rankedStudents[1];
    const thirdPlace = rankedStudents[2];

    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-xs font-bold text-[#f7c59f] tracking-wide uppercase">
            <Trophy className="w-3.5 h-3.5 text-[#ff6b35]" />
            National Merit Curation
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-spaceGrotesk text-white">
            Esports Candidate Leaderboard
          </h1>
          <p className="text-sm md:text-base text-[#a8a4a0] font-plusJakarta">
            Live rankings based strictly on verified peer stamp endorsements, project count complexity, and validated credentials.
          </p>
        </div>

        {/* PODIUM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-4xl mx-auto pt-10 px-4">
          {secondPlace && (
            <div 
              onClick={() => openStudentDetails(secondPlace)}
              className="flex flex-col items-center group cursor-pointer order-2 md:order-1"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold text-white border-2 border-slate-300 bg-slate-400/20 group-hover:scale-105 transition-transform duration-300">
                  {secondPlace.avatar}
                </div>
                <span className="absolute -bottom-2 -right-2 bg-slate-300 text-slate-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border border-slate-900">
                  2
                </span>
              </div>
              <h3 className="text-sm font-bold font-spaceGrotesk text-white text-center">{secondPlace.name}</h3>
              <p className="text-[11px] text-[#a8a4a0] font-plusJakarta">{secondPlace.dept} · {secondPlace.year}</p>
              
              <div className="w-full h-32 mt-4 rounded-t-2xl bg-gradient-to-t from-slate-500/10 to-slate-400/25 border-x border-t border-slate-400/20 shadow-[0_-5px_15px_rgba(203,213,225,0.04)] flex flex-col justify-center items-center p-4">
                <span className="text-xs font-semibold text-slate-300 font-spaceGrotesk uppercase">Silver Tier</span>
                <span className="text-base font-black text-white mt-1 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#f7c59f] text-[#ff6b35]" />
                  {secondPlace.endorsements}
                </span>
              </div>
            </div>
          )}

          {firstPlace && (
            <div 
              onClick={() => openStudentDetails(firstPlace)}
              className="flex flex-col items-center group cursor-pointer order-1 md:order-2 z-10 -translate-y-4 md:translate-y-0"
            >
              <div className="relative mb-4 flex flex-col items-center">
                <div className="absolute -top-6 text-[#ff6b35] animate-bounce">
                  👑
                </div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold text-white border-2 border-amber-400 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-105 transition-transform duration-300">
                  {firstPlace.avatar}
                </div>
                <span className="absolute -bottom-2 -right-2 bg-amber-400 text-slate-900 text-sm font-black rounded-full w-7 h-7 flex items-center justify-center border border-slate-900">
                  1
                </span>
              </div>
              <h3 className="text-base font-bold font-spaceGrotesk text-white text-center">{firstPlace.name}</h3>
              <p className="text-xs text-[#a8a4a0] font-plusJakarta">{firstPlace.dept} · {firstPlace.year}</p>
              
              <div className="w-full h-44 mt-4 rounded-t-2xl bg-gradient-to-t from-[#ff6b35]/15 to-[#ff6b35]/35 border-x border-t border-[#ff6b35]/35 shadow-[0_-8px_25px_rgba(255,107,53,0.12)] flex flex-col justify-center items-center p-4 relative">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#f7c59f] to-transparent" />
                <span className="text-xs font-semibold text-[#f7c59f] font-spaceGrotesk uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#ff6b35]" /> Elite Champion
                </span>
                <span className="text-lg font-black text-white mt-1.5 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 animate-spin-slow" />
                  {firstPlace.endorsements}
                </span>
              </div>
            </div>
          )}

          {thirdPlace && (
            <div 
              onClick={() => openStudentDetails(thirdPlace)}
              className="flex flex-col items-center group cursor-pointer order-3"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold text-white border-2 border-amber-700 bg-amber-800/20 group-hover:scale-105 transition-transform duration-300">
                  {thirdPlace.avatar}
                </div>
                <span className="absolute -bottom-2 -right-2 bg-amber-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border border-slate-900">
                  3
                </span>
              </div>
              <h3 className="text-sm font-bold font-spaceGrotesk text-white text-center">{thirdPlace.name}</h3>
              <p className="text-[11px] text-[#a8a4a0] font-plusJakarta">{thirdPlace.dept} · {thirdPlace.year}</p>
              
              <div className="w-full h-24 mt-4 rounded-t-2xl bg-gradient-to-t from-amber-900/10 to-amber-700/25 border-x border-t border-amber-700/20 shadow-[0_-5px_15px_rgba(180,83,9,0.03)] flex flex-col justify-center items-center p-4">
                <span className="text-xs font-semibold text-amber-500 font-spaceGrotesk uppercase">Bronze Tier</span>
                <span className="text-base font-black text-white mt-1 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                  {thirdPlace.endorsements}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Rankings table */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl relative">
          <div className="p-5 border-b border-white/5 bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-base font-bold font-spaceGrotesk text-white flex items-center gap-2">
              <ListTodo className="w-4 h-4 text-[#ff6b35]" /> Candidates Rankings Board
            </h3>
            
            <div className="relative w-full sm:w-60">
              <input 
                type="text" 
                placeholder="Filter rankings by name/dept..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#a8a4a0]/50 text-xs focus:outline-none focus:border-[#ff6b35]/70"
              />
              <Search className="absolute right-3.5 top-2.5 w-3.5 h-3.5 text-[#a8a4a0]/60" />
            </div>
          </div>

          <div className="overflow-x-auto font-plusJakarta">
            <table className="w-full border-collapse text-left text-xs sm:text-sm text-[#a8a4a0]">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.01] text-[#fffffe]/70 font-spaceGrotesk font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Rank</th>
                  <th className="py-4 px-6">Candidate</th>
                  <th className="py-4 px-6">Department</th>
                  <th className="py-4 px-6">Verified Projects</th>
                  <th className="py-4 px-6">Endorsements</th>
                  <th className="py-4 px-6 text-right">View Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rankedStudents
                  .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.dept.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((student, index) => {
                    const rankNum = index + 1;
                    return (
                      <tr 
                        key={student.id} 
                        onClick={() => openStudentDetails(student)}
                        className="hover:bg-white/[0.02] transition-colors cursor-pointer group"
                      >
                        <td className="py-4 px-6 font-bold text-white">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-lg ${
                            rankNum === 1 ? 'bg-amber-400/25 text-amber-400 border border-amber-400/30' :
                            rankNum === 2 ? 'bg-slate-300/25 text-slate-300 border border-slate-300/30' :
                            rankNum === 3 ? 'bg-amber-700/25 text-amber-500 border border-amber-700/30' :
                            'bg-white/5 text-[#a8a4a0] border border-white/5'
                          }`}>
                            {rankNum}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white shrink-0"
                              style={{ background: student.avatarBg }}
                            >
                              {student.avatar}
                            </div>
                            <span className="font-bold text-white group-hover:text-[#ff6b35] transition-colors">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-white/80">
                          {student.year} · {student.dept}
                        </td>
                        <td className="py-4 px-6">
                          <span className="px-2 py-1 rounded bg-[#ff6b35]/5 border border-[#ff6b35]/15 text-[#f7a855] text-xs font-bold font-spaceGrotesk">
                            {student.projects.length} Verified Repos
                          </span>
                        </td>
                        <td className="py-4 px-6 font-bold text-white flex items-center gap-1.5 pt-5">
                          <Star className="w-3.5 h-3.5 fill-[#ff6b35] text-[#ff6b35]" />
                          {student.endorsements}
                        </td>
                        <td className="py-4 px-6 text-right font-spaceGrotesk">
                          <span className="text-xs font-bold text-[#ff6b35] group-hover:translate-x-1.5 inline-flex items-center gap-1 transition-transform">
                            Inspect <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // ==========================================
  // VIEW RENDERER 3: ABOUT PAGE
  // ==========================================
  const renderAboutPage = () => {
    const faqs = [
      {
        q: "How are candidate profiles verified on SkillForge?",
        a: "SkillForge aggregates real-time credentials by binding student academic records directly to active GitHub repositories and institutional certification databases (AWS, Cisco, Google UX, NPTEL etc.). This locks in absolute authenticity, preventing fabrication of resumes."
      },
      {
        q: "What are endorsements and who can cast them?",
        a: "Endorsements represent verified technical peer reviews or expert judge approvals. Every endorsement increases the talent score of a student on our dynamic leaderboards. You can endorse students by clicking the 'Star' badge directly on their cards."
      },
      {
        q: "How does the Department Telemetry chart update?",
        a: "Our Interactive Department Telemetry chart renders real-time candidate distribution. Any new student profile registered via the form instantly changes the platform database and recalculates metrics in under 10ms."
      },
      {
        q: "Can students edit their profiles once registered?",
        a: "For demonstration purity, newly registered candidate profiles are held dynamically in React memory state. This provides rapid updates and sandbox exploration without server write delays."
      }
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b35]/15 border border-[#ff6b35]/30 text-xs font-bold text-[#f7c59f] tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5 text-[#ff6b35]" />
              The SkillForge Mission
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-spaceGrotesk text-white leading-tight">
              Bridging Outstanding Collegiate Talent with Curation Boards
            </h1>
            <p className="text-sm sm:text-base text-[#a8a4a0] font-plusJakarta leading-relaxed">
              SkillForge was constructed to solve the critical visibility gaps in student capability vetting. Standard resumes fail to capture technical scaling capabilities, algorithmic depth, and actual repository layout structure. 
            </p>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#ff6b35]/20 rounded-2xl blur-xl group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-[#ff6b35]/30 bg-[#1a1a2e] shadow-2xl">
              <img 
                src="/hero_illustration.png" 
                alt="SkillForge Modern 3D Premium Curation Graphic" 
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* FEATURE PILLARS GRID */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-spaceGrotesk text-white text-center">
            Platform Core Technical Pillars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-plusJakarta">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b35]/30 transition-all space-y-3">
              <div className="p-3 bg-[#ff6b35]/15 border border-[#ff6b35]/30 rounded-xl w-fit text-[#ff6b35]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-spaceGrotesk text-white">100% Client-Side Routing</h3>
              <p className="text-xs sm:text-sm text-[#a8a4a0] leading-relaxed">
                Utilizes high-performance React component routing states, rendering complex rank tables, details modals and analytics in under 15ms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b35]/30 transition-all space-y-3">
              <div className="p-3 bg-[#ff6b35]/15 border border-[#ff6b35]/30 rounded-xl w-fit text-[#ff6b35]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-spaceGrotesk text-white">Sunrise Gold Styling</h3>
              <p className="text-xs sm:text-sm text-[#a8a4a0] leading-relaxed">
                Built strictly with Tailwind CSS v3 theme extension, integrating amber/orange gradients, custom linear borders, and backdrop-filter glassmorphisms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b35]/30 transition-all space-y-3">
              <div className="p-3 bg-[#ff6b35]/15 border border-[#ff6b35]/30 rounded-xl w-fit text-[#ff6b35]">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-spaceGrotesk text-white">Live Memory State Curation</h3>
              <p className="text-xs sm:text-sm text-[#a8a4a0] leading-relaxed">
                Platform memory persistence binds endorsement tallies, filter queries, and newly added student registration entries seamlessly across tabs.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black font-spaceGrotesk text-white text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-3 pt-4 font-plusJakarta">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-white/5 bg-white/[0.01] hover:border-[#ff6b35]/25 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-white font-spaceGrotesk hover:text-[#ff6b35] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#ff6b35]" /> : <ChevronDown className="w-4 h-4 text-[#ff6b35]" />}
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[200px] border-t border-white/5 p-5 bg-white/[0.01]' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <p className="text-xs sm:text-sm text-[#a8a4a0] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // ==========================================
  // VIEW RENDERER 4: DEDICATED STUDENT DETAIL PAGE
  // ==========================================
  const renderStudentDetailPage = () => {
    if (!selectedStudent) return null;

    // Calculate Radar values geometrically
    const radarData = getRadarCoordinates(selectedStudent.skills);
    const N = radarData.length;
    const center = 150;
    const maxRadius = 100;
    
    // Generate grid lines polygons at 25%, 50%, 75%, 100%
    const gridLevels = [0.25, 0.5, 0.75, 1.0];
    const gridPolygons = gridLevels.map(level => {
      return radarData.map((_, i) => {
        const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
        const radius = level * maxRadius;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');
    });

    // Create the student filled skill polygon coordinates
    const skillPolygonPoints = radarData.map(d => `${d.x},${d.y}`).join(' ');

    // Generate mock commit history cells (53 columns * 7 days = 371 cells)
    const commitCells = [];
    const seed = selectedStudent.id * 17; // student unique seed
    for (let i = 0; i < 371; i++) {
      // Mock daily commits: 0 (lightest/empty), 1, 2, 3 (deep gold/vibrant)
      const val = (Math.sin(i * 0.1) + Math.cos(i * 0.05 + seed) + 1.2) * 1.5;
      const commits = val < 0 ? 0 : Math.floor(val);
      commitCells.push({ dayIndex: i, commits });
    }

    const hasJustEndorsed = endorsedEffectId === selectedStudent.id;

    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 space-y-10 animate-[pageFadeIn_0.4s_ease-out]">
        
        {/* Navigation row */}
        <button 
          onClick={() => navigateToPage("explore")}
          className="flex items-center gap-1.5 text-sm font-bold text-[#ff6b35] hover:text-[#e45c3a] transition-all cursor-pointer font-spaceGrotesk group w-fit"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" /> 
          Back to Creators Explore Grid
        </button>

        {/* Profile Main Header Block */}
        <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff6b35] via-[#f7c59f] to-[#e45c3a]" />
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Massive Avatar initials bubble */}
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center text-2xl sm:text-4xl font-extrabold text-white shadow-2xl shrink-0"
              style={{ background: selectedStudent.avatarBg }}
            >
              {selectedStudent.avatar}
            </div>

            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-spaceGrotesk text-white">
                  {selectedStudent.name}
                </h1>
                <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 bg-[#ff6b35]/15 border border-[#ff6b35]/35 text-[#f7c59f] rounded-full font-plusJakarta">
                  {selectedStudent.year} · {selectedStudent.dept}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#a8a4a0] font-plusJakarta max-w-xl">
                {selectedStudent.bio}
              </p>
            </div>
          </div>

          {/* Large Action Controls (Endorse + Socials) */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full md:w-auto gap-4 pt-4 md:pt-0 border-t border-white/5 md:border-transparent">
            <button
              onClick={() => handleEndorse(selectedStudent.id)}
              className="relative flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] text-white font-bold text-sm shadow-[0_4px_24px_rgba(255,107,53,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer font-spaceGrotesk"
            >
              {hasJustEndorsed && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-black text-[#ff6b35] animate-bounce">
                  +1 Endorsement!
                </span>
              )}
              <Star className={`w-4 h-4 fill-white text-white ${hasJustEndorsed ? 'animate-ping' : ''}`} />
              <span>Endorse Candidate ({selectedStudent.endorsements})</span>
            </button>

            <div className="flex items-center gap-3">
              <a href={selectedStudent.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff6b35] text-[#a8a4a0] hover:text-white transition-all"><Github className="w-5 h-5" /></a>
              <a href={selectedStudent.linkedinUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff6b35] text-[#a8a4a0] hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Dashboard Panels Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: NAVIGATION TABS & CONTACT BADGES (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="text-[10px] font-bold text-[#ff6b35] uppercase tracking-widest pl-2 mb-3 font-spaceGrotesk">Portfolio Matrix</div>
              
              {[
                { id: "about", label: "Overview & Bio", icon: User },
                { id: "skills", label: "Dynamic Radar Web", icon: LineChart },
                { id: "projects", label: "Verified Projects", icon: BookOpen },
                { id: "certs", label: "Certifications", icon: Award },
                { id: "timeline", label: "Academic Timeline", icon: CalendarDays }
              ].map(t => {
                const IconComp = t.icon;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedStudentTab(t.id)}
                    className={`w-full p-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-3 cursor-pointer text-left ${
                      selectedStudentTab === t.id
                        ? 'bg-[#ff6b35]/15 border border-[#ff6b35]/40 text-[#f7c59f]'
                        : 'text-[#a8a4a0] hover:text-white border border-transparent'
                    }`}
                  >
                    <IconComp className="w-4 h-4 shrink-0 text-[#ff6b35]" />
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Contact & Verification Stats */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h3 className="text-sm font-bold font-spaceGrotesk text-white">Vetted Metrics</h3>
              
              <div className="space-y-3 font-plusJakarta text-xs text-[#a8a4a0]">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#ff6b35]" /> Verified Email</span>
                  <span className="text-white text-[11px]">student@{selectedStudent.dept.toLowerCase()}.edu</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5"><LineChart className="w-3.5 h-3.5 text-[#ff6b35]" /> Commit Frequency</span>
                  <span className="text-white font-bold">{selectedStudent.commits || 210} commits</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#ff6b35]" /> Rank Index</span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-black">Top Talent</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: RICH PORTFOLIO DASHBOARD CONTENT (Col Span 8) */}
          <div className="lg:col-span-8 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 min-h-[480px] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6b35]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* TAB ABOUT VIEW */}
              {selectedStudentTab === "about" && (
                <div className="space-y-8 animate-[pageFadeIn_0.35s_ease-out]">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold font-spaceGrotesk text-white mb-3">Overview & Curation Summary</h2>
                    <p className="text-sm text-[#a8a4a0] font-plusJakarta leading-relaxed">
                      {selectedStudent.name} is classified inside the **{selectedStudent.dept}** matrix ({selectedStudent.year}). Candidate exhibits high dedication in programmatic structures, boasting verified endorsements and credentials audited by peer evaluation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-center">
                      <div className="text-2xl font-black font-spaceGrotesk text-[#ff6b35]">{selectedStudent.endorsements}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#a8a4a0] font-plusJakarta mt-1">Endorsements</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-center">
                      <div className="text-2xl font-black font-spaceGrotesk text-white">{selectedStudent.projects.length}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#a8a4a0] font-plusJakarta mt-1">Verified Repos</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-center">
                      <div className="text-2xl font-black font-spaceGrotesk text-[#f7c59f]">{selectedStudent.streak || 14}d</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#a8a4a0] font-plusJakarta mt-1">Coding Streak</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB SKILLS DYNAMIC RADAR WEB VIEW (MAPPED GEOMETRICALLY) */}
              {selectedStudentTab === "skills" && (
                <div className="space-y-8 animate-[pageFadeIn_0.35s_ease-out]">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold font-spaceGrotesk text-white mb-2">Dynamic Radar Web</h2>
                    <p className="text-xs sm:text-sm text-[#a8a4a0] font-plusJakarta max-w-xl">
                      A visual, mathematically mapped Radar Chart rendering candidate skill strength on concentric grids.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
                    {/* Radar SVG Chart (Col Span 6) */}
                    <div className="md:col-span-6 flex justify-center">
                      <svg width="280" height="280" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px]">
                        {/* Concentric Circle/Polygon Backgrounds */}
                        {gridPolygons.map((pts, i) => (
                          <polygon 
                            key={i} 
                            points={pts} 
                            fill="none" 
                            stroke="rgba(255, 107, 53, 0.1)" 
                            strokeWidth="1"
                            strokeDasharray="2 2"
                          />
                        ))}

                        {/* concentric boundaries (outer rim) */}
                        <polygon 
                          points={gridPolygons[gridPolygons.length - 1]} 
                          fill="none" 
                          stroke="rgba(255, 107, 53, 0.25)" 
                          strokeWidth="1.5"
                        />

                        {/* Centered radiating axes lines */}
                        {radarData.map((d, i) => {
                          const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
                          const borderX = center + maxRadius * Math.cos(angle);
                          const borderY = center + maxRadius * Math.sin(angle);
                          return (
                            <line 
                              key={i} 
                              x1={center} 
                              y1={center} 
                              x2={borderX} 
                              y2={borderY} 
                              stroke="rgba(255, 107, 53, 0.15)" 
                              strokeWidth="1"
                            />
                          );
                        })}

                        {/* Dynamic Skill area Polygon */}
                        <polygon 
                          points={skillPolygonPoints} 
                          fill="rgba(255, 107, 53, 0.15)" 
                          stroke="url(#radarGradient)" 
                          strokeWidth="2.5"
                          className="drop-shadow-[0_0_10px_rgba(255,107,53,0.3)] animate-pulse"
                        />

                        {/* Linear color Gradient Definition */}
                        <defs>
                          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b35" />
                            <stop offset="100%" stopColor="#e45c3a" />
                          </linearGradient>
                        </defs>

                        {/* Vertex Dots */}
                        {radarData.map((d, i) => (
                          <g key={i}>
                            <circle 
                              cx={d.x} 
                              cy={d.y} 
                              r="4.5" 
                              fill="#ff6b35" 
                              stroke="#fffffe" 
                              strokeWidth="1.5"
                              className="cursor-pointer hover:r-6 hover:fill-white transition-all"
                            />
                          </g>
                        ))}

                        {/* Text labels positioned dynamically at the outer boundary */}
                        {radarData.map((d, i) => {
                          const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
                          const textOffset = 122; // pull label outside the max 100 limit
                          const textX = center + textOffset * Math.cos(angle);
                          const textY = center + textOffset * Math.sin(angle) + 4; // slight vertical adjustment
                          
                          // Adjust alignment based on angle position
                          let textAnchor = "middle";
                          if (Math.cos(angle) > 0.1) textAnchor = "start";
                          else if (Math.cos(angle) < -0.1) textAnchor = "end";

                          return (
                            <text
                              key={i}
                              x={textX}
                              y={textY}
                              fill="#fffffe"
                              fontSize="9.5"
                              fontWeight="bold"
                              fontFamily="Space Grotesk"
                              textAnchor={textAnchor}
                            >
                              {d.skillName} ({d.level}%)
                            </text>
                          );
                        })}
                      </svg>
                    </div>

                    {/* Skill progress descriptions (Col Span 6) */}
                    <div className="md:col-span-6 space-y-4 font-plusJakarta text-xs text-[#a8a4a0]">
                      <h4 className="text-white font-spaceGrotesk text-xs uppercase tracking-wider font-bold">Skills breakdown</h4>
                      
                      {selectedStudent.skills.map(s => (
                        <div key={s.name} className="space-y-1">
                          <div className="flex justify-between items-center font-bold text-white text-[11px]">
                            <span>{s.name}</span>
                            <span className="text-[#ff6b35]">{s.level}% Score</span>
                          </div>
                          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#ff6b35] to-[#f7c59f] rounded-full animate-fill" 
                              style={{ '--progress-width': `${s.level}%`, width: `${s.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB PROJECTS VIEW */}
              {selectedStudentTab === "projects" && (
                <div className="space-y-6 animate-[pageFadeIn_0.35s_ease-out]">
                  <h2 className="text-xl md:text-2xl font-bold font-spaceGrotesk text-white mb-2">Verified Repositories</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedStudent.projects.map((proj) => (
                      <div 
                        key={proj.title} 
                        className="p-5 rounded-2xl bg-[#1a1a2e] border border-[#ff6b35]/15 hover:border-[#ff6b35]/30 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-base font-bold text-white font-spaceGrotesk">{proj.title}</h4>
                            <BookOpen className="w-4 h-4 text-[#ff6b35]" />
                          </div>
                          <p className="text-xs text-[#a8a4a0] font-plusJakarta leading-relaxed mb-4">
                            {proj.desc}
                          </p>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-4 font-plusJakarta">
                            {proj.tech.map(t => (
                              <span key={t} className="bg-white/5 text-[#f7a855] text-[10px] px-2 py-0.5 rounded-full border border-white/5">
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-3 pt-3 border-t border-white/5 text-xs font-bold text-[#ff6b35] font-spaceGrotesk">
                            <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:brightness-125">
                              <Github className="w-3.5 h-3.5" /> Repository
                            </a>
                            <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:brightness-125">
                              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB CERTIFICATIONS VIEW */}
              {selectedStudentTab === "certs" && (
                <div className="space-y-6 animate-[pageFadeIn_0.35s_ease-out]">
                  <h2 className="text-xl md:text-2xl font-bold font-spaceGrotesk text-white mb-2">Audited Certifications</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedStudent.certifications.map((cert) => (
                      <div 
                        key={cert.title} 
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3.5"
                      >
                        <div className="p-2.5 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff6b35]">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white font-spaceGrotesk">{cert.title}</h4>
                          <div className="text-[11px] text-[#a8a4a0] mt-0.5 font-plusJakarta">
                            {cert.issuer} · <span className="text-[#5c5755]">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB TIMELINE VIEW */}
              {selectedStudentTab === "timeline" && (
                <div className="space-y-6 animate-[pageFadeIn_0.35s_ease-out]">
                  <h2 className="text-xl md:text-2xl font-bold font-spaceGrotesk text-white mb-2">Academic Roadmap</h2>
                  
                  <div className="relative border-l border-white/10 pl-6 space-y-6 max-w-xl py-2 font-plusJakarta">
                    {selectedStudent.timeline.map((item) => (
                      <div key={item.title} className="relative">
                        <span className="absolute -left-[30px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6b35] border border-[#0f0e17] ring-4 ring-[#ff6b35]/20" />
                        
                        <div className="space-y-1">
                          <div className="text-[10px] font-black text-[#ff6b35] uppercase tracking-wider">{item.year}</div>
                          <h4 className="text-sm font-bold text-white font-spaceGrotesk">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-[#a8a4a0]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* MOCK GITHUB CONTRIBUTION CALENDAR GRID (Visual Graph for Judge) */}
            <div className="mt-12 pt-6 border-t border-white/5 space-y-4 animate-[pageFadeIn_0.5s_ease-out]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="text-xs font-bold text-[#fffffe]/80 uppercase tracking-widest font-spaceGrotesk flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-[#ff6b35]" />
                  Verified Code Activity Heatmap
                </div>
                <div className="text-[10px] text-[#a8a4a0] font-plusJakarta">
                  Total Contributions: <b>{selectedStudent.commits || 215}</b> · Current Streak: <b>{selectedStudent.streak || 8} Days</b>
                </div>
              </div>

              {/* Heatmap calendar display grid */}
              <div className="w-full overflow-x-auto pb-1 no-scrollbar">
                <div className="flex gap-1 min-w-[500px]">
                  {/* Render 53 columns representing weeks */}
                  {Array.from({ length: 53 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {/* Render 7 cells representing days of the week */}
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const cellIndex = weekIndex * 7 + dayIndex;
                        const cell = commitCells[cellIndex] || { commits: 0 };
                        
                        // Select square opacity color based on mock commits count
                        let bgClass = "bg-[#16162a]"; // Zero commits
                        if (cell.commits === 1) bgClass = "bg-[#ff6b35]/15 border border-[#ff6b35]/10";
                        else if (cell.commits === 2) bgClass = "bg-[#ff6b35]/40 border border-[#ff6b35]/20";
                        else if (cell.commits === 3) bgClass = "bg-[#ff6b35]/70";
                        else if (cell.commits >= 4) bgClass = "bg-gradient-to-br from-[#ff6b35] to-[#f7c59f] shadow-[0_0_8px_rgba(255,107,53,0.3)]";

                        return (
                          <div 
                            key={dayIndex} 
                            className={`w-2 h-2 rounded-[1.5px] transition-all hover:scale-125 duration-100 ${bgClass}`}
                            title={`Activity metric: level ${cell.commits}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[9px] text-[#5c5755] font-plusJakarta">
                <span>12 months ago</span>
                <div className="flex items-center gap-1.5 select-none">
                  <span>Less</span>
                  <div className="w-2 h-2 rounded-[1.5px] bg-[#16162a]" />
                  <div className="w-2 h-2 rounded-[1.5px] bg-[#ff6b35]/15" />
                  <div className="w-2 h-2 rounded-[1.5px] bg-[#ff6b35]/40" />
                  <div className="w-2 h-2 rounded-[1.5px] bg-[#ff6b35]/70" />
                  <div className="w-2 h-2 rounded-[1.5px] bg-[#ff6b35]" />
                  <span>More</span>
                </div>
                <span>Today</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  };

  // ==========================================
  // VIEW RENDERER 5: LOGIN PAGE
  // ==========================================
  const renderLoginPage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-36 pb-24 flex items-center justify-center min-h-[75vh] animate-[pageFadeIn_0.4s_ease-out]">
        
        {/* Glow decorative rings behind card */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#ff6b35]/10 blur-[90px] -z-10 animate-pulse pointer-events-none" />

        <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#16162a] border border-[#ff6b35]/25 backdrop-blur-2xl shadow-3xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff6b35] via-[#f7c59f] to-[#e45c3a]" />
          
          <div className="space-y-6">
            {/* Login Header */}
            <div className="text-center space-y-2">
              <div className="p-3 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-2xl w-fit mx-auto text-[#ff6b35]">
                <Unlock className="w-6 h-6 animate-pulse" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black font-spaceGrotesk text-white">
                Enter Curation Arena
              </h1>
              <p className="text-xs sm:text-sm text-[#a8a4a0] font-plusJakarta">
                Sign in to customize student matrix listings, endorse tags, and review talent.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs font-plusJakarta">
              <div className="space-y-1">
                <label className="text-white/80 font-bold uppercase tracking-wider text-[10px]">Security Credentials ID</label>
                <input 
                  type="email" 
                  placeholder="Enter email e.g. judge@skillforge.org"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff6b35]/70 focus:ring-1 focus:ring-[#ff6b35]/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-white/80 font-bold uppercase tracking-wider text-[10px]">Secure Keycode Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff6b35]/70 focus:ring-1 focus:ring-[#ff6b35]/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-white/80 font-bold uppercase tracking-wider text-[10px]">Access Clearance Level</label>
                <select
                  value={loginRole}
                  onChange={(e) => setLoginRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff6b35]/70"
                >
                  <option value="judge" className="bg-[#1a1a2e]">Principal Curation Judge</option>
                  <option value="student" className="bg-[#1a1a2e]">Student Developer / Builder</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(255,107,53,0.3)] hover:brightness-110 active:scale-98 transition-all cursor-pointer font-spaceGrotesk"
              >
                Sign In Clearance
              </button>
            </form>
          </div>

          {/* JUDGE BYPASS SHORTCUTS (Quick Logins) */}
          <div className="mt-8 pt-5 border-t border-white/5 space-y-2.5">
            <div className="text-[10px] font-bold text-[#5c5755] uppercase text-center tracking-wider font-spaceGrotesk">
              Clearance Bypass Shortcuts
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
              <button 
                onClick={() => {
                  setIsLoggedIn(true);
                  setCurrentUser({ name: "Curation Board Judge", role: "judge" });
                  navigateToPage("explore");
                }}
                className="p-2 border border-[#ff6b35]/25 hover:border-[#ff6b35] text-[#f7a855] bg-transparent hover:bg-[#ff6b35]/5 rounded-xl transition-all cursor-pointer text-center font-spaceGrotesk"
              >
                Clearance: Principal Judge
              </button>
              <button 
                onClick={() => {
                  setIsLoggedIn(true);
                  setCurrentUser({ name: "Arjun Krishnan", role: "student" });
                  navigateToPage("explore");
                }}
                className="p-2 border border-slate-700 hover:border-slate-500 text-slate-300 bg-transparent hover:bg-white/5 rounded-xl transition-all cursor-pointer text-center font-spaceGrotesk"
              >
                Clearance: Student Arjun
              </button>
            </div>
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#0f0e17] overflow-x-hidden text-[#fffffe] selection:bg-[#ff6b35] selection:text-[#fffffe]">
      {/* CURSOR GLOW */}
      <div 
        ref={cursorGlowRef} 
        className="hidden md:block cursor-glow pointer-events-none fixed -left-[200px] -top-[200px] transition-transform duration-75 cubic-bezier(0.1, 0.8, 0.3, 1)"
      />

      {/* BACKGROUND DECORATIVE ORBS */}
      <div className="pointer-events-none absolute left-[-150px] top-[-150px] -z-10 h-[600px] w-[600px] rounded-full bg-[#ff6b35] opacity-[0.12] blur-[150px] md:opacity-[0.16]" />
      <div className="pointer-events-none absolute right-[-150px] bottom-[-150px] -z-10 h-[500px] w-[500px] rounded-full bg-[#e45c3a] opacity-[0.10] blur-[120px] md:opacity-[0.12]" />
      <div className="pointer-events-none absolute left-[50%] top-[45%] -z-10 h-[600px] w-[700px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-[#f7c59f] opacity-[0.05] blur-[180px] md:opacity-[0.08]" />

      {/* Floating Sparkles */}
      <div className="pointer-events-none absolute top-40 left-12 w-2 h-2 bg-[#ff6b35] rounded-full opacity-40 animate-ping" />
      <div className="pointer-events-none absolute top-96 right-20 w-3 h-3 bg-[#f7c59f] rounded-full opacity-20 animate-pulse" />
      <div className="pointer-events-none absolute top-[600px] left-1/3 w-2 h-2 bg-[#e45c3a] rounded-full opacity-30 animate-pulse" />
      <div className="pointer-events-none absolute top-[900px] right-1/4 w-3.5 h-3.5 bg-[#ff6b35] rounded-full opacity-20 animate-bounce" />

      {/* NAVBAR */}
      <header 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-opacity-70 bg-[#0f0e17] backdrop-blur-[16px] border-b border-white/5 shadow-2xl' 
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Left */}
          <button onClick={() => navigateToPage("explore")} className="flex items-center gap-2 group cursor-pointer">
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-[#ff6b35]/20 to-[#e45c3a]/20 border border-[#ff6b35]/30 group-hover:border-[#ff6b35]/70 transition-all duration-300 shadow-[0_0_15px_rgba(255,107,53,0.1)]">
              <Flame className="w-6 h-6 text-[#ff6b35] group-hover:scale-110 transition-transform duration-300 animate-pulse" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#ff6b35] to-[#f7c59f] bg-clip-text text-transparent font-spaceGrotesk group-hover:brightness-110 transition-all">
              SkillForge
            </span>
          </button>

          {/* Links Center */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigateToPage("explore")} 
              className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 relative py-2 cursor-pointer ${
                currentPage === "explore" ? 'text-white' : 'text-[#a8a4a0] hover:text-white'
              }`}
            >
              Explore
              {currentPage === "explore" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6b35] rounded-full" />
              )}
            </button>
            <button 
              onClick={() => navigateToPage("leaderboard")} 
              className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 relative py-2 cursor-pointer flex items-center gap-1.5 ${
                currentPage === "leaderboard" ? 'text-white' : 'text-[#a8a4a0] hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ff6b35]" />
              Leaderboard
              {currentPage === "leaderboard" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6b35] rounded-full" />
              )}
            </button>
            <button 
              onClick={() => navigateToPage("about")} 
              className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 relative py-2 cursor-pointer ${
                currentPage === "about" ? 'text-white' : 'text-[#a8a4a0] hover:text-white'
              }`}
            >
              About
              {currentPage === "about" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6b35] rounded-full" />
              )}
            </button>

            {/* Direct My Profile navbar tab for logged in student */}
            {isLoggedIn && currentUser && currentUser.role === "student" && (
              <button 
                onClick={() => {
                  const myProfile = students.find(s => s.name === currentUser.name);
                  if (myProfile) {
                    setSelectedStudent(myProfile);
                    setSelectedStudentTab("about");
                    navigateToPage("student-detail");
                  } else {
                    alert("Profile metadata lookup failed.");
                  }
                }} 
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 relative py-2 cursor-pointer flex items-center gap-1 ${
                  currentPage === "student-detail" && selectedStudent?.name === currentUser.name ? 'text-white' : 'text-[#a8a4a0] hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#ff6b35]" />
                My Profile
                {currentPage === "student-detail" && selectedStudent?.name === currentUser.name && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6b35] rounded-full" />
                )}
              </button>
            )}
          </nav>

          {/* Actions Right (Binds Login states dynamically!) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff6b35] text-[#a8a4a0] hover:text-white transition-all cursor-pointer flex items-center justify-center"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#f7c59f]" /> : <Moon className="w-4 h-4 text-[#ff6b35]" />}
            </button>

            {isLoggedIn && currentUser ? (
              <div className="flex items-center gap-2">
                {/* Visual badge representing login clearance - Clickable for students to go to profile! */}
                <button 
                  onClick={() => {
                    if (currentUser.role === "student") {
                      const myProfile = students.find(s => s.name === currentUser.name);
                      if (myProfile) {
                        setSelectedStudent(myProfile);
                        setSelectedStudentTab("about");
                        navigateToPage("student-detail");
                      }
                    } else {
                      alert("You are signed in as a Curation Board Judge. Tap Explore cards to inspect profiles.");
                    }
                  }}
                  className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    currentUser.role === "judge" 
                      ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/15' 
                      : 'border-[#ff6b35]/25 bg-[#ff6b35]/10 text-[#f7a855] hover:bg-[#ff6b35]/20 hover:scale-102 hover:shadow-[0_0_15px_rgba(255,107,53,0.15)]'
                  }`}
                  title={currentUser.role === "student" ? "Click to view your own profile dashboard!" : "Principal Judge Clearance"}
                >
                  <User className="w-3.5 h-3.5" />
                  {currentUser.name}
                </button>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-bold rounded-xl border-1.5 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => navigateToPage("login")}
                  className={`px-4 py-2 text-sm font-semibold rounded-xl border-1.5 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition-all duration-300 cursor-pointer ${
                    currentPage === "login" ? "bg-[#ff6b35] text-white" : ""
                  }`}
                >
                  Login
                </button>
                <button 
                  onClick={() => setIsJoinFormOpen(true)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2.5 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] shadow-[0_4px_24px_rgba(255,107,53,0.4)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Join Now
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* MARQUEE LEADERBOARD STRIP */}
      <section id="marquee-section" className="relative w-full overflow-hidden py-4 bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] border-y border-[#ff6b35]/20 shadow-[0_0_25px_rgba(255,107,53,0.15)] mt-20">
        <div className="flex w-[200%] gap-4 select-none animate-marquee whitespace-nowrap text-xs sm:text-sm font-bold font-spaceGrotesk text-white tracking-wide items-center">
          <span>🏆 Top Contributor: Arjun K — 12 Projects</span>
          <span>·</span>
          <span>⭐ Most Endorsed: Priya S — AI/ML</span>
          <span>·</span>
          <span>🔥 Trending: Vikram D — CAD Design</span>
          <span>·</span>
          <span>💡 Most Viewed: Ananya I — Data Science</span>
          <span>·</span>
          
          <span>🏆 Top Contributor: Arjun K — 12 Projects</span>
          <span>·</span>
          <span>⭐ Most Endorsed: Priya S — AI/ML</span>
          <span>·</span>
          <span>🔥 Trending: Vikram D — CAD Design</span>
          <span>·</span>
          <span>💡 Most Viewed: Ananya I — Data Science</span>
          <span>·</span>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="page-enter" key={currentPage}>
        {currentPage === "explore" && renderExplorePage()}
        {currentPage === "leaderboard" && renderLeaderboardPage()}
        {currentPage === "about" && renderAboutPage()}
        {currentPage === "student-detail" && renderStudentDetailPage()}
        {currentPage === "login" && renderLoginPage()}
      </main>

      {/* FOOTER CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="w-full py-12 md:py-16 px-8 md:px-16 rounded-3xl bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] text-center shadow-[0_12px_40px_rgba(255,107,53,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-spaceGrotesk text-[#fffffe] mb-4 max-w-3xl mx-auto">
            Ready to showcase your skills to the world?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-8 font-plusJakarta">
            Register your verified technical, administrative or strategy student details to list your portfolio page for national selection.
          </p>

          <button 
            onClick={() => setIsJoinFormOpen(true)}
            className="px-8 py-4 bg-white text-[#ff6b35] hover:text-[#e45c3a] text-sm font-extrabold rounded-2xl hover:shadow-[0_8px_32px_rgba(255,255,255,0.35)] hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer"
          >
            Create Your Profile
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#0a0905] border-t border-white/5 py-12 md:py-16 text-[#a8a4a0]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Col Left */}
          <div className="md:col-span-2 space-y-4">
            <button onClick={() => navigateToPage("explore")} className="flex items-center gap-2 group cursor-pointer text-left">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#ff6b35]/20 to-[#e45c3a]/20 border border-[#ff6b35]/30">
                <Flame className="w-5 h-5 text-[#ff6b35]" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#f7c59f] bg-clip-text text-transparent font-spaceGrotesk">
                SkillForge
              </span>
            </button>
            <p className="text-xs sm:text-sm text-[#5c5755] font-plusJakarta leading-relaxed max-w-sm">
              Discover verified credentials, technical architectures and detailed portfolios. Built strictly for outstanding collegiate talent curation.
            </p>
          </div>

          {/* Col Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-spaceGrotesk">
              Explore links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-plusJakarta">
              <li>
                <button onClick={() => navigateToPage("explore")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Explore Grid
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage("leaderboard")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Rankings Leaderboard
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage("about")} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Platform
                </button>
              </li>
            </ul>
          </div>

          {/* Col Links 2 */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-spaceGrotesk">
              Resources & Privacy
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-plusJakarta">
              <li>
                <a href="#" onClick={(e) => {e.preventDefault(); alert("Platform Demonstration Mode: Mock terms of use.");}} className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => {e.preventDefault(); alert("Platform Demonstration Mode: Mock privacy policy.");}} className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <Github className="w-3.5 h-3.5" /> Github Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-plusJakarta">
          <div>
            © 2025 SkillForge — Built for Students. All rights reserved.
          </div>
          <div className="text-[#5c5755]">
            Constructed with Sunrise Gold styling templates.
          </div>
        </div>
      </footer>

      {/* REGISTRATION FORM MODAL */}
      {isJoinFormOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f0e17]/85 backdrop-blur-2xl animate-[pageFadeIn_0.2s_ease-out]"
          onClick={() => setIsJoinFormOpen(false)}
        >
          <div 
            className="w-full max-w-2xl rounded-2xl bg-[#16162a] border border-[#ff6b35]/25 overflow-hidden shadow-2xl animate-[slideUp_0.3s_ease-out] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 md:p-6 bg-[#1a1a2e] border-b border-[#ff6b35]/15 flex items-center justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-bold font-spaceGrotesk text-[#fffffe] flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#ff6b35] animate-pulse" /> Register Student Skill Profile
                </h2>
                <p className="text-xs text-[#a8a4a0] font-plusJakarta mt-0.5">
                  Complete the credentials builder to list your card in the arena.
                </p>
              </div>
              <button 
                onClick={() => setIsJoinFormOpen(false)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#a8a4a0] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Form */}
            <form onSubmit={handleFormSubmit} className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-[#a8a4a0] bg-[#16162a] font-plusJakarta">
              {/* Personal profile */}
              <div>
                <h3 className="text-white font-spaceGrotesk font-bold border-b border-white/5 pb-2 mb-4">1. Personal Profile</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleInputChange}
                      placeholder="e.g. Arjun Krishnan" 
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ff6b35]/70"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-white/80">Department *</label>
                      <select 
                        name="dept" 
                        value={formData.dept} 
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ff6b35]/70"
                      >
                        <option value="CSE" className="bg-[#1a1a2e]">CSE</option>
                        <option value="ECE" className="bg-[#1a1a2e]">ECE</option>
                        <option value="Design" className="bg-[#1a1a2e]">Design</option>
                        <option value="Mech" className="bg-[#1a1a2e]">Mech</option>
                        <option value="MBA" className="bg-[#1a1a2e]">MBA</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-white/80">Year *</label>
                      <select 
                        name="year" 
                        value={formData.year} 
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ff6b35]/70"
                      >
                        <option value="1st Year" className="bg-[#1a1a2e]">1st Year</option>
                        <option value="2nd Year" className="bg-[#1a1a2e]">2nd Year</option>
                        <option value="3rd Year" className="bg-[#1a1a2e]">3rd Year</option>
                        <option value="4th Year" className="bg-[#1a1a2e]">4th Year</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-semibold text-white/80">Brief Bio *</label>
                    <textarea 
                      name="bio" 
                      required 
                      rows="2"
                      value={formData.bio} 
                      onChange={handleInputChange}
                      placeholder="e.g. Passionate AI researcher working on computer vision." 
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ff6b35]/70 resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-semibold text-white/80">Top Skills (Comma Separated) *</label>
                    <input 
                      type="text" 
                      name="skills" 
                      required 
                      value={formData.skills} 
                      onChange={handleInputChange}
                      placeholder="e.g. Web Dev, React, Python, TensorFlow" 
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ff6b35]/70"
                    />
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-white font-spaceGrotesk font-bold border-b border-white/5 pb-2 mb-4">2. Showcase Projects</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="text-xs font-extrabold text-[#f7c59f] uppercase tracking-wider font-spaceGrotesk">Project #1 Details</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <input 
                          type="text" 
                          name="project1Title" 
                          required
                          value={formData.project1Title} 
                          onChange={handleInputChange}
                          placeholder="Project Title" 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="space-y-1">
                        <input 
                          type="text" 
                          name="project1Tech" 
                          required
                          value={formData.project1Tech} 
                          onChange={handleInputChange}
                          placeholder="Tech stack (e.g. React, Node)" 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <input 
                          type="text" 
                          name="project1Desc" 
                          required
                          value={formData.project1Desc} 
                          onChange={handleInputChange}
                          placeholder="Short description of the architecture..." 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="text-xs font-extrabold text-[#f7c59f] uppercase tracking-wider font-spaceGrotesk">Project #2 Details (Optional)</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <input 
                          type="text" 
                          name="project2Title" 
                          value={formData.project2Title} 
                          onChange={handleInputChange}
                          placeholder="Project Title" 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="space-y-1">
                        <input 
                          type="text" 
                          name="project2Tech" 
                          value={formData.project2Tech} 
                          onChange={handleInputChange}
                          placeholder="Tech stack" 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <input 
                          type="text" 
                          name="project2Desc" 
                          value={formData.project2Desc} 
                          onChange={handleInputChange}
                          placeholder="Short description..." 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-white font-spaceGrotesk font-bold border-b border-white/5 pb-2 mb-4">3. Certifications & Achievements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80">Certification Name</label>
                    <input 
                      type="text" 
                      name="certificationTitle" 
                      value={formData.certificationTitle} 
                      onChange={handleInputChange}
                      placeholder="e.g. AWS Solutions Architect" 
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ff6b35]/70"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-white/80">Issuer Org</label>
                    <input 
                      type="text" 
                      name="certificationIssuer" 
                      value={formData.certificationIssuer} 
                      onChange={handleInputChange}
                      placeholder="e.g. Amazon Web Services" 
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#ff6b35]/70"
                    />
                  </div>

                  <div className="sm:col-span-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="text-xs font-extrabold text-[#f7c59f] uppercase tracking-wider font-spaceGrotesk">Top Timeline Milestone</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <input 
                          type="text" 
                          name="timelineYear" 
                          value={formData.timelineYear} 
                          onChange={handleInputChange}
                          placeholder="Year (e.g. 2025)" 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="sm:col-span-2 space-y-1">
                        <input 
                          type="text" 
                          name="timelineTitle" 
                          value={formData.timelineTitle} 
                          onChange={handleInputChange}
                          placeholder="Milestone (e.g. AI Research Intern)" 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <input 
                          type="text" 
                          name="timelineDesc" 
                          value={formData.timelineDesc} 
                          onChange={handleInputChange}
                          placeholder="Brief description of responsibilities..." 
                          className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-white/5 flex justify-end gap-3 font-plusJakarta">
                <button 
                  type="button" 
                  onClick={() => setIsJoinFormOpen(false)}
                  className="px-5 py-2.5 border border-white/10 rounded-xl hover:bg-white/5 text-[#a8a4a0] cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-gradient-to-r from-[#ff6b35] to-[#e45c3a] text-white rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  Submit Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
