import type { ReactNode } from "react";
import { PathDivider } from "@/components/path-divider";
import { WaitlistCta } from "@/components/waitlist-cta";
import { site } from "@/lib/site";

export function GuideArticle({
  kicker,
  title,
  lead,
  path,
  children,
}: {
  kicker: string;
  title: string;
  lead: string;
  path: string;
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: lead,
    inLanguage: "nl-NL",
    author: { "@type": "Person", name: "Anton Frederiks" },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}${path}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-sm font-semibold tracking-wide text-sage uppercase">{kicker}</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-ink">{title}</h1>
      <p className="mt-4 text-lg leading-8 text-ink-soft">{lead}</p>
      <div className="mt-10 space-y-6 text-base leading-7 text-ink-soft">{children}</div>
      <PathDivider />
      <div className="mt-4 rounded-3xl border border-sand bg-cream p-6">
        <h2 className="font-display text-2xl text-ink">Eerst naar de huisarts als</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-ink-soft">
          <li>er bloed bij de poep zit</li>
          <li>je kind hevige buikpijn heeft, koorts, of ziek is</li>
          <li>je kind afvalt of duidelijk minder drinkt</li>
          <li>jij het gevoel hebt dat er iets medisch speelt</li>
        </ul>
        <p className="mt-4 text-base leading-7 text-ink-soft">
          Twijfel je? Dat is reden genoeg om te bellen. Poepplan komt daarna —
          niet in de plaats daarvan.
        </p>
      </div>
      <div className="mt-8 rounded-3xl border border-sage/20 bg-sage-soft/50 p-6">
        <h2 className="font-display text-2xl text-sage">Wil je later een rustig plan?</h2>
        <p className="mt-2 text-base leading-7 text-ink-soft">
          Poepplan wordt een online programma voor ouders. De wachtlijst is
          open. Gratis en vrijblijvend.
        </p>
        <WaitlistCta className="mt-5" />
      </div>
    </article>
  );
}
