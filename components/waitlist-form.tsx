"use client";

import { useActionState } from "react";
import { waitlistCta } from "@/lib/content";
import { fieldClass, tapTarget } from "@/lib/ui";
import { submitWaitlist, submitWaitlistNote, type WaitlistState } from "@/lib/waitlist";

const initialState: WaitlistState = { status: "idle" };

function OptionalNote({ email }: { email: string }) {
  const [state, action, pending] = useActionState(submitWaitlistNote, initialState);

  if (state.status === "noted") {
    return (
      <p className="mt-5 text-base leading-7 text-ink-soft">
        Dank je. Dat helpt ons om Poepplan beter te maken.
      </p>
    );
  }

  return (
    <form action={action} className="mt-6 space-y-3" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-note">Bedrijf</label>
        <input id="company-note" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="email" value={email} />
      <label className="block text-base font-medium">
        Wat speelt er, als je het wilt zeggen?{" "}
        <span className="font-normal text-ink-soft">(mag, hoeft niet)</span>
        <textarea
          className={`${fieldClass} min-h-28 resize-y`}
          name="message"
          maxLength={800}
          placeholder="Bijvoorbeeld: ophouden, pijn bij poepen, of stress rond de wc."
        />
      </label>
      {state.status === "error" ? (
        <p className="rounded-2xl bg-peach/60 px-4 py-3 text-base text-ink" role="alert">
          {state.message}
        </p>
      ) : null}
      {"mailto" in state && state.mailto ? (
        <a className={`${tapTarget} bg-ink text-cream hover:bg-ink-soft`} href={state.mailto}>
          Open e-mail
        </a>
      ) : null}
      <button
        className={`${tapTarget} border border-sage/30 bg-cream text-sage transition hover:bg-sage-soft disabled:cursor-wait disabled:opacity-70`}
        type="submit"
        disabled={pending}
      >
        {pending ? "Even geduld…" : "Toelichting versturen"}
      </button>
    </form>
  );
}

export function WaitlistForm() {
  const [state, action, pending] = useActionState(submitWaitlist, initialState);
  const mailto = "mailto" in state ? state.mailto : undefined;

  if (state.status === "sent") {
    return (
      <div
        className="rounded-3xl border border-sage/25 bg-sage-soft/60 p-6 text-ink"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl text-sage">Je staat op de lijst</p>
        <p className="mt-2 text-base leading-7 text-ink-soft">
          Dank je. We mailen je zodra Poepplan opent. Tot die tijd sturen we
          af en toe iets dat thuis al helpt — als we iets hebben dat écht
          past.
        </p>
        <OptionalNote email={state.email} />
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Bedrijf</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-base font-medium">
          Voornaam
          <input
            className={fieldClass}
            type="text"
            name="name"
            autoComplete="given-name"
            maxLength={80}
          />
        </label>
        <label className="block text-base font-medium">
          E-mail <span className="text-clay">*</span>
          <input
            className={fieldClass}
            type="email"
            name="email"
            autoComplete="email"
            required
            inputMode="email"
            maxLength={120}
          />
        </label>
      </div>

      <label className="block text-base font-medium">
        Leeftijd van je kind (niet verplicht)
        <select className={fieldClass} name="age" defaultValue="">
          <option value="">Liever niet zeggen</option>
          <option value="1-3">1–3 jaar</option>
          <option value="4-6">4–6 jaar</option>
          <option value="7-9">7–9 jaar</option>
          <option value="10+">10 jaar of ouder</option>
          <option value="onbekend">Nog niet zeker / anders</option>
        </select>
      </label>

      <label className="flex min-h-11 items-start gap-3 text-base leading-6 text-ink-soft">
        <input
          className="mt-1 size-5 accent-clay"
          type="checkbox"
          name="consent"
          required
        />
        <span>
          Je mag mijn e-mail gebruiken om me te informeren over Poepplan. Geen
          andere doelen.{" "}
          <a className="underline decoration-sand underline-offset-2 hover:text-ink" href="/privacy">
            Privacy
          </a>
        </span>
      </label>

      {state.status === "error" ? (
        <p className="rounded-2xl bg-peach/60 px-4 py-3 text-base text-ink" role="alert">
          {state.message}
        </p>
      ) : null}

      {mailto ? (
        <div
          className="rounded-2xl border border-sand bg-paper-deep px-4 py-3 text-base leading-7 text-ink-soft"
          role="status"
          aria-live="polite"
        >
          <p>
            Je aanmelding is nog niet automatisch verstuurd. Je kunt het
            bericht via je eigen e-mail sturen — we hebben de tekst al voor je
            ingevuld.
          </p>
          <a className={`${tapTarget} mt-3 bg-ink text-cream hover:bg-ink-soft`} href={mailto}>
            Open e-mail
          </a>
        </div>
      ) : null}

      <button
        className={`${tapTarget} w-full bg-clay text-cream shadow-sm transition hover:bg-clay-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto`}
        type="submit"
        disabled={pending}
      >
        {pending ? "Even geduld…" : waitlistCta}
      </button>
    </form>
  );
}
