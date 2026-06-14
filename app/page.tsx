import Link from "next/link";

const featured = [
  {
    name: "CMR Verification Bot",
    status: "Live",
    description: "Production Telegram onboarding and verification system with admin dashboard.",
    href: "/projects",
  },
  {
    name: "Parkview Hotel Abuja",
    status: "Completed",
    description: "Full hotel website with AI concierge chat widget powered by Anthropic API.",
    href: "/projects",
  },
  {
    name: "CMRTrendBot",
    status: "In Development",
    description: "AI-powered Telegram bot delivering football news for the StillTrending brand.",
    href: "/projects",
  },
];

const statusColor: Record<string, string> = {
  Live: "#00C896",
  "In Development": "#1E90FF",
  Completed: "#4A90A4",
};

export default function Home() {
  return (
    <main className="bg-[#0A1628] text-[#F0F4F8]">

      {/* Hero */}
      <section className="min-h-screen flex items-center px-8 py-16 md:px-20">
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-16">
          
          {/* Left */}
          <div className="flex-1 space-y-8">
            <div>
              <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em] mb-4">
                Founder & Principal
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Usman Hamzat
              </h1>
              <div className="mt-3 h-px w-16 bg-[#1E90FF]" />
            </div>

            <p className="text-[#1E90FF] text-lg font-medium">CMR Group</p>

            <p className="text-[#8A9BB0] text-base md:text-lg leading-relaxed max-w-lg">
              Building AI-powered digital infrastructure, intelligent operational
              platforms, and automation systems for businesses, institutions, and
              public-sector organizations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-[#1E90FF] text-white px-6 py-3 text-sm font-medium hover:bg-[#1a7fe0] transition-colors duration-200"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border border-[#1E3A5F] text-[#8A9BB0] px-6 py-3 text-sm font-medium hover:border-[#1E90FF] hover:text-[#F0F4F8] transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden border border-[#1E3A5F]">
              <img
                src="/profile.jpg"
                alt="Usman Hamzat"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CMR Group Overview */}
      <section className="px-8 py-20 md:px-20 border-t border-[#1E3A5F]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-4">
            <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">The Company</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">CMR Group</h2>
            <div className="h-px w-16 bg-[#1E90FF]" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">Mission</p>
              <p className="text-[#8A9BB0] text-sm leading-relaxed">
                Design and build intelligent technology that modernizes operations and delivers measurable value through software, automation, and AI.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">Vision</p>
              <p className="text-[#8A9BB0] text-sm leading-relaxed">
                Become one of Africa's leading builders of AI-powered digital infrastructure and intelligent enterprise technology platforms.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">Research</p>
              <p className="text-[#8A9BB0] text-sm leading-relaxed">
                CMR Labs drives innovation through AI experimentation, open-source projects, and applied research in digital intelligence and automation.
              </p>
            </div>
          </div>
          <div>
            <Link
              href="/cmr-group"
              className="text-[#1E90FF] text-sm hover:underline"
            >
              Learn more about CMR Group →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-8 py-20 md:px-20 border-t border-[#1E3A5F]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-4">
            <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">Work</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-px w-16 bg-[#1E90FF]" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="border border-[#1E3A5F] p-6 space-y-4 hover:border-[#1E90FF] transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[#F0F4F8] font-semibold text-sm">{project.name}</h3>
                  <span
                    className="text-xs px-2 py-1 border whitespace-nowrap"
                    style={{
                      color: statusColor[project.status],
                      borderColor: statusColor[project.status],
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-[#8A9BB0] text-sm leading-relaxed">{project.description}</p>
              </Link>
            ))}
          </div>
          <div>
            <Link
              href="/projects"
              className="text-[#1E90FF] text-sm hover:underline"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-8 py-20 md:px-20 border-t border-[#1E3A5F]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let's work together</h2>
            <p className="text-[#8A9BB0] leading-relaxed max-w-lg">
              Available for partnerships, consulting, and serious collaborations related to AI, automation, and digital infrastructure.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#1E90FF] text-white px-8 py-4 text-sm font-medium hover:bg-[#1a7fe0] transition-colors duration-200 whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  );
}