import { HeroArt } from "@/components/hero-art";
import { WaitlistForm } from "@/components/waitlist-form";
import { site } from "@/lib/site";

const herkenning = [
  {
    title: "Verstopping",
    text: "Poepen doet pijn, gebeurt weinig, of is hard en lastig. De wc voelt als iets om tegenop te zien — voor je kind, en vaak ook voor jou.",
  },
  {
    title: "Ophouden",
    text: "Je kind móet, maar houdt tegen. Op de tenen, wegkijken, “ik hoef niet”. Vaak uit angst of controle. Zelden uit stiekemheid.",
  },
  {
    title: "Poepstress",
    text: "Ruzie voor de wc. Tranen. Schaamte. Jij die het goed wilt doen, en merkt dat duwen en smeken het eerder erger maakt.",
  },
];

const principes = [
  {
    step: "01",
    title: "Eerst begrijpen",
    text: "Wat er speelt in gedrag, spanning en ritme — in woorden die je aan de keukentafel kunt uitleggen.",
  },
  {
    step: "02",
    title: "Druk eraf, ritme erin",
    text: "Minder strijd, meer voorspelbaarheid. Geen toverspreuk, wel een rustiger kader voor thuis.",
  },
  {
    step: "03",
    title: "Kleine stappen",
    text: "Op jullie tempo. Het programma volgt de ouder: jij bepaalt wat past bij jouw kind.",
  },
  {
    step: "04",
    title: "Zonder schuld",
    text: "Poepstress zegt niets over hoe goed je ouder bent. Die toon houden we vast.",
  },
];

const vragen = [
  {
    q: "Wanneer start het programma?",
    a: "Zodra het klaar is. We mailen de wachtlijst. Een vaste datum zetten we hier niet neer zolang die er niet is.",
  },
  {
    q: "Wat kost het?",
    a: "De prijs is nog niet vastgelegd. Die vermelden we pas als hij klopt — geen verzonnen bedrag.",
  },
  {
    q: "Is dit medisch advies?",
    a: "Nee. Poepplan is ondersteuning voor ouders, geen diagnose en geen vervanging van de huisarts.",
  },
  {
    q: "Voor welke leeftijd?",
    a: "Voor ouders van kinderen die moeite hebben met poepen. De precieze leeftijdsrange volgt bij de start van het programma.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "nl-NL",
    description: site.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold tracking-wide text-sage uppercase">
              Online programma voor ouders
            </p>
            <h1 className="mt-3 max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Als poepen thuis een strijd is
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">
              Poepplan is een online programma voor ouders van kinderen die
              moeite hebben met poepen. Verstopping, ophouden of poepstress: je
              hoeft het niet alleen uit te zoeken — en je kind hoeft zich er
              niet voor te schamen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#aanmelden"
                className="inline-flex items-center justify-center rounded-full bg-clay px-6 py-3.5 text-base font-semibold text-cream shadow-sm transition hover:bg-clay-dark"
              >
                Houd me op de hoogte
              </a>
              <a
                href="#programma"
                className="inline-flex items-center justify-center rounded-full border border-sand bg-cream px-6 py-3.5 text-base font-semibold text-ink transition hover:border-clay/40"
              >
                Wat is Poepplan?
              </a>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section id="herkenning" className="bg-cream/70">
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
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programma" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
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
            <ul className="mt-6 space-y-3 text-ink-soft">
              <li className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-clay" />
                Helder beeld van wat er speelt: gedrag, spanning, ritme
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-clay" />
                Een stappenplan in kleine brokken
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-clay" />
                Taal die je kind niet beschaamt
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-clay" />
                Houvast als het weer even vastloopt
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-paper-deep p-7 sm:p-8">
            <h3 className="font-display text-2xl text-ink">Wat het níet is</h3>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-ink-soft">
              <li>
                <strong className="text-ink">Geen medisch consult.</strong> We
                stellen geen diagnose en schrijven geen behandeling voor.
              </li>
              <li>
                <strong className="text-ink">Geen snelle belofte.</strong> Geen
                “binnen twee weken opgelost”. Elk kind is anders.
              </li>
              <li>
                <strong className="text-ink">Geen winkeltje (nog).</strong> Er
                is nog geen checkout of prijs. Eerst een eerlijke wachtlijst.
              </li>
            </ul>
          </div>
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
              <p className="mt-2 text-sm leading-7 text-ink-soft">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="voor-wie" className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-peach uppercase">
              Voor wie
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Voor ouders bij wie poepen groter is geworden dan het zou moeten zijn
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-peach/90">
              <li>Je kind poept met pijn, zelden, of alleen in een luier</li>
              <li>Je kind houdt poep op</li>
              <li>De wc is een dagelijkse bron van stress</li>
              <li>Je wilt een plan, geen schuldgevoel</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">
            <h3 className="font-display text-2xl">Eerst naar de huisarts als</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-peach/90">
              <li>er bloed bij de poep zit</li>
              <li>je kind hevige buikpijn heeft, koorts, of ziek is</li>
              <li>je kind afvalt of duidelijk minder drinkt</li>
              <li>jij het gevoel hebt dat er iets medisch speelt</li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-peach/80">
              Twijfel je? Dat is reden genoeg om te bellen. Poepplan komt
              daarna — niet in de plaats daarvan.
            </p>
          </div>
        </div>
      </section>

      <section id="aanmelden" className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold tracking-wide text-sage uppercase">
            Wachtlijst
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Het programma komt eraan
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-soft">
            We zetten Poepplan nu klaar. Prijs, startdatum en de precieze
            onderdelen volgen — die verzinnen we hier niet. Wil je bericht
            zodra het open is? Laat je e-mail achter.
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
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
                <dd className="mt-2 text-sm leading-7 text-ink-soft">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <aside className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-sand bg-cream px-6 py-5 text-sm leading-7 text-ink-soft">
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
