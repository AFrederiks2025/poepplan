import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { WaitlistCta } from "@/components/waitlist-cta";

const links = [
  { href: "/#herkenning", label: "Herkenning" },
  { href: "/#programma", label: "Het programma" },
  { href: "/#voor-wie", label: "Voor wie" },
  { href: "/#wachtlijst", label: "Wachtlijst" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand/60 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link
          href="/"
          className="flex min-h-11 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
        >
          <BrandLogo preload />
        </Link>
        <nav className="hidden items-center gap-1 text-base text-ink-soft md:flex" aria-label="Hoofdmenu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-md px-2.5 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <WaitlistCta className="max-w-[11.5rem] px-3 text-center text-sm leading-tight sm:max-w-none sm:px-5 sm:text-base sm:leading-normal">
          Zet me op de wachtlijst
        </WaitlistCta>
      </div>
    </header>
  );
}
