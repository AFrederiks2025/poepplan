# Poepplan

Nederlandse website voor een online programma voor ouders van kinderen die moeite hebben met poepen (verstopping, ophouden, poepstress).

Live: [www.poepplan.nl](https://www.poepplan.nl)

## Lokaal draaien

```bash
npm install
npm run dev
```

Build controleren:

```bash
npm run build
npm run lint
```

## Formulier

Het wachtlijstformulier is een Server Action. Zonder extra diensten blijft het eerlijk: de bezoeker kan het bericht via de eigen e-mail sturen.

Optioneel, in Vercel Environment Variables (niet in deze repo):

| Variabele | Functie |
| --- | --- |
| `CONTACT_EMAIL` | Inbox die berichten ontvangt (en mailto-fallback) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Zelfde adres, zichtbaar in de footer |
| `WAITLIST_WEBHOOK_URL` | POST van het formulier als JSON (Make, Zapier, n8n, …) |
| `RESEND_API_KEY` + `RESEND_FROM` | E-mail via Resend (geverifieerd from-adres nodig) |

Zie `.env.example`.

## Wat Anton nog moet invullen

- Prijs en eventuele checkout
- Programma-onderdelen / modules
- Foto’s en (als gewenst) een echte naam/bio
- Formulierbestemming: mailbox `hallo@poepplan.nl` of een van de variabelen hierboven

## Deploy

Het Vercel-project `poepplan` is al gekoppeld. Na merge van `main` hoort [www.poepplan.nl](https://www.poepplan.nl) deze site te tonen. DNS en domeinen hoeven niet opnieuw gezet.
