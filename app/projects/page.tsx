// app/projects/page.tsx

interface Platform {
  name: string;
  status: "In Development" | "Planned" | "Research Phase" | "Live";
  category: string;
  description: string;
  capabilities: string[];
  stack: string[];
}

interface ResearchArea {
  title: string;
  description: string;
}

interface InternalProduct {
  name: string;
  status: "In Development" | "Live" | "Completed";
  description: string;
  stack: string[];
}

interface ClientSolution {
  name: string;
  client: string;
  status: "Completed";
  outcome: string;
  stack: string[];
}

interface TechCategory {
  label: string;
  items: string[];
}

// ── Data ──────────────────────────────────────────────────────────────────────

const platforms: Platform[] = [
  {
    name: "CMR Hospitality Suite",
    status: "In Development",
    category: "Enterprise Platform",
    description:
      "An AI-powered hospitality operations platform for hotels and accommodation providers. Covers end-to-end operational management — from reservations and guest profiling to staff administration, revenue analytics, and AI-driven concierge automation.",
    capabilities: [
      "Multi-property reservation management",
      "AI concierge & guest communication",
      "Staff scheduling & RBAC (7 roles, 27 permissions)",
      "Revenue analytics & occupancy forecasting",
      "Paystack payment integration",
      "Real-time operational dashboard",
    ],
    stack: ["Next.js", "FastAPI", "Supabase", "PostgreSQL", "Claude AI", "Paystack", "Vercel", "Render"],
  },
  {
    name: "CMR Intelligence Platform",
    status: "Research Phase",
    category: "Intelligence Platform",
    description:
      "An AI-powered intelligence and decision-support platform for security agencies and institutions. Integrates OSINT data collection, NLP processing, behavioural analytics, risk scoring, and operational awareness — built for the Nigerian and West African context.",
    capabilities: [
      "OSINT data collection & aggregation",
      "NLP-based threat classification",
      "Behavioural & pattern analytics",
      "Risk scoring & alert systems",
      "Criminological research integration",
      "Secure multi-agency data access",
    ],
    stack: ["Python", "Telethon", "spaCy", "PostgreSQL", "FastAPI", "Claude AI"],
  },
  {
    name: "CMR Legal Suite",
    status: "Planned",
    category: "Enterprise Platform",
    description:
      "A digital operations platform for law firms and legal practices. Streamlines case management, document workflows, client scheduling, billing support, and AI-assisted legal productivity — enabling law firms to operate as modern intelligence-driven practices.",
    capabilities: [
      "Case & matter management",
      "Document workflow automation",
      "Client portal & scheduling",
      "AI-assisted document drafting",
      "Billing & time tracking",
      "Compliance & audit trail",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Claude AI", "Supabase"],
  },
  {
    name: "CMR Commerce Suite",
    status: "Planned",
    category: "Enterprise Platform",
    description:
      "A business operations and commerce platform for retailers and growing businesses. Covers inventory management, order processing, customer relationship management, sales analytics, and multi-channel commerce in a single unified platform.",
    capabilities: [
      "Inventory & stock management",
      "Multi-channel order processing",
      "Customer relationship management",
      "Sales analytics & forecasting",
      "Supplier & procurement workflows",
      "POS integration",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Paystack"],
  },
];

const researchAreas: ResearchArea[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Applied AI research focused on building practical intelligence into operational software — autonomous agents, decision-support systems, and AI-native product architecture.",
  },
  {
    title: "OSINT & Data Intelligence",
    description:
      "Open-source intelligence collection pipelines, data aggregation strategies, and structured intelligence workflows for security and investigative contexts.",
  },
  {
    title: "Behavioural Analytics",
    description:
      "Research into digital and physical behavioural patterns to power predictive systems, anomaly detection, and risk modelling across security and enterprise contexts.",
  },
  {
    title: "Criminology",
    description:
      "Applied criminological research informing the design of intelligence systems, security platforms, risk frameworks, and institutional decision-support tools.",
  },
  {
    title: "Cybersecurity",
    description:
      "Secure-by-design architecture principles, threat modelling, access control research, and operational resilience strategies embedded across every CMR platform.",
  },
  {
    title: "Digital Infrastructure",
    description:
      "Research into multi-tenant cloud architecture, scalable API-first design, and the infrastructure patterns required to power next-generation African enterprise platforms.",
  },
];

const internalProducts: InternalProduct[] = [
  {
    name: "CMRTrendBot",
    status: "In Development",
    description:
      "A production Telegram bot serving the StillTrending content brand. Delivers AI-powered news summaries, trending content scripts, and scheduled alerts to subscribers — with a Free/Pro/Agency subscription model.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Claude AI", "Telegram Bot API", "Render"],
  },
  {
    name: "CMR Verification Bot",
    status: "Live",
    description:
      "A production Telegram onboarding and verification system with multi-step verification flows, math captcha, admin commands, and a dark-themed FastAPI admin dashboard. Deployed and live.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Render"],
  },
];

const clientSolutions: ClientSolution[] = [
  {
    name: "Parkview Hotel Abuja — Website",
    client: "Parkview Hotel, Abuja",
    status: "Completed",
    outcome:
      "A full hotel website featuring a booking form with dynamic price estimation, AI concierge chat powered by Claude, tiered room showcases, event hall sections, and full amenities presentation — delivered as a performant single-page application.",
    stack: ["HTML", "CSS", "JavaScript", "Anthropic API"],
  },
];

const techEcosystem: TechCategory[] = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Python", "Node.js", "REST APIs"],
  },
  {
    label: "AI",
    items: ["Claude AI", "Anthropic API", "spaCy", "NLP Pipelines"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "Supabase", "asyncpg"],
  },
  {
    label: "Infrastructure",
    items: ["Vercel", "Render", "Supabase Storage", "Docker"],
  },
  {
    label: "DevOps",
    items: ["GitHub", "Sentry", "Resend", "Paystack"],
  },
];

const methodology = [
  "Observe",
  "Research",
  "Model",
  "Prototype",
  "Validate",
  "Engineer",
  "Deploy",
  "Measure",
  "Iterate",
];

const principles = [
  "Cloud Native",
  "API First",
  "Multi-Tenant",
  "AI Native",
  "Secure by Design",
  "Privacy Focused",
  "Modular Architecture",
  "Documentation First",
  "Testing Culture",
  "Continuous Delivery",
];

// ── Status badge ──────────────────────────────────────────────────────────────

const statusStyles: Record<string, { color: string; border: string }> = {
  Live:             { color: "#00C896", border: "#00C896" },
  "In Development": { color: "#1E90FF", border: "#1E90FF" },
  Completed:        { color: "#4A90A4", border: "#4A90A4" },
  "Research Phase": { color: "#8A9BB0", border: "#8A9BB0" },
  Planned:          { color: "#4A5568", border: "#4A5568" },
};

function StatusBadge({ status }: { status: string }) {
  const s = statusStyles[status] ?? statusStyles["Planned"];
  return (
    <span
      className="text-xs px-2 py-1 border whitespace-nowrap"
      style={{ color: s.color, borderColor: s.border }}
    >
      {status}
    </span>
  );
}

// ── Section label ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#1E90FF] text-sm uppercase tracking-[0.2em] font-medium">
      {children}
    </p>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto space-y-28">

        {/* ── 1. Hero ── */}
        <section className="space-y-6 max-w-4xl">
          <SectionLabel>Engineering Portfolio</SectionLabel>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Platforms, Products
            <br />
            <span className="text-[#1E90FF]">&amp; Research</span>
          </h1>

          <div className="h-px w-16 bg-[#1E90FF]" />

          <p className="text-lg text-[#8A9BB0] leading-9 max-w-3xl">
            Every platform CMR Group engineers originates from applied research conducted at CMR Labs.
            We build to solve real operational challenges — through artificial intelligence, automation,
            software engineering, and scalable cloud infrastructure designed for multi-tenant deployment
            across industries and institutions.
          </p>
        </section>

        {/* ── 2. Featured Enterprise Platforms ── */}
        <section className="space-y-10">
          <SectionLabel>Featured Enterprise Platforms</SectionLabel>

          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="border border-[#1E3A5F] rounded-xl p-8 space-y-5 flex flex-col"
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-[#F0F4F8] font-semibold text-lg">{p.name}</h3>
                    <p className="text-xs text-[#4A90A4] uppercase tracking-widest">{p.category}</p>
                  </div>
                  <StatusBadge status={p.status} />
                </div>

                {/* Description */}
                <p className="text-[#8A9BB0] text-sm leading-7">{p.description}</p>

                {/* Capabilities */}
                <div className="space-y-2">
                  <p className="text-xs text-[#1E90FF] uppercase tracking-widest">Key Capabilities</p>
                  <ul className="space-y-1">
                    {p.capabilities.map((c) => (
                      <li key={c} className="text-sm text-[#8A9BB0] flex gap-2">
                        <span className="text-[#1E3A5F] mt-1">▸</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs text-[#4A90A4] bg-[#0F2040] px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. Research Initiatives ── */}
        <section className="space-y-10">
          <div className="space-y-3">
            <SectionLabel>Research Initiatives</SectionLabel>
            <p className="text-[#8A9BB0] max-w-2xl leading-8 text-sm">
              Research is not a department at CMR — it is the foundation. Every platform we ship
              begins as a research initiative at CMR Labs, ensuring our engineering is grounded in
              real-world operational intelligence rather than assumption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map((r) => (
              <div
                key={r.title}
                className="border border-[#1E3A5F] rounded-xl p-6 space-y-3 hover:border-[#1E90FF]/40 transition-colors"
              >
                <h3 className="text-[#F0F4F8] font-semibold">{r.title}</h3>
                <p className="text-[#8A9BB0] text-sm leading-7">{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Internal Products ── */}
        <section className="space-y-10">
          <div className="space-y-3">
            <SectionLabel>Internal Products</SectionLabel>
            <p className="text-[#8A9BB0] max-w-2xl leading-8 text-sm">
              Operational tools and automation systems built by CMR Labs for internal use,
              audience engagement, and workflow management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {internalProducts.map((p) => (
              <div key={p.name} className="border border-[#1E3A5F] rounded-xl p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[#F0F4F8] font-semibold">{p.name}</h3>
                  <StatusBadge status={p.status} />
                </div>
                <p className="text-[#8A9BB0] text-sm leading-7">{p.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs text-[#4A90A4] bg-[#0F2040] px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Client Solutions ── */}
        <section className="space-y-10">
          <div className="space-y-3">
            <SectionLabel>Client Solutions</SectionLabel>
            <p className="text-[#8A9BB0] max-w-2xl leading-8 text-sm">
              Delivered client-facing projects that demonstrate CMR's engineering capabilities
              in production environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {clientSolutions.map((s) => (
              <div key={s.name} className="border border-[#1E3A5F] rounded-xl p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[#F0F4F8] font-semibold">{s.name}</h3>
                    <p className="text-xs text-[#4A90A4] mt-1">{s.client}</p>
                  </div>
                  <StatusBadge status={s.status} />
                </div>
                <p className="text-[#8A9BB0] text-sm leading-7">{s.outcome}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {s.stack.map((t) => (
                    <span key={t} className="text-xs text-[#4A90A4] bg-[#0F2040] px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Technology Ecosystem ── */}
        <section className="space-y-10">
          <SectionLabel>Technology Ecosystem</SectionLabel>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techEcosystem.map((cat) => (
              <div key={cat.label} className="border border-[#1E3A5F] rounded-xl p-6 space-y-4">
                <p className="text-xs text-[#1E90FF] uppercase tracking-widest font-medium">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-[#8A9BB0] border border-[#1E3A5F] px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Research Methodology ── */}
        <section className="space-y-10">
          <div className="space-y-3">
            <SectionLabel>Research Methodology</SectionLabel>
            <p className="text-[#8A9BB0] max-w-2xl leading-8 text-sm">
              CMR's innovation lifecycle — from identifying a real-world problem to operating
              a production platform at scale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-0">
            {methodology.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="border border-[#1E3A5F] rounded-xl px-5 py-3 text-sm text-[#F0F4F8] font-medium hover:border-[#1E90FF]/50 transition-colors">
                  {step}
                </div>
                {i < methodology.length - 1 && (
                  <span className="text-[#1E3A5F] mx-2 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. Engineering Principles ── */}
        <section className="space-y-8">
          <SectionLabel>Engineering Principles</SectionLabel>

          <div className="flex flex-wrap gap-3">
            {principles.map((p) => (
              <span
                key={p}
                className="border border-[#1E3A5F] rounded-full px-5 py-2 text-sm text-[#8A9BB0] hover:border-[#1E90FF]/40 hover:text-[#F0F4F8] transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* ── 9. Closing Statement ── */}
        <section className="border-t border-[#1E3A5F] pt-16 space-y-8 max-w-4xl">
          <SectionLabel>What We Are Building</SectionLabel>

          <div className="space-y-6 text-[#8A9BB0] leading-9">
            <p>
              CMR Group does not build isolated applications.
            </p>
            <p>
              We build intelligent software ecosystems — platforms where research, engineering,
              artificial intelligence, security, and criminology converge to create scalable
              digital infrastructure for organizations that need to operate smarter, move faster,
              and make better decisions at every level.
            </p>
            <p>
              Our work is designed for Africa — and built to operate beyond it.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#1E90FF] pl-6 italic text-white text-xl leading-9">
            The platforms we build today are the infrastructure Africa's most capable
            organizations will run on tomorrow.
          </blockquote>
        </section>

      </div>
    </main>
  );
}