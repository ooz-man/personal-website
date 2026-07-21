export default function About() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <section className="mb-24">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-[#1E90FF] uppercase tracking-[0.25em] text-sm font-medium">
                About
              </p>

              <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
                Building the future through
                <span className="text-[#1E90FF]"> intelligent systems.</span>
              </h1>

              <div className="mt-8 h-px w-20 bg-[#1E90FF]" />

              <p className="mt-10 text-lg leading-9 text-[#A7B6C8] max-w-3xl">
                I'm <span className="text-white font-semibold">Usman Hamzat</span>,
                founder of <span className="text-white">CMR Group</span> — a
                technology company focused on building intelligent software,
                automation platforms, and digital infrastructure that help
                organizations operate more efficiently, make better decisions, and
                scale with confidence.
              </p>
            </div>

            <img
              src="/profile.jpg"
              alt="Usman Hamzat"
              className="w-32 h-32 object-cover rounded-full ml-10 mt-1 flex-shrink-0"
            />
          </div>
        </section>

        {/* Story */}
        <section className="grid md:grid-cols-[220px_1fr] gap-12 py-16 border-t border-[#18283E]">
          <div>
            <p className="uppercase tracking-[0.18em] text-sm text-[#1E90FF]">
              My Story
            </p>
          </div>

          <div className="space-y-6 text-[#8A9BB0] leading-8">
            <p>
              My academic background in Criminology and Security Studies shaped
              how I approach technology. Rather than seeing software as isolated
              applications, I see systems—how information flows, how decisions
              are made, and how organizations can become more intelligent
              through better processes.
            </p>

            <p>
              That mindset naturally evolved into building software. Today, I
              design digital products that combine modern engineering,
              automation, artificial intelligence, and data to solve practical
              operational challenges across businesses and institutions.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="grid md:grid-cols-[220px_1fr] gap-12 py-16 border-t border-[#18283E]">
          <div>
            <p className="uppercase tracking-[0.18em] text-sm text-[#1E90FF]">
              Vision
            </p>
          </div>

          <div className="space-y-6 text-[#8A9BB0] leading-8">
            <p>
              Through CMR Group, my long-term mission is to develop intelligent
              operational platforms that enable businesses, government
              institutions, and organizations across Nigeria to modernize their
              operations through automation, analytics, and AI-driven decision
              support.
            </p>

            <p>
              I believe Nigeria's next generation of growth will be powered not
              only by software, but by intelligent infrastructure that improves
              productivity, transparency, and operational excellence.
            </p>
          </div>
        </section>

        {/* Expertise */}
        <section className="grid md:grid-cols-[220px_1fr] gap-12 py-16 border-t border-[#18283E]">
          <div>
            <p className="uppercase tracking-[0.18em] text-sm text-[#1E90FF]">
              Focus Areas
            </p>
          </div>

          <div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Artificial Intelligence",
                "Workflow Automation",
                "Software Engineering",
                "System Architecture",
                "Business Intelligence",
                "Digital Infrastructure",
                "Operational Platforms",
                "Technology Research"
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[#1B2C42] rounded-xl px-5 py-4 bg-[#0F1D31]/40 hover:border-[#1E90FF] transition-colors"
                >
                  <p className="text-[#F0F4F8]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="grid md:grid-cols-[220px_1fr] gap-12 py-16 border-t border-b border-[#18283E]">
          <div>
            <p className="uppercase tracking-[0.18em] text-sm text-[#1E90FF]">
              Philosophy
            </p>
          </div>

          <div className="space-y-6 text-[#8A9BB0] leading-8">
            <p>
              I'm driven by curiosity, continuous learning, and the belief that
              technology should solve real problems—not simply showcase
              technical prowess. My work is guided by a simple principle: every
              product I build should make someone's work simpler, smarter, and
              more effective.
            </p>

            <p>
              Every product I build begins with a simple question:
            </p>

            <blockquote className="border-l-2 border-[#1E90FF] pl-6 italic text-white text-xl">
              "How can this make someone's work simpler, smarter, and more
              effective?"
            </blockquote>

            <p>
              That's the principle behind every project I pursue and the
              direction that continues to shape the future of CMR Group.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}