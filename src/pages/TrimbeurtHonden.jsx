import { useEffect } from "react";
import { Link } from "react-router-dom";
import photoImg from "../assets/haircut.jpg";
import poodlesImg from "../assets/poodles.webp";
import howndLogo from "../assets/hownd-logo.webp";

const pricingCards = [
  {
    label: "Korthaar / glad",
    priceRange: "€ 45 – € 60",
    duration: "± 60 – 90 min",
    examples: "Labrador, Boxer, Dalmatier, Beagle…",
  },
  {
    label: "Dubbele vacht",
    priceRange: "€ 55 – € 75",
    duration: "± 90 – 120 min",
    examples: "Golden Retriever, Husky, Sheltie, Corgi…",
  },
  {
    label: "Langhaar / bevedering",
    priceRange: "€ 55 – € 75",
    duration: "± 90 – 150 min",
    examples: "Cocker Spaniël, Setter, Cavalier, Flatcoat…",
  },
  {
    label: "Krul / fleece",
    priceRange: "€ 70 – € 120",
    duration: "± 120 – 180 min",
    examples: "Poodle, Doodle, Bichon, Labradoodle…",
  },
  {
    label: "Ruwharig (plukken)",
    priceRange: "€ 65 – € 130",
    duration: "± 90 – 180 min",
    examples: "Terriers, Schnauzer, Griffon, Drahthaar…",
  },
];

export default function TrimbeurtHonden() {
  useEffect(() => {
    document.title = "Trimbeurt Honden – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Diensten · honden ✂️</span>
        <h1 className="page-hero__title">Trimbeurt Honden</h1>
      </div>

      <section className="services">
        <div className="container">
          <div className="dienst__layout">
            <div className="breed-page__photo">
              <div className="polaroid">
                <img
                  src={photoImg}
                  alt="Trimbeurt bij ChibiWoef"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="polaroid" style={{ marginTop: "32px", transform: "rotate(1.5deg)" }}>
                <img
                  src={poodlesImg}
                  alt="Poedels bij ChibiWoef"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div>
              <p className="content-block__sub" style={{ marginTop: 0 }}>
                <strong>
                  Een complete verzorgingsbeurt voor jouw hond.
                </strong>{" "}
                De aanpak wordt volledig afgestemd op het ras en/of de wensen van het baasje, hierbij kijken we naar de vachtconditie en
                het temperament van jouw hond. Geen haast, geen stress. Alleen het beste voor jouw Chibi.
              </p>

              <p className="content-block__sub">
                <strong>Wat is inbegrepen?</strong>
                <br />
                <ul className="breed-page__list">
                  <li>Nagels knippen of vijlen &amp; oren controleren</li>
                  <li>Grondig wassen met Hownd shampoo &amp; conditioner</li>
                  <li>Drogen met de waterblazer</li>
                  <li>Uitwollen en uitborstellen tot volledig klitvrij</li>
                  <li>
                    Knippen, plukken en/of scheren afhankelijk van de rasstandaard en/of het door u gewenst model.
                  </li>
                  <li>
                    Uitscheren van de voetzolen en de sanitaire zones (indien gewenst).
                  </li>
                </ul>
              </p>

              <div className="dienst__cards">
                {pricingCards.map((card) => (
                  <div key={card.label} className="dienst__card">
                    <p className="info-card__label">✂️ {card.label}</p>
                    <p className="dienst__price">{card.priceRange}</p>
                    <p className="dienst__duration">{card.duration}</p>
                    <p className="dienst__examples">{card.examples}</p>
                  </div>
                ))}
                <div className="dienst__card">
                  <p className="info-card__label">💶 Afspraak maken</p>
                  <p className="dienst__examples">
                    Richtprijzen incl. 21% BTW voor een goed onderhouden vacht.
                    Bij extreme klitten of moeilijk gedrag: toeslag van € 25.
                  </p>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    style={{ marginTop: "12px", fontSize: "14px" }}
                  >
                    Maak een afspraak
                  </Link>
                </div>
              </div>

              <p className="pricing-note">
                Arbeidsintensieve rassen (Airedale, Kerry Blue, Ierse terrier…):
                € 90 – € 130. Bekijk de volledige prijstabel op de{" "}
                <Link to="/tarieven">tariefpagina</Link>.
              </p>

              <div className="dienst__card brand-callout">
                <img
                  src={howndLogo}
                  alt="Hownd"
                  className="brand-callout__logo"
                />
                <ul className="brand-callout__list">
                  <li>
                    <strong>100% Natuurlijk &amp; Veilig:</strong> pH-neutraal,
                    hypoallergeen en vrij van alcohol, zeep, sulfaten,
                    kleurstoffen en parabenen.
                  </li>
                  <li>
                    <strong>Ethische certificeringen:</strong> volledig vegan en
                    dierproefvrij — geaccrediteerd met het{" "}
                    <em>Leaping Bunny</em>-keurmerk.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
