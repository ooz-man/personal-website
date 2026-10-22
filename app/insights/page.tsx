
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore insights and educational content on criminology, security, technology, AI, research, governance, and business strategy through the emerging CMR portfolio.",
};

const contentAreas = [
  {
    number: "01",
    title: "Criminology & Security",
    description:
      "Educational content exploring crime, criminal behaviour, public safety, security principles, and criminological theories.",
    topics: [
      "Criminological theories",
      "Crime prevention",
      "Private and corporate security",
    ],
  },
  {
    number: "02",
    title: "Technology & AI",
    description:
      "Perspectives on artificial intelligence, automation, software engineering, and technology applied to practical problems.",
    topics: [
      "AI and automation",
      "Digital systems",
      "Technology for operations",
    ],
  },
  {
    number: "03",
    title: "Research & Governance",
    description:
      "Exploration of policy, institutional accountability, research methods, governance, and responsible decision-making.",
    topics: [
      "Research methods",
      "Policy and institutions",
      "Ethics and accountability",
    ],
  },
  {
    number: "04",
    title: "Business & Strategy",
    description:
      "Practical thinking about business development, operations, strategic planning, and building sustainable ventures.",
    topics: [
      "Business operations",
      "Strategic thinking",
      "Venture development",
    ],
  },
];

export default function InsightsPage() {
  return (
    <main className="bg-[#F5F4F0] text-[#1A2B3B]">
      {/* Hero */}
      <section className="border-b border-[#DCE3E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4D68]">
            CMR Studio · Ideas &amp; insights
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Ideas that inform. Research that matters.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            CMR Studio is the media and educational initiative within the
            CMR portfolio. Its intended focus is criminology, security
            awareness, technology, research, and practical ideas that
            encourage informed thinking.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ventures"
              className="inline-flex items-center rounded-full bg-[#1D4D68] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#14394F]"
            >
              Explore the portfolio
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#C8D1D7] px-7 py-3.5 text-sm font-semibold transition-colors hover:border-[#1D4D68]"
            >
              Discuss a collaboration
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial direction */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
            Editorial direction
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Four areas of exploration.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            These themes define the intended scope of CMR Studio&apos;s
            educational and editorial work. They are content directions,
            not a claim that articles, reports, or publications are
            already available.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {contentAreas.map((area) => (
            <article
              key={area.number}
              className="rounded-2xl border border-[#DCE3E8] bg-white p-6 sm:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F2] text-sm font-semibold text-[#1D4D68]">
                {area.number}
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>

              <div className="mt-6 border-t border-[#E5E9EC] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1D4D68]">
                  Topics of interest
                </p>

                <ul className="mt-4 space-y-3">
                  {area.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-[#1D4D68]"
                      >
                        →
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 lg:gap-16 lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
              Our approach
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Substance before speculation.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The intended approach combines clear explanations, critical
              thinking, responsible use of evidence, and practical relevance.
              Content should distinguish established facts from opinions,
              emerging ideas, and questions that require further research.
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCE3E8] bg-[#F8F8F5] p-6 sm:p-8">
            <h3 className="text-xl font-semibold">
              Editorial principles
            </h3>

            <ul className="mt-6 space-y-5">
              <li>
                <p className="font-semibold">Evidence-led thinking</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Use credible sources and distinguish evidence from
                  interpretation.
                </p>
              </li>

              <li>
                <p className="font-semibold">Ethical communication</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Treat sensitive issues responsibly and avoid presenting
                  allegations as established facts.
                </p>
              </li>

              <li>
                <p className="font-semibold">Practical education</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Explain complex subjects in a clear, accessible, and
                  useful way.
                </p>
              </li>

              <li>
                <p className="font-semibold">Continuous learning</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Remain open to new evidence, critical review, and
                  improvement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connection to CMR Labs */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="rounded-2xl bg-[#1A2B3B] p-7 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A9CBDC]">
            Research meets engineering
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Connecting knowledge with practical solutions.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            CMR Studio focuses on media and educational communication,
            while CMR Labs focuses on engineering, software, and technical
            experimentation. Together, these initiatives reflect the
            portfolio&apos;s interest in connecting ideas with practical
            applications.
          </p>

          <Link
            href="/cmr-labs"
            className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A2B3B] transition-colors hover:bg-[#DCE6E8]"
          >
            Explore CMR Labs <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[#DCE3E8]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <h2 className="text-2xl font-semibold">
              Have a topic or collaboration in mind?
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Get in touch to discuss an idea, research direction, or
              potential collaboration.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#1D4D68] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#14394F]"
          >
            Contact CMR Group <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
