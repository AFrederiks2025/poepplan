import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";

export const metadata: Metadata = {
  title: "Verstopping bij kinderen: wanneer naar de huisarts?",
  description:
    "Verstopping bij kinderen: wat je thuis rustig kunt doen, en wanneer je de huisarts belt. Geen dosering, geen snelle belofte.",
  alternates: { canonical: "/verstopping-bij-kinderen" },
};

export default function VerstoppingPage() {
  return (
    <GuideArticle
      kicker="Rustig kijken, op tijd bellen"
      title="Verstopping bij kinderen: wanneer naar de huisarts?"
      path="/verstopping-bij-kinderen"
      lead="Als poepen pijn doet of weinig gebeurt, willen veel ouders meteen iets “doen”. Soms is thuis rust en ritme genoeg om te beginnen. Soms is de huisarts de eerste stap. Dit artikel helpt je dat onderscheid te maken — zonder diagnose."
    >
      <section>
        <h2 className="font-display text-2xl text-ink">Wat ouders vaak bedoelen</h2>
        <p className="mt-2">
          Harde poep. Lange tussenpozen. Pijn, persgedrag, of juist ophouden
          omdat de vorige keer zeer deed. Dat kan een vicieuze cirkel worden:
          pijn maakt bang, bang houdt tegen, tegenhouden maakt weer pijn.
        </p>
      </section>
      <section>
        <h2 className="font-display text-2xl text-ink">Wat je thuis rustig kunt proberen</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            Houd een voorspelbaar moment aan, zonder dat er iets moet lukken.
          </li>
          <li>
            Maak geen strijd van eten of drinken. Druk zet zich vast in de buik.
          </li>
          <li>
            Gebruik gewone, warme taal. “Je lijf is even in de war” is zachter
            dan “je moet nu”.
          </li>
          <li>
            Schrijf kort op wat je ziet: pijn, ongelukjes, hoe vaak. Dat helpt
            als je later de huisarts belt.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-display text-2xl text-ink">Wanneer je belt</h2>
        <p className="mt-2">
          Bel je huisarts bij bloed, koorts, hevige buikpijn, ziek-zijn,
          afvallen, of als jij het gevoel hebt dat er iets medisch speelt. Wij
          schrijven hier geen laxeermiddelen voor en geen schema van dagen
          waarin het “over” zou moeten zijn.
        </p>
      </section>
    </GuideArticle>
  );
}
