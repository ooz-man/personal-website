"use client";

type Metric = {
  value: string;
  label: string;
};

type CardItem = {
  title: string;
  description?: string;
};

type Platform = {
  name: string;
  description: string;
  status: "Live" | "In Development" | "Planned";
};

const metrics: Metric[] = [
  { value: "4+", label: "Enterprise Platforms" },
  { value: "20+", label: "Core Technologies" },
  { value: "AI", label: "Native Architecture" },
  { value: "∞", label: "Scalable Multi-Tenant Design" },
];

const cmrGroupPillars: CardItem[] = [
  { title: "Technology" },
  { title: "Artificial Intelligence" },
  { title: "Automation" },
  { title: "Security" },
  { title: "Criminology" },
  { title: "Research" },
  { title: "Infrastructure" },
];

const labsPipeline: string[] = ["Research", "Prototype", "Engineering", "Deployment"];

const technologyStack: string[] = [
  "Next.js",
  "FastAPI",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Docker",
  "DigitalOcean",
  "Claude",
  "OpenAI",
  "Supabase",
];

const platforms: Platform[] = [
  {
    name: "Hospitality Suite",
    description:
      "Multi-tenant hotel management and booking platform with AI concierge, subscription billing, and role-based access.",
    status: "Live",
  },
  {
    name: "Legal Suite",
    description:
      "Case management and document automation infrastructure for legal practices, built on the same multi-tenant core.",
    status: "In Development",
  },
  {
    name: "Commerce Suite",
    description:
      "Configurable commerce and payments platform for African businesses, from storefront to fulfillment.",
    status: "Planned",
  },
  {
    name: "Intelligence Platform",
    description:
      "Digital intelligence and OSINT infrastructure for risk monitoring, applying applied criminology to real data pipelines.",
    status: "In Development",
  },
];

const researchAreas: string[] = [
  "Artificial Intelligence",
  "Behavioural Systems",
  "Digital Intelligence",
  "OSINT",
  "Cybersecurity",
  "Criminology",
  "Automation",
  "Cloud Infrastructure",
];

const engineeringPrinciples: string[] = [
  "Security by default",
  "Config over duplication",
  "Ship production, not prototypes",
  "Design for Nigerian market constraints",
  "Observable systems",
  "Iterate from real usage",
];

const platformStatusColor: Record<Platform["status"], string> = {
  Live: "#3FBF77",
  "In Development": "#1E90FF",
  Planned: "#8A9BB0",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
          Founder &bull; AI Engineer &bull; Applied Researcher
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mt-5 leading-tight max-w-4xl">
          Building intelligent digital infrastructure for the next
          generation of enterprise platforms.
        </h1>
        <p className="mt-6 max-w-2xl text-[#8A9BB0] leading-8 text-lg">
          Combining artificial intelligence, software engineering,
          automation, criminology, and security research to power
          businesses, institutions, and governments.
        </p>
      </section>

      {/* Metrics */}
      <section className="border-y border-[#1E3A5F]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-4xl font-bold text-[#1E90FF]">
                {metric.value}
              </p>
              <p className="mt-2 text-[#8A9BB0] text-sm uppercase tracking-wide">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        {/* About */}
        <section className="max-w-3xl">
          <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
            About
          </p>
          <h2 className="text-3xl font-bold mt-3">
            Technology should solve meaningful problems.
          </h2>
          <p className="mt-6 text-[#8A9BB0] leading-8">
            My work focuses on building intelligent software, AI-powered
            operational systems, and digital infrastructure capable of
            serving businesses, institutions, and governments.
          </p>
          <p className="mt-4 text-[#8A9BB0] leading-8">
            Everything I build is designed with security, scalability,
            automation, and long-term maintainability in mind.
          </p>
        </section>

        {/* CMR Group */}
        <section className="space-y-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              CMR Group
            </p>
            <h2 className="text-3xl font-bold mt-3">What We Work Across</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {cmrGroupPillars.map((pillar) => (
              <span
                key={pillar.title}
                className="px-5 py-3 rounded-full border border-[#1E3A5F] bg-[#10233F] text-[#A8C4E8] hover:border-[#1E90FF] transition-colors"
              >
                {pillar.title}
              </span>
            ))}
          </div>
        </section>

        {/* CMR Labs */}
        <section className="border border-[#1E3A5F] rounded-xl p-10 space-y-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              CMR Labs
            </p>
            <h2 className="text-3xl font-bold mt-3">
              Engineering &amp; Applied Research
            </h2>
            <p className="mt-4 max-w-2xl text-[#8A9BB0] leading-8">
              Every CMR platform begins inside CMR Labs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {labsPipeline.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="border border-[#1E3A5F] rounded-lg p-4 text-center flex-1">
                  <p className="text-sm font-medium">{step}</p>
                </div>
                {index < labsPipeline.length - 1 && (
                  <span className="hidden md:block text-[#1E90FF]">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Platform Portfolio */}
        <section className="space-y-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Platform Portfolio
            </p>
            <h2 className="text-3xl font-bold mt-3">
              The CMR Ecosystem
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="border border-[#1E3A5F] rounded-xl p-8 hover:border-[#1E90FF] transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                  <span
                    className="text-xs px-3 py-1 rounded-full border shrink-0"
                    style={{
                      color: platformStatusColor[platform.status],
                      borderColor: platformStatusColor[platform.status],
                    }}
                  >
                    {platform.status}
                  </span>
                </div>
                <p className="mt-4 text-[#8A9BB0] leading-8">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section className="space-y-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Research Areas
            </p>
            <h2 className="text-3xl font-bold mt-3">
              Where CMR Labs Focuses
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {researchAreas.map((area) => (
              <div
                key={area}
                className="border border-[#1E3A5F] rounded-lg p-5 text-center hover:border-[#1E90FF] transition-colors"
              >
                <p className="text-sm font-medium">{area}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Technology Focus
            </p>
            <h2 className="text-3xl font-bold mt-3">
              Tools We Build With
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologyStack.map((tech) => (
              <span
                key={tech}
                className="bg-[#10233F] text-[#8DB8FF] px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Engineering Philosophy */}
        <section className="space-y-10">
          <div>
            <p className="uppercase tracking-[0.2em] text-[#1E90FF] text-sm">
              Engineering Philosophy
            </p>
            <h2 className="text-3xl font-bold mt-3">How We Build</h2>
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

        {/* Quote */}
        <section className="border-t border-[#1E3A5F] pt-16">
          <blockquote className="max-w-3xl mx-auto text-center border-l-2 border-[#1E90FF] pl-8 md:pl-0 md:border-l-0 space-y-4">
            <p className="text-2xl font-semibold leading-relaxed">
              Software should do more than automate tasks.
            </p>
            <p className="text-[#8A9BB0] leading-8">
              It should augment human intelligence, strengthen
              decision-making, and become the infrastructure that powers
              industries.
            </p>
          </blockquote>
        </section>

        {/* Contact CTA */}
        <section className="border border-[#1E3A5F] rounded-xl p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Building Something Ambitious?
          </h2>
          <p className="max-w-2xl mx-auto text-[#8A9BB0] leading-8">
            Whether you&apos;re modernizing operations, developing an
            AI-powered platform, or exploring intelligent automation, I&apos;d
            be glad to discuss how CMR Group can help.
          </p>
          <button className="mt-4 px-8 py-3 rounded-full bg-[#1E90FF] text-[#0A1628] font-semibold hover:bg-[#4DA6FF] transition-colors">
            Start a Conversation
          </button>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1E3A5F]">
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-[#1E90FF]">
            CMR Group
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#8A9BB0] text-sm">
            <span>Technology</span>
            <span>Artificial Intelligence</span>
            <span>Research</span>
            <span>Security</span>
            <span>Automation</span>
            <span>Digital Infrastructure</span>
          </div>
         
        </div>
      </footer>
    </main>
  );
}
