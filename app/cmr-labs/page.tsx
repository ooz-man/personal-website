"use client";

type InitiativeStatus = "Active" | "Prototype" | "Research" | "Planned";

const researchDomains = [
  {
    title: "Applied Artificial Intelligence",
    description:
      "Large language model integration, AI concierge systems, and automated content generation for real operational products — not research for its own sake.",
  },
  {
    title: "Digital Intelligence & OSINT",
    description:
      "Open-source intelligence pipelines for crime monitoring and risk analysis across Nigeria and West Africa, combining criminology with data engineering.",
  },
  {
    title: "Conversational & Bot Systems",
    description:
      "Telegram-native automation, onboarding flows, and multi-tier bot products built for reliability at scale on constrained infrastructure.",
  },
  {
    title: "Multi-Tenant SaaS Architecture",
    description:
      "Config-driven platforms that let a single codebase serve many businesses, from hospitality to media, without forking per-client complexity.",
  },
];

const engineeringDivisions = [
  {
    title: "Product Engineering",
    description:
      "Next.js, React, and TypeScript platforms shipped from prototype to production, including RBAC, billing, and multi-tenant configuration.",
  },
  {
    title: "Backend & Infrastructure",
    description:
      "FastAPI services, PostgreSQL data layers, and deployment pipelines across Render, Vercel, and Supabase.",
  },
  {
    title: "AI Systems Integration",
    description:
      "Anthropic Claude-powered concierge, scripting, and analysis features embedded directly into client-facing products.",
  },
  {
    title: "Automation & Bots",
    description:
      "Telegram bot infrastructure covering verification, alerts, subscription tiers, and admin dashboards.",
  },
  {
    title: "Payments & Identity",
    description:
      "JWT authentication, role-based permissions, and Paystack-driven billing built for African market conditions.",
  },
  {
    title: "Security & Monitoring",
    description:
      "Sentry-backed observability, captcha-protected onboarding, and defensive patterns drawn from criminology-informed threat modeling.",
  },
];

const initiatives: {
  name: string;
  status: InitiativeStatus;
  description: string;
  technologies: string[];
}[] = [
  {
    name: "CMR Hospitality Suite",
    status: "Active",
    description:
      "Multi-tenant hotel management SaaS with a config-driven landing page platform, 20+ dashboard pages, and a four-tier subscription model.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Paystack"],
  },
  {
    name: "CMRTrendBot",
    status: "Active",
    description:
      "Telegram bot delivering trending news, scripting, and scheduling tools for the StillTrending content brand.",
    technologies: ["Python 3.11", "FastAPI", "asyncpg", "Claude"],
  },
  {
    name: "CMR Verification Bot",
    status: "Active",
    description:
      "Onboarding and verification bot with math captcha, admin controls, and a dark-themed monitoring dashboard.",
    technologies: ["FastAPI", "Telegram Bot API", "PostgreSQL"],
  },
  {
    name: "Digital Intelligence Platform",
    status: "Research",
    description:
      "Telegram-sourced crime and fraud pattern monitoring pipeline for Nigeria and West Africa, from ingestion to risk scoring.",
    technologies: ["Telethon", "NLP", "PostgreSQL"],
  },
];

const statusColor: Record<InitiativeStatus, string> = {
  Active: "#3FBF77",
  Prototype: "#1E90FF",
  Research: "#D9A441",
  Planned: "#8A9BB0",
};

const technologyStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Python", "Node.js"],
  },
  {
    category: "Data & Storage",
    items: ["PostgreSQL", "Supabase", "asyncpg"],
  },
  {
    category: "AI & Intelligence",
    items: ["Anthropic Claude", "Whisper", "NLP Pipelines"],
  },
  {
    category: "Infrastructure",
    items: ["Vercel", "Render", "Sentry"],
  },
  {
    category: "Payments & Messaging",
    items: ["Paystack", "Resend", "Telegram Bot API"],
  },
];

const engineeringPrinciples = [
  "Security by default",
  "Config over duplication",
  "Ship production, not demos",
  "Design for African market constraints",
  "Observable systems",
  "Iterate from real usage",
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        {/* Hero */}
        <section className="max-w-4xl">
          <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
            CMR Labs
          </p>
          <h1 className="text-5xl font-bold mt-4 leading-tight">
            The Engineering & Applied Research Laboratory of CMR Group
          </h1>
          <p className="mt-6 text-[#8A9BB0] leading-8 text-lg">
            We research, prototype, and ship intelligent software for
            African markets — turning ideas into infrastructure, one
            product at a time.
          </p>
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
            <h2 className="text-3xl font-bold mt-3">Where We Focus</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {researchDomains.map((domain) => (
              <div
                key={domain.title}
                className="border border-[#1E3A5F] rounded-xl p-8 hover:border-[#1E90FF] transition-colors"
              >
                <h3 className="text-xl font-semibold">{domain.title}</h3>
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
                <h3 className="font-semibold text-lg">{division.title}</h3>
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
                  <p className="text-sm font-medium">{step}</p>
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
            <h2 className="text-3xl font-bold mt-3">Research In Progress</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {initiatives.map((project) => (
              <div
                key={project.name}
                className="border border-[#1E3A5F] rounded-xl p-8 space-y-6"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
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
            <h2 className="text-3xl font-bold mt-3">Tools We Build With</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyStack.map((stack) => (
              <div
                key={stack.category}
                className="border border-[#1E3A5F] rounded-xl p-8"
              >
                <h3 className="font-semibold">{stack.category}</h3>
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

        {/* Engineering Principles */}
        <section className="space-y-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Engineering Principles
            </p>
            <h2 className="text-3xl font-bold mt-3">How We Build</h2>
            <p className="mt-4 max-w-3xl text-[#8A9BB0] leading-8">
              Every technology developed at CMR Labs follows a consistent set
              of engineering principles. These standards ensure our platforms
              remain secure, scalable, maintainable, and ready for future
              innovation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {engineeringPrinciples.map((principle) => (
              <span
                key={principle}
                className="px-5 py-3 rounded-full border border-[#1E3A5F] bg-[#10233F] text-[#A8C4E8] hover:border-[#1E90FF] transition-colors"
              >
                {principle}
              </span>
            ))}
          </div>
        </section>

        {/* Looking Ahead */}
        <section className="border-t border-[#1E3A5F] pt-20">
          <div className="max-w-4xl space-y-8">
            <div>
              <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
                Looking Ahead
              </p>
              <h2 className="text-4xl font-bold mt-3">
                Building the Technology of Tomorrow
              </h2>
            </div>
            <p className="text-[#8A9BB0] leading-8 text-lg">
              CMR Labs exists to bridge research and engineering.
            </p>
            <p className="text-[#8A9BB0] leading-8">
              Our ambition is to become one of Africa&apos;s leading applied
              research laboratories—where artificial intelligence, software
              engineering, criminology, cybersecurity, automation, and digital
              infrastructure converge to solve meaningful operational
              challenges.
            </p>
            <p className="text-[#8A9BB0] leading-8">
              We believe innovation should not remain inside research papers or
              prototypes. Every idea should evolve into practical technology
              capable of improving businesses, institutions, governments, and
              communities.
            </p>
            <blockquote className="border-l-2 border-[#1E90FF] pl-6 italic text-xl text-white leading-relaxed">
              Every technology we develop contributes to the long-term vision
              of CMR Group: building intelligent infrastructure for the
              industries of tomorrow.
            </blockquote>
          </div>
        </section>

        {/* Footer Statement */}
        <section className="border-t border-[#1E3A5F] pt-12">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#1E90FF]">
              CMR Labs
            </p>
            <p className="mt-6 text-[#8A9BB0] leading-8">
              The Engineering & Applied Research Laboratory of CMR Group.
            </p>
            <p className="mt-4 text-[#8A9BB0] leading-8">
              Researching. Engineering. Innovating. Delivering intelligent
              software, AI systems, and digital infrastructure for the next
              generation of enterprise technology.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
