import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";

export const metadata: Metadata = {
  title: "Kind houdt poep op — wat kun je thuis doen?",
  description:
    "Als je kind poep ophoudt: wat je thuis rustig kunt proberen, zonder dwang of schaamte. En wanneer je de huisarts belt.",
  alternates: { canonical: "/kind-houdt-poep-op" },
};

export default function KindHoudtPoepOpPage() {
  return (
    <GuideArticle
      kicker="Thuis, zonder dwang"
      title="Kind houdt poep op — wat kun je thuis doen?"
      path="/kind-houdt-poep-op"
      lead="Ophouden is voor veel kinderen een manier om pijn of spanning te vermijden. Het is zelden stiekemheid. Hieronder staat wat je thuis rustig kunt proberen — geen diagnose, geen belofte."
    >
      <section>
        <h2 className="font-display text-2xl text-ink">Wat je vaak ziet</h2>
        <p className="mt-2">
          Op de tenen staan. Wegkijken. “Ik hoef niet.” Even verdwijnen en
          daarna weer spelen. Soms een ongelukje in de broek, terwijl je kind
          wél voelt dat het moet. Dat is verwarrend, en het maakt ruzie makkelijk.
        </p>
      </section>
      <section>
        <h2 className="font-display text-2xl text-ink">Wat thuis kan helpen</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            Haal de strijd van de wc. Smeken, dreigen of “nog één keer proberen”
            maakt de wc groter, niet kleiner.
          </li>
          <li>
            Houd een zacht ritme aan: na het eten even zitten, zonder dat er
            iets “moet”. Een boekje erbij is genoeg.
          </li>
          <li>
            Zeg hardop dat poepen mag, en dat het niet vies of stom is. Kinderen
            nemen jouw toon over.
          </li>
          <li>
            Vier rust, niet prestatie. “Fijn dat je even zat” is beter dan
            “goed zo, je hebt gepoept”.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="font-display text-2xl text-ink">Wat we hier niet doen</h2>
        <p className="mt-2">
          We geven geen medicatie-advies en geen termijn waarin het “over” zou
          moeten zijn. Elk kind is anders. Als je twijfelt of het medisch is:
          bel je huisarts.
        </p>
      </section>
    </GuideArticle>
  );
}
