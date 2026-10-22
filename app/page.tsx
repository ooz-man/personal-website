
import Image from "next/image";
import Link from "next/link";

const ventures = [
  {
    name: "CMR Labs",
    category: "Technology & Engineering",
    description:
      "An engineering initiative focused on AI automation, workflow systems, software products, and practical digital solutions.",
    status: "Technology initiative",
    href: "/cmr-labs",
  },
  {
    name: "Fruvita",
    category: "Food & Agriculture",
    description:
      "A planned fruit and produce brand focused on hygienic retail, with longer-term ambitions in beverages, food products, and distribution.",
    status: "Planned venture",
    href: "/ventures",
  },
  {
    name: "OOZII Grooming",
    category: "Grooming & Personal Care",
    description:
      "A grooming and personal-care business initiative focused on barbering, grooming, and beauty services.",
    status: "Venture initiative",
    href: "/ventures",
  },
  {
    name: "Maishago",
    category: "Retail & Commerce",
    description:
      "A planned retail brand focused on sourced non-food products, including clothing, accessories, and footwear.",
    status: "Planned venture",
    href: "/ventures",
  },
  {
    name: "CMR Studio",
    category: "Knowledge & Media",
    description:
      "A media and educational initiative for criminology, security awareness, podcasts, and digital storytelling.",
    status: "Content initiative",
    href: "/insights",
  },
];

const focusAreas = [
  "Technology & engineering",
  "Business operations",
  "Security & criminology",
  "Research & education",
];

export default function HomePage() {
  return (
    <main className="bg-[#F5F4F0] text-[#1A2B3B]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          <div className="relative z-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4D68]">
              An emerging portfolio of ventures
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Building ideas into meaningful ventures.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              CMR Group is an emerging business portfolio bringing together
              technology, enterprise solutions, services, and knowledge-driven
              initiatives under a shared long-term vision.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/ventures"
                className="inline-flex items-center justify-center rounded-full bg-[#1D4D68] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#14394F]"
              >
                Explore Our Ventures
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-[#C8D1D7] px-7 py-3.5 text-sm font-semibold text-[#1A2B3B] transition-colors hover:border-[#1D4D68]"
              >
                About CMR Group
              </Link>
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              CMR Group is an emerging portfolio initiative. Individual
              ventures and products may be at different stages of planning
              and development.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#DCE6E8]" />

            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#1A2B3B]">
              <Image
                src="/cmr-group.jpg"
                alt="CMR Group portfolio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-[#0A1628]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B9DCEB]">
                  The CMR vision
                </p>
                <p className="mt-3 max-w-md text-2xl font-medium leading-snug sm:text-3xl">
                  Connecting enterprise, technology, and knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-[#DCE3E8] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-20 lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
              About CMR Group
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
              A broader vision. Distinct ventures. Shared direction.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              CMR Group is being developed as a parent-group concept for
              initiatives that address practical needs across different
              industries. The vision is to build ventures with clear purposes,
              responsible operations, and room for sustainable growth.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Each initiative has its own identity while sharing a commitment
              to problem-solving, learning, responsible operations, and
              long-term value.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center font-semibold text-[#1D4D68] hover:text-[#1687E8]"
            >
              Learn about our direction <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section
        id="ventures"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
              Our portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ventures &amp; initiatives
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Distinct areas of focus, with each initiative progressing
            according to its own plans and development stage.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, index) => (
            <article
              key={venture.name}
              className="group flex h-full flex-col rounded-2xl border border-[#DCE3E8] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#9BB7C5] hover:shadow-lg sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F2] text-sm font-semibold text-[#1D4D68]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-[#F0F2F3] px-3 py-1 text-xs font-medium text-slate-600">
                  {venture.status}
                </span>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#1D4D68]">
                {venture.category}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {venture.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {venture.description}
              </p>

              <Link
                href={venture.href}
                className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-[#1D4D68] group-hover:text-[#1687E8]"
              >
                Explore initiative <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/ventures"
            className="inline-flex items-center font-semibold text-[#1D4D68] hover:text-[#1687E8]"
          >
            View the full portfolio <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Featured CMR Labs project */}
      <section className="bg-[#1A2B3B] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 lg:gap-16 lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A9CBDC]">
              CMR Labs · Project in development
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              CMR Hospitality Suite
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              A hospitality management software project under CMR Labs,
              intended to connect operational workflows such as reservations,
              guest records, payments, housekeeping, and reporting in one
              digital experience.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              The project is in development. Features, deployment, and
              availability should be confirmed before making service
              commitments.
            </p>

            <Link
              href="/projects"
              className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A2B3B] transition-colors hover:bg-[#DCE6E8]"
            >
              Explore projects <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9CBDC]">
              Intended product focus
            </p>

            <div className="mt-6 divide-y divide-white/10">
              {[
                ["01", "Hospitality operations"],
                ["02", "Reservations and guest records"],
                ["03", "Staff and housekeeping workflows"],
                ["04", "Reporting and operational visibility"],
              ].map(([number, label]) => (
                <div key={number} className="flex items-center gap-4 py-4">
                  <span className="text-sm font-semibold text-[#A9CBDC]">
                    {number}
                  </span>
                  <span className="text-sm text-slate-200 sm:text-base">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              These describe the project&apos;s intended focus, not a
              guarantee that every feature is currently available.
            </p>
          </div>
        </div>
      </section>

      {/* Group focus */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
            Our areas of focus
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Practical solutions, informed by different disciplines.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-xl border border-[#DCE3E8] bg-[#F8F8F5] p-5"
              >
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section
        id="insights"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:items-center lg:px-12"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
            Ideas &amp; insights
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Learning that informs what we build.
          </h2>
        </div>

        <div>
          <p className="leading-8 text-slate-600">
            Educational content, research interests, and practical commentary
            connect technology with real-world questions in security,
            criminology, business operations, governance, and society.
          </p>

          <Link
            href="/insights"
            className="mt-6 inline-flex items-center font-semibold text-[#1D4D68] hover:text-[#1687E8]"
          >
            Explore insights <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#E5ECEE] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Have a question, idea, or potential collaboration?
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-600">
              Start a conversation about CMR Group, its initiatives, or a
              potential opportunity to work together.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center rounded-full bg-[#1D4D68] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#14394F]"
            >
              Contact CMR Group <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
