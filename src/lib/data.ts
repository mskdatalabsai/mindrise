import {
  Award,
  Bot,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  CalendarClock,
  ClipboardCheck,
  Code2,
  Compass,
  Cpu,
  Database,
  Factory,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  Hammer,
  HeartHandshake,
  Landmark,
  Layers,
  Mail,
  MapPin,
  Mic2,
  Network,
  PenTool,
  Phone,
  Presentation,
  Radio,
  RefreshCw,
  Rocket,
  Route,
  School,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  Wand2,
  Workflow,
  Wrench,
} from "lucide-react";
import type {
  AudienceSegment,
  ConsultingService,
  ContactChannel,
  CourseCatalogCategory,
  CourseLevel,
  EcosystemPillar,
  FeatureItem,
  FlagshipProgram,
  FooterLinkGroup,
  IconLabel,
  IndustryFocus,
  NavLink,
  PolicySection,
  ProcessStep,
  ProgramCard,
  SocialLink,
  StatItem,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "TheMindRise.ai",
  tagline: "Predict. Innovate. Empower.",
  parentCompany: "MSKDATALABS PRIVATE LIMITED",
  email: "contact@themindrise.ai",
  phone: "+91 988 988 5445",
  phoneHref: "+919889885445",
  location: "Hyderabad, India",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "AI Academy", href: "/academy" },
  { label: "AI Products", href: "/products" },
  { label: "AI Consulting", href: "/consulting" },
  { label: "Policy", href: "/policy" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

export const heroCertification = {
  badgeLabel: "OFFICIALLY RECOGNIZED",
  title: "Startup India Certified",
  description:
    "Recognized by the Government of India for innovation and excellence in AI education.",
};

export const aboutStats: StatItem[] = [
  { value: "500+", label: "Learners trained", icon: Users },
  { value: "50+", label: "Enterprises consulted", icon: Building2 },
  { value: "15+", label: "Years combined expertise", icon: Award },
  { value: "10+", label: "AI products shipped", icon: Rocket },
];

export const aboutCopy = {
  paragraphs: [
    "TheMindRise.ai was founded by an accomplished AI and Data Science professional with over 15 years of experience in helping global organizations unlock the power of intelligent decision-making.",
    "Our journey began with a simple yet powerful vision, to bridge the gap between complex AI concepts and meaningful, real-world impact. We exist to make Artificial Intelligence accessible, actionable, and transformational for learners, professionals, and enterprises alike.",
    "With a distinguished background spanning Tata Consultancy Services, GE, Oracle, and Novartis, the founder brings together deep technical expertise and strong business acumen across Marketing, Operations, and Commercial Analytics. His leadership experience in designing data-driven strategies and AI-led innovations ensures that every solution is not only intelligent, but also purpose-aligned and measurable in business outcomes.",
    "At TheMindRise.ai, we are passionate about blending education, foresight, and innovation to empower the next generation of thinkers and creators. Our mission is to democratize AI knowledge and application, helping every individual and organization harness its transformative potential responsibly and effectively.",
    "We believe the future belongs to those who can think beyond tools, those who can combine human intuition with AI intelligence to make smarter decisions, predict possibilities, and create real-world change.",
  ],
};

export const programCards: ProgramCard[] = [
  {
    icon: BookOpen,
    title: "AI & Data Science Courses",
    description:
      "Master the most in-demand skills in AI, Data Science, and Machine Learning. Our courses are designed by experienced industry professionals to take you from fundamentals to advanced, real-world application.",
    tags: ["AI Courses", "Data Science", "Generative AI"],
    ctaHref: "#courses",
  },
  {
    icon: Users,
    title: "Corporate Training",
    description:
      "Empower your workforce with AI-driven capabilities. We deliver customized corporate training programs that help organizations adopt data science and AI at scale.",
    tags: ["Enterprise AI", "Upskilling", "Data Analytics"],
    ctaHref: "#contact",
  },
  {
    icon: Trophy,
    title: "Hackathons & Workshops",
    description:
      "We host engaging AI and Data Science hackathons and hands-on workshops across colleges and corporate environments. Participants learn by doing, solving real problems under real constraints.",
    tags: ["AI Hackathons", "Innovation", "Experiential Learning"],
    ctaHref: "#contact",
  },
];

export const courses: CourseLevel[] = [
  {
    slug: "weekend-genai-agentic-bootcamp",
    title: "Weekend Gen AI & Agentic AI Bootcamp",
    description:
      "Learn AI in simple language and build your first AI agent. Master the fundamentals of Generative AI and learn how to leverage cutting-edge tools and frameworks to create intelligent applications. Perfect for beginners looking to enter the AI space.",
    duration: "9 hours",
    level: "Beginner to Intermediate",
    detailsHref: "#",
    registerHref: "#contact",
  },
  {
    slug: "nlp-first-path-to-genai",
    title: "NLP-First Path to Generative & Agentic AI",
    description:
      "Master the foundations of Natural Language Processing and advance into cutting-edge Generative AI and agentic systems. This comprehensive program combines theory with hands-on projects to build real-world NLP and AI applications.",
    instructor: "Dr. AI Expert — 15+ Years in AI & Data Science",
    duration: "45-60 Days (1.5 hours/day)",
    level: "Intermediate",
    detailsHref: "#",
    registerHref: "#contact",
  },
];

export const consultingServices: ConsultingService[] = [
  {
    icon: BrainCircuit,
    title: "AI Strategy & Consulting",
    description:
      "Transform your business with data-driven insights and intelligent automation. We help companies define their AI roadmap, identify opportunities, and implement practical solutions.",
    ctaHref: "#contact",
  },
  {
    icon: Network,
    title: "AI Engineering & MLOps",
    description:
      "Bridge the gap between prototype and production. Our MLOps and engineering expertise ensures your AI solutions are scalable, secure, and cloud-ready.",
    ctaHref: "#contact",
  },
  {
    icon: Rocket,
    title: "AI Productization & Innovation",
    description:
      "We don't just consult — we build. Our productization team turns validated ideas into deployable AI products, from architecture through launch.",
    ctaHref: "#contact",
  },
];

export const featuredProduct = {
  label: "Featured Product",
  name: "Dhiti.ai",
  description:
    "An AI-powered career evaluation platform that provides intelligent insights, personalized recommendations, and predictive analytics to help professionals make informed career decisions and achieve their goals.",
  bullets: [
    "AI-driven career path analysis",
    "Skill gap identification & recommendations",
    "Market trend predictions",
  ],
  ctaLabel: "Explore Dhiti.ai",
  ctaHref: "#",
};

export const productFeatures: FeatureItem[] = [
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Leverage cutting-edge GenAI models for content creation, automation, and intelligent assistance.",
  },
  {
    icon: Database,
    title: "Retrieval-Augmented Generation",
    description:
      "Build Retrieval-Augmented Generation systems for context-aware AI applications.",
  },
];

export const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "TheMindRise.ai transformed my understanding of AI. Their consulting helped us build a robust ML pipeline that increased our prediction accuracy by 40%.",
    name: "Swaroop",
    role: "Student, USA",
  },
];

export const whyPartnerWithUs: string[] = [
  "15+ years of AI expertise",
  "Proven track record across industries",
  "Hands-on, practical approach",
  "End-to-end support",
];

export const contactChannels: ContactChannel[] = [
  {
    icon: Mail,
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: siteConfig.location,
    href: "#",
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Training", href: "#programs" },
      { label: "Consulting", href: "#consulting" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/policy" },
      { label: "Privacy Policy", href: "/policy#privacy-data-protection" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export const badges = {
  hero: "Powered by AI Intelligence",
  programs: "Learning & Empowerment",
  courses: "Upcoming & Ongoing Programs",
  products: "AI Productization",
};

export const sectionCopy = {
  about: {
    eyebrow: "Who we are",
    title: "About",
    titleAccent: "TheMindRise.ai",
    subtitle:
      "Bridging the gap between complex AI concepts and practical, real-world applications.",
  },
  programs: {
    title: "AI Learning & Empowerment Programs",
    subtitle:
      "Our programs blend foundational knowledge with hands-on experience — enabling individuals and teams to learn, build, and innovate with confidence.",
  },
  courses: {
    title: "Start Your AI Learning Journey",
    subtitle:
      "Enroll in our carefully designed courses that blend theory with hands-on practice. Learn from industry experts and build real-world AI applications.",
  },
  consulting: {
    title: "AI Consulting & Product Innovation",
    subtitle:
      "We help organizations move from AI exploration to execution. At TheMindRise.ai, our consulting and productization services combine strategy, data science, and engineering to turn your AI ambitions into scalable, measurable impact.",
  },
  products: {
    title: "Transform Ideas into AI Products",
    subtitle:
      "We help you convert innovative concepts into deployable AI products that deliver real business value and competitive advantage.",
  },
  testimonials: {
    title: "Success Stories",
    subtitle: "Real transformations with TheMindRise.ai.",
  },
  contact: {
    title: "Let's Connect",
    subtitle:
      "Ready to transform your AI journey? Reach out for training inquiries, consulting opportunities, or partnership collaborations.",
  },
};

export const academyHero = {
  eyebrow: "TheMindRise Academy",
  title: "Learn AI. Build AI. Lead the Future.",
  paragraphs: [
    "TheMindRise Academy is a practical AI learning platform designed to help students, professionals, and organizations master Artificial Intelligence through structured learning paths, live bootcamps, hands-on projects, and industry-focused programs.",
    "Whether you're beginning your AI journey or advancing into Generative AI and Agentic AI, we provide the knowledge, practical experience, and guidance needed to thrive in the AI era.",
  ],
  primaryCta: { label: "Explore Learning Paths", href: "#learning-paths" },
  secondaryCta: { label: "Join a Live Bootcamp", href: "#bootcamps" },
};

export const academyAboutCopy = {
  title: "About The Academy",
  paragraphs: [
    "Artificial Intelligence is transforming every industry, creating new opportunities while redefining existing roles. Success in this new world requires more than watching videos or completing theoretical courses — it requires practical learning, real-world projects, and continuous skill development.",
    "TheMindRise Academy has been built with a single purpose: to bridge the gap between learning and real-world application.",
    "Our programs combine industry expertise, project-based learning, and emerging AI technologies to help learners build future-ready careers with confidence.",
  ],
};

export const academyAudience: AudienceSegment[] = [
  {
    icon: GraduationCap,
    title: "Students & Fresh Graduates",
    description:
      "Build strong AI foundations and prepare for future careers through structured learning and guided projects.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description:
      "Upskill or transition into AI-driven roles by learning practical technologies that are transforming industries.",
  },
  {
    icon: RefreshCw,
    title: "Career Switchers",
    description:
      "Move confidently into AI, Data Science, Analytics, or Generative AI with structured learning paths and mentorship.",
  },
  {
    icon: Building2,
    title: "Corporate Teams",
    description:
      "Enable your workforce with practical AI skills through customized corporate learning programs and workshops.",
  },
];

export const academyEcosystem: EcosystemPillar[] = [
  {
    id: "bootcamps",
    icon: Rocket,
    title: "Live Bootcamps",
    description:
      "Interactive instructor-led weekend programs focused on practical implementation.",
    examples: [
      "Agentic AI Bootcamp",
      "Generative AI Bootcamp",
      "Prompt Engineering Workshop",
      "AI for Business Leaders",
    ],
  },
  {
    id: "self-paced",
    icon: BookOpen,
    title: "Self-Paced Courses",
    description:
      "Learn anytime, anywhere through structured online courses with lifetime access.",
    examples: [
      "Data to Agentic AI",
      "AI Foundations",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Prompt Engineering",
      "AI for Pharma",
      "AI for Banking",
    ],
  },
  {
    id: "learning-paths",
    icon: Route,
    title: "Learning Paths",
    description:
      "Rather than isolated courses, we provide structured learning journeys that progressively build your expertise.",
    examples: [
      "Data to Agentic AI Mastery",
      "AI Engineering Path",
      "Generative AI Professional",
      "Agentic AI Developer",
      "AI for Healthcare & Pharma",
      "AI for Financial Services",
    ],
  },
  {
    id: "projects",
    icon: FlaskConical,
    title: "Hands-on Projects",
    description:
      "Every learning path includes practical assignments, real-world datasets, case studies, and industry-inspired capstone projects to ensure learners gain practical experience.",
    examples: [],
  },
];

export const academyWhyUs: FeatureItem[] = [
  {
    icon: Hammer,
    title: "Practical First",
    description:
      "Every concept is explained through practical demonstrations, coding exercises, and business use cases.",
  },
  {
    icon: Award,
    title: "Industry Experience",
    description:
      "Programs are designed by professionals with more than 20 years of experience across global organizations including TCS, Oracle, GE, and Novartis.",
  },
  {
    icon: TrendingUp,
    title: "Future-Focused Curriculum",
    description:
      "Stay ahead with continuously updated content covering the latest developments in Artificial Intelligence, Generative AI, and Agentic AI.",
  },
  {
    icon: Code2,
    title: "Learn by Building",
    description:
      "Move beyond theory by developing real-world projects that strengthen your portfolio and confidence.",
  },
  {
    icon: Layers,
    title: "Industry-Specific Learning",
    description:
      "Explore AI applications across industries including Healthcare, Pharma, Banking, Retail, Manufacturing, and more.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Learning",
    description:
      "Choose between live instructor-led bootcamps or self-paced online courses based on your schedule and learning preferences.",
  },
];

export const academyPrograms: FlagshipProgram[] = [
  {
    icon: Workflow,
    title: "Data to Agentic AI Mastery",
    description:
      "A comprehensive learning journey covering Data Analytics, Data Science, Machine Learning, Deep Learning, NLP, Generative AI, and Agentic AI.",
  },
  {
    icon: Bot,
    title: "Weekend Agentic AI Bootcamp",
    description:
      "A hands-on bootcamp focused on building AI agents, multi-agent workflows, MCP integration, and real-world automation use cases.",
  },
  {
    icon: Globe2,
    title: "AI for Industry Series",
    description:
      "Specialized programs demonstrating how AI is transforming industries such as Healthcare, Pharma, Banking, Retail, Manufacturing, and Education.",
  },
];

export const academyOutcomes: string[] = [
  "Understand core AI concepts with confidence",
  "Build practical AI solutions",
  "Develop real-world projects",
  "Apply AI across different industries",
  "Improve career opportunities",
  "Stay future-ready in an AI-driven world",
];

export const academyCta = {
  title: "Your AI Journey Starts Here",
  subtitle:
    "Whether you're exploring AI for the first time or preparing to become an AI leader, TheMindRise Academy provides the knowledge, practical skills, and guidance to help you succeed.",
  primaryCta: { label: "Browse Courses", href: "/academy/courses" },
  secondaryCta: { label: "Register for a Live Bootcamp", href: "#bootcamps" },
};

function buildPlaceholderCourses(prefix: string): CourseCatalogCategory["items"] {
  return [1, 2, 3].map((n) => ({
    title: `${prefix} Title Coming Soon ${n}`,
    description: "Full course details will be added soon.",
    instructor: "Instructor to be announced",
    duration: "TBA",
    level: "All Levels",
    price: "TBA",
    detailsHref: "#",
    demoHref: "#",
  }));
}

export const courseCatalog: CourseCatalogCategory[] = [
  {
    id: "live-classes",
    icon: Radio,
    title: "Live Classes",
    description:
      "Instructor-led sessions with real-time interaction, held on a fixed schedule.",
    items: buildPlaceholderCourses("Live Class"),
  },
  {
    id: "self-paced",
    icon: BookOpen,
    title: "Self-Paced",
    description:
      "Structured online courses you can complete anytime, at your own pace, with lifetime access.",
    items: buildPlaceholderCourses("Self-Paced Course"),
  },
  {
    id: "ai-courses",
    icon: BrainCircuit,
    title: "AI Courses",
    description:
      "Focused programs covering Generative AI, Agentic AI, and other core AI disciplines.",
    items: buildPlaceholderCourses("AI Course"),
  },
];

export const productsHero = {
  title: "Intelligent AI Products Built for the Future",
  paragraphs: [
    "At TheMindRise.AI, we don't just teach Artificial Intelligence — we build it.",
    "Our AI products are designed to help individuals make smarter career decisions, improve productivity, and enable organizations to accelerate AI adoption through intelligent, practical solutions.",
    "This is just the beginning of our growing AI ecosystem.",
  ],
  primaryCta: { label: "Explore Dhiti.ai", href: "#dhiti" },
  secondaryCta: { label: "Request a Demo", href: "/#contact" },
};

export const productsAboutCopy = {
  title: "About AI Products",
  paragraphs: [
    "Artificial Intelligence is transforming how people learn, work, make decisions, and solve problems.",
    "At TheMindRise.AI, our mission extends beyond education. We are building AI-powered products that simplify complex decisions, automate repetitive tasks, and empower individuals and organizations with practical intelligence.",
    "Our products combine advanced AI technologies with deep domain expertise to create meaningful, real-world impact.",
  ],
};

export const productsFlagship = {
  eyebrow: "Our Flagship Product",
  name: "Dhiti.ai",
  tagline: "AI-Powered Career Intelligence Platform",
  paragraphs: [
    "Choosing the right career is one of the most important decisions in life — but most people rely on assumptions, trends, or external advice.",
    "Dhiti.ai takes a different approach.",
    "Using Artificial Intelligence, behavioral insights, aptitude analysis, interests, and future career trends, Dhiti.ai helps individuals discover careers they are naturally suited for.",
  ],
  quote: {
    question: "What job should I choose?",
    answer: "What career am I truly built for?",
  },
  features: [
    "AI-Powered Career Assessment",
    "Personalized Career Recommendations",
    "Strength & Skill Analysis",
    "Career Fit Insights",
    "Learning Roadmaps",
    "Future Career Guidance",
    "Industry-Aligned Recommendations",
    "Continuous Career Development",
  ],
  ctaLabel: "Discover Your Career with Dhiti.ai",
  ctaHref: featuredProduct.ctaHref,
};

export const productsAudience: IconLabel[] = [
  { icon: GraduationCap, label: "Students exploring career options" },
  { icon: Award, label: "Graduates preparing for employment" },
  { icon: Briefcase, label: "Working professionals planning career transitions" },
  { icon: RefreshCw, label: "Career switchers" },
  { icon: School, label: "Educational institutions" },
  { icon: Presentation, label: "Training organizations" },
  { icon: UserCheck, label: "HR and Talent Acquisition teams" },
];

export const productsPipelineCopy = {
  title: "Innovation Pipeline",
  paragraphs: [
    "Artificial Intelligence is evolving rapidly, and so are we.",
    "TheMindRise.AI is continuously developing intelligent products that solve real-world challenges across learning, careers, productivity, and enterprise transformation.",
    "Our innovation roadmap includes a growing portfolio of AI-powered solutions designed to support individuals, professionals, and organizations.",
  ],
};

export const productsPipeline: FeatureItem[] = [
  {
    icon: Bot,
    title: "AI Learning Assistant",
    description:
      "A personalized AI mentor that supports learners throughout their learning journey by answering questions, explaining concepts, and recommending the next steps.",
  },
  {
    icon: Mic2,
    title: "AI Interview Coach",
    description:
      "An intelligent interview preparation platform providing personalized mock interviews, feedback, confidence-building exercises, and improvement recommendations.",
  },
  {
    icon: FileText,
    title: "AI Resume Optimizer",
    description:
      "Create professional, ATS-friendly resumes with AI-powered suggestions tailored to your career goals and target roles.",
  },
  {
    icon: Wand2,
    title: "AI Prompt Studio",
    description:
      "A curated platform of high-quality prompts, templates, and workflows to improve productivity across Generative AI tools.",
  },
  {
    icon: Cpu,
    title: "Enterprise AI Assistants",
    description:
      "Custom AI assistants designed for organizations to automate business processes, enhance employee productivity, and improve decision-making.",
  },
];

export const productsPhilosophy: FeatureItem[] = [
  {
    icon: Target,
    title: "Practical",
    description: "Built to solve real-world problems.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Centered",
    description: "Designed to augment human intelligence, not replace it.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible",
    description: "Developed with transparency, privacy, and ethical AI principles.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent",
    description:
      "Powered by modern AI technologies including Generative AI and Agentic AI.",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready",
    description:
      "Continuously evolving to meet the changing needs of individuals and businesses.",
  },
];

export const productsDifferentiators = {
  intro:
    "Unlike generic AI tools, our products combine technology with deep industry knowledge and practical experience. Every product is designed to be:",
  items: [
    "Easy to use",
    "Business-focused",
    "Scalable",
    "Practical",
    "Continuously improving",
    "Aligned with real user needs",
  ],
};

export const productsVision = {
  title: "Our Vision",
  paragraphs: [
    "Our vision is to build an integrated AI ecosystem where education, intelligent products, and enterprise consulting work together to empower people and organizations.",
    "As our product portfolio grows, every solution will connect seamlessly within TheMindRise.AI ecosystem — creating a unified experience for learning, career growth, productivity, and AI transformation.",
  ],
};

export const productsFinalCta = {
  title: "Experience the Future of AI",
  subtitle:
    "Discover intelligent products that empower careers, accelerate learning, and transform businesses through practical Artificial Intelligence.",
  primaryCta: { label: "Explore Dhiti.ai", href: "#dhiti" },
  secondaryCta: { label: "Contact Us", href: "/#contact" },
};

export const consultingPageHero = {
  title: "Accelerating Business Transformation Through Artificial Intelligence",
  paragraphs: [
    "Artificial Intelligence is reshaping industries at an unprecedented pace. At TheMindRise.AI, we help organizations unlock the full potential of AI through strategy, consulting, implementation, corporate capability building, and industry-specific solutions.",
    "Whether you are beginning your AI journey or scaling enterprise-wide AI initiatives, we partner with you to transform ideas into measurable business outcomes.",
  ],
  primaryCta: { label: "Book a Consultation", href: "/#contact" },
  secondaryCta: { label: "Explore Our Services", href: "#services" },
};

export const consultingPageAboutCopy = {
  title: "About Our Consulting Services",
  paragraphs: [
    "Artificial Intelligence is no longer a future initiative — it is a business imperative.",
    "Organizations across every industry are exploring how AI can improve efficiency, enhance customer experiences, automate operations, accelerate decision-making, and unlock new business opportunities.",
    "However, successful AI transformation requires more than technology. It demands the right strategy, strong governance, domain expertise, skilled teams, and practical implementation.",
    "At TheMindRise.AI, we bridge the gap between AI ambition and business execution by helping organizations adopt AI with confidence.",
  ],
};

export const consultingPageServices: EcosystemPillar[] = [
  {
    id: "strategy",
    icon: Compass,
    title: "AI Strategy & Roadmap",
    description: "Develop a clear AI vision aligned with your business objectives.",
    examples: [
      "AI Opportunity Assessment",
      "AI Readiness Evaluation",
      "AI Strategy Roadmap",
      "Business Use Case Identification",
      "AI Governance Framework",
      "AI Adoption Planning",
    ],
  },
  {
    id: "generative-ai",
    icon: Sparkles,
    title: "Generative AI Solutions",
    description:
      "Leverage Large Language Models (LLMs) and Generative AI to enhance productivity, automate workflows, and improve customer engagement.",
    examples: [
      "ChatGPT Integration",
      "Enterprise Knowledge Assistants",
      "Document Intelligence",
      "AI Copilots",
      "Prompt Engineering",
      "Workflow Automation",
    ],
  },
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI Solutions",
    description:
      "Design and implement intelligent AI agents capable of reasoning, planning, and executing complex business tasks.",
    examples: [
      "AI Agent Development",
      "Multi-Agent Systems",
      "Workflow Automation",
      "MCP-Based Architectures",
      "Autonomous Business Processes",
      "AI Orchestration",
    ],
  },
  {
    id: "data-science",
    icon: Database,
    title: "Data Science & Machine Learning",
    description:
      "Transform enterprise data into actionable insights through advanced analytics and predictive intelligence.",
    examples: [
      "Predictive Analytics",
      "Forecasting Models",
      "Customer Segmentation",
      "Recommendation Systems",
      "NLP Solutions",
      "Computer Vision",
      "AI Model Development",
    ],
  },
  {
    id: "product-development",
    icon: Rocket,
    title: "AI Product Development",
    description: "Build scalable AI-powered products from concept to deployment.",
    examples: [
      "AI Product Strategy",
      "MVP Development",
      "AI Application Development",
      "LLM Integration",
      "API Integration",
      "AI Deployment",
    ],
  },
  {
    id: "corporate-training",
    icon: GraduationCap,
    title: "Corporate AI Training",
    description:
      "Enable your workforce with practical AI skills through customized corporate learning programs.",
    examples: [
      "AI for Business Leaders",
      "AI for Managers",
      "Generative AI for Employees",
      "Agentic AI Bootcamps",
      "Prompt Engineering",
      "AI Productivity Workshops",
      "Customized Enterprise Learning",
    ],
  },
];

export const consultingPageIndustries: IndustryFocus[] = [
  {
    icon: Stethoscope,
    title: "Healthcare & Pharma",
    items: [
      "Clinical analytics",
      "Commercial analytics",
      "Market Access",
      "Real World Evidence",
      "Medical Affairs",
      "Patient analytics",
    ],
  },
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    items: [
      "Fraud Detection",
      "Risk Analytics",
      "Customer Intelligence",
      "Automation",
      "Financial Forecasting",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    items: [
      "Demand Forecasting",
      "Recommendation Engines",
      "Customer Segmentation",
      "Inventory Optimization",
      "Marketing Analytics",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    items: [
      "Predictive Maintenance",
      "Quality Inspection",
      "Supply Chain Analytics",
      "Operational Intelligence",
    ],
  },
  {
    icon: School,
    title: "Education",
    items: [
      "AI Learning Platforms",
      "Student Analytics",
      "Adaptive Learning",
      "Faculty Enablement",
      "Career Guidance",
    ],
  },
  {
    icon: Cpu,
    title: "Technology",
    items: [
      "AI Product Development",
      "LLM Applications",
      "Enterprise Automation",
      "Digital Transformation",
    ],
  },
];

export const consultingPageApproach: ProcessStep[] = [
  {
    step: 1,
    icon: Search,
    title: "Discover",
    description: "Understand your business, challenges, and strategic objectives.",
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "Evaluate AI readiness, available data, technology landscape, and opportunities.",
  },
  {
    step: 3,
    icon: PenTool,
    title: "Design",
    description:
      "Create practical AI roadmaps, solution architecture, and implementation strategy.",
  },
  {
    step: 4,
    icon: Wrench,
    title: "Build",
    description: "Develop and deploy scalable AI solutions aligned with business goals.",
  },
  {
    step: 5,
    icon: Users,
    title: "Enable",
    description: "Train teams, establish governance, and drive organizational adoption.",
  },
  {
    step: 6,
    icon: TrendingUp,
    title: "Scale",
    description:
      "Continuously improve, optimize, and expand AI capabilities across the organization.",
  },
];

export const consultingPageWhyPartner: FeatureItem[] = [
  {
    icon: Award,
    title: "Enterprise Experience",
    description:
      "More than two decades of experience delivering analytics, AI, and digital transformation initiatives across global organizations including TCS, Oracle, GE, and Novartis.",
  },
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "We focus on measurable business outcomes rather than technology for technology's sake.",
  },
  {
    icon: BrainCircuit,
    title: "Practical AI Expertise",
    description:
      "From Data Science to Generative AI and Agentic AI, our solutions are grounded in real-world implementation.",
  },
  {
    icon: Layers,
    title: "Industry Knowledge",
    description:
      "Deep understanding of Healthcare, Pharma, Banking, Retail, Manufacturing, Education, and Technology sectors.",
  },
  {
    icon: Network,
    title: "End-to-End Partnership",
    description: "From strategy and consulting to implementation, training, and ongoing support.",
  },
];

export const consultingPageWhyChoose: string[] = [
  "AI Strategy & Advisory",
  "Enterprise AI Consulting",
  "AI Product Development",
  "Generative AI Solutions",
  "Agentic AI Solutions",
  "Corporate AI Training",
  "Industry-Specific Expertise",
  "Practical Business Outcomes",
];

export const consultingPageCta = {
  intro:
    "Artificial Intelligence is transforming every industry — but successful transformation begins with the right partner. Whether you're exploring AI opportunities, modernizing business operations, training your workforce, or building intelligent products, TheMindRise.AI is ready to help you turn vision into reality.",
  title: "Ready to Accelerate Your AI Journey?",
  subtitle: "Let's discuss how Artificial Intelligence can create measurable value for your organization.",
  primaryCta: { label: "Schedule a Consultation", href: "/#contact" },
  secondaryCta: { label: "Contact Our Team", href: "/#contact" },
};

export const policyPageIntro = {
  title: "Business Policies",
  effectiveDate: "Effective Date: July 2026",
  paragraphs: [
    "Welcome to TheMindRise.AI.",
    "Our goal is to provide high-quality learning experiences, AI products, and consulting services while maintaining transparency, fairness, and trust with our learners, clients, and partners.",
    "The following policies govern the use of our services.",
  ],
};

export const policySections: PolicySection[] = [
  {
    id: "training-learning",
    title: "1. Training & Learning Policy",
    blocks: [
      { type: "paragraph", text: "TheMindRise.AI offers both:" },
      {
        type: "list",
        items: ["Live Instructor-Led Bootcamps", "Self-Paced Online Courses"],
      },
      {
        type: "paragraph",
        text: "Course content, schedules, instructors, and learning materials may be updated periodically to reflect the latest advancements in Artificial Intelligence.",
      },
      {
        type: "paragraph",
        text: "Participants are expected to attend sessions professionally and use learning materials solely for personal educational purposes.",
      },
    ],
  },
  {
    id: "registration",
    title: "2. Registration Policy",
    blocks: [
      { type: "paragraph", text: "Enrollment is confirmed only after successful payment." },
      {
        type: "paragraph",
        text: "Participants will receive access instructions via their registered email.",
      },
      {
        type: "paragraph",
        text: "Please ensure that your contact information is accurate during registration.",
      },
    ],
  },
  {
    id: "payment",
    title: "3. Payment Policy",
    blocks: [
      { type: "paragraph", text: "All payments are processed through secure payment gateways." },
      {
        type: "paragraph",
        text: "Prices displayed on the website are subject to change without prior notice.",
      },
      { type: "paragraph", text: "Applicable taxes will be charged as per local regulations." },
    ],
  },
  {
    id: "refund",
    title: "4. Refund Policy",
    blocks: [
      { type: "subheading", text: "Live Bootcamps" },
      {
        type: "paragraph",
        text: "Refund requests made at least 7 days before the scheduled start date are eligible for a full refund.",
      },
      {
        type: "paragraph",
        text: "Refund requests made within 7 days of the bootcamp may not be eligible for a refund due to resource planning and seat allocation.",
      },
      {
        type: "paragraph",
        text: "If TheMindRise.AI cancels or reschedules a program, participants may choose either:",
      },
      { type: "list", items: ["A full refund, or", "Transfer to a future batch."] },
      { type: "subheading", text: "Self-Paced Courses" },
      {
        type: "paragraph",
        text: "Because learners receive immediate access to digital content, self-paced course purchases are generally non-refundable.",
      },
      {
        type: "paragraph",
        text: "However, exceptional cases may be reviewed at the sole discretion of TheMindRise.AI.",
      },
    ],
  },
  {
    id: "course-access",
    title: "5. Course Access Policy",
    blocks: [
      {
        type: "paragraph",
        text: "Self-paced courses include access as specified on the course page.",
      },
      {
        type: "paragraph",
        text: "Access duration, downloadable resources, certificates, and updates may vary depending on the course.",
      },
    ],
  },
  {
    id: "certification",
    title: "6. Certification Policy",
    blocks: [
      {
        type: "paragraph",
        text: "Certificates are issued only after successfully meeting the completion requirements specified for each course or program.",
      },
      { type: "paragraph", text: "Completion criteria may include:" },
      {
        type: "list",
        items: ["Watching course content", "Assignments", "Quizzes", "Projects", "Assessments"],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    blocks: [
      {
        type: "paragraph",
        text: "All course content, presentations, videos, code, templates, assessments, documents, and learning materials are the intellectual property of TheMindRise.AI.",
      },
      {
        type: "paragraph",
        text: "Participants may not reproduce, distribute, sell, record, or share any content without prior written permission.",
      },
      {
        type: "paragraph",
        text: "Unauthorized distribution may result in termination of access and legal action where applicable.",
      },
    ],
  },
  {
    id: "code-of-conduct",
    title: "8. Code of Conduct",
    blocks: [
      {
        type: "paragraph",
        text: "We are committed to maintaining a respectful and professional learning environment.",
      },
      { type: "paragraph", text: "Participants are expected to:" },
      {
        type: "list",
        items: [
          "Respect instructors and fellow learners.",
          "Avoid abusive, discriminatory, or inappropriate behavior.",
          "Refrain from disrupting live sessions or online communities.",
        ],
      },
      {
        type: "paragraph",
        text: "Violation of these standards may result in suspension or removal without refund.",
      },
    ],
  },
  {
    id: "ai-products",
    title: "9. AI Products Policy",
    blocks: [
      {
        type: "paragraph",
        text: "AI-powered products provided by TheMindRise.AI, including Dhiti.ai and future AI applications, are designed to assist users in making informed decisions.",
      },
      {
        type: "paragraph",
        text: "Recommendations generated by AI should be considered as guidance and not as guarantees of career outcomes, employment, admissions, or business success.",
      },
      { type: "paragraph", text: "Users remain responsible for their own decisions." },
    ],
  },
  {
    id: "consulting-services",
    title: "10. Consulting Services Policy",
    blocks: [
      {
        type: "paragraph",
        text: "Consulting engagements are governed by mutually agreed project proposals, statements of work (SOW), or service agreements.",
      },
      {
        type: "paragraph",
        text: "Project timelines, deliverables, pricing, confidentiality, and intellectual property terms will be defined separately for each engagement.",
      },
    ],
  },
  {
    id: "privacy-data-protection",
    title: "11. Privacy & Data Protection",
    blocks: [
      {
        type: "paragraph",
        text: "We value your privacy and are committed to protecting your personal information.",
      },
      {
        type: "paragraph",
        text: "Personal data is collected only for legitimate business purposes such as:",
      },
      {
        type: "list",
        items: [
          "Course registration",
          "Customer support",
          "Payment processing",
          "Learning progress",
          "Product improvements",
          "Communication regarding our services",
        ],
      },
      { type: "paragraph", text: "We do not sell personal information to third parties." },
      {
        type: "paragraph",
        text: "For more details, please refer to our Privacy Policy.",
      },
    ],
  },
  {
    id: "website-usage",
    title: "12. Website Usage",
    blocks: [
      { type: "paragraph", text: "Users agree not to:" },
      {
        type: "list",
        items: [
          "Attempt unauthorized access to our systems.",
          "Upload malicious software.",
          "Misuse website functionality.",
          "Copy or scrape website content without permission.",
        ],
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "13. Limitation of Liability",
    blocks: [
      {
        type: "paragraph",
        text: "While we strive to provide accurate, high-quality educational content and AI solutions, TheMindRise.AI does not guarantee specific employment outcomes, salary increases, business performance, or project success.",
      },
      {
        type: "paragraph",
        text: "Our services are intended to support learning, decision-making, and professional development.",
      },
    ],
  },
  {
    id: "updates",
    title: "14. Updates to Policies",
    blocks: [
      {
        type: "paragraph",
        text: "TheMindRise.AI reserves the right to update these policies at any time.",
      },
      { type: "paragraph", text: "The latest version will always be available on our website." },
    ],
  },
];

export const policyContact = {
  title: "Contact Us",
  paragraph: "For questions regarding these policies, please contact us.",
  companyName: "TheMindRise.AI",
  email: "support@themindrise.ai",
  website: "www.themindrise.ai",
  thankYou:
    "Thank you for choosing TheMindRise.AI as your partner in learning, innovation, and AI transformation.",
};
