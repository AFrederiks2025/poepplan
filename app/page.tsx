import Link from "next/link";
import { HeroArt } from "@/components/hero-art";
import { PathDivider } from "@/components/path-divider";
import { TogetherArt } from "@/components/together-art";
import { WaitlistCta } from "@/components/waitlist-cta";
import { WaitlistForm } from "@/components/waitlist-form";
import {
  contrastRows,
  faqJsonLd,
  guides,
  herkenning,
  hero,
  principes,
  vragen,
  websiteJsonLd,
} from "@/lib/content";
import { tapTarget } from "@/lib/ui";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-wide text-sage uppercase">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {hero.title}
            </h1>
            <div className="mt-6 lg:hidden">
              <HeroArt />
            </div>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">{hero.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WaitlistCta />
              <a
                href="#programma"
                className={`${tapTarget} border border-sand bg-cream text-ink transition hover:border-clay/40`}
              >
                {hero.secondary}
              </a>
            </div>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft">{hero.micro}</p>
          </div>
          <div className="hidden lg:block">
            <HeroArt />
          </div>
        </div>
      </section>

      <PathDivider />

      <section id="herkenning" className="scroll-mt-20 bg-cream/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-sage uppercase">
            Herkenning
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl text-ink sm:text-4xl">
            Veel ouders herkennen dit — en praten er bijna met niemand over
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            Als poepen pijn doet, uitblijft, of een dagelijkse ruzie wordt, is
            dat zwaar. Het zegt niets over jou als ouder. Het zegt wél dat je
            een plan kunt gebruiken.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {herkenning.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-sand bg-paper p-6 shadow-sm"
              >
                <h3 className="font-display text-2xl text-clay-dark">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink-soft">{item.text}</p>
                <Link
                  className="mt-4 inline-flex min-h-11 items-center text-base font-semibold text-sage underline decoration-sage-soft underline-offset-4 hover:text-ink"
                  href={item.href}
                >
                  Kort artikel
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programma" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-wide text-sage uppercase">
                Het programma
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                Een rustig plan voor thuis. Geen spreekkamer, geen oordeel.
              </h2>
              <p className="mt-4 text-lg leading-8 text-ink-soft">
                Poepplan wordt een online programma dat jij als ouder volgt. In
                je eigen tempo, op je eigen bank. Je krijgt uitleg die je snapt,
                en stappen die je thuis kunt zetten — zonder je kind te forceren.
              </p>
              <ul className="mt-6 space-y-3 text-base text-ink-soft">
                {[
                  "Helder beeld van wat er speelt: gedrag, spanning, ritme",
                  "Een stappenplan in kleine brokken",
                  "Taal die je kind niet beschaamt",
                  "Houvast als het weer even vastloopt",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <TogetherArt />
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-sand bg-paper">
            <div className="grid grid-cols-2 bg-paper-deep text-base font-semibold">
              <p className="px-5 py-3 text-clay-dark">Niet</p>
              <p className="px-5 py-3 text-sage">Wél</p>
            </div>
            {contrastRows.map((row) => (
              <div
                key={row.niet}
                className="grid grid-cols-1 border-t border-sand sm:grid-cols-2"
              >
                <p className="px-5 py-4 text-base leading-7 text-ink-soft">
                  <span className="mr-2 font-semibold text-clay-dark sm:hidden">Niet. </span>
                  {row.niet}
                </p>
                <p className="border-t border-sand px-5 py-4 text-base leading-7 text-ink-soft sm:border-t-0 sm:border-l">
                  <span className="mr-2 font-semibold text-sage sm:hidden">Wél. </span>
                  {row.wel}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {principes.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-sand bg-cream p-6"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-gold">
                  {item.step}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-ink-soft">{item.text}</p>
                <p className="mt-3 text-base leading-7 font-medium text-sage">{item.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PathDivider />

      <section id="voor-wie" className="scroll-mt-20 bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-peach uppercase">
              Voor wie
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Voor ouders bij wie poepen groter is geworden dan het zou moeten zijn
            </h2>
            <ul className="mt-6 space-y-3 text-base leading-7 text-peach">
              <li>Je kind poept met pijn, zelden, of alleen in een luier</li>
              <li>Je kind houdt poep op</li>
              <li>De wc is een dagelijkse bron van stress</li>
              <li>Je wilt een plan, geen schuldgevoel</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">
            <h3 className="font-display text-2xl">Eerst naar de huisarts als</h3>
            <ul className="mt-5 space-y-3 text-base leading-7 text-peach">
              <li>er bloed bij de poep zit</li>
              <li>je kind hevige buikpijn heeft, koorts, of ziek is</li>
              <li>je kind afvalt of duidelijk minder drinkt</li>
              <li>jij het gevoel hebt dat er iets medisch speelt</li>
            </ul>
            <p className="mt-5 text-base leading-7 text-peach/90">
              Twijfel je? Dat is reden genoeg om te bellen. Poepplan komt
              daarna — niet in de plaats daarvan.
            </p>
          </div>
        </div>
      </section>

      <section id="maker" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-center gap-10 rounded-3xl border border-sand bg-cream p-6 sm:p-8 lg:grid-cols-[auto_1fr]">
            <div
              className="flex size-28 shrink-0 items-center justify-center rounded-3xl bg-sage-soft font-display text-4xl text-sage"
              aria-hidden="true"
            >
              AF
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-sage uppercase">
                Wie maakt Poepplan?
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">Anton Frederiks</h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-ink-soft">
                Anton bouwt Poepplan voor ouders. Hij is geen arts en stelt
                geen diagnose. Poepplan hoort naast de huisarts — nooit in de
                plaats daarvan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="aanmelden" className="h-0 scroll-mt-20" aria-hidden="true" />
      <section
        id="wachtlijst"
        className="scroll-mt-20 mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <p className="text-sm font-semibold tracking-wide text-sage uppercase">
            Wachtlijst
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Zet je op de wachtlijst
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-soft">
            Eén mail zodra we opengaan. Tot die tijd sturen we af en toe iets
            dat thuis al helpt. Afmelden kan altijd.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Geen account nodig. Geen betaling. Alleen een seintje als er iets
            te vertellen valt.
          </p>
        </div>
        <div className="rounded-3xl border border-sand bg-cream p-6 shadow-sm sm:p-8">
          <WaitlistForm />
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl text-ink">Korte vragen</h2>
          <dl className="mt-8 grid gap-6 md:grid-cols-2">
            {vragen.map((item) => (
              <div key={item.q} className="rounded-3xl bg-paper p-6">
                <dt className="font-display text-xl text-ink">{item.q}</dt>
                <dd className="mt-2 text-base leading-7 text-ink-soft">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold tracking-wide text-sage uppercase">
          Eerst lezen
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink">Drie korte gidsen</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-3xl border border-sand bg-cream p-6 transition hover:border-sage/40"
            >
              <h3 className="font-display text-2xl text-ink">{guide.title}</h3>
              <p className="mt-2 text-base leading-7 text-ink-soft">{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <aside className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-sand bg-cream px-6 py-5 text-base leading-7 text-ink-soft">
          <strong className="text-ink">Korte noot. </strong>
          Poepplan is bedoeld als ondersteuning voor ouders. Het is geen
          medisch advies en geen vervanging van de huisarts of een andere
          zorgverlener. Bij pijn, bloed, koorts of twijfel: neem contact op
          met je huisarts.
        </div>
      </aside>
    </>
  );
}
