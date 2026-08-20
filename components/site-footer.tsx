import Link from "next/link";
import { Mark } from "@/components/mark";
import { getContactEmail } from "@/lib/site";

export function SiteFooter() {
  const email = getContactEmail();

  return (
    <footer className="border-t border-sand bg-paper-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-2.5">
            <Mark className="size-8" />
            <p className="font-display text-lg text-ink">Poepplan</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            Online programma voor ouders van kinderen die moeite hebben met
            poepen. Geen schaamte. Wel een rustig plan.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink-soft">
          <p className="font-semibold text-ink">Op deze site</p>
          <Link href="/#programma" className="hover:text-ink">
            Het programma
          </Link>
          <Link href="/#aanmelden" className="hover:text-ink">
            Wachtlijst
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          {email ? (
            <a href={`mailto:${email}`} className="hover:text-ink">
              {email}
            </a>
          ) : null}
        </div>
      </div>
      <div className="border-t border-sand/80">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-5 text-ink-soft sm:px-6">
          Poepplan is ondersteuning voor ouders, geen vervanging van de huisarts
          of een andere zorgverlener.
        </p>
      </div>
    </footer>
  );
}
