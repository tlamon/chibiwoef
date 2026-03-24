import { Link } from "react-router-dom";

const sizes = [
  { label: "Klein", sub: "tot 10 kg", example: "Chihuahua, Yorkie, Pom" },
  { label: "Middel", sub: "10 – 25 kg", example: "Cocker, Beagle, Corgi" },
  { label: "Groot", sub: "25+ kg", example: "Golden, Husky, Setter" },
];

const pakketten = [
  {
    icon: "✂️",
    name: "Volledig trimmen",
    desc: "Wassen · föhnen · ras-specifieke knipbeurt · nagels · oren",
    prices: ["€45 – €60", "€65 – €85", "€90 – €125"],
    main: true,
  },
  {
    icon: "🛁",
    name: "Was & Splash",
    desc: "Wassen · föhnen · borstelen · nagels · oren",
    prices: ["€30 – €42", "€42 – €58", "€60 – €80"],
    main: false,
  },
  {
    icon: "🐱",
    name: "Kat verwenbeurt",
    desc: "Wassen · föhnen · borstelen · nagels knippen",
    prices: ["€55"],
    main: false,
  },
];

const furTypes = [
  {
    type: "Kortharig / glad",
    ras: "Labrador, Dachshund, Beagle, Boxer",
    badge: "Inbegrepen",
    color: "green",
  },
  {
    type: "Langhaar / zacht",
    ras: "Maltese, Shih Tzu, Lhasa Apso, Havanese",
    badge: "+€5 – €15",
    color: "neutral",
  },
  {
    type: "Draadhaar / ruw",
    ras: "Schnauzer, Westie, Fox Terrier, Airedale",
    badge: "+€8 – €20",
    color: "neutral",
  },
  {
    type: "Krulhaar / pluis",
    ras: "Poedel, Bichon, Goldendoodle, Labradoodle",
    badge: "+€10 – €25",
    color: "orange",
  },
  {
    type: "Zware klitten / matten",
    ras: "Elk ras: extra ontklittijd vereist",
    badge: "Op aanvraag",
    color: "red",
  },
];

const treatments = [
  { name: "Pawdicure: Nagels knippen/vijlen", price: "€10" },
  { name: "Oren reinigen met reinigingsvloeistof", price: "€8" },
  { name: "Tandjes poetsen", price: "€8" },
  { name: "Vlooien & teken shampoo", price: "€12" },
  { name: "Honden | Katten massage 15min", price: "€25" },
  { name: "Puppy gewenning", price: "gratis" },
];

export default function Tarieven() {
  return (
    <main>
      <div className="page-hero">
        <span className="badge">Prijslijst 2026</span>
        <h1 className="page-hero__title">Onze Tarieven</h1>
        <p className="page-hero__sub">
          Prijzen zijn richtprijzen en kunnen variëren op basis van
          vachtconditie, ras en temperament. Definitieve prijs na gratis
          vachtinspectie bij aankomst.
        </p>
      </div>

      <section className="tarieven">
        <div className="container">
          <div className="menu-wrap">
            {/* === Grooming pakketten === */}
            <div className="menu-block">
              <div className="menu-block__head">
                <h2 className="menu-block__title">Trim pakketten</h2>
                <p className="menu-block__sub">
                  Prijs per formaat van de hond — klein, middel of groot
                </p>
              </div>
              <div className="size-table-wrap">
                <table className="size-table">
                  <thead>
                    <tr>
                      <th>Behandeling</th>
                      {sizes.map((g) => (
                        <th key={g.label}>
                          {g.label}
                          <small>{g.sub}</small>
                          <em>{g.example}</em>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pakketten.map((p) => (
                      <tr key={p.name}>
                        <td>
                          <strong>{p.name}</strong>
                          <span className="size-table__desc">{p.desc}</span>
                        </td>
                        {p.prices.map((pr, i) => (
                          <td key={i} className="size-table__price">
                            {pr}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* === Vacht-specifieke toeslagen === */}
            <div className="menu-block">
              <div className="menu-block__head">
                <h2 className="menu-block__title">
                  Vacht-specifieke toeslagen
                </h2>
                <p className="menu-block__sub">
                  Bovenop de standaardprijs, afhankelijk van het vachttype
                </p>
              </div>
              <ul className="menu-list">
                {furTypes.map((v) => (
                  <li className="menu-row" key={v.type}>
                    <div>
                      <span className="menu-row__name">{v.type}</span>
                      <span className="menu-row__desc">{v.ras}</span>
                    </div>
                    <span className="menu-row__price">{v.badge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* === Los boekbaar === */}
            <div className="menu-block">
              <div className="menu-block__head">
                <h2 className="menu-block__title">
                  Los boekbare behandelingen
                </h2>
                <p className="menu-block__sub">
                  Apart in te plannen of toe te voegen aan elke beurt
                </p>
              </div>
              <ul className="menu-list">
                {treatments.map((b) => (
                  <li className="menu-row" key={b.name}>
                    <span className="menu-row__name">{b.name}</span>
                    <span className="menu-row__price">{b.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="cta-banner">
              <h2 className="cta-banner__title">Klaar om te boeken?</h2>
              <p className="cta-banner__sub">
                Plekjes zijn beperkt — plan vandaag nog een afspraak voor jouw
                kleintje.
              </p>
              <div className="cta-banner__actions">
                <Link to="/contact" className="btn btn-primary">
                  Afspraak maken →
                </Link>
                <a href="tel:+32000000000" className="btn btn-ghost-white">
                  📞 Bel ons
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
