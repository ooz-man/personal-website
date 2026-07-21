type ResearchDomain = {
  title: string;
  description: string;
};

type EngineeringDivision = {
  title: string;
  description: string;
};

type Initiative = {
  name: string;
  status: "Live" | "In Development" | "Research" | "Prototype";
  description: string;
  technologies: string[];
};

const researchDomains: ResearchDomain[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Applied AI, intelligent agents, retrieval systems, LLM integration, automation, and decision-support technologies.",
  },
  {
    title: "Software Engineering",
    description:
      "Scalable enterprise software, cloud-native applications, distributed systems, and reusable platforms.",
  },
  {
    title: "Criminology Research",
    description:
      "Applying criminological theory to intelligence analysis, public safety, behavioural systems, and digital investigations.",
  },
  {
    title: "Cybersecurity & Intelligence",
    description:
      "Threat intelligence, operational security, OSINT, risk analysis, and secure digital infrastructure.",
  },
  {
    title: "Automation",
    description:
      "Business process automation, AI workflows, API orchestration, and operational efficiency.",
  },
  {
    title: "Digital Infrastructure",
    description:
      "Shared cloud architecture, authentication, storage, analytics, notifications, and platform services.",
  },
];

const engineeringDivisions: EngineeringDivision[] = [
  {
    title: "AI Engineering",
    description: "Building intelligent systems powered by modern AI models.",
  },
  {
    title: "Platform Engineering",
    description: "Shared infrastructure powering every CMR product.",
  },
  {
    title: "Backend Engineering",
    description: "Fast, scalable APIs and distributed services.",
  },
  {
    title: "Frontend Engineering",
    description: "Modern interfaces focused on usability and performance.",
  },
  {
    title: "Infrastructure Engineering",
    description: "Cloud deployment, monitoring, networking, and scalability.",
  },
  {
    title: "Security Engineering",
    description: "Security-first architecture, RBAC, authentication, and resilience.",
  },
];

const initiatives: Initiative[] = [
  {
    name: "CMR Hospitality Suite",
    status: "In Development",
    description:
      "A multi-tenant hospitality operating platform combining reservations, AI concierge, CRM, analytics, payments, and operational management.",
    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "TypeScript",
      "Claude AI",
    ],
  },
  {
    name: "CMR Intelligence Platform",
    status: "Research",
    description:
      "An intelligence and decision-support platform integrating OSINT, NLP, behavioural analysis, and risk scoring.",
    technologies: [
      "Python",
      "FastAPI",
      "Telethon",
      "PostgreSQL",
      "Machine Learning",
    ],
  },
  {
    name: "CMR Verification Bot",
    status: "Live",
    description:
      "Production Telegram verification platform with onboarding automation and administration tools.",
    technologies: [
      "Python",
      "Telegram Bot API",
      "FastAPI",
      "PostgreSQL",
    ],
  },
  {
    name: "CMRTrendBot",
    status: "Prototype",
    description:
      "AI-powered trend discovery, summarisation, and content intelligence delivered through Telegram.",
    technologies: [
      "Python",
      "Claude",
      "FastAPI",
      "Telegram",
    ],
  },
];

const engineeringPrinciples = [
  "Cloud Native",
  "API First",
  "Multi-Tenant",
  "AI Native",
  "Secure by Design",
  "Privacy First",
  "Modular Architecture",
  "Documentation First",
  "Testing Culture",
  "Continuous Delivery",
];

<section className="space-y-8">

<p className="uppercase tracking-[0.25em] text-[#1E90FF] text-sm">
Engineering & Applied Research
</p>

<h1 className="text-6xl font-bold">
CMR Labs
</h1>

<p className="max-w-3xl text-lg leading-8 text-[#8A9BB0]">
CMR Labs is the engineering, artificial intelligence, and applied
research laboratory of CMR Group.

We research, design, prototype, and engineer intelligent software,
automation platforms, and digital infrastructure that power the next
generation of CMR products.
</p>

</section>

<section>

<h2>Looking Ahead</h2>

<p>
CMR Labs exists to bridge research and engineering.

Our ambition is to become one of Africa's leading applied research
laboratories—where artificial intelligence, software engineering,
criminology, cybersecurity, and digital infrastructure converge to solve
real operational challenges.

Every technology we develop contributes to the long-term vision of CMR
Group: building intelligent infrastructure for the industries of
tomorrow.
</p>

</section>
