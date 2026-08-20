import Link from "next/link";
import { Mark } from "@/components/mark";

const links = [
  { href: "/#herkenning", label: "Herkenning" },
  { href: "/#programma", label: "Het programma" },
  { href: "/#voor-wie", label: "Voor wie" },
  { href: "/#aanmelden", label: "Aanmelden" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand/70 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay">
          <Mark className="size-9" />
          <span className="font-display text-xl tracking-tight text-ink">Poepplan</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink-soft md:flex" aria-label="Hoofdmenu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#aanmelden"
          className="rounded-full bg-clay px-4 py-2 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-clay-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
        >
          Houd me op de hoogte
        </Link>
      </div>
    </header>
  );
}
