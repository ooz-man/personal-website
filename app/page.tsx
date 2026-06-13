export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] flex items-center px-8 py-16 md:px-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-16">
        
        {/* Left: Text */}
        <div className="flex-1 space-y-6">
          <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">
            Founder & Principal
          </p>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              OYERO, Usman Hamzat
            </h1>
            <div className="mt-3 h-px w-16 bg-[#1E90FF]" />
          </div>

          <p className="text-[#1E90FF] text-lg font-medium">
            CMR Group
          </p>

          <p className="text-[#8A9BB0] text-base md:text-lg leading-relaxed max-w-lg">
            Building AI-powered digital infrastructure, intelligent operational
            platforms, and automation systems for businesses, institutions, and
            public-sector organizations.
          </p>

          <p className="text-[#4A90A4] text-sm">
            Website currently under construction — projects, research, and
            product showcases coming soon.
          </p>
        </div>

        {/* Right: Photo */}
        <div className="flex-shrink-0">
          <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden border border-[#1E3A5F]">
            <img
              src="/profile.jpg"
              alt="OYERO, Usman Hamzat"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </main>
  );
}