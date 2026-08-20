export const site = {
  name: "Poepplan",
  url: "https://www.poepplan.nl",
  locale: "nl_NL",
  tagline: "Rust rond poepen. Een plan voor thuis.",
  description:
    "Poepplan wordt een online programma voor ouders van kinderen die moeite hebben met poepen: verstopping, ophouden of poepstress. Wachtlijst is open. Warm, duidelijk, zonder schaamte.",
} as const;

export const publicContactEmail = "hallo@poepplan.nl";

export function getContactEmail(): string {
  const email =
    process.env.CONTACT_EMAIL?.trim() ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  if (email && email.includes("@")) {
    return email;
  }

  return publicContactEmail;
}
