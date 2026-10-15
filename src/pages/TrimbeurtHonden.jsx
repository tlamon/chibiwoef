import { useEffect } from "react";
import { Link } from "react-router-dom";

// TODO: vervang door het echte foto-bestand zodra beschikbaar
const photoImg = null;

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
        <p className="page-hero__sub">
          <i>
            "The world would be a nicer place if everyone had the ability to
            love as unconditionally as a dog."
          </i>
        </p>
      </div>

      <section className="services">
        <div className="container">
          <div className={photoImg ? "dienst__layout" : undefined}>
            {photoImg && (
              <div className="about__img-wrap">
                <div className="about__img-card">
                  <img
                    src={photoImg}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            )}

            <div>
              <p className="content-block__sub" style={{ marginTop: 0 }}>
                Tijdens een volledige trimbeurt werken we jouw hond van a tot z
                bij: wassen, drogen, borstelen en vervolgens knippen, plukken of
                carden afhankelijk van het vachttype. Nageltjes worden geknipt
                of gevijld en de oren worden gereinigd. Alles wordt afgestemd
                op het ras, de vachtconditie en het temperament van jouw hond.
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
              </div>

              <p className="pricing-note">
                Bovenstaande prijzen zijn richtprijzen incl. 21% BTW voor een
                hond met een goed onderhouden vacht. Bij extreme klitten,
                vervilting of moeilijk gedrag wordt een toeslag van € 25
                aangerekend. Bekijk de volledige prijstabel per maat op de{" "}
                <Link to="/tarieven">tariefpagina</Link>.
              </p>

              <p className="pricing-note">
                Arbeidsintensieve rassen (Airedale, Kerry Blue, Ierse terrier…)
                vallen in de hogere prijsklasse van ruwharig: € 90 – € 130.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
