export default function About() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* Header */}
        <div className="space-y-4">
          <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Usman Hamzat
          </h1>
          <div className="h-px w-16 bg-[#1E90FF]" />
        </div>

        {/* Background */}
        <section className="space-y-3">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Background
          </p>
          <p className="text-[#8A9BB0] leading-relaxed">
            I&apos;m a Nigerian technology founder and builder with an academic
            background in Criminology and Security Studies. My interests sit at
            the intersection of technology, intelligence, automation, and
            real-world problem solving — with a strong focus on developing
            practical digital solutions that create measurable impact.
          </p>
        </section>

        {/* What Drives Me */}
        <section className="space-y-3">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            What Drives Me
          </p>
          <p className="text-[#8A9BB0] leading-relaxed">
            I founded CMR Group with a long-term vision of building AI-powered
            digital infrastructure and intelligent operational platforms that
            help businesses, institutions, and public-sector organizations work
            more efficiently and make better decisions.
          </p>
          <p className="text-[#8A9BB0] leading-relaxed">
            My goal is not just to build software — but to build systems that
            solve meaningful problems and contribute to Africa&apos;s
            technological growth through innovation, research, and practical
            execution.
          </p>
        </section>

        {/* What I Do */}
        <section className="space-y-3">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            What I Do
          </p>
          <p className="text-[#8A9BB0] leading-relaxed">
            I work as a founder, software developer, and technology researcher
            with a strong interest in AI, automation, systems design,
            intelligence technologies, and scalable digital infrastructure. I
            build products that combine software engineering with data,
            analytics, and intelligent decision-support capabilities.
          </p>
        </section>

        {/* Personal Note */}
        <section className="space-y-3">
          <p className="text-[#1E90FF] text-sm uppercase tracking-widest font-medium">
            Beyond Technology
          </p>
          <p className="text-[#8A9BB0] leading-relaxed">
            I&apos;m constantly learning, researching, and exploring new ideas
            that can be transformed into practical products. I enjoy thinking in
            systems, documenting ideas, and building projects that have
            long-term value rather than chasing short-term trends.
          </p>
        </section>

      </div>
    </main>
  );
}