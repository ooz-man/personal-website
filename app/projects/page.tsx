
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore CMR Labs software projects, AI automation experiments, hospitality technology, intelligence research concepts, and completed client solutions.",
};

type ProjectStatus =
  | "Live"
  | "Completed"
  | "In Development"
  | "Research Phase"
  | "Planned";

interface Platform {
  name: string;
  status: ProjectStatus;
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
  status: "In Development" | "Live";
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

const platforms: Platform[] = [
  {
    name: "CMR Hospitality Suite",
    status: "In Development",
    category: "Hospitality Technology",
    description:
      "An AI-assisted hospitality management platform concept for coordinating reservations, guest records, staff workflows, payments, reporting, and guest support.",
    capabilities: [
      "Reservation and room management",
      "Guest records and relationship management",
      "Staff workflows and role-based access",
      "Operational reporting",
      "Payment integration planning",
      "AI-assisted guest support",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Paystack",
      "Vercel",
      "Render",
    ],
  },
  {
    name: "CMR Intelligence Platform",
    status: "Research Phase",
    category: "Intelligence & Decision Support",
    description:
      "A research-stage concept exploring AI-assisted intelligence analysis and decision support for security and institutional contexts, with consideration for Nigerian and West African use cases.",
    capabilities: [
      "OSINT collection and aggregation concepts",
      "Natural language processing",
      "Pattern and trend analysis",
      "Risk assessment concepts",
      "Criminological research integration",
      "Access control and data governance research",
    ],
    stack: [
      "Python",
      "OSINT",
      "spaCy",
      "PostgreSQL",
      "FastAPI",
      "Claude AI",
    ],
  },
  {
    name: "CMR Legal Suite",
    status: "Planned",
    category: "Legal Operations",
    description:
      "A proposed digital operations platform for legal practices, intended to organize matter management, document workflows, client scheduling, and administrative processes.",
    capabilities: [
      "Case and matter management",
      "Document workflow organization",
      "Client scheduling",
      "Document assistance concepts",
      "Billing and time tracking",
      "Compliance and audit trail concepts",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Supabase"],
  },
  {
    name: "CMR Commerce Suite",
    status: "Planned",
    category: "Commerce & Business Operations",
    description:
      "A proposed business operations platform for retailers and growing businesses, bringing inventory, order management, customer records, and sales reporting into a unified workflow.",
    capabilities: [
      "Inventory and stock management",
      "Order processing",
      "Customer relationship management",
      "Sales reporting",
      "Supplier and procurement workflows",
      "Point-of-sale integration concepts",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Paystack"],
  },
];

const researchAreas: ResearchArea[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Exploring AI-assisted workflows, language models, autonomous-agent concepts, and decision-support features for practical software applications.",
  },
  {
    title: "OSINT & Data Intelligence",
    description:
      "Investigating open-source information collection, data organization, analytical workflows, and responsible intelligence research.",
  },
  {
    title: "Behavioural Analytics",
    description:
      "Exploring pattern analysis, anomaly detection, and risk-modelling approaches, with attention to validation, privacy, and limitations.",
  },
  {
    title: "Criminology & Security",
    description:
      "Connecting criminological knowledge and security research with the design of information systems, risk frameworks, and institutional tools.",
  },
  {
    title: "Cybersecurity & Governance",
    description:
      "Studying secure architecture, threat modelling, access control, auditability, and risk management for digital systems.",
  },
  {
    title: "Digital Infrastructure",
    description:
      "Exploring cloud deployment, API design, modular software, data architecture, and maintainable digital infrastructure.",
  },
];

const internalProducts: InternalProduct[] = [
  {
    name: "CMRTrendBot",
    status: "In Development",
    description:
      "A developing Telegram-based content discovery and automation project intended to support trend monitoring, AI-assisted summaries, content preparation, and scheduled updates.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Claude AI",
      "Telegram Bot API",
      "Render",
    ],
  },
  {
    name: "CMR Verification Bot",
    status: "Live",
    description:
      "A Telegram onboarding and verification bot designed around multi-step verification, mathematical CAPTCHA challenges, and administrator commands, with a FastAPI-based administration interface.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Render"],
  },
];

const clientSolutions: ClientSolution[] = [
  {
    name: "Parkview Hotel Abuja — Website",
    client: "Parkview Hotel, Abuja",
    status: "Completed",
    outcome:
      "A hotel website project featuring room-category showcases, a booking form with price estimation, event-hall information, amenities, and an AI concierge chat interface.",
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
    label: "AI & Language Processing",
    items: ["Claude AI", "Anthropic API", "spaCy", "NLP"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Supabase", "asyncpg"],
  },
  {
    label: "Deployment & Infrastructure",
    items: ["Vercel", "Render", "Docker"],
  },
  {
    label: "Development & Integrations",
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
  "Cloud-Aware Design",
  "API-First",
  "Modular Architecture",
  "Responsible AI",
  "Secure by Design",
  "Privacy Considerations",
  "Documentation",
  "Testing",
  "Maintainability",
  "Continuous Improvement",
];

const statusStyles: Record<
  ProjectStatus,
  { color: string; background: string; border: string }
> = {
  Live: {
    color: "#087F5B",
    background: "#E4F6EE",
    border: "#A8DEC7",
  },
  Completed: {
    color: "#245B78",
    background: "#E8F1F7",
    border: "#C5DCEB",
  },
  "In Development": {
    color: "#1D4D68",
    background: "#E6F0F5",
    border: "#BCD4E1",
  },
  "Research Phase": {
    color: "#785A20",
    background: "#F7F0DE",
    border: "#E8D8AE",
  },
  Planned: {
    color: "#64748B",
    background: "#F1F3F5",
    border: "#DCE3E8",
  },
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = statusStyles[status];

  return (
    <span
      className="inline-flex w-fit shrink-0 items-center border px-3 py-1 text-xs font-medium"
      style={{
        color: style.color,
        backgroundColor: style.background,
        borderColor: style.border,
      }}
    >
      {status}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
      {children}
    </p>
  );
}

function TechnologyTags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="border border-[#DCE3E8] bg-[#F8FAFC] px-3 py-1.5 text-xs text-slate-600"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Platform }) {
  return (
    <article className="flex h-full flex-col border border-[#DCE3E8] bg-white p-6 transition-colors hover:border-[#9AB9CA] md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#64748B]">
            {project.category}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#1A2B3B] md:text-2xl">
            {project.name}
          </h3>
        </div>

        <StatusBadge status={project.status} />
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">
        {project.description}
      </p>

      <div className="mt-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#1D4D68]">
          Scope & intended capabilities
        </p>

        <ul className="space-y-2">
          {project.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#C5A36A]"
              />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#64748B]">
          Technology stack
        </p>
        <TechnologyTags items={project.stack} />
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A2B3B]">
      {/* Hero */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>CMR Labs / Engineering Portfolio</SectionLabel>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Projects, platforms
                <span className="block text-[#1D4D68]">
                  & research.
                </span>
              </h1>

              <div className="mt-8 h-1 w-16 bg-[#C5A36A]" />

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Explore the engineering projects, software products, client
                solutions, and research directions associated with CMR Labs,
                the technology and engineering division within the emerging
                CMR Group portfolio.
              </p>
            </div>

            <aside className="border-l border-[#DCE3E8] pl-6 md:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Portfolio principle
              </p>

              <p className="mt-4 text-xl leading-8">
                Clear project stages. Practical engineering. Responsible
                development.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Each status describes the stage supplied for that project.
                Listed capabilities and technology choices do not necessarily
                mean every feature has been implemented.
              </p>
            </aside>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/cmr-labs"
              className="inline-flex items-center justify-center bg-[#1D4D68] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#153A50]"
            >
              Explore CMR Labs
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#C7D1D9] px-6 py-3 text-sm font-semibold text-[#1A2B3B] transition-colors hover:border-[#1D4D68]"
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise platforms */}
      <section className="border-t border-[#DCE3E8] bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>01 / Platform Portfolio</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Platforms under development and consideration.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These initiatives explore software solutions for hospitality,
              intelligence research, legal operations, and commerce. Their
              status labels distinguish current development from research and
              future plans.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {platforms.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Internal products */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>02 / Software Products</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Bots, automation & workflow tools.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            Software projects focused on onboarding, verification, content
            workflows, and automation. Availability and development stage
            should be assessed individually for each product.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {internalProducts.map((product) => (
              <article
                key={product.name}
                className="border border-[#DCE3E8] bg-white p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <StatusBadge status={product.status} />
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6">
                  <TechnologyTags items={product.stack} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client solution */}
      <section className="border-y border-[#DCE3E8] bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>03 / Client Solutions</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Applied engineering for real-world needs.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            A client-facing website project included in the portfolio.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {clientSolutions.map((solution) => (
              <article
                key={solution.name}
                className="border border-[#DCE3E8] p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#64748B]">
                      {solution.client}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">
                      {solution.name}
                    </h3>
                  </div>

                  <StatusBadge status={solution.status} />
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {solution.outcome}
                </p>

                <div className="mt-6">
                  <TechnologyTags items={solution.stack} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>04 / Research Directions</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions that guide our technical work.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            These are areas of interest and investigation, not claims of
            completed research programmes or validated research findings.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, index) => (
              <article
                key={area.title}
                className="border border-[#DCE3E8] bg-white p-6 transition-colors hover:border-[#9AB9CA]"
              >
                <p className="text-sm font-semibold text-[#C5A36A]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-lg font-semibold">{area.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology ecosystem */}
      <section className="border-y border-[#DCE3E8] bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>05 / Technology Ecosystem</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Tools used across the portfolio.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            The technologies below represent the stated engineering
            ecosystem across projects. Individual projects use different
            subsets of these tools.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techEcosystem.map((category) => (
              <article
                key={category.label}
                className="border border-[#DCE3E8] p-6"
              >
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#1D4D68]">
                  {category.label}
                </h3>

                <TechnologyTags items={category.items} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>06 / Working Method</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            From problem definition to iteration.
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            A proposed engineering workflow for moving from an identified
            problem through research, validation, implementation, and
            continuous improvement.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
            {methodology.map((step, index) => (
              <div
                key={step}
                className="border border-[#DCE3E8] bg-white px-3 py-5 text-center"
              >
                <p className="text-xs text-[#C5A36A]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-[#DCE3E8] bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>07 / Engineering Principles</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            How we aim to approach the work.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {principles.map((principle) => (
              <span
                key={principle}
                className="border border-[#DCE3E8] px-4 py-2 text-sm text-slate-600 transition-colors hover:border-[#9AB9CA] hover:text-[#1A2B3B]"
              >
                {principle}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#0A1628] px-6 py-16 text-white md:px-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C5A36A]">
              CMR Labs
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Engineering with purpose.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Explore the engineering division or get in touch to discuss a
              potential project, technical collaboration, or business inquiry.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/cmr-labs"
              className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-[#0A1628] transition-colors hover:bg-[#F5F4F0]"
            >
              About CMR Labs
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A1628] px-6 pb-6 md:px-12">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-5">
          <p className="text-xs leading-6 text-slate-400">
            CMR Group is an emerging portfolio initiative. Project descriptions
            reflect their stated development stages. Proposed capabilities,
            research directions, and technology stacks should not be interpreted
            as confirmation that every feature or platform is operational.
          </p>
        </div>
      </footer>
    </main>
  );
}
