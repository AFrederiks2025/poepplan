import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { contactEmail, guides } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-sand bg-paper-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
          >
            <BrandLogo className="h-12 w-auto" />
          </Link>
          <p className="mt-3 text-base leading-7 text-ink-soft">
            Online programma voor ouders van kinderen die moeite hebben met
            poepen. Geen schaamte. Wel een rustig plan.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Vraag? Mail ons gerust.{" "}
            <a className="font-semibold text-ink underline decoration-sand underline-offset-2 hover:text-clay" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-2 text-base text-ink-soft">
            <p className="font-semibold text-ink">Op deze site</p>
            <Link className="inline-flex min-h-11 items-center hover:text-ink" href="/#programma">
              Het programma
            </Link>
            <Link className="inline-flex min-h-11 items-center hover:text-ink" href="/#wachtlijst">
              Wachtlijst
            </Link>
            <Link className="inline-flex min-h-11 items-center hover:text-ink" href="/privacy">
              Privacy
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-base text-ink-soft">
            <p className="font-semibold text-ink">Korte gidsen</p>
            {guides.map((guide) => (
              <Link
                key={guide.href}
                className="inline-flex min-h-11 items-center hover:text-ink"
                href={guide.href}
              >
                {guide.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-sand/80">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm leading-6 text-ink-soft sm:px-6">
          Poepplan is ondersteuning voor ouders, geen vervanging van de huisarts
          of een andere zorgverlener.
        </p>
      </div>
    </footer>
  );
}
