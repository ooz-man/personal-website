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

type TechCategory = {
  category: string;
  items: string[];
};

const researchDomains: ResearchDomain[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Research and engineering of intelligent agents, LLM integrations, retrieval systems, automation, recommendation engines, and decision-support technologies.",
  },
  {
    title: "Software Engineering",
    description:
      "Designing scalable enterprise software, reusable architectures, cloud-native platforms, APIs, and distributed systems.",
  },
  {
    title: "Criminology Research",
    description:
      "Applying criminological theory to intelligence analysis, behavioural modelling, public safety, digital investigations, and operational strategy.",
  },
  {
    title: "Cybersecurity & Intelligence",
    description:
      "Threat intelligence, operational security, OSINT, secure architecture, digital resilience, and organizational risk analysis.",
  },
  {
    title: "Automation",
    description:
      "Workflow automation, AI orchestration, process optimisation, API integrations, and operational efficiency.",
  },
  {
    title: "Digital Infrastructure",
    description:
      "Shared cloud infrastructure, authentication, storage, notifications, analytics, billing, and reusable platform services.",
  },
];

const engineeringDivisions: EngineeringDivision[] = [
  {
    title: "AI Engineering",
    description:
      "Developing intelligent software powered by modern language models and machine learning.",
  },
  {
    title: "Platform Engineering",
    description:
      "Building reusable infrastructure powering every CMR product.",
  },
  {
    title: "Backend Engineering",
    description:
      "Scalable APIs, databases, authentication, and enterprise services.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Modern user interfaces focused on usability, accessibility, and performance.",
  },
  {
    title: "Infrastructure Engineering",
    description:
      "Cloud deployment, monitoring, networking, storage, and scalability.",
  },
  {
    title: "Security Engineering",
    description:
      "Security-first architecture including RBAC, authentication, encryption, and resilience.",
  },
];

const initiatives: Initiative[] = [
  {
    name: "CMR Hospitality Suite",
    status: "In Development",
    description:
      "A multi-tenant hospitality operating platform combining reservations, AI concierge, CRM, payments, analytics, and hotel operations.",
    technologies: [
      "Next.js",
      "FastAPI",
      "TypeScript",
      "PostgreSQL",
      "Claude AI",
    ],
  },
  {
    name: "CMR Intelligence Platform",
    status: "Research",
    description:
      "An intelligence and decision-support platform integrating OSINT, NLP, behavioural analysis, and operational risk scoring.",
    technologies: [
      "Python",
      "FastAPI",
      "Telethon",
      "Machine Learning",
      "PostgreSQL",
    ],
  },
  {
    name: "CMR Verification Bot",
    status: "Live",
    description:
      "Production Telegram verification platform with onboarding automation, verification workflows, and administration tools.",
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
      "AI-powered trend discovery and summarisation platform delivering intelligent content through Telegram.",
    technologies: [
      "Python",
      "Claude AI",
      "Telegram",
      "FastAPI",
    ],
  },
];

const technologyStack: TechCategory[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Python", "Node.js"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    category: "Artificial Intelligence",
    items: ["Claude", "OpenAI", "Gemini"],
  },
  {
    category: "Cloud",
    items: ["Vercel", "Render", "DigitalOcean"],
  },
];

const engineeringPrinciples = [
  "Cloud Native",
  "API First",
  "Multi-Tenant",
  "AI Native",
  "Secure by Design",
  "Privacy First",
  "Documentation First",
  "Testing Culture",
  "Continuous Integration",
  "Continuous Delivery",
];

const statusColor: Record<Initiative["status"], string> = {
  Live: "#00C896",
  "In Development": "#1E90FF",
  Prototype: "#F4B400",
  Research: "#8A9BB0",
};

export default function CMRLabs() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Hero */}

        <section className="space-y-8">

          <div className="space-y-4">

            <p className="uppercase tracking-[0.25em] text-[#1E90FF] text-sm font-medium">
              Engineering & Applied Research
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              CMR Labs
            </h1>

            <div className="h-px w-20 bg-[#1E90FF]" />

          </div>

          <p className="max-w-3xl text-lg leading-8 text-[#8A9BB0]">
            CMR Labs is the engineering, artificial intelligence, and applied
            research laboratory of CMR Group.
          </p>

          <p className="max-w-4xl leading-8 text-[#8A9BB0]">
            We research, design, prototype, engineer, and deploy intelligent
            software, automation platforms, cloud infrastructure, and scalable
            enterprise technologies that power the next generation of CMR
            products. Every solution we develop begins with research and ends
            with practical technology capable of solving real operational
            challenges.
          </p>

        </section>

        {/* Who We Are */}

        <section className="grid md:grid-cols-[220px_1fr] gap-12 border-t border-[#1E3A5F] pt-16">

          <div>

            <h2 className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Who We Are
            </h2>

          </div>

          <div className="space-y-6 text-[#8A9BB0] leading-8">

            <p>
              CMR Labs exists to bridge the gap between research and engineering.
              We believe meaningful innovation happens when rigorous research,
              intelligent software, and practical implementation work together.
            </p>

            <p>
              Our multidisciplinary work spans artificial intelligence,
              software engineering, cloud computing, cybersecurity,
              criminology, automation, behavioural systems, and digital
              infrastructure.
            </p>

            <p>
              Rather than building isolated applications, we engineer reusable
              technologies, shared services, and scalable multi-tenant
              platforms that become the foundation for future CMR products.
            </p>

          </div>

        </section>

                {/* Research Philosophy */}

        <section className="border-t border-[#1E3A5F] pt-16">

          <div className="max-w-4xl mx-auto">

            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Research Philosophy
            </p>

            <blockquote className="mt-10 border-l-2 border-[#1E90FF] pl-8 space-y-6">

              <p className="text-2xl font-semibold leading-relaxed">
                Every product begins as research.
              </p>

              <p className="text-[#8A9BB0] leading-8">
                Every research project becomes a prototype.
              </p>

              <p className="text-[#8A9BB0] leading-8">
                Every prototype becomes an experiment.
              </p>

              <p className="text-[#8A9BB0] leading-8">
                Successful experiments become products.
              </p>

              <p className="text-[#8A9BB0] leading-8">
                Successful products become platforms.
              </p>

              <p className="text-[#8A9BB0] leading-8">
                Successful platforms become infrastructure.
              </p>

            </blockquote>

          </div>

        </section>

        {/* Research Domains */}

        <section className="space-y-10">

          <div>

            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Research Domains
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Where We Focus
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {researchDomains.map((domain) => (

              <div
                key={domain.title}
                className="border border-[#1E3A5F] rounded-xl p-8 hover:border-[#1E90FF] transition-colors"
              >

                <h3 className="text-xl font-semibold">
                  {domain.title}
                </h3>

                <p className="mt-4 text-[#8A9BB0] leading-8">
                  {domain.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Engineering Divisions */}

        <section className="space-y-10">

          <div>

            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Engineering Divisions
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Building Production Systems
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {engineeringDivisions.map((division) => (

              <div
                key={division.title}
                className="border border-[#1E3A5F] rounded-xl p-8"
              >

                <h3 className="font-semibold text-lg">
                  {division.title}
                </h3>

                <p className="mt-4 text-[#8A9BB0] leading-8">
                  {division.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Innovation Pipeline */}

        <section className="border border-[#1E3A5F] rounded-xl p-10">

          <div className="space-y-10">

            <div>

              <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
                Innovation Pipeline
              </p>

              <h2 className="text-3xl font-bold mt-3">
                How Ideas Become Platforms
              </h2>

            </div>

            <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-4">

              {[
                "Research",
                "Experiment",
                "Prototype",
                "Validation",
                "Engineering",
                "Testing",
                "Deployment",
                "Iteration",
              ].map((step) => (

                <div
                  key={step}
                  className="border border-[#1E3A5F] rounded-lg p-4 text-center"
                >

                  <p className="text-sm font-medium">
                    {step}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Current Initiatives */}

        <section className="space-y-10">

          <div>

            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Current Initiatives
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Research In Progress
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {initiatives.map((project) => (

              <div
                key={project.name}
                className="border border-[#1E3A5F] rounded-xl p-8 space-y-6"
              >

                <div className="flex justify-between items-start gap-4">

                  <h3 className="text-xl font-semibold">
                    {project.name}
                  </h3>

                  <span
                    className="text-xs px-3 py-1 rounded-full border"
                    style={{
                      color: statusColor[project.status],
                      borderColor: statusColor[project.status],
                    }}
                  >
                    {project.status}
                  </span>

                </div>

                <p className="text-[#8A9BB0] leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="text-xs bg-[#10233F] text-[#A8C4E8] px-3 py-2 rounded-full"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Technology Stack */}

        <section className="space-y-10">

          <div>

            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Technology Stack
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Tools We Build With
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {technologyStack.map((stack) => (

              <div
                key={stack.category}
                className="border border-[#1E3A5F] rounded-xl p-8"
              >

                <h3 className="font-semibold">
                  {stack.category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">

                  {stack.items.map((item) => (

                    <span
                      key={item}
                      className="bg-[#10233F] text-[#8DB8FF] px-3 py-2 rounded-full text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>
