
import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/cmr-labs", label: "CMR Labs" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block text-2xl font-bold tracking-tight"
          >
            CMR<span className="text-[#1687E8]">.</span>
            <span className="ml-2 text-xs font-medium tracking-[0.2em] text-slate-300">
              GROUP
            </span>
          </Link>

          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Building an emerging portfolio of ventures across technology,
            enterprise solutions, services, and knowledge.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
            Explore
          </h2>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-slate-300 transition-colors hover:text-[#42A5FF]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
            Get in touch
          </h2>

          <a
            href="mailto:cmrgroupltd@gmail.com"
            className="block w-fit text-sm text-slate-300 transition-colors hover:text-[#42A5FF]"
          >
            cmrgroupltd@gmail.com
          </a>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} CMR Group. All rights reserved.</p>
          <p>
            Venture and product descriptions reflect their respective
            development stages.
          </p>
        </div>
      </div>
    </footer>
  );
}
