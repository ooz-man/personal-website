
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore research interests spanning criminology, public safety, security and risk, intelligence, technology, governance, and responsible practice.",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A2B3B]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4D68]">
            Research & Intelligence
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Research that informs decisions and strengthens understanding.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            CMR&apos;s research interests explore criminology, security,
            governance, technology, and the social conditions that shape
            institutions and communities. The aim is to encourage structured
            inquiry, responsible analysis, and evidence-informed thinking.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/cmr-labs"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A1628] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4D68]"
            >
              Explore CMR Labs
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-[#1D4D68] hover:text-[#1D4D68]"
            >
              Explore Insights
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Research areas */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
              Areas of Interest
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Questions worth investigating.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              These areas represent research interests and possible directions
              for future work. They should not be interpreted as completed
              studies or validated findings unless specific research outputs
              are published.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-[#F5F4F0] p-7">
              <span className="text-sm font-semibold text-[#1D4D68]">
                01
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                Criminology & Public Safety
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Exploring crime, victimisation, prevention, public safety,
                community security, and the social factors that influence
                criminal behaviour.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-[#F5F4F0] p-7">
              <span className="text-sm font-semibold text-[#1D4D68]">
                02
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                Security & Risk
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Examining security management, threat assessment, organisational
                risk, protective practices, and approaches to improving
                resilience.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-[#F5F4F0] p-7">
              <span className="text-sm font-semibold text-[#1D4D68]">
                03
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                Intelligence & Technology
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Investigating responsible uses of open-source intelligence,
                data analysis, artificial intelligence, and technology-assisted
                decision support.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-[#F5F4F0] p-7">
              <span className="text-sm font-semibold text-[#1D4D68]">
                04
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                Governance & Institutions
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Considering institutional accountability, policy, regulatory
                environments, organisational governance, and public-sector
                decision-making.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-[#F5F4F0] p-7">
              <span className="text-sm font-semibold text-[#1D4D68]">
                05
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                Society & Human Behaviour
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Understanding social conditions, group behaviour, community
                relationships, and the factors that shape safety and
                institutional trust.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-[#F5F4F0] p-7">
              <span className="text-sm font-semibold text-[#1D4D68]">
                06
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                Ethics & Responsible Practice
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Considering privacy, fairness, evidence quality, responsible
                technology use, and ethical limits in research and security
                practice.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Research approach */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
            Research Approach
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Structured inquiry. Responsible interpretation.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Meaningful research begins with clear questions, careful evaluation
            of sources, and an understanding of the limitations of available
            evidence. CMR&apos;s intended approach prioritises critical thinking,
            transparent reasoning, and a distinction between established facts,
            interpretations, and hypotheses.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Research involving security, intelligence, people, or institutions
            must also consider privacy, legality, context, and the potential
            consequences of conclusions drawn from incomplete information.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <h3 className="text-xl font-semibold">Guiding principles</h3>

          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E5EEF3] text-sm font-semibold text-[#1D4D68]">
                1
              </span>
              <div>
                <p className="font-semibold">Evidence before conclusions</p>
                <p className="mt-1 leading-7 text-slate-600">
                  Evaluate the quality, relevance, and limitations of available
                  information.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E5EEF3] text-sm font-semibold text-[#1D4D68]">
                2
              </span>
              <div>
                <p className="font-semibold">Context matters</p>
                <p className="mt-1 leading-7 text-slate-600">
                  Interpret findings within their social, institutional, and
                  operational settings.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E5EEF3] text-sm font-semibold text-[#1D4D68]">
                3
              </span>
              <div>
                <p className="font-semibold">Ethics and accountability</p>
                <p className="mt-1 leading-7 text-slate-600">
                  Consider the rights, privacy, and welfare of people affected
                  by research and its applications.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E5EEF3] text-sm font-semibold text-[#1D4D68]">
                4
              </span>
              <div>
                <p className="font-semibold">Clear communication</p>
                <p className="mt-1 leading-7 text-slate-600">
                  Communicate methods, uncertainty, and findings in a way
                  readers can understand and assess.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Relationship to CMR Labs */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-[#0A1628]">
            <Image
              src="/logos/cmr-labs.jpg"
              alt="CMR Labs"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-10"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
              Related Initiative
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              From research questions to technical exploration.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              These research interests inform the technical exploration carried
              out under CMR Labs, the engineering division within the emerging
              CMR portfolio. They also complement CMR Studio&apos;s focus on
              educational content and knowledge-sharing. The CMR Intelligence
              Platform remains a research-stage concept, not a completed or
              validated intelligence system.
            </p>

            <Link
              href="/cmr-labs"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1D4D68] hover:text-[#0A1628]"
            >
              Visit CMR Labs
              <span aria-hidden="true">→</span>
            </Link>

            <div className="mt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4D68] hover:text-[#0A1628]"
              >
                Explore projects
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="rounded-3xl bg-[#0A1628] px-8 py-12 text-white md:px-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A36A]">
            Continue Exploring
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Turning complex ideas into accessible knowledge.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Visit Insights for planned editorial topics across criminology,
            security, technology, governance, and business strategy. Content
            availability will depend on publication.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A1628] transition hover:bg-slate-200"
            >
              Explore Insights
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact CMR
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
