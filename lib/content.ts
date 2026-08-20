import { site } from "@/lib/site";

export const contactEmail = "hallo@poepplan.nl";

export const waitlistCta = "Zet me op de wachtlijst";

export const hero = {
  eyebrow: "Binnenkort — wachtlijst open",
  title: "Als poepen thuis een strijd is",
  lead:
    "Poepplan wordt een rustig online programma voor ouders van kinderen die moeite hebben met poepen. Reserveer je plek op de wachtlijst: dan mailen we je zodra het open is — zonder verplichting, zonder haast.",
  primary: waitlistCta,
  secondary: "Wat is Poepplan?",
  micro:
    "Gratis en vrijblijvend. Eén mail zodra we opengaan — tot die tijd af en toe iets dat thuis al helpt.",
} as const;

export const herkenning = [
  {
    title: "Verstopping",
    href: "/verstopping-bij-kinderen",
    text: "Poepen doet pijn, gebeurt weinig, of is hard en lastig. De wc voelt als iets om tegenop te zien — voor je kind, en vaak ook voor jou.",
  },
  {
    title: "Ophouden",
    href: "/kind-houdt-poep-op",
    text: "Je kind móet, maar houdt tegen. Op de tenen, wegkijken, “ik hoef niet”. Vaak uit angst of controle. Zelden uit stiekemheid.",
  },
  {
    title: "Poepstress",
    href: "/poepangst-bij-kinderen",
    text: "Ruzie voor de wc. Tranen. Schaamte. Jij die het goed wilt doen, en merkt dat duwen en smeken het eerder erger maakt.",
  },
] as const;

export const contrastRows = [
  {
    niet: "Geen medisch consult, geen diagnose",
    wel: "Uitleg in gewone taal, voor thuis",
  },
  {
    niet: "Geen “binnen twee weken opgelost”",
    wel: "Kleine stappen, op jullie tempo",
  },
  {
    niet: "Geen oordeel",
    wel: "Taal die je kind niet beschaamt",
  },
  {
    niet: "Nog geen winkel, geen prijs",
    wel: "Een eerlijke wachtlijst — niets te betalen",
  },
] as const;

export const principes = [
  {
    step: "01",
    title: "Eerst begrijpen",
    text: "Wat er speelt in gedrag, spanning en ritme — in woorden die je aan de keukentafel kunt uitleggen.",
    outcome: "Doel: dat je kunt zeggen wat er speelt, zonder medische termen.",
  },
  {
    step: "02",
    title: "Druk eraf, ritme erin",
    text: "Minder strijd, meer voorspelbaarheid. Geen toverspreuk, wel een rustiger kader voor thuis.",
    outcome: "Doel: dat de wc weer een gewoon momentje wordt, geen dagelijkse veldslag.",
  },
  {
    step: "03",
    title: "Kleine stappen",
    text: "Op jullie tempo. Het programma volgt de ouder: jij bepaalt wat past bij jouw kind.",
    outcome: "Doel: dat je weet wat je vanavond kunt proberen — niet het hele plan in één keer.",
  },
  {
    step: "04",
    title: "Zonder schuld",
    text: "Poepstress zegt niets over hoe goed je ouder bent. Die toon houden we vast.",
    outcome: "Doel: dat de schaamte kleiner wordt, voor jou én voor je kind.",
  },
] as const;

export const vragen = [
  {
    q: "Wat krijg ik als ik op de wachtlijst sta?",
    a: "Bericht zodra Poepplan open gaat. Tot die tijd mailen we af en toe iets kleins dat thuis al kan helpen. Geen account, geen betaling, geen verplichting.",
  },
  {
    q: "Hoe vaak mailen jullie?",
    a: "Zodra het programma open is, krijg je daar een mail over. Tot die tijd hooguit af en toe iets dat écht van pas kan komen — geen dagelijkse nieuwsbrief. Afmelden kan altijd.",
  },
  {
    q: "Wat doen jullie met mijn gegevens?",
    a: "Alleen e-mail is verplicht. We gebruiken die om je te informeren over Poepplan. Niet om te verkopen, niet voor andere merken. Meer lees je op de privacy-pagina.",
  },
  {
    q: "Is dit medisch advies?",
    a: "Nee. Poepplan is ondersteuning voor ouders, geen diagnose en geen vervanging van de huisarts.",
  },
  {
    q: "Voor wie is Poepplan níet?",
    a: "Niet als vervanging van de huisarts of een andere zorgverlener. En niet als eerste stap als je kind ziek is, bloed bij de poep heeft, of jij het gevoel hebt dat er iets medisch speelt — bel dan eerst je huisarts.",
  },
  {
    q: "Wanneer start het, wat kost het, en voor welke leeftijd?",
    a: "Dat zetten we hier pas neer als het klopt. Startdatum, prijs en de precieze leeftijdsrange zijn nog niet vastgelegd. We mailen de wachtlijst zodra het zover is.",
  },
] as const;

export const guides = [
  {
    href: "/kind-houdt-poep-op",
    title: "Kind houdt poep op",
    text: "Wat je thuis kunt doen, zonder dwang.",
  },
  {
    href: "/poepangst-bij-kinderen",
    title: "Poepangst bij kinderen",
    text: "Als de wc zelf al spannend is.",
  },
  {
    href: "/verstopping-bij-kinderen",
    title: "Verstopping: wanneer naar de huisarts?",
    text: "Wat je zelf kunt proberen, en wanneer je belt.",
  },
] as const;

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: vragen.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "nl-NL",
  description: site.description,
};
