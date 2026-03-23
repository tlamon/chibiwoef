const rules = [
  {
    icon: "📅",
    title: "Afspraken",
    items: [
      "Afspraken dienen minimaal 24 uur van tevoren te worden gemaakt.",
      "Kom op tijd — een vertraging van meer dan 15 minuten kan betekenen dat de afspraak verzet wordt.",
      "Annuleren of wijzigen is gratis tot 24 uur voor de afspraak. Daarna rekenen wij 50% van het tarief.",
    ],
  },
  {
    icon: "🐾",
    title: "Gezondheid & Vaccinaties",
    items: [
      "Alle honden dienen up-to-date gevaccineerd te zijn (Distemper, Parvo, Hepatitis & Rabiës).",
      "Katten moeten ingeënt zijn tegen kattenziekte en niesziekte.",
      "Breng geen zieke dieren mee — dit ter bescherming van alle andere gasten.",
      "Bij vlooien of teken wordt de behandeling direct stopgezet en brengen wij behandelingskosten in rekening.",
    ],
  },
  {
    icon: "🛁",
    title: "Grooming",
    items: [
      "Kom met een rustig, ontspannen huisdier — een korte wandeling voor de afspraak helpt.",
      "Vertel ons altijd van tevoren over bijzonderheden: angsten, wondjes of medische aandoeningen.",
      "Wij werken met diervriendelijke, hypoallergene producten. Laat het ons weten als uw dier allergisch is.",
      "Wij behouden het recht om een grooming te staken als het dier significant stress ervaart.",
    ],
  },
  {
    icon: "🏡",
    title: "Boarding & Dagopvang",
    items: [
      "Breng voldoende voer mee voor de verblijfsduur, duidelijk gelabeld met naam en portiegroottes.",
      "Favoriete speelgoed of een vertrouwd dekentje is van harte welkom.",
      "Wij nemen contact op bij medische noodgevallen. Zorg dat uw telefoonnummer bereikbaar is.",
      "Alle honden in dagopvang worden gescreend op sociaal gedrag bij de eerste bezoek.",
    ],
  },
  {
    icon: "💳",
    title: "Betaling",
    items: [
      "Betaling vindt plaats direct na afloop van de dienst.",
      "Wij accepteren pin, creditcard en bankoverschrijving.",
      "Prijzen kunnen variëren op basis van vachtconditie, ras en temperament.",
    ],
  },
  {
    icon: "📸",
    title: "Foto's & Privacy",
    items: [
      "Wij maken graag foto's van onze viervoetige gasten voor social media.",
      "Geef bij boeking aan als u hier bezwaar tegen heeft — wij respecteren uw wens.",
    ],
  },
];

export default function Huisregels() {
  return (
    <main>
      <div className="page-hero">
        <span className="badge">Voor alle snoetjes</span>
        <h1 className="page-hero__title">Huisregels</h1>
        <p className="page-hero__sub">
          Om een veilige en prettige omgeving te garanderen voor alle dieren en
          hun baasjes, houden wij ons graag aande volgende regels.
        </p>
      </div>

      <section className="tarieven">
        <div className="container">
          {rules.map((section) => (
            <div className="price-section" key={section.title}>
              <div className="price-section__header">
                <span className="price-section__icon">{section.icon}</span>
                <div>
                  <h2 className="price-section__title">{section.title}</h2>
                </div>
              </div>
              <ul className="rules-list">
                {section.items.map((item, i) => (
                  <li key={i} className="rules-list__item">
                    <span className="rules-list__bullet">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
