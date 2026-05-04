export const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Experience", "Contact"];

export const MERN_STACK = [
  { name: "MongoDB",    icon: "🍃", color: "#e6fcf5", text: "#0ca678", desc: "NoSQL database design, aggregation pipelines, Atlas cloud" },
  { name: "Express.js", icon: "⚙️", color: "#f1f3f5", text: "#495057", desc: "REST APIs, middleware, JWT auth, rate limiting" },
  { name: "React",      icon: "⚛️", color: "#e7f5ff", text: "#1971c2", desc: "Hooks, Context, Redux Toolkit, React Query, Vite" },
  { name: "Node.js",    icon: "🟢", color: "#ebfbee", text: "#2f9e44", desc: "Async programming, streams, child processes, PM2" },
];

export const OTHER_SKILLS = [
  { cat: "Frontend",      items: ["TypeScript", "Tailwind CSS", "React Router", "Axios", "Framer Motion", "Vite", "Webpack"] },
  { cat: "Backend",       items: ["REST API", "GraphQL", "Socket.io", "JWT / OAuth2", "Mongoose", "bcrypt", "Multer"] },
  { cat: "Database",      items: ["MongoDB Atlas", "Redis", "Firebase", "PostgreSQL (basic)", "Mongoose ODM"] },
  { cat: "DevOps & Tools",items: ["Git & GitHub", "Docker", "AWS EC2 / S3", "Vercel", "Render", "Postman", "Nginx"] },
  { cat: "Testing",       items: ["Jest", "React Testing Library", "Supertest", "Cypress (E2E)"] },
];

export const FEATURED_PROJECTS = [
  {
    id: 1, emoji: "🛍️", color: "#e7f5ff", tag: "MERN Stack",
    title: "ShopNow — Full-Stack E-Commerce Platform",
    date: "Mar 2026",
    desc: "Shopping platform with cart, Stripe payments, admin dashboard and JWT auth.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    github: "#", live: "#", highlight: true,
  },
  {
    id: 2, emoji: "💬", color: "#f3f0ff", tag: "Real-Time",
    title: "ChatFlow — Real-Time Messaging App",
    date: "Feb 2026",
    desc: "WhatsApp-style chat with Socket.io rooms, typing indicators and media uploads.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
    github: "#", live: "#", highlight: false,
  },
  {
    id: 3, emoji: "📋", color: "#fff9db", tag: "MERN Stack",
    title: "TaskBoard — Project Management Tool",
    date: "Jan 2026",
    desc: "Trello-inspired kanban with drag & drop, team workspaces and role-based access.",
    tech: ["React", "Express", "MongoDB", "react-beautiful-dnd", "JWT"],
    github: "#", live: "#", highlight: false,
  },
  {
    id: 4, emoji: "📝", color: "#fff0f6", tag: "Full Stack",
    title: "BlogCraft — Developer Blog CMS",
    date: "Dec 2025",
    desc: "Markdown-powered blog with rich editor, tags, comments and admin panel.",
    tech: ["React", "Node.js", "MongoDB", "React-Quill", "Redis"],
    github: "#", live: "#", highlight: false,
  },
];

export const ALL_PROJECTS = [
  { id: 1, title: "ShopNow E-Commerce",  tag: "MERN Stack", date: "Mar 2026", desc: "Full shopping platform with Stripe, auth, admin dashboard.", emoji: "🛍️" },
  { id: 2, title: "ChatFlow Messaging",  tag: "Real-Time",  date: "Feb 2026", desc: "Real-time chat with Socket.io, rooms, media uploads.",       emoji: "💬" },
  { id: 3, title: "TaskBoard Kanban",    tag: "MERN Stack", date: "Jan 2026", desc: "Drag-drop project board with role-based permissions.",        emoji: "📋" },
  { id: 4, title: "BlogCraft CMS",       tag: "Full Stack", date: "Dec 2025", desc: "Markdown CMS with rich editor, tags and Redis cache.",        emoji: "📝" },
  { id: 5, title: "AuthKit Boilerplate", tag: "Backend",    date: "Nov 2025", desc: "JWT + refresh token auth system with email verification.",    emoji: "🔐" },
  { id: 6, title: "ExpenseTracker API",  tag: "Backend",    date: "Oct 2025", desc: "RESTful API with filters, pagination and chart data.",        emoji: "💰" },
  { id: 7, title: "WeatherBoard",        tag: "Frontend",   date: "Sep 2025", desc: "Live weather dashboard using OpenWeather API and React.",     emoji: "🌤️" },
  { id: 8, title: "URL Shortener",       tag: "MERN Stack", date: "Aug 2025", desc: "Bitly-like shortener with analytics and custom aliases.",    emoji: "🔗" },
];

export const TAGS = ["All", "MERN Stack", "Real-Time", "Full Stack", "Backend", "Frontend"];

export const TAG_COLORS = {
  "MERN Stack": { bg: "#e7f5ff", text: "#1971c2" },
  "Real-Time":  { bg: "#f3f0ff", text: "#7048e8" },
  "Full Stack": { bg: "#e6fcf5", text: "#0ca678" },
  Backend:      { bg: "#fff3bf", text: "#e67700" },
  Frontend:     { bg: "#fff0f6", text: "#c2255c" },
};

export const EDUCATION = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    school: "XYZ Institute of Technology",
    year: "2021 – 2025",
    grade: "CGPA: 8.6 / 10",
    desc: "Relevant coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Web Technologies, Software Engineering.",
    icon: "🎓",
    iconBg: "#e7f5ff",
  },
  {
    degree: "Higher Secondary (12th) — PCM + Computer Science",
    school: "ABC Senior Secondary School",
    year: "2019 – 2021",
    grade: "Percentage: 92.4%",
    desc: "Top performer in Computer Science. Participated in national-level coding olympiad and inter-school hackathon.",
    icon: "📚",
    iconBg: "#fff9db",
  },
];

export const CERTIFICATIONS = [
  { name: "The Complete MERN Stack Developer Course",        issuer: "Udemy",            year: "2024", icon: "🏅" },
  { name: "Node.js, Express, MongoDB — The Complete Bootcamp", issuer: "Udemy",          year: "2024", icon: "🏅" },
  { name: "React — The Complete Guide (incl. Redux)",        issuer: "Udemy",            year: "2023", icon: "🏅" },
  { name: "AWS Cloud Practitioner Essentials",               issuer: "AWS",              year: "2024", icon: "☁️" },
  { name: "MongoDB Basics",                                  issuer: "MongoDB University",year: "2023", icon: "🍃" },
];

export const EXPERIENCE = [
  {
    role: "MERN Stack Developer Intern",
    company: "TechNova Solutions",
    type: "Internship",
    period: "Jan 2025 – Apr 2025",
    location: "Remote",
    iconBg: "#e7f5ff",
    points: [
      "Built RESTful APIs with Express.js and MongoDB for a B2B SaaS product serving 500+ users.",
      "Developed reusable React components that reduced UI build time by 30%.",
      "Implemented JWT authentication with refresh token rotation and role-based access control.",
      "Deployed services on AWS EC2 with Nginx reverse proxy and PM2 process manager.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "PixelCraft Studios",
    type: "Internship",
    period: "Jun 2024 – Aug 2024",
    location: "Hybrid",
    iconBg: "#fff0f6",
    points: [
      "Converted Figma designs to pixel-perfect React components using Tailwind CSS.",
      "Integrated REST APIs and managed global state with Redux Toolkit.",
      "Improved page load time by 40% through code splitting and lazy loading.",
    ],
  },
];

export const CONTACT_INFO = [
  { icon: "📧", label: "Email",     value: "jaidev@example.com" },
  { icon: "📍", label: "Location",  value: "New Delhi, India (Remote OK)" },
  { icon: "💼", label: "Open to",   value: "Full-time · Freelance · Contract" },
  { icon: "⚡", label: "Response",  value: "Within 24 hours" },
];

export const SOCIAL_LINKS = [
  { icon: "🐙", name: "GitHub" },
  { icon: "💼", name: "LinkedIn" },
  { icon: "⚡", name: "LeetCode" },
  { icon: "🐦", name: "Twitter" },
];