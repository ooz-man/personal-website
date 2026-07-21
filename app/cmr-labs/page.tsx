const focus = [
  "AI Research & Experimentation",
  "Software Engineering",
  "Open-Source Projects",
  "Internal Frameworks",
  "Prototype Development",
  "Product Innovation",
  "Technical Documentation",
];

const projects = [
  {
    name: "CMRTrendBot",
    status: "In Development",
    description:
      "A Telegram bot for the StillTrending trending content, and AI-powered summaries to subscribers via Telegram.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Claude AI", "Telegram Bot API"],
  },
  {
    name: "CMR Verification Bot",
    status: "Live",
    description:
      "A production Telegram onboarding and verification bot with multi-step flows, math captcha, admin commands, and a dark-themed admin dashboard.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Render"],
  },
  {
    name: "Parkview Hotel Abuja — Website",
    status: "Completed",
    description:
      "A full hotel website with booking form, AI concierge chat widget, room tiers, event halls, and amenities showcase — built as a single-page application.",
    stack: ["HTML", "CSS", "JavaScript", "Anthropic API"],
  },
  {
    name: "CMR Intelligence Platform",
    status: "Research Phase",
    description:
      "An AI-powered intelligence and decision-support system. Currently in research and architecture design, focusing on OSINT integration, NLP processing, and risk scoring for the Nigerian and West African context.",
    stack: ["Python", "Telethon", "NLP", "PostgreSQL"],
  },
];

const statusColor: Record<string, string> = {
  Live: "#00C896",
  "In Development": "#1E90FF",
  Completed: "#4A90A4",
  "Research Phase": "#8A9BB0",
};

export default function CMRLabs() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">
                Research & Engineering
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                CMR Labs
              </h1>
            </div>

            <img
              src="/cmr-labs.jpg"
              alt="CMR Labs Logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          <div className="h-px w-16 bg-[#1E90FF]" />
          <p className="text-[#8A9BB0] leading-relaxed max-w-2xl">
            The research and engineering arm of CMR Group. CMR Labs serves as
            the company&apos;s innovation laboratory — responsible for
            experimentation, prototype development, open-source initiatives, AI
            exploration, and the creation of core technologies that power future
            CMR products.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="space-y-6">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Focus Areas
          </p>
          <div className="flex flex-wrap gap-3">
            {focus.map((area) => (
              <span
                key={area}
                className="border border-[#1E3A5F] text-[#8A9BB0] text-sm px-4 py-2"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Projects
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="border border-[#1E3A5F] p-8 space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[#F0F4F8] font-semibold">
                    {project.name}
                  </h3>
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
                <p className="text-[#8A9BB0] text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-[#4A90A4] bg-[#0F2040] px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}