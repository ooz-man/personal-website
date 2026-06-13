"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cmr-group", label: "CMR Group" },
  { href: "/cmr-labs", label: "CMR Labs" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/90 backdrop-blur-sm border-b border-[#1E3A5F]">
      <div className="max-w-6xl mx-auto px-8 md:px-20 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="text-[#F0F4F8] font-bold tracking-tight text-lg">
          UH<span className="text-[#1E90FF]">.</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#1E90FF]"
                  : "text-[#8A9BB0] hover:text-[#F0F4F8]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}