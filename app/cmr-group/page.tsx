
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMR Group",
  description:
    "Discover CMR Group's emerging portfolio of ventures, engineering initiatives, research projects, and strategic business interests.",
};

const portfolio = [
  {
    number: "01",
    name: "CMR Labs",
    category: "Engineering & Technology",
    description:
      "The engineering division focused on software development, AI experimentation, workflow automation, digital infrastructure, and reusable technology products.",
    href: "/cmr-labs",
    status: "Engineering Division",
  },
  {
    number: "02",
    name: "Fruvita",
    category: "Fruit & Food",
    description:
      "A planned fruit and produce brand focused on fresh products, hygienic handling, and a longer-term opportunity in beverages, food products, and distribution.",
    href: "/ventures",
    status: "Portfolio Initiative",
  },
  {
    number: "03",
    name: "OOZII Grooming",
    category: "Grooming & Personal Care",
    description:
      "A grooming and personal-care venture concept centred on barbering, grooming services, and related customer experiences.",
    href: "/ventures",
    status: "Portfolio Initiative",
  },
  {
    number: "04",
    name: "Maishago",
    category: "Retail & Commerce",
    description:
      "A non-food retail concept focused on sourcing and selling clothing, heritage accessories, footwear, and related merchandise.",
    href: "/ventures",
    status: "Portfolio Initiative",
  },
  {
    number: "05",
    name: "CMR Studio",
    category: "Media & Education",
    description:
      "A media and storytelling initiative exploring podcasts, criminology and security education, visual media, and digital publishing.",
    href: "/insights",
    status: "Portfolio Initiative",
  },
];

const products = [
  {
    name: "CMR Hospitality Suite",
    status: "In Development",
    description:
      "A hospitality operations platform initiative covering reservations, guest management, staff workflows, payments, reporting, and AI-assisted guest support.",
    note: "CMR Labs project",
    color: "#1D4D68",
  },
  {
    name: "CMR Intelligence Platform",
    status: "Research Phase",
    description:
      "A research-stage concept exploring OSINT, language processing, information analysis, and decision-support workflows for relevant security contexts.",
    note: "Research and architecture",
    color: "#8A6B36",
  },
  {
    name: "CMR Legal Suite",
    status: "Planned",
    description:
      "A proposed digital operations platform for legal practices, with potential case management, document workflows, scheduling, and administrative support.",
    note: "Future concept",
    color: "#64748B",
  },
  {
    name: "CMR Commerce Suite",
    status: "Planned",
    description:
      "A proposed business operations platform exploring inventory, sales, order processing, customer management, and reporting for growing businesses.",
    note: "Future concept",
    color: "#64748B",
  },
];

const principles = [
  {
    title: "Practical innovation",
    description:
      "Explore technology in response to identifiable business, social, and institutional needs.",
  },
  {
    title: "Responsible development",
    description:
      "Consider privacy, security, governance, and the consequences of technology adoption.",
  },
  {
    title: "Operational value",
    description:
      "Prioritise useful systems that support better workflows, informed decisions, and customer experiences.",
  },
  {
    title: "Long-term thinking",
    description:
      "Build a coherent portfolio with distinct venture identities and shared strategic direction.",
  },
];

export default function CMRGroup() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A2B3B]">
      {/* Hero */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
              The Group
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              One strategic direction.
              <span className="block text-[#1D4D68]">
                Multiple areas of opportunity.
              </span>
            </h1>

            <div className="mt-8 h-1 w-16 bg-[#C5A36A]" />

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              CMR Group is an emerging portfolio initiative bringing together
              technology, security research, business ventures, and educational
              media under a shared long-term vision. Its focus is on developing
              practical solutions, exploring new opportunities, and building
              distinct ventures with clear purposes.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/ventures"
                className="inline-flex items-center justify-center bg-[#1A2B3B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D4D68]"
              >
                Explore the portfolio
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#C8D1D8] px-6 py-3 text-sm font-semibold text-[#1A2B3B] transition-colors hover:border-[#1D4D68]"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 border border-[#DCE3E8]" />
            <div className="relative flex aspect-square items-center justify-center bg-white p-8">
              <Image
                src="/cmr-group.jpg"
                alt="CMR Group identity"
                width={500}
                height={500}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-5 text-center text-xs uppercase tracking-[0.16em] text-slate-500">
              Strategy · Engineering · Ventures
            </p>
          </div>
        </div>
      </section>

      {/* Status and positioning */}
      <section className="border-y border-[#DCE3E8] bg-white px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Structure
            </p>
            <p className="mt-2 text-lg font-semibold">
              Emerging portfolio initiative
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Technology
            </p>
            <p className="mt-2 text-lg font-semibold">
              CMR Labs engineering division
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Direction
            </p>
            <p className="mt-2 text-lg font-semibold">
              Responsible, practical innovation
            </p>
          </div>
        </div>

        <div className="mx-auto mt-7 max-w-7xl border-t border-[#DCE3E8] pt-5">
          <p className="text-sm leading-7 text-slate-500">
            CMR Group has not yet been legally registered. The portfolio
            descriptions on this website communicate the intended structure
            and development direction; they do not imply that every venture
            or product is operational.
          </p>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Purpose & Direction
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Built around purpose, not just products.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="border border-[#DCE3E8] bg-white p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1D4D68]">
                Mission
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Develop useful solutions to real problems.
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                To explore, design, and develop practical initiatives that
                improve operations, support informed decision-making, and
                create value through technology, research, education, and
                business development.
              </p>
            </article>

            <article className="border border-[#DCE3E8] bg-white p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1D4D68]">
                Vision
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Build a coherent, sustainable portfolio.
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                To develop a portfolio of distinct and sustainable ventures
                that connect technology, enterprise, security knowledge, and
                public education while responding to opportunities in Nigeria
                and beyond.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="border-y border-[#DCE3E8] bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
                Portfolio Structure
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Distinct ventures. Shared direction.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Each initiative has a defined area of focus. The portfolio
                reflects the intended structure and varying stages of
                development.
              </p>
            </div>

            <Link
              href="/ventures"
              className="w-fit text-sm font-semibold text-[#1D4D68] hover:text-[#0A1628]"
            >
              View all ventures ↗
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <article
                key={item.name}
                className="flex flex-col border border-[#DCE3E8] bg-[#F5F4F0] p-6 md:p-7"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#C5A36A]">
                  {item.number} / {item.category}
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {item.name}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-[#DCE3E8] pt-4">
                  <p className="text-xs text-slate-500">{item.status}</p>

                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1D4D68] hover:text-[#0A1628]"
                  >
                    Learn more
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product portfolio */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Digital Product Concepts
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Technology initiatives under CMR Labs.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These products have different development stages. CMR Hospitality
              Suite is an engineering initiative; the other concepts remain
              research-stage or planned unless their status is updated.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="border border-[#DCE3E8] bg-white p-7 md:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {product.note}
                  </p>

                  <span
                    className="border px-3 py-1 text-xs font-medium"
                    style={{
                      color: product.color,
                      borderColor: product.color,
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold md:text-2xl">
                  {product.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {product.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/cmr-labs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4D68] hover:text-[#0A1628]"
            >
              Explore CMR Labs
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core areas */}
      <section className="border-y border-[#DCE3E8] bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Core Areas
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              A multidisciplinary approach.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              The portfolio brings together complementary areas of interest
              without treating every idea as an active business or completed
              product.
            </p>
          </div>

          <div className="flex content-start flex-wrap gap-3">
            {[
              "AI & Applied Research",
              "Software Engineering",
              "Workflow Automation",
              "Digital Infrastructure",
              "Criminology & Security",
              "OSINT & Data Analysis",
              "Business Operations",
              "Media & Education",
              "Research & Innovation",
            ].map((area) => (
              <span
                key={area}
                className="border border-[#DCE3E8] bg-[#F5F4F0] px-4 py-3 text-sm text-[#1A2B3B]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Philosophy
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Shared principles. Clear responsibilities.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              CMR Group is intended to be more than a collection of unrelated
              ideas. Its long-term direction is to coordinate distinct
              ventures around shared strategic principles, while allowing
              each initiative to develop according to its industry,
              operational requirements, and stage of maturity.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="border border-[#DCE3E8] p-6"
              >
                <p className="text-sm font-semibold text-[#C5A36A]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-lg font-semibold">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#0A1628] px-6 py-16 text-white md:px-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C5A36A]">
              CMR Group
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Explore the work taking shape.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Discover the portfolio, explore the engineering work of CMR
              Labs, or get in touch about a relevant collaboration.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/ventures"
              className="inline-flex items-center justify-center bg-white px-5 py-3 text-sm font-semibold text-[#0A1628] hover:bg-[#F5F4F0]"
            >
              Explore ventures
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
