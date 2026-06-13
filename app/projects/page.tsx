const projects = [
  {
    name: "CMRTrendBot",
    category: "Telegram Bot · AI · Automation",
    status: "In Development",
    year: "2025",
    description:
      "A production Telegram bot built for the StillTrending TikTok football news brand. Delivers automated football news, trending content, and AI-powered summaries directly to Telegram subscribers. Built with a FastAPI backend, PostgreSQL database, and Claude AI for intelligent content processing.",
    highlights: [
      "AI-powered football news summarization via Claude Sonnet",
      "Automated content delivery via Telegram Bot API",
      "FastAPI backend with PostgreSQL on Render",
      "Modular command system with /news and subscriber management",
    ],
    stack: ["Python 3.11", "FastAPI", "PostgreSQL", "Claude AI", "Telegram Bot API", "Render"],
  },
  {
    name: "CMR Verification Bot",
    category: "Telegram Bot · Automation · Admin Tools",
    status: "Live",
    year: "2025",
    description:
      "A production Telegram onboarding and verification system deployed for CMR Group. Features a multi-step onboarding flow, math captcha for bot prevention, admin command suite, and a dark-themed FastAPI admin dashboard for user management.",
    highlights: [
      "Multi-step onboarding flow with state management",
      "Math captcha system for bot prevention",
      "Admin dashboard with dark UI built on FastAPI",
      "PostgreSQL backend with asyncpg on Render",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "asyncpg", "Telegram Bot API", "Render"],
  },
  {
    name: "Parkview Hotel Abuja — Website",
    category: "Web · Hospitality · AI Integration",
    status: "Completed",
    year: "2025",
    description:
      "A full-featured hotel website built for Parkview Hotel Abuja. Includes a booking form, AI concierge chat widget powered by the Anthropic API, room tier showcase, event hall listings, and amenities display — delivered as a polished single-page application.",
    highlights: [
      "AI concierge chat widget powered by Anthropic API",
      "Room tiers, event halls, and amenities showcase",
      "Integrated booking form with client-side validation",
      "Single HTML file — lightweight and fast",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Anthropic API"],
  },
  {
    name: "CMR Intelligence Platform",
    category: "Research · AI · OSINT · Security",
    status: "Research Phase",
    year: "2025",
    description:
      "An AI-powered intelligence and decision-support platform currently in research and architecture design. Focused on the Nigerian and West African security context, it explores Telegram channel monitoring via Telethon, NLP-based risk scoring, and OSINT integration as an MVP foundation.",
    highlights: [
      "Telegram channel monitoring via Telethon",
      "NLP processing and risk scoring pipeline",
      "OSINT integration with public reports and RSS feeds",
      "Designed for security agencies and institutional users",
    ],
    stack: ["Python", "Telethon", "NLP", "PostgreSQL", "FastAPI"],
  },
];

const statusColor: Record<string, string> = {
  Live: "#00C896",
  "In Development": "#1E90FF",
  Completed: "#4A90A4",
  "Research Phase": "#8A9BB0",
};

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <div className="space-y-4">
          <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">
            Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>
          <div className="h-px w-16 bg-[#1E90FF]" />
          <p className="text-[#8A9BB0] leading-relaxed max-w-2xl">
            A selection of systems, platforms, and tools built under CMR Labs
            and CMR Group. Each project is built with a focus on practical
            impact, scalable architecture, and real-world deployment.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-[#1E3A5F] p-8 md:p-10 space-y-6"
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[#8A9BB0] text-xs uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h2 className="text-xl font-semibold text-[#F0F4F8]">
                    {project.name}
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#8A9BB0] text-sm">{project.year}</span>
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
              </div>

              {/* Description */}
              <p className="text-[#8A9BB0] leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {project.highlights.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="text-[#1E90FF] mt-1 text-xs">—</span>
                    <p className="text-[#8A9BB0] text-sm">{point}</p>
                  </div>
                ))}
              </div>

              {/* Stack */}
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
    </main>
  );
}