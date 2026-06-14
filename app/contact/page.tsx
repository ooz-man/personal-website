const contacts = [
  { label: "Email", value: "suthmanh@gmail.com", href: "mailto:suthmanh@gmail.com" },
  { label: "GitHub", value: "github.com/ooz-man", href: "https://github.com/ooz-man" },
  { label: "X (Twitter)", value: "@ooz1006", href: "https://x.com/ooz1006" },
  { label: "WhatsApp", value: "+234 903 414 9815", href: "https://wa.me/2349034149815" },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F0F4F8] px-8 py-20 md:px-20">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="text-[#8A9BB0] text-sm uppercase tracking-[0.2em]">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact</h1>
          <div className="h-px w-16 bg-[#1E90FF]" />
          <p className="text-[#8A9BB0] leading-relaxed max-w-xl">
            Available for partnerships, consulting, project collaborations, and serious inquiries related to AI, automation, and digital infrastructure.
          </p>
        </div>
        <div className="space-y-4">
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-[#1E3A5F] px-8 py-6 group hover:border-[#1E90FF] transition-colors duration-200">
              <span className="text-[#8A9BB0] text-sm uppercase tracking-widest">{contact.label}</span>
              <span className="text-[#F0F4F8] group-hover:text-[#1E90FF] transition-colors duration-200">{contact.value}</span>
            </a>
          ))}
        </div>
        <div className="border-t border-[#1E3A5F] pt-10">
          <p className="text-[#8A9BB0] text-sm leading-relaxed">Based in Abuja, Nigeria. Open to remote collaborations globally.</p>
        </div>
      </div>
    </main>
  );
}
