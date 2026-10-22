
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMR Labs",
  description:
    "Explore CMR Labs, the engineering division within the emerging CMR portfolio, focused on software engineering, AI automation, workflow systems, and product development.",
};

const focus = [
  "AI Research & Experimentation",
  "Software Engineering",
  "AI Automation & Workflow Systems",
  "Open-Source Projects",
  "Prototype Development",
  "Product Innovation",
  "Technical Documentation",
];

const projects = [
  {
    name: "CMR Verification Bot",
    status: "Live",
    description:
      "A Telegram onboarding and verification bot featuring multi-step flows, a maths CAPTCHA, administrative commands, and an admin dashboard.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Render"],
  },
  {
    name: "Parkview Hotel Abuja — Website",
    status: "Completed",
    description:
      "A hotel website featuring a booking form, room categories, event halls, amenities, and an AI concierge chat interface.",
    stack: ["HTML", "CSS", "JavaScript", "Anthropic API"],
  },
  {
    name: "CMRTrendBot",
    status: "In Development",
    description:
      "A Telegram bot initiative for trending-content discovery and AI-powered summaries delivered to subscribers. The exact integration and release scope will be documented as development progresses.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Claude AI", "Telegram Bot API"],
  },
  {
    name: "CMR Hospitality Suite",
    status: "In Development",
    description:
      "A hospitality management platform initiative covering hotel operations, reservations, guest management, payments, staff workflows, reporting, and AI-assisted guest support. Individual features should be identified as implemented, in progress, or planned in the technical documentation.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Paystack"],
  },
  {
    name: "CMR Intelligence Platform",
    status: "Research Phase",
    description:
      "An AI-assisted intelligence and decision-support concept exploring OSINT integration, natural-language processing, and risk scoring for Nigerian and West African contexts.",
    stack: ["Python", "OSINT", "NLP", "PostgreSQL"],
  },
];

const statusStyles: Record<string, string> = {
  Live: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10",
  "In Development":
    "border-blue-400/40 text-blue-300 bg-blue-400/10",
  Completed: "border-cyan-400/40 text-cyan-300 bg-cyan-400/10",
  "Research Phase":
    "border-slate-400/40 text-slate-300 bg-slate-400/10",
};

export default function CMRLabs() {
  return (
    <main className="min-h-screen bg-[#0A1628] px-6 py-16 text-[#F0F4F8] md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Introduction */}
        <section className="space-y-7">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl space-y-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8A9BB0]">
                Research & Engineering
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                CMR Labs
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-[#B7C4D3]">
                The engineering division within the emerging CMR Group
                portfolio. CMR Labs focuses on software development, AI
                experimentation, automation, technical research, and the
                development of digital products and internal systems.
              </p>
            </div>

            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border border-[#1E3A5F] bg-white p-4 sm:h-40 sm:w-40">
              <Image
                src="/logos/cmr-labs.jpg"
                alt="CMR Labs logo"
                width={160}
                height={160}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="h-px w-20 bg-[#1687E8]" />

          <p className="max-w-3xl text-sm leading-7 text-[#8A9BB0]">
            This portfolio distinguishes completed work from live systems,
            active development, and research-stage initiatives. Project
            descriptions and technology lists are subject to refinement as
            implementation records are documented.
          </p>
        </section>

        {/* Focus areas */}
        <section className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#42A5FF]">
              What We Work On
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Engineering focus areas
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focus.map((area) => (
              <div
                key={area}
                className="border border-[#1E3A5F] bg-[#0F2040]/50 p-5 text-sm text-[#C4D0DE]"
              >
                {area}
              </div>
            ))}
          </div>
        </section>

        {/* Project portfolio */}
        <section className="space-y-7">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#42A5FF]">
              Project Portfolio
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              From implementation to research
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#8A9BB0]">
              Explore the systems and initiatives associated with CMR Labs,
              including their current status and principal technologies.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col gap-5 border border-[#1E3A5F] bg-[#0D1C33] p-6 sm:p-8"
              >
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>

                  <span
                    className={`inline-flex shrink-0 items-center border px-3 py-1 text-xs ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="flex-1 text-sm leading-7 text-[#A9B8C9]">
                  {project.description}
                </p>

                <div className="space-y-3 border-t border-[#1E3A5F] pt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#7187A0]">
                    Technology & tools
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="border border-[#244363] bg-[#102541] px-2.5 py-1 text-xs text-[#9CCBEB]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Documentation */}
        <section className="border border-[#1E3A5F] bg-[#0D1C33] p-7 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#42A5FF]">
            Engineering Records
          </p>

          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Technical documentation
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-[#A9B8C9]">
            Technical documentation will provide a structured record of
            project architecture, system components, APIs, data models,
            deployment procedures, security considerations, implementation
            progress, and engineering decisions. Documentation will be added
            as each project&apos;s records are prepared.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="border border-[#244363] px-3 py-2 text-sm text-[#C4D0DE]">
              Architecture & design
            </span>
            <span className="border border-[#244363] px-3 py-2 text-sm text-[#C4D0DE]">
              APIs & integrations
            </span>
            <span className="border border-[#244363] px-3 py-2 text-sm text-[#C4D0DE]">
              Deployment & operations
            </span>
            <span className="border border-[#244363] px-3 py-2 text-sm text-[#C4D0DE]">
              Security & testing
            </span>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-[#1E3A5F] pt-10">
          <h2 className="text-2xl font-semibold">
            Have an engineering project in mind?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-[#8A9BB0]">
            For technical collaboration, product enquiries, or project
            discussions, contact CMR Group.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#1687E8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0874CE]"
            >
              Contact CMR Group
            </Link>

            <Link
              href="/ventures"
              className="inline-flex items-center border border-[#34506E] px-5 py-3 text-sm font-semibold text-[#D4E0EC] transition hover:bg-[#132944]"
            >
              Explore the portfolio
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
