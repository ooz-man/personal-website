
const products = [
  {
    name: "CMR Hospitality Suite",
    status: "In Development",
    description:
      "An AI-powered hospitality operations platform for hotels and accommodation providers. Covers reservations, guest management, staff administration, analytics, and operational automation.",
  },
  {
    name: "CMR Legal Suite",
    status: "Planned",
    description:
      "A digital operations platform for law firms and legal practices. Includes case management, document workflows, scheduling, billing support, and AI-assisted productivity.",
  },
  {
    name: "CMR Commerce Suite",
    status: "Planned",
    description:
      "A business operations and commerce platform for retailers and growing businesses. Covers inventory, sales, customer management, order processing, and analytics.",
  },
  {
    name: "CMR Intelligence Platform",
    status: "Research Phase",
    description:
      "An AI-powered intelligence and decision-support platform for security agencies and institutions requiring advanced monitoring, OSINT integration, risk analysis, and operational awareness.",
  },
];
 
const statusColor: Record<string, string> = {
  "In Development": "#1E90FF",
  Planned: "#4A90A4",
  "Research Phase": "#8A9BB0",
};
 
export default function CMRGroup() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-5xl mx-auto space-y-20">
 
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">
                The Company
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                CMR Group
              </h1>
            </div>
 
            <img
              src="/cmr-group.jpg"
              alt="CMR Group Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
 
          <div className="h-px w-16 bg-[#1E90FF]" />
          <p className="text-[#8A9BB0] leading-relaxed max-w-2xl">
            A technology and intelligence-driven company building AI-powered
            digital infrastructure, intelligent operational platforms, and
            automation systems for businesses, institutions, and public-sector
            organizations.
          </p>
        </div>
 
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#1E3A5F] p-8 space-y-3">
            <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
              Mission
            </p>
            <p className="text-[#8A9BB0] leading-relaxed">
              To design and build intelligent technology that modernizes
              operations, empowers better decision-making, and delivers
              measurable value through software, automation, and AI.
            </p>
          </div>
          <div className="border border-[#1E3A5F] p-8 space-y-3">
            <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
              Vision
            </p>
            <p className="text-[#8A9BB0] leading-relaxed">
              To become one of Africa&apos;s leading builders of AI-powered
              digital infrastructure and intelligent enterprise technology
              platforms.
            </p>
          </div>
        </div>
 
        {/* Core Areas */}
        <div className="space-y-6">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Core Areas
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "AI Infrastructure",
              "Digital Infrastructure",
              "Business Automation",
              "Operational Platforms",
              "Enterprise Software",
              "Data & Analytics",
              "Intelligence Systems",
              "Research & Innovation",
            ].map((area) => (
              <span
                key={area}
                className="border border-[#1E3A5F] text-[#8A9BB0] text-sm px-4 py-2"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
 
        {/* Products */}
        <div className="space-y-6">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Product Portfolio
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="border border-[#1E3A5F] p-8 space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[#F0F4F8] font-semibold">
                    {product.name}
                  </h3>
                  <span
                    className="text-xs px-2 py-1 border whitespace-nowrap"
                    style={{
                      color: statusColor[product.status],
                      borderColor: statusColor[product.status],
                    }}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="text-[#8A9BB0] text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
 
        {/* Philosophy */}
        <div className="border-t border-[#1E3A5F] pt-12 space-y-3">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Philosophy
          </p>
          <p className="text-[#8A9BB0] leading-relaxed max-w-2xl">
            CMR Group is not a collection of disconnected software products. It
            is an ecosystem of intelligent platforms built on shared engineering
            principles, reusable infrastructure, AI capabilities, and scalable
            architecture — designed to solve real operational problems across
            multiple industries.
          </p>
        </div>
 
      </div>
    </main>
  );
}
 
