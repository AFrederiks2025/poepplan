export const site = {
  name: "Poepplan",
  url: "https://www.poepplan.nl",
  locale: "nl_NL",
  tagline: "Rust rond poepen. Een plan voor thuis.",
  description:
    "Poepplan is een online programma voor ouders van kinderen die moeite hebben met poepen: verstopping, ophouden of poepstress. Warm, duidelijk, zonder schaamte.",
} as const;

export function getContactEmail(): string | undefined {
  const email =
    process.env.CONTACT_EMAIL?.trim() ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  if (!email || !email.includes("@")) {
    return undefined;
  }

  return email;
}
