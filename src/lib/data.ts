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
  { label: "Projects Built", value: 4 },
  { label: "Companies", value: 1 },
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
    company: "FitMyJob (Tecron Product)",
    role: "UI Developer Intern / Product & QA Engineer",
    duration: "Present",
    badge: "Automation",
    isWhatsApp: true,
    points: [
      "Worked on Tecron, an Instagram & WhatsApp automation tool built under FitMyJob",
      "Designed and developed chatbot flows and automation dashboards",
      "Conducted QA testing and identified production-level issues",
      "Built UI components using React.js, TypeScript, and Tailwind CSS",
      "Contributed to product improvements and user experience optimization",
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
    name: "Tecron Automation Platform",
    description: "A WhatsApp & Instagram automation tool designed for business growth, including chatbot flows, lead capture, and automated responses.",
    tech: ["React.js", "Node.js", "WhatsApp Business API", "Webhooks"],
    badge: "Featured",
    isWhatsApp: true,
    featured: true,
    image: "/tecron.png",
    link: "https://chatflow-fmj98.lovable.app",
    github: "https://github.com/shmiim/shameem-s-dev-showcase.git",
  },
  {
    name: "Stories from Bengaluru",
    description: "A client project built as a city-based platform for rooms, jobs, PG, and local services in Bengaluru.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    badge: "Freelance",
    image: "/bengaluru.png",
    link: "https://benglore-11.vercel.app",
    github: "https://github.com/shmiim",
  },
  {
    name: "FitMyJob Platform",
    description: "AI-powered job platform focusing on resume analysis, job matching, and automation tools. Performed UX audit and QA testing, identified critical API and production bugs, and improved user flow and platform reliability.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    badge: "Product",
    image: "/fitmyjob.png",
    link: "https://fitmyjob.com",
    github: "https://github.com/shmiim",
  },
  {
    name: "NexCart",
    description: "Feature-rich e-commerce app with Redux cart, checkout flow, and product filtering.",
    tech: ["React.js", "Redux", "JavaScript"],
    link: "https://next-cart-ecommerce.vercel.app",
    image: "/nexcart.png",
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
