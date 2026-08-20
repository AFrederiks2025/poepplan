"use client";

import { useActionState } from "react";
import { submitWaitlist, type WaitlistState } from "@/lib/waitlist";

const initialState: WaitlistState = { status: "idle" };

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-sand bg-cream px-4 py-3 text-ink shadow-sm outline-none transition focus:border-clay focus:ring-2 focus:ring-peach";

export function WaitlistForm() {
  const [state, action, pending] = useActionState(submitWaitlist, initialState);
  const mailto = "mailto" in state ? state.mailto : undefined;

  if (state.status === "sent") {
    return (
      <div
        className="rounded-3xl border border-sage-soft bg-sage-soft/50 p-6 text-ink"
        role="status"
      >
        <p className="font-display text-2xl">Je staat op de lijst</p>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          Dank je. We mailen je als Poepplan open gaat — zonder ruis, zonder
          extra beloftes.
        </p>
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
        <label className="block text-sm font-medium">
          Voornaam
          <input
            className={fieldClass}
            type="text"
            name="name"
            autoComplete="given-name"
            maxLength={80}
          />
        </label>
        <label className="block text-sm font-medium">
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

      <label className="block text-sm font-medium">
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

      <label className="block text-sm font-medium">
        Wat speelt er, als je het wilt zeggen?
        <textarea
          className={`${fieldClass} min-h-28 resize-y`}
          name="message"
          maxLength={800}
          placeholder="Bijvoorbeeld: ophouden, pijn bij poepen, of stress rond de wc."
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-ink-soft">
        <input
          className="mt-1 size-4 accent-clay"
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
        <p className="rounded-2xl bg-peach/60 px-4 py-3 text-sm text-ink" role="alert">
          {state.message}
        </p>
      ) : null}

      {mailto ? (
        <div className="rounded-2xl border border-sand bg-paper-deep px-4 py-3 text-sm leading-6 text-ink-soft">
          <p>
            Er is nog geen inbox gekoppeld (of versturen lukte niet). Je kunt je
            bericht via je eigen e-mail sturen — we hebben de tekst al voor je
            ingevuld.
          </p>
          <a
            className="mt-3 inline-flex rounded-full bg-ink px-4 py-2 font-semibold text-cream hover:bg-ink-soft"
            href={mailto}
          >
            Open e-mail
          </a>
        </div>
      ) : null}

      <button
        className="w-full rounded-full bg-clay px-6 py-3.5 text-base font-semibold text-cream shadow-sm transition hover:bg-clay-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        type="submit"
        disabled={pending}
      >
        {pending ? "Even geduld…" : "Houd me op de hoogte"}
      </button>
    </form>
  );
}
