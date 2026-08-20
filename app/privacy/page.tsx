import type { Metadata } from "next";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Hoe Poepplan omgaat met je e-mail en andere gegevens op de wachtlijst.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-sage uppercase">
        Privacy
      </p>
      <h1 className="mt-2 font-display text-4xl text-ink">
        Hoe we met je gegevens omgaan
      </h1>
      <p className="mt-4 text-lg leading-8 text-ink-soft">
        Deze pagina hoort bij de eerste versie van poepplan.nl. We vragen
        weinig, en alleen om je te informeren over het programma.
      </p>

      <div className="mt-10 space-y-8 text-base leading-7 text-ink-soft">
        <section>
          <h2 className="font-display text-2xl text-ink">Wat we vragen</h2>
          <p className="mt-2">
            Op het formulier kun je je voornaam, e-mailadres en een ruwe
            leeftijd van je kind achterlaten. Alleen e-mail is verplicht. Na
            aanmelding kun je optioneel toelichten wat er speelt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Waar het naartoe gaat</h2>
          <p className="mt-2">
            Als er een inbox of webhook is gekoppeld, wordt je bericht daar
            naartoe gestuurd. Is die koppeling er nog niet, dan vragen we je
            het bericht via je eigen e-mail te sturen. We bewaren dan niets op
            deze website.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Waarvoor</h2>
          <p className="mt-2">
            Alleen om je te laten weten wanneer Poepplan start, om af en toe
            iets te sturen dat thuis al kan helpen, of om te reageren op wat
            je zelf hebt geschreven. Geen verkoop aan derden. Geen stille
            nieuwsbrieven van andere merken. Afmelden kan altijd.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Cookies</h2>
          <p className="mt-2">
            Deze site zet geen trackingcookies. Functionele cookies die de
            hosting zelf nodig heeft, kunnen voorkomen.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Je rechten</h2>
          <p className="mt-2">
            Je mag vragen wat we van je hebben, het laten aanpassen of laten
            wissen. Stuur daarvoor een bericht naar{" "}
            <a className="text-clay underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
