"use server";

import { getContactEmail, site } from "@/lib/site";

export type WaitlistState =
  | { status: "idle" }
  | { status: "sent"; email: string }
  | { status: "noted" }
  | { status: "mailto"; mailto: string }
  | { status: "error"; message: string; mailto?: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 800;
const MAX_NAME = 80;

const AGE_OPTIONS = new Set(["1-3", "4-6", "7-9", "10+", "onbekend"]);

function clean(value: FormDataEntryValue | null, max: number): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function buildMailto(input: {
  name: string;
  email: string;
  age: string;
  message: string;
}): string {
  const to = getContactEmail();
  const subject = `Wachtlijst Poepplan — ${input.name || input.email}`;
  const body = [
    "Hallo,",
    "",
    "Ik wil graag bericht als Poepplan van start gaat.",
    "",
    `Naam: ${input.name || "—"}`,
    `E-mail: ${input.email}`,
    `Leeftijd kind: ${input.age || "—"}`,
    input.message ? `Toelichting: ${input.message}` : "",
    "",
    "Verzonden via het formulier op poepplan.nl",
  ]
    .filter((line, index, lines) => line !== "" || lines[index - 1] !== "")
    .join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function deliverByWebhook(payload: Record<string, string>): Promise<boolean> {
  const url = process.env.WAITLIST_WEBHOOK_URL?.trim();
  if (!url) return false;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook gaf ${response.status} terug.`);
  }

  return true;
}

async function deliverByResend(payload: {
  name: string;
  email: string;
  age: string;
  message: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();
  const to = getContactEmail();

  if (!apiKey || !from || !to) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `Wachtlijst Poepplan — ${payload.name || payload.email}`,
      text: [
        `Bron: ${site.url}`,
        `Naam: ${payload.name || "—"}`,
        `E-mail: ${payload.email}`,
        `Leeftijd kind: ${payload.age || "—"}`,
        `Toelichting: ${payload.message || "—"}`,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend gaf ${response.status} terug.`);
  }

  return true;
}

async function deliver(payload: {
  name: string;
  email: string;
  age: string;
  message: string;
}): Promise<"sent" | "mailto"> {
  const record = {
    source: site.url,
    name: payload.name,
    email: payload.email,
    age: payload.age,
    message: payload.message,
    submittedAt: new Date().toISOString(),
  };

  if (await deliverByWebhook(record)) {
    return "sent";
  }

  if (await deliverByResend(payload)) {
    return "sent";
  }

  return "mailto";
}

export async function submitWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const honeypot = clean(formData.get("company"), 80);
  if (honeypot) {
    return { status: "sent", email: "ok@poepplan.nl" };
  }

  const name = clean(formData.get("name"), MAX_NAME);
  const email = clean(formData.get("email"), 120).toLowerCase();
  const age = clean(formData.get("age"), 20);
  const consent = formData.get("consent") === "on";

  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Vul een geldig e-mailadres in, dan kunnen we je bereiken.",
    };
  }

  if (age && !AGE_OPTIONS.has(age)) {
    return { status: "error", message: "Kies een leeftijd uit de lijst, of laat het leeg." };
  }

  if (!consent) {
    return {
      status: "error",
      message: "Vink aan dat we je e-mail mogen gebruiken om je te informeren over Poepplan.",
    };
  }

  const payload = { name, email, age, message: "" };
  const mailto = buildMailto(payload);

  try {
    if ((await deliver(payload)) === "sent") {
      return { status: "sent", email };
    }
  } catch {
    return {
      status: "error",
      message:
        "Automatisch versturen lukte net niet. Je kunt het opnieuw proberen, of het bericht via je eigen e-mail sturen.",
      mailto,
    };
  }

  return { status: "mailto", mailto };
}

export async function submitWaitlistNote(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const honeypot = clean(formData.get("company"), 80);
  if (honeypot) {
    return { status: "noted" };
  }

  const email = clean(formData.get("email"), 120).toLowerCase();
  const message = clean(formData.get("message"), MAX_MESSAGE);

  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "We konden je toelichting niet koppelen. Mail ons gerust via hallo@poepplan.nl.",
    };
  }

  if (!message) {
    return { status: "noted" };
  }

  const payload = { name: "", email, age: "", message };

  try {
    if ((await deliver(payload)) === "sent") {
      return { status: "noted" };
    }
  } catch {
    return {
      status: "error",
      message: "Toelichting versturen lukte net niet. Je mag ons ook mailen via hallo@poepplan.nl.",
      mailto: buildMailto(payload),
    };
  }

  return {
    status: "error",
    message: "Toelichting versturen lukte net niet. Je mag ons ook mailen via hallo@poepplan.nl.",
    mailto: buildMailto(payload),
  };
}
