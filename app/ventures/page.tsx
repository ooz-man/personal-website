
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Explore the emerging CMR Group portfolio, including CMR Labs, Fruvita, OOZII Grooming, Maishago, and CMR Studio.",
};

const ventures = [
  {
    name: "CMR Labs",
    category: "Engineering & Technology",
    description:
      "The engineering division of the emerging CMR portfolio. It focuses on software engineering, AI automation, workflow systems, technical documentation, and digital product development.",
    logo: "/logos/cmr-labs.jpg",
    href: "/cmr-labs",
    linkLabel: "Explore engineering",
    status: "Engineering division",
  },
  {
    name: "Fruvita",
    category: "Food, Produce & Agriculture",
    description:
      "A fruit and produce brand focused on hygienic retail, with a longer-term vision for beverages, food products, distribution, and agricultural sourcing.",
    logo: "/logos/fruvita.jpg",
    href: "/contact",
    linkLabel: "Discuss this venture",
    status: "Venture initiative",
  },
  {
    name: "OOZII Grooming",
    category: "Grooming & Personal Care",
    description:
      "A grooming and personal-care brand focused on barbering, grooming, and beauty services.",
    logo: "/logos/oozii-grooming.jpg",
    href: "/contact",
    linkLabel: "Discuss this venture",
    status: "Venture initiative",
  },
  {
    name: "Maishago",
    category: "Retail & Lifestyle",
    description:
      "A retail brand for sourced non-food products, including Northern heritage clothing and accessories, footwear, and related goods.",
    logo: "/logos/mai-shago-logo.png",
    href: "/contact",
    linkLabel: "Discuss this venture",
    status: "Venture initiative",
  },
  {
    name: "CMR Studio",
    category: "Media, Education & Production",
    description:
      "A media and production initiative for criminology and security education, public-safety content, podcasting, and digital storytelling.",
    logo: null,
    href: "/insights",
    linkLabel: "Explore insights",
    status: "Media initiative",
  },
];

const projects = [
  {
    name: "CMR Hospitality Suite",
    description:
      "A hospitality management software project intended to support reservations, guest records, housekeeping, staff workflows, and reporting.",
    status: "In Development",
    detail: "A project under CMR Labs",
  },
  {
    name: "CMR Intelligence Platform",
    description:
      "A research-stage concept exploring open-source intelligence, information analysis, and risk-monitoring workflows.",
    status: "Research Phase",
    detail: "A project concept under CMR Labs",
  },
  {
    name: "CMR Legal Suite",
    description:
      "A proposed digital solution for legal-practice workflows, case management, and document handling.",
    status: "Planned",
    detail: "Proposed CMR Labs project",
  },
  {
    name: "CMR Commerce Suite",
    description:
      "A proposed commerce platform for business operations, online storefronts, and fulfilment workflows.",
    status: "Planned",
    detail: "Proposed CMR Labs project",
  },
];

export default function VenturesPage() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A2B3B]">
      {/* Page hero */}
      <section className="border-b border-[#DCE3E8] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
            The CMR portfolio
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Distinct identities. A shared vision.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore the ventures and initiatives being developed within the
            CMR Group vision, spanning technology, retail, personal care,
            media, education, and digital products.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            CMR Group is an emerging portfolio initiative and is not yet
            legally registered. The ventures and projects shown here have
            different development stages; inclusion does not mean that a
            venture is fully operational.
          </p>
        </div>
      </section>

      {/* Venture cards */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
            Our ventures
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Brands & initiatives
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {ventures.map((venture) => (
            <article
              key={venture.name}
              className="flex h-full flex-col rounded-2xl border border-[#DCE3E8] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#9BB7C5] hover:shadow-lg sm:p-8"
            >
              <div className="flex min-h-32 items-center justify-center rounded-xl bg-[#F8F8F5] p-5">
                {venture.logo ? (
                  <Image
                    src={venture.logo}
                    alt={`${venture.name} logo`}
                    width={320}
                    height={180}
                    className="max-h-28 w-auto max-w-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <span className="text-2xl font-bold tracking-tight text-[#1D4D68]">
                      CMR STUDIO
                    </span>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                      Media & production
                    </p>
                  </div>
                )}
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

              <div className="mt-6 border-t border-[#E8ECEE] pt-4">
                <p className="text-xs text-slate-500">{venture.status}</p>

                <Link
                  href={venture.href}
                  className="mt-3 inline-flex items-center text-sm font-semibold text-[#1D4D68] hover:text-[#1687E8]"
                >
                  {venture.linkLabel}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CMR Labs project portfolio */}
      <section className="bg-[#1A2B3B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A9CBDC]">
            Inside CMR Labs
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Engineering projects, from planning to delivery.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            CMR Labs is the engineering division within the emerging CMR
            portfolio. Its projects cover software development, system
            design, automation, technical documentation, and technical
            operations. Each project is presented according to its current
            development stage.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-white/15 bg-white/5 p-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#A9CBDC]">
                  {project.status}
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <p className="mt-4 text-xs text-slate-400">
                  {project.detail}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/cmr-labs"
            className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A2B3B] transition-colors hover:bg-[#DCE6E8]"
          >
            Visit CMR Labs <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-2xl border border-[#DCE3E8] bg-white px-6 py-10 sm:px-10 sm:py-14">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Interested in the CMR portfolio?
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            Contact us to discuss the group&apos;s direction, its initiatives,
            or a potential collaboration.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center rounded-full bg-[#1D4D68] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#14394F]"
          >
            Contact CMR Group <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
