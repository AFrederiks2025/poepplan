import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";

export const metadata: Metadata = {
  title: "Poepangst bij kinderen",
  description:
    "Poepangst bij kinderen: hoe je de wc kleiner maakt zonder dwang, en wanneer je de huisarts inschakelt.",
  alternates: { canonical: "/poepangst-bij-kinderen" },
};

export default function PoepangstPage() {
  return (
    <GuideArticle
      kicker="Als de wc zelf al spannend is"
      title="Poepangst bij kinderen"
      path="/poepangst-bij-kinderen"
      lead="Sommige kinderen zijn niet alleen koppig bij de wc — ze zijn bang. Bang voor pijn, voor het geluid, voor loslaten, of voor wat er daarna gebeurt. Angst wordt kleiner als de wc voorspelbaar en vriendelijk is."
    >
      <section>
        <h2 className="font-display text-2xl text-ink">Angst is geen ongehoorzaamheid</h2>
        <p className="mt-2">
          Een kind dat wegrent van de wc is vaak aan het beschermen, niet aan
          het dwarsliggen. Als jij dat zo kunt zien, wordt jouw stem rustiger.
          En een rustige stem is al een deel van het plan.
        </p>
      </section>
      <section>
        <h2 className="font-display text-2xl text-ink">Wat je thuis kunt doen</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            Maak de wc saai en veilig: zelfde moment, zelfde woorden, geen
            publiek, geen haast.
          </li>
          <li>
            Laat je kind oefenen zonder dat er gepoept hoeft te worden. Zitten
            is al een stap.
          </li>
          <li>
            Benoem wat je ziet, zonder oordeel: “Het voelt eng, hè. Ik blijf
            erbij.”
          </li>
          <li>
            Stop als de spanning oploopt. Een korte, milde poging is beter dan
            een lange veldslag.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-display text-2xl text-ink">Geen schaamte, geen race</h2>
        <p className="mt-2">
          Praat er niet over als een trucje dat je kind “nog niet snapt”. En
          vergelijk niet met andere kinderen. Poepangst gaat niet over slimmer
          worden; het gaat over veiliger voelen.
        </p>
      </section>
    </GuideArticle>
  );
}
