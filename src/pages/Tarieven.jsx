import { Link } from "react-router-dom";

const volledigeTrimbeurt = [
  {
    size: "Mini / Klein  (tot 7 kg)",
    includes:
      "Wassen, föhnen, borstelen, ras-specifieke knipbeurt, oorreinigen, nagels knippen",
    price: "€45 – €65",
    example: "bv. Chihuahua, Yorkshire, Pomeranian",
  },
  {
    size: "Middelgroot  (7–18 kg)",
    includes:
      "Wassen, föhnen, borstelen, ras-specifieke knipbeurt, oorreinigen, nagels knippen",
    price: "€65 – €85",
    example: "bv. Cocker Spaniel, Beagle, Corgi",
  },
  {
    size: "Groot  (18–36 kg)",
    includes:
      "Wassen, föhnen, borstelen, ras-specifieke knipbeurt, oorreinigen, nagels knippen",
    price: "€85 – €115",
    example: "bv. Golden Retriever, Border Collie",
  },
  {
    size: "Extra Groot  (36+ kg)",
    includes:
      "Wassen, föhnen, borstelen, ras-specifieke knipbeurt, oorreinigen, nagels knippen",
    price: "€115 – €150",
    example: "bv. Berner Sennenhond, Newfoundlander",
  },
];

const shampooBlowout = [
  {
    size: "Mini / Klein  (tot 7 kg)",
    includes: "Borstelen, wassen, föhnen, nagels knippen, oorreinigen",
    price: "€35 – €45",
    example: "bv. Chihuahua, Yorkshire, Pomeranian",
  },
  {
    size: "Middelgroot  (7–18 kg)",
    includes: "Borstelen, wassen, föhnen, nagels knippen, oorreinigen",
    price: "€45 – €60",
    example: "bv. Cocker Spaniel, Beagle, Corgi",
  },
  {
    size: "Groot  (18–36 kg)",
    includes: "Borstelen, wassen, föhnen, nagels knippen, oorreinigen",
    price: "€60 – €80",
    example: "bv. Golden Retriever, Border Collie",
  },
  {
    size: "Extra Groot  (36+ kg)",
    includes: "Borstelen, wassen, föhnen, nagels knippen, oorreinigen",
    price: "€80 – €100",
    example: "bv. Berner Sennenhond, Newfoundlander",
  },
];

const katVerzorging = [
  {
    size: "Korthaar",
    includes: "Wassen, föhnen, borstelen, nagels knippen",
    price: "€50",
    example: "bv. Europese korthaar, Brits korthaar",
  },
  {
    size: "Langhaar",
    includes: "Wassen, föhnen, borstelen, klitten verwijderen, nagels knippen",
    price: "€65 – €80",
    example: "bv. Maine Coon, Ragdoll, Pers",
  },
  {
    size: "Leeuwenknip",
    includes: "Volledig scheerbeurt, wassen, föhnen, nagels knippen",
    price: "€75 – €95",
    example: "bv. Pers, Maine Coon, Ragdoll",
  },
];

const extras = [
  {
    name: "Nagels vijlen",
    price: "€10",
    desc: "Gladde afwerking na het knippen",
  },
  {
    name: "Tandenpoetsen",
    price: "€8",
    desc: "Speciale tandpasta voor honden",
  },
  {
    name: "Onthaar behandeling",
    price: "€15 – €35",
    desc: "Vermindert haaruitval tot 90%",
  },
  {
    name: "Vlo & teek behandeling",
    price: "€12 – €20",
    desc: "Medicinale shampoo spoeling",
  },
  {
    name: "Bessen gezichtsmasker",
    price: "€8",
    desc: "Antioxidant masker voor het gezicht",
  },
  {
    name: "Pootwax behandeling",
    price: "€15",
    desc: "Voedt en beschermt de pootjes",
  },
  {
    name: "Pawdicure",
    price: "€20",
    desc: "Knippen + vijlen + verzachtende balsem",
  },
  { name: "Bandana / Strik", price: "€4", desc: "Kies je favoriete model" },
];

const opvang = [
  { label: "Hondendagopvang (hele dag)", price: "€28 / dag" },
  { label: "Logeren (per nacht)", price: "€45 / nacht" },
  { label: "Weekendpakket (vr – zo)", price: "€115" },
  { label: "Weekpakket (7 nachten)", price: "€275" },
  { label: "Kattenopvang", price: "€32 / nacht" },
];

function PriceTable({ rows }) {
  return (
    <table className="price-table">
      <thead>
        <tr>
          <th>Formaat / Type</th>
          <th>Inbegrepen</th>
          <th>Prijs</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.size}>
            <td>
              <strong>{r.size}</strong>
              {r.example && (
                <span
                  style={{
                    display: "block",
                    fontWeight: "normal",
                    fontSize: "0.82em",
                    color: "var(--muted)",
                    marginTop: "2px",
                  }}
                >
                  {r.example}
                </span>
              )}
            </td>
            <td>{r.includes}</td>
            <td style={{ whiteSpace: "nowrap" }}>{r.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Tarieven() {
  return (
    <main>
      <div className="page-hero">
        <span className="badge">Eerlijke & Transparante Prijzen</span>
        <h1 className="page-hero__title">Onze Tarieven</h1>
        <p className="page-hero__sub">
          Geen verrassingen, geen verborgen kosten. Elke prijs is inclusief een
          gratis vachtinspectie en persoonlijk advies.
        </p>
      </div>

      <section className="tarieven">
        <div className="container">
          {/* Volledige Trimbeurt — Hond */}
          <div className="price-section">
            <div className="price-section__header">
              <span className="price-section__icon">✂️</span>
              <div>
                <h2 className="price-section__title">
                  Volledige Trimbeurt — Hond
                </h2>
                <p className="price-section__sub">
                  Inclusief borstelen, ras-specifieke knipbeurt, nagels knippen,
                  oorreinigen &amp; tandverzorging
                </p>
              </div>
            </div>
            <PriceTable rows={volledigeTrimbeurt} />
            <p className="price-note">
              * Prijzen kunnen variëren naargelang de vachtstaat, het ras en het
              temperament van jouw hond. Bij elke afspraak doen we een gratis
              vachtinspectie.
            </p>
          </div>

          {/* Shampoo & Blowdry */}
          <div className="price-section">
            <div className="price-section__header">
              <span className="price-section__icon">🛁</span>
              <div>
                <h2 className="price-section__title">
                  Shampoo &amp; Blowdry — Hond
                </h2>
                <p className="price-section__sub">
                  Inclusief borstelen, wassen, föhnen, nagels knippen &amp;
                  oorreinigen
                </p>
              </div>
            </div>
            <PriceTable rows={shampooBlowout} />
          </div>

          {/* Katverzorging */}
          <div className="price-section">
            <div className="price-section__header">
              <span className="price-section__icon">🐱</span>
              <div>
                <h2 className="price-section__title">Katverzorging</h2>
                <p className="price-section__sub">
                  Rustige, stressarme verzorging voor jouw poes of kater
                </p>
              </div>
            </div>
            <PriceTable rows={katVerzorging} />
          </div>

          {/* Extra behandelingen */}
          <div className="price-section">
            <div className="price-section__header">
              <span className="price-section__icon">⭐</span>
              <div>
                <h2 className="price-section__title">Extra Behandelingen</h2>
                <p className="price-section__sub">
                  Voeg een van deze populaire extras toe aan elke grooming beurt
                </p>
              </div>
            </div>
            <div className="addons-grid">
              {extras.map((a) => (
                <div className="addon-card" key={a.name}>
                  <span className="addon-card__name">{a.name}</span>
                  <span className="addon-card__price">{a.price}</span>
                  <span className="addon-card__desc">{a.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Opvang & Dagopvang */}
          <div className="price-section">
            <div className="price-section__header">
              <span className="price-section__icon">🏡</span>
              <div>
                <h2 className="price-section__title">Opvang &amp; Dagopvang</h2>
                <p className="price-section__sub">
                  Liefdevolle, begeleide opvang als een tweede thuis voor jouw
                  huisdier
                </p>
              </div>
            </div>
            <div
              className="addons-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              }}
            >
              {opvang.map((b) => (
                <div
                  className="addon-card"
                  key={b.label}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="addon-card__name">{b.label}</span>
                  <span
                    className="addon-card__price"
                    style={{ flexShrink: 0, marginLeft: "12px" }}
                  >
                    {b.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cta-banner" style={{ margin: "40px 0 0" }}>
            <h2 className="cta-banner__title">Klaar om te boeken?</h2>
            <p className="cta-banner__sub">
              Plekjes zijn beperkt. Boek vandaag nog een afspraak voor jouw
              kleintje.
            </p>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary">
                Plan een Afspraak →
              </Link>
              <a href="tel:+32000000000" className="btn btn-ghost-white">
                📞 Bel ons
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
