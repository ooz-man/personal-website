
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Usman Hamzat, OYERO about CMR Group, business ventures, technology projects, research collaborations, and strategic initiatives.",
};
const contacts = [
  {
    label: "Email",
    value: "cmrgroupltd@gmail.com",
    href: "mailto:cmrgroupltd@gmail.com",
    description: "For business inquiries and collaboration",
  },
  {
    label: "GitHub",
    value: "github.com/ooz-man",
    href: "https://github.com/ooz-man",
    description: "Explore software and engineering projects",
  },
  {
    label: "X (Twitter)",
    value: "@ooz1006",
    href: "https://x.com/ooz1006",
    description: "Follow updates and professional interests",
  },
  {
    label: "WhatsApp",
    value: "+234 903 414 9815",
    href: "https://wa.me/+2349034149815",
    description: "Contact directly for relevant inquiries",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A2B3B]">
      {/* Hero */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
            Contact CMR Group
          </p>

          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Let&apos;s build meaningful things together.
              </h1>

              <div className="mt-8 h-1 w-16 bg-[#C5A36A]" />

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Get in touch about partnerships, research, technology,
                consulting, project collaboration, or other serious business
                inquiries related to the CMR Group portfolio.
              </p>
            </div>

            <div className="border-l border-[#DCE3E8] pl-6 md:pl-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#64748B]">
                Our approach
              </p>
              <p className="mt-4 text-xl leading-8 text-[#1A2B3B]">
                Thoughtful collaboration. Practical solutions. Responsible
                innovation.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                CMR Group is an emerging business portfolio initiative
                connecting interests across technology, research, services,
                and media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="border-t border-[#DCE3E8] bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4D68]">
              Contact details
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Start a conversation.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Choose the channel that best suits your inquiry. For formal
              proposals and business matters, email is the preferred starting
              point.
            </p>
          </div>

          <div className="divide-y divide-[#DCE3E8] border-y border-[#DCE3E8]">
            {contacts.map((contact) => {
              const isEmail = contact.label === "Email";

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="group flex flex-col gap-3 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                      {contact.label}
                    </p>

                    <p className="mt-2 text-lg font-medium text-[#1A2B3B] transition-colors group-hover:text-[#1D4D68]">
                      {contact.value}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {contact.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xl text-[#1D4D68] transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location and availability */}
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-t border-[#DCE3E8] pt-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Location
              </p>
              <p className="mt-3 text-xl font-medium">Lagos, Nigeria</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Open to relevant opportunities and remote collaborations
                across locations.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Areas of inquiry
              </p>
              <p className="mt-3 text-xl font-medium">
                Technology · Research · Partnerships
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                AI and automation, software projects, security research,
                strategic collaboration, and portfolio development.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-[#DCE3E8] pt-6">
            <p className="text-xs leading-6 text-slate-500">
              CMR Group is an emerging portfolio initiative. References to
              ventures, services, and products reflect their respective
              development stages and should not be taken as confirmation that
              every activity is currently operational.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
