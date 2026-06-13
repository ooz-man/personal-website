const areas = [
  {
    title: "Digital Intelligence & OSINT",
    description:
      "Exploring open-source intelligence methodologies applied to the Nigerian and West African security context. Research focuses on how publicly available digital data — social media, Telegram channels, public reports, and RSS feeds — can be systematically collected, processed, and analyzed to support security decision-making.",
  },
  {
    title: "Crime Monitoring & Risk Scoring",
    description:
      "Investigating how NLP and machine learning techniques can be applied to unstructured text data to identify patterns, classify incident types, and generate risk scores. The goal is to build practical tools that give security agencies and institutions actionable intelligence from raw digital noise.",
  },
  {
    title: "Technology & Security Convergence",
    description:
      "Examining the intersection of criminology, security studies, and modern technology. This includes how AI-powered platforms can support law enforcement, public safety institutions, and private security organizations in Nigeria through better data collection, incident reporting, and operational awareness.",
  },
  {
    title: "Automation in Intelligence Workflows",
    description:
      "Researching how workflow automation can reduce manual overhead in intelligence operations — from data collection pipelines and alert systems to report generation and executive dashboards. Focused on practical, deployable systems rather than theoretical models.",
  },
];

export default function Research() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Header */}
        <div className="space-y-4">
          <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">
            Research
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Criminology & Technology
          </h1>
          <div className="h-px w-16 bg-[#1E90FF]" />
          <p className="text-[#8A9BB0] leading-relaxed max-w-2xl">
            My research sits at the intersection of criminology, security
            studies, and applied technology. The focus is on how AI, automation,
            and digital intelligence tools can be practically deployed to
            address real security challenges in the Nigerian and West African
            context.
          </p>
        </div>

        {/* Context */}
        <div className="border-l-2 border-[#1E90FF] pl-8 space-y-3">
          <p className="text-[#F0F4F8] font-medium">Background</p>
          <p className="text-[#8A9BB0] leading-relaxed">
            With an academic background in Criminology and Security Studies, I
            approach technology not just as an engineering discipline but as a
            tool for solving real social and institutional problems. My research
            combines academic frameworks from security studies with practical
            software engineering to produce systems that can be deployed,
            tested, and improved in real environments.
          </p>
        </div>

        {/* Research Areas */}
        <div className="space-y-6">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Areas of Interest
          </p>
          <div className="space-y-6">
            {areas.map((area) => (
              <div
                key={area.title}
                className="border border-[#1E3A5F] p-8 space-y-3"
              >
                <h3 className="text-[#F0F4F8] font-semibold">{area.title}</h3>
                <p className="text-[#8A9BB0] leading-relaxed text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="border-t border-[#1E3A5F] pt-12 space-y-3">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Note
          </p>
          <p className="text-[#8A9BB0] leading-relaxed max-w-2xl">
            This research directly informs the development of the CMR
            Intelligence Platform — an AI-powered decision-support system
            currently in the research and architecture phase under CMR Labs.
            Publications, technical notes, and findings will be documented here
            as the work progresses.
          </p>
        </div>

      </div>
    </main>
  );
}