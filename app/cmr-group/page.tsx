<<<<<<< HEAD

const products = [
=======
const pillars = [
>>>>>>> 9c74c3b44cec2e8c0126ba7dd803212a43fb0c9a
  {
    title: "Technology",
    description: "Modern cloud software and enterprise platforms.",
  },
  {
    title: "Artificial Intelligence",
    description: "AI agents, intelligent automation, and intelligent decision support.",
  },
  {
    title: "Criminology Research",
    description: "Applying criminological thinking to risk, behaviour, justice, and security.",
  },
  {
    title: "Security",
    description: "Cybersecurity, operational resilience, and intelligence systems.",
  },
  {
    title: "Research",
    description: "Long-term applied research that evolves into commercial products.",
  },
  {
    title: "Infrastructure",
    description: "Scalable multi-tenant platforms powering multiple industries.",
  },
];
<<<<<<< HEAD
 
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
 
=======

const products = {
  enterprise: [
    "CMR Hospitality Suite",
    "CMR Legal Suite",
    "CMR Commerce Suite",
  ],
  intelligence: ["CMR Intelligence Platform"],
  future: [
    "CMR Healthcare Suite",
    "CMR Education Suite",
    "CMR Government Suite",
    "CMR Agriculture Suite",
  ],
};

const engineeringPrinciples = [
  "Cloud Native",
  "API First",
  "Multi-Tenant",
  "AI Ready",
  "Secure by Design",
  "Privacy Focused",
  "Modular Architecture",
  "Scalable Infrastructure",
];

export default function CMRGroup() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Hero */}
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-[#1E90FF] font-medium">
            The Company
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            CMR Group
          </h1>

          <div className="h-px w-20 bg-[#1E90FF]" />

          <p className="max-w-3xl text-lg leading-8 text-[#8A9BB0]">
            CMR Group is a research-driven technology company building
            intelligent digital infrastructure for businesses, institutions, and
            governments. We combine software engineering, artificial
            intelligence, automation, criminology, and security research to
            create scalable multi-tenant platforms that improve operational
            efficiency, decision-making, and organizational resilience.
          </p>
        </section>

        {/* Who We Are */}
        <section className="grid md:grid-cols-[220px_1fr] gap-12 border-t border-[#1E3A5F] pt-16">
          <div>
            <p className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm font-medium">
              Who We Are
            </p>
          </div>

          <div className="space-y-6 text-[#8A9BB0] leading-8">
            <p>
              CMR Group was founded on the belief that the future belongs to
              organizations powered by intelligent systems rather than
              disconnected software.
            </p>

            <p>
              Our work sits at the intersection of technology, intelligence,
              criminology, automation, and digital infrastructure.
            </p>

            <p>
              Rather than building isolated applications, we develop integrated
              platforms capable of serving thousands of organizations through
              secure, cloud-native, multi-tenant architecture.
            </p>
          </div>
        </section>

>>>>>>> 9c74c3b44cec2e8c0126ba7dd803212a43fb0c9a
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#1E3A5F] rounded-xl p-8 space-y-4">
            <h3 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
              Mission
            </h3>

            <p className="text-[#8A9BB0] leading-8">
              To engineer intelligent digital infrastructure that enables
              organizations to automate operations, strengthen decision-making,
              improve security, and deliver better services through scalable
              software and applied artificial intelligence.
            </p>
          </div>

          <div className="border border-[#1E3A5F] rounded-xl p-8 space-y-4">
            <h3 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
              Vision
            </h3>

            <p className="text-[#8A9BB0] leading-8">
              To become Africa&apos;s leading intelligence and technology
              company, building the operating systems that power businesses,
              institutions, public-sector organizations, and future smart
              cities.
            </p>
          </div>
<<<<<<< HEAD
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
=======
        </section>

        {/* Company Pillars */}
        <section className="space-y-10">
          <h2 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
            Company Pillars
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
>>>>>>> 9c74c3b44cec2e8c0126ba7dd803212a43fb0c9a
              <div
                key={pillar.title}
                className="border border-[#1E3A5F] rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg">{pillar.title}</h3>

                <p className="mt-3 text-[#8A9BB0] leading-7">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
<<<<<<< HEAD
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
 
=======
        </section>

        {/* Multi Tenant */}
        <section className="border border-[#1E3A5F] rounded-xl p-10 space-y-8">
          <div>
            <h2 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
              Multi-Tenant Infrastructure
            </h2>

            <p className="mt-4 text-[#8A9BB0] leading-8 max-w-3xl">
              Every CMR platform is designed using a shared multi-tenant cloud
              architecture—allowing multiple organizations to operate securely
              and independently while benefiting from a common technology
              foundation.
            </p>
          </div>

          <div className="grid sm:grid-cols-5 gap-4 text-center">

            <div className="col-span-5 font-semibold text-[#1E90FF]">
              CMR Cloud
            </div>

            <div className="col-span-5 text-[#4A90A4]">│</div>

            <div className="col-span-5 border-t border-[#1E3A5F]" />

            {[
              "Hotel",
              "Law Firm",
              "Hospital",
              "University",
              "Government",
              "Retail",
            ].map((item) => (
              <div
                key={item}
                className="border border-[#1E3A5F] rounded-lg py-4"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="text-[#8A9BB0]">
            One platform. Multiple organizations. Independent data. Shared
            infrastructure. Infinite scalability.
          </p>
        </section>

        {/* Research */}
        <section className="grid md:grid-cols-[220px_1fr] gap-12">
          <div>
            <h2 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
              Research & Innovation
            </h2>
          </div>

          <div className="space-y-6 text-[#8A9BB0] leading-8">
            <p>
              Research is central to CMR Group.
            </p>

            <p>
              We continuously investigate emerging technologies, criminology,
              security, artificial intelligence, automation, behavioural
              systems, and digital governance.
            </p>

            <p>
              Our research directly informs every platform we build, ensuring
              each product is grounded in practical, real-world challenges.
            </p>
          </div>
        </section>

        {/* Product Ecosystem */}
        <section className="space-y-10">
          <h2 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
            Product Ecosystem
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-[#1E3A5F] rounded-xl p-6">
              <h3 className="font-semibold mb-4">Enterprise Platforms</h3>

              <ul className="space-y-3 text-[#8A9BB0]">
                {products.enterprise.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-[#1E3A5F] rounded-xl p-6">
              <h3 className="font-semibold mb-4">Intelligence Platforms</h3>

              <ul className="space-y-3 text-[#8A9BB0]">
                {products.intelligence.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-[#1E3A5F] rounded-xl p-6">
              <h3 className="font-semibold mb-4">Future Labs</h3>

              <ul className="space-y-3 text-[#8A9BB0]">
                {products.future.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Engineering Principles */}
        <section className="space-y-8">
          <h2 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
            Engineering Principles
          </h2>

          <div className="flex flex-wrap gap-3">
            {engineeringPrinciples.map((item) => (
              <span
                key={item}
                className="border border-[#1E3A5F] rounded-full px-5 py-2 text-sm text-[#8A9BB0]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-t border-[#1E3A5F] pt-16 space-y-8">

          <div>
            <h2 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
              Philosophy
            </h2>
          </div>

          <div className="max-w-4xl space-y-6 text-[#8A9BB0] leading-8">
            <p>
              CMR Group exists to build the digital infrastructure of tomorrow.
            </p>

            <p>
              We believe software should do more than automate tasks—it should
              augment human intelligence, simplify complex operations, and help
              organizations make better decisions.
            </p>

            <p>
              Every platform we develop is designed with longevity, security,
              scalability, and intelligence at its core.
            </p>

            <blockquote className="border-l-2 border-[#1E90FF] pl-6 italic text-white text-xl">
              Our objective isn&apos;t simply to build applications. It&apos;s
              to build ecosystems that power industries.
            </blockquote>
          </div>
        </section>

        {/* Future Vision */}
        <section className="border-t border-[#1E3A5F] pt-16">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-[#1E90FF] uppercase tracking-[0.2em] text-sm">
              Looking Ahead
            </h2>

            <p className="text-[#8A9BB0] leading-8">
              Our ambition extends beyond software.
            </p>

            <p className="text-[#8A9BB0] leading-8">
              We envision CMR Group becoming an innovation ecosystem where
              research, engineering, artificial intelligence, security, and
              criminology converge to solve some of Africa&apos;s most important
              operational and societal challenges.
            </p>

            <p className="text-[#8A9BB0] leading-8">
              The platforms we build today are the foundation for the
              intelligent infrastructure of tomorrow.
            </p>
          </div>
        </section>

>>>>>>> 9c74c3b44cec2e8c0126ba7dd803212a43fb0c9a
      </div>
    </main>
  );
}
<<<<<<< HEAD
 
=======
>>>>>>> 9c74c3b44cec2e8c0126ba7dd803212a43fb0c9a
