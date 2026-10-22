
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/cmr-labs", label: "CMR Labs" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1628]/95 text-white backdrop-blur-md">
      <nav
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 text-2xl font-bold tracking-tight"
          aria-label="CMR Group home"
        >
          CMR<span className="text-[#1687E8]">.</span>
          <span className="ml-2 text-xs font-medium tracking-[0.2em] text-slate-300">
            GROUP
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-[#42A5FF]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full border border-[#42A5FF] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[#1687E8] md:inline-flex"
        >
          Contact Us
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0A1628] px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-3 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-white/10 text-[#42A5FF]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-[#1687E8] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
