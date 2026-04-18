export const personalInfo = {
  name: "Muhammed Shameem K",
  role: "MERN Stack Developer",
  email: "mohdshameemzz75@gmail.com",
  phone: "+91 7510812188",
  location: "Kerala, India",
  linkedin: "https://linkedin.com/in/muhammed-shameem-k-a799a7295",
  github: "https://github.com/shmiim",
  bio: "I’m Muhammed Shameem K, a passionate Full-Stack Developer focused on building modern web applications with clean UI and practical functionality. I work with technologies like React.js, Next.js, Node.js, MongoDB, JavaScript, and TypeScript. I enjoy creating responsive interfaces, solving real problems, and continuously improving my skills through hands-on projects. As a fresher, I bring strong learning ability, consistency, and a genuine interest in building products that create value.",
};

export const typingRoles = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "React & Next.js Developer",
];

export const stats = [
  { label: "Projects Built", value: 5 },
  { label: "Companies", value: 3 },
  { label: "Chatbot System", value: 1 },
];

export const skillCategories = [
  {
    name: "Frontend",
    color: "hsl(197, 66%, 49%)",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    color: "hsl(142, 60%, 45%)",
    skills: ["Node.js", "Express.js", "PHP"],
  },
  {
    name: "Database",
    color: "hsl(35, 80%, 55%)",
    skills: ["MongoDB", "MySQL"],
  },
  {
    name: "Tools",
    color: "hsl(270, 50%, 55%)",
    skills: ["Git", "GitHub", "CI/CD", "Vercel"],
  },
  {
    name: "Automation",
    color: "hsl(142, 70%, 49%)",
    skills: ["WhatsApp Business API", "Chatbot Flow Design", "Webhook Integration"],
  },
];

export const experiences = [
  {
    company: "FitMyJob",
    role: "UI Developer Intern / QA & UX Researcher",
    duration: "Present",
    points: [
      "Conducted UX research and QA testing, reporting critical issues across the platform",
      "Found and fixed a production-level API misconfiguration improving system reliability",
      "Built responsive UI components using React.js, TypeScript, and Tailwind CSS",
      "Designed WhatsApp & Instagram automation dashboard UI",
    ],
  },
  {
    company: "Tecron",
    role: "WhatsApp Chatbot Flow Builder",
    duration: "Recent",
    badge: "Automation",
    isWhatsApp: true,
    points: [
      "Architected end-to-end WhatsApp chatbot conversation flows for automated user interactions",
      "Designed multi-step branching logic covering greetings, FAQs, lead capture, and escalation to human agents",
      "Mapped out message nodes, quick-reply buttons, and conditional flow triggers using WhatsApp Business API patterns",
      "Collaborated on webhook integration design to connect chatbot responses with backend services",
      "Produced detailed flow diagrams and documentation for developer handoff",
    ],
  },
  {
    company: "Softronics",
    role: "React Developer Intern",
    duration: "1 Month, 2025",
    points: [
      "Built React applications using JavaScript & TypeScript",
      "Improved responsive UI with Tailwind CSS",
      "Optimized component performance and debugging",
    ],
  },
];

export const projects = [
  {
    name: "Tecron WhatsApp Chatbot",
    description: "Designed and built a complete WhatsApp chatbot flow system with branching conversation logic, quick-reply buttons, lead capture, and human agent escalation.",
    tech: ["WhatsApp Business API", "Flow Design", "Webhook", "Node.js"],
    badge: "Flow Architecture",
    isWhatsApp: true,
    featured: true,
  },
  {
    name: "RuralCare",
    description: "Full-stack healthcare appointment booking system with REST APIs and role-based access.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    name: "NexCart",
    description: "Feature-rich e-commerce app with Redux cart, checkout flow, and product filtering.",
    tech: ["React.js", "Redux", "JavaScript"],
    link: "https://next-cart-ecommerce.vercel.app",
    image: "/nexcart.png",
  },
  {
    name: "Teacher Companion",
    description: "Academic CRUD management system for teachers to track student records.",
    tech: ["PHP", "MySQL"],
  },
  {
    name: "Recipe Web App",
    description: "API-powered recipe discovery app with search and responsive design.",
    tech: ["React.js", "REST API"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const codeSnippet = `const Developer = () => {
  const [skills] = useState([
    'React', 'Next.js',
    'TypeScript', 'Node.js'
  ]);

  return (
    <Portfolio
      name="Shameem"
      role="MERN Stack Dev"
      passion="Clean UI"
    />
  );
};`;
