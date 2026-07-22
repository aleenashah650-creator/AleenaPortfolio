export const techLogos = [
  "OpenAI", "n8n", "VAPI", "Supabase", "ElevenLabs", "LangChain",
  "Qdrant", "Pinecone", "Zapier", "Make", "Retool", "Appsmith",
  "Airtable", "Claude", "Gemini", "WhatsApp API", "PostgreSQL", "Redis",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics = [
  { value: "50+", label: "AI Systems Delivered" },
  { value: "10+", label: "Technologies Mastered" },
  { value: "1000+", label: "Hours Saved" },
  { value: "99%", label: "Workflow Reliability" },
];

export const services = [
  {
    title: "AI Automation Systems",
    description: "End-to-end automation pipelines that connect your tools, data, and AI models into a single operating system.",
    icon: "Sparkles",
  },
  {
    title: "Voice AI Agents",
    description: "Human-sounding voice assistants for bookings, support, and outbound calls — powered by VAPI and ElevenLabs.",
    icon: "Mic",
  },
  {
    title: "WhatsApp AI Assistants",
    description: "24/7 conversational agents that qualify leads, take orders, and close sales inside WhatsApp.",
    icon: "MessageCircle",
  },
  {
    title: "Business Workflow Automation",
    description: "Replace repetitive back-office work with resilient n8n and Make workflows that never sleep.",
    icon: "Workflow",
  },
  {
    title: "RAG & Knowledge Systems",
    description: "Private knowledge bases with Qdrant and Pinecone that let your team query documents in natural language.",
    icon: "Database",
  },
  {
    title: "AI Consulting & Strategy",
    description: "Roadmaps, architecture reviews, and hands-on delivery for teams shipping AI into production.",
    icon: "Compass",
  },
];

export const skillCategories = [
  {
    name: "AI",
    skills: [
      { name: "OpenAI", level: 95 },
      { name: "Claude", level: 92 },
      { name: "Gemini", level: 88 },
      { name: "LangChain", level: 90 },
    ],
  },
  {
    name: "Automation",
    skills: [
      { name: "n8n", level: 96 },
      { name: "Zapier", level: 90 },
      { name: "Make", level: 88 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "Supabase", level: 93 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis", level: 82 },
      { name: "Qdrant", level: 85 },
    ],
  },
  {
    name: "Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind", level: 92 },
      { name: "Node.js", level: 87 },
    ],
  },
  {
    name: "Cloud",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "Railway", level: 85 },
      { name: "Render", level: 82 },
    ],
  },
];

export const projects = [
  {
    title: "AI Restaurant Receptionist",
    tag: "Voice Agent",
    description: "24/7 voice receptionist that handles reservations, menus, and FAQs across multiple locations.",
    size: "lg",
    json: {
      agent: "Restaurant AI",
      platform: "VAPI",
      callsHandled: 2451,
      availability: "24/7",
      accuracy: "98.7%",
    },
  },
  {
    title: "WhatsApp Sales Agent",
    tag: "Conversational AI",
    description: "Lead qualification and product recommendations directly inside WhatsApp with full CRM sync.",
    size: "md",
    json: {
      workflow: "Lead Automation",
      tool: "n8n",
      integrations: ["WhatsApp", "OpenAI", "Google Sheets", "Supabase"],
    },
  },
  {
    title: "Voice Appointment Scheduler",
    tag: "Voice + Calendar",
    description: "Books, reschedules, and confirms appointments through natural voice conversations.",
    size: "md",
    json: { agent: "Scheduler", bookings: 812, noShowsReduced: "42%" },
  },
  {
    title: "Retail AI Assistant",
    tag: "Commerce",
    description: "Inventory-aware assistant that recommends products and processes orders across channels.",
    size: "md",
    json: { channel: "Web + WA", conversionLift: "+27%" },
  },
  {
    title: "AI Knowledge Base",
    tag: "RAG",
    description: "Private RAG system over 12k internal documents with citations and role-based access.",
    size: "md",
    json: { vectors: 128000, model: "gpt-4o-mini", store: "Qdrant" },
  },
  {
    title: "Customer Support Agent",
    tag: "Support",
    description: "Tier-1 support agent that resolves 68% of tickets before a human ever sees them.",
    size: "lg",
    json: { tickets: 9421, autoResolved: "68%", csat: "4.8/5" },
  },
];

export const certifications = [
  { org: "OpenAI", name: "API Developer", date: "2025", id: "OAI-2025-8842", featured: true },
  { org: "n8n", name: "Advanced Workflow Automation", date: "2025", id: "N8N-ADV-1204" },
  { org: "Google", name: "Cloud Digital Leader", date: "2024", id: "GCP-CDL-5591" },
  { org: "Meta", name: "WhatsApp Business API", date: "2025", id: "META-WA-3320" },
  { org: "Microsoft", name: "Azure AI Fundamentals", date: "2024", id: "MS-AI-900" },
  { org: "AWS", name: "Cloud Practitioner", date: "2023", id: "AWS-CP-4471" },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Startup Founder, Northlane",
    review: "The voice agent replaced our night receptionist and now handles 2,000+ calls a month flawlessly. Truly world-class delivery.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Alvarez",
    role: "CEO, Fiveline Group",
    review: "We shipped in three weeks what our internal team estimated at six months. The systems still run without a single incident.",
    rating: 5,
    avatar: "MA",
  },
  {
    name: "Priya Nair",
    role: "Restaurant Owner",
    review: "Our WhatsApp agent takes reservations in three languages. Customers think it's a real person — the polish is incredible.",
    rating: 5,
    avatar: "PN",
  },
  {
    name: "David Kim",
    role: "Agency Owner",
    review: "The RAG knowledge base transformed how our consultants work. Citations, access control, everything enterprise-grade.",
    rating: 5,
    avatar: "DK",
  },
];
