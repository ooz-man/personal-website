
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Usman Hamzat, OYERO, the vision behind the emerging CMR Group portfolio, its team, and its strategic direction.",
};

const principles = [
  {
    title: "Purposeful Innovation",
    description:
      "Develop ideas, services, and systems around real needs rather than technology for its own sake.",
  },
  {
    title: "Integrity & Accountability",
    description:
      "Build trust through responsible decisions, clear communication, and ownership of outcomes.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Create a foundation for sustainable ventures, practical collaboration, and continuous improvement.",
  },
  {
    title: "Learning & Research",
    description:
      "Use research, experimentation, and structured learning to improve the quality of our work.",
  },
];

const portfolio = [
  {
    name: "CMR Labs",
    category: "Engineering & Technology",
    description:
      "Software engineering, AI experimentation, workflow automation, technical research, and digital products.",
    href: "/cmr-labs",
  },
  {
    name: "Fruvita",
    category: "Food & Produce",
    description:
      "A fruit and produce business concept focused on fresh products, hygienic handling, and future distribution opportunities.",
    href: "/ventures",
  },
  {
    name: "OOZII Grooming",
    category: "Grooming & Personal Care",
    description:
      "A grooming brand focused on barbering, personal care, and related beauty services.",
    href: "/ventures",
  },
  {
    name: "Maishago",
    category: "Retail & Commerce",
    description:
      "A retail brand concept for sourced non-food goods, including clothing, accessories, footwear, and related products.",
    href: "/ventures",
  },
  {
    name: "CMR Studio",
    category: "Media & Education",
    description:
      "A content and media initiative for criminology, security education, podcasting, and digital storytelling.",
    href: "/ventures",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A2B3B]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 md:py-24">
        {/* Hero */}
        <section className="grid items-center gap-12 border-b border-[#DCE3E8] pb-16 md:grid-cols-[1.4fr_0.6fr] md:pb-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4D68]">
              About CMR Group
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Building purposeful ventures for a changing world.
            </h1>

            <div className="mt-7 h-1 w-16 bg-[#C5A36A]" />

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#526477]">
              CMR Group is an emerging business portfolio initiative bringing
              together ideas across technology, commerce, services, and
              knowledge. Its long-term direction is to develop distinct
              ventures around practical needs while building shared values,
              disciplined operations, and a culture of continuous learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/ventures"
                className="inline-flex items-center bg-[#1A2B3B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4D68]"
              >
                Explore the portfolio
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center border border-[#BCC8D1] px-5 py-3 text-sm font-semibold text-[#1A2B3B] transition hover:bg-white"
              >
                Contact CMR Group
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-2xl border border-[#DCE3E8] bg-white p-3 shadow-sm">
              <Image
                src="/cmr-group.jpg"
                alt="CMR Group visual identity"
                width={640}
                height={640}
                className="aspect-square w-full rounded-xl object-cover"
                priority
              />
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-[#718096]">
              An emerging portfolio built around purposeful ideas and distinct
              business directions.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="grid gap-8 border-b border-[#DCE3E8] py-16 md:grid-cols-[220px_1fr] md:gap-16 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              The Founder
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              The thinking behind CMR
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#526477]">
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <Image
                src="/profile.jpg"
                alt="Usman Hamzat Oyero"
                width={112}
                height={112}
                className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-sm"
              />

              <div>
                <h3 className="text-xl font-semibold text-[#1A2B3B]">
                  Usman Hamzat Oyero
                </h3>

                <p className="mt-1 text-sm font-medium text-[#1D4D68]">
                  Founder & Portfolio Lead
                </p>

                <p className="mt-3">
                  My academic background in Criminology and Security Studies
                  informs how I think about systems, information, human
                  behaviour, risk, and decision-making. These perspectives
                  influence my interest in building practical solutions that
                  connect technology with real operational challenges.
                </p>
              </div>
            </div>

            <p>
              CMR Group is the longer-term portfolio vision behind these
              interests. CMR Labs provides the engineering direction, while
              other brands explore different needs in retail, grooming, food,
              media, and education.
            </p>

            <p>
              The objective is to develop each initiative deliberately, learn
              from implementation, and establish the operational foundations
              required for sustainable growth.
            </p>
          </div>
        </section>

        {/* CMR Group Team */}
        <section className="border-b border-[#DCE3E8] py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              The people behind the vision
            </h2>

            <p className="mt-5 leading-8 text-[#526477]">
              CMR Group brings together complementary perspectives across
              technology, governance, policy, research, and enterprise
              development.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Usman */}
            <article className="border border-[#DCE3E8] bg-white p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <Image
                  src="/profile.jpg"
                  alt="Usman Hamzat Oyero"
                  width={96}
                  height={96}
                  className="h-20 w-20 shrink-0 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-bold text-[#1A2B3B]">
                    Usman Hamzat Oyero
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#1D4D68]">
                    Founder & Portfolio Lead
                  </p>

                  <p className="mt-2 text-xs text-[#718096]">
                    Criminology & Security Studies
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#526477]">
                Usman leads the CMR Group portfolio vision, coordinating the
                development of its ventures and connecting business strategy,
                operational thinking, technology, and research. His background
                in Criminology and Security Studies informs the group&apos;s
                interest in systems, risk, intelligence, and informed
                decision-making.
              </p>
            </article>

            {/* Habeeba */}
            <article className="border border-[#DCE3E8] bg-white p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <Image
                  src="/habeeba.jpg"
                  alt="Habeeba A. Sulayman"
                  width={96}
                  height={96}
                  className="h-20 w-20 shrink-0 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-bold text-[#1A2B3B]">
                    Habeeba A. Sulayman
                  </h3>

                  <p className="mt-1 text-sm font-medium leading-6 text-[#1D4D68]">
                    Legal, Policy & Research Associate — CMR Group
                  </p>

                  <p className="mt-2 text-xs text-[#718096]">
                    Political Science Graduate, Al-Hikmah University
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#526477]">
                Habeeba contributes to policy research, governance analysis,
                institutional research, and the development of
                research-informed strategic frameworks across CMR Group&apos;s
                portfolio.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#526477]">
                Her work supports the group&apos;s understanding of regulatory
                environments, public institutions, policy considerations, and
                the social contexts in which its ventures operate. She
                contributes research and analytical perspectives that inform
                business development, technology initiatives, intelligence
                research, and educational projects across CMR Group.
              </p>
            </article>
          </div>
        </section>

        {/* Portfolio structure */}
        <section className="border-b border-[#DCE3E8] py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Our Structure
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Distinct ventures. A shared direction.
            </h2>

            <p className="mt-5 leading-8 text-[#526477]">
              The portfolio is designed around different business areas
              rather than treating every product or project as a separate
              company. CMR Labs houses the engineering work and technical
              projects; other initiatives retain their own market focus and
              identity.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <article
                key={item.name}
                className="flex h-full flex-col border border-[#DCE3E8] bg-white p-6 transition hover:border-[#A7BAC8]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1D4D68]">
                  {item.category}
                </p>

                <h3 className="mt-3 text-xl font-bold">{item.name}</h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#617184]">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-semibold text-[#1D4D68] hover:underline"
                >
                  Explore initiative →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="grid gap-8 border-b border-[#DCE3E8] py-16 md:grid-cols-[220px_1fr] md:gap-16 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Vision
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Build with purpose. Operate with discipline. Grow sustainably.
            </h2>

            <p className="leading-8 text-[#526477]">
              The long-term vision is to develop a portfolio of well-defined
              ventures that address practical needs in their respective
              markets. This includes technology and operational systems,
              consumer services, commerce, and knowledge-led initiatives.
            </p>

            <p className="leading-8 text-[#526477]">
              With Nigeria as an important starting context, CMR Group aims
              to build capabilities through research, responsible
              experimentation, customer understanding, and sound operational
              practices before pursuing wider opportunities.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-[#DCE3E8] py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Operating Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Principles that guide the work
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="border border-[#DCE3E8] bg-white p-6 sm:p-8"
              >
                <h3 className="text-lg font-bold">{principle.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#617184]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4D68]">
              Our Philosophy
            </p>

            <blockquote className="mt-6 text-2xl font-semibold leading-relaxed tracking-tight sm:text-3xl md:text-4xl">
              “Build things that solve real problems, strengthen capability,
              and create lasting value.”
            </blockquote>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#617184]">
              Every initiative should have a clear purpose, a realistic path
              forward, and a commitment to learning from the people and
              environments it serves.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="flex flex-col gap-6 bg-[#1A2B3B] p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C5A36A]">
              Start a Conversation
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Interested in what we are building?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#D0DAE4]">
              Explore the portfolio or get in touch to discuss a project,
              collaboration, or business enquiry.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-white px-5 py-3 text-sm font-semibold text-[#1A2B3B] transition hover:bg-[#F5F4F0]"
          >
            Contact Us
          </Link>
        </section>

        <p className="text-xs leading-6 text-[#718096]">
          CMR Group is an emerging portfolio initiative. The inclusion of a
          venture on this website does not imply that it is a separately
          incorporated entity or that all proposed activities are currently
          operational.
        </p>
      </div>
    </main>
  );
}
