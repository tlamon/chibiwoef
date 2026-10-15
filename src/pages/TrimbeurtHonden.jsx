import { useEffect } from "react";
import { Link } from "react-router-dom";
import photoImg from "../assets/haircut.jpg";
import poodlesImg from "../assets/poodles.webp";
import howndLogo from "../assets/hownd-logo.webp";

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
              <div
                className="polaroid"
                style={{ marginTop: "32px", transform: "rotate(1.5deg)" }}
              >
                <img
                  src={poodlesImg}
                  alt="Poedels bij ChibiWoef"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div>
              <p className="content-block__sub">
                <strong>Rust, liefde en vertrouwen</strong>
                <br />
                In ons kleine salon werken we in een rustige omgeving. We nemen
                de tijd om naar jouw hond te luisteren, zijn lichaamstaal te
                lezen en zijn tempo te volgen. Geen harde aanpak of onnodige
                dwang. We streven naar een zachte begeleiding waarbij
                vertrouwen, veiligheid en comfort altijd op de eerste plaats
                komen. Gelukkige honden zijn immers de mooiste honden!
              </p>

              <p className="content-block__sub">
                <strong>Wat is inbegrepen?</strong>
                <br />
                <ul className="breed-page__list">
                  <li>Nagels knippen of vijlen &amp; oren controleren</li>
                  <li>Grondig wassen met Hownd shampoo &amp; conditioner</li>
                  <li>Drogen met de waterblazer</li>
                  <li>Uitwollen en uitborstelen tot volledig klitvrij</li>
                  <li>
                    Knippen, plukken en/of scheren afhankelijk van de
                    rasstandaard of het door u gewenst model.
                  </li>
                  <li>
                    Uitscheren van de voetzolen en de sanitaire zones (indien
                    gewenst).
                  </li>
                </ul>
              </p>

              <div className="hero__actions" style={{ marginTop: "24px" }}>
                <Link to="/contact" className="btn btn-primary">
                  Maak een afspraak
                </Link>
                <Link to="/tarieven" className="btn btn-secondary">
                  Bekijk tarieven
                </Link>
              </div>

              <div className="dienst__card">
                <p className="brand-callout__title">
                  Wij gebruiken Hownd shampoo &amp; conditioner
                </p>
                <div className="brand-callout">
                  <img
                    src={howndLogo}
                    alt="Hownd"
                    className="brand-callout__logo"
                  />
                  <ul className="brand-callout__list">
                    <li>
                      <strong>100% Natuurlijk &amp; Veilig:</strong>{" "}
                      pH-neutraal, hypoallergeen en vrij van alcohol, zeep,
                      sulfaten, kleurstoffen en parabenen.
                    </li>
                    <li>
                      <strong>Ethische certificeringen:</strong> volledig vegan
                      en dierproefvrij — geaccrediteerd met het{" "}
                      <em>Leaping Bunny</em>-keurmerk.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
