import { useEffect } from "react";
import { Link } from "react-router-dom";
import photoImg from "../assets/loe-gizmo.webp";
import howndLogo from "../assets/hownd-logo.webp";

export default function WasEnSplash() {
  useEffect(() => {
    document.title = "Was & Splash – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Diensten · honden 🛁</span>
        <h1 className="page-hero__title">Was &amp; Splash</h1>
        <p className="page-hero__sub">Tussentijdse was- en droogbeurt</p>
      </div>

      <section className="services">
        <div className="container">
          <div className={photoImg ? "dienst__layout" : undefined}>
            {photoImg && (
              <div className="breed-page__photo">
                <div className="polaroid">
                  <img
                    src={photoImg}
                    alt="Loe & Gizmo"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="polaroid__caption">Loe &amp; Gizmo ♥</p>
                </div>
              </div>
            )}

            <div>
              <p className="content-block__sub" style={{ marginTop: 0 }}>
                <strong>
                  De ideale tussenstop tussen twee grote trimbeurten in of als
                  volledige behandeling voor kortharige honden.
                </strong>{" "}
                Kan jouw hond af en toe wel eens een opfrisbeurt gebruiken? Of heeft jouw viervoeter net iets te enthousiast in
                de modder gerold? Met een grondige Was &amp; Splash staat je
                hond er weer stralend en welriekend bij.
              </p>
              <p className="content-block__sub">
                <strong> Wat is inbegrepen?</strong>
                <br />
                <ul class="breed-page__list">
                  <li>Grondige wasbeurt met Hownd shampoo &amp; conditioner</li>
                  <li>Vacht droogblazen met de waterblazer</li>
                  <li>Korte borstelbeurt voor een klitvrije vacht</li>
                  <li>Verzorging van de nagels en oren</li>
                </ul>
              </p>

              <div className="dienst__cards">
                <div className="dienst__card">
                  <p className="info-card__label">🐕 Voor welke honden?</p>
                  <p className="dienst__examples">
                    <strong>Als tussenstop</strong> — een opfrisbeurt voor
                    honden met een doorgroeiende of gecombineerde vacht
                    (Cockers, Retrievers, Doodles…) om de periode tussen twee
                    trimbeurten te overbruggen, zonder te knippen of te scheren.
                    <br />
                    <br />
                    <strong>Als volledige behandeling</strong> <br />
                    voor gladde, kortharige honden (Mopshonden, Franse Bulldogs,
                    Jack Russells…). Voor hen is deze formule voldoende.
                  </p>
                </div>
                <div className="dienst__card">
                  <p className="info-card__label">💶 Prijs</p>
                  <p className="dienst__price">€ 40 – € 65</p>
                  <p className="dienst__duration">± 60 – 90 min</p>
                  <p className="dienst__examples">
                    Afhankelijk van grootte en vachtconditie
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
                <strong>⚠️ Let op:</strong> de Was &amp; Splash is géén
                rui-behandeling of zware ontklitbeurt. Zit de vacht vol
                hardnekkige knopen of losse onderwol? Kies dan voor een{" "}
                <Link to="/diensten/trimbeurt-honden">volledige trimbeurt</Link>
                . Bekijk de prijstabel op de{" "}
                <Link to="/tarieven">tariefpagina</Link>.
              </p>

              {howndLogo && (
                <div className="dienst__card brand-callout">
                  <img
                    src={howndLogo}
                    alt="Hownd"
                    className="brand-callout__logo"
                  />
                  <ul className="brand-callout__list">
                    <li>
                      <strong>100% Natuurlijk &amp; Veilig:</strong> De
                      producten zijn volledig pH-neutraal, hypoallergeen en vrij
                      van alcohol, zeep, sulfaten, kleurstoffen en parabenen.
                    </li>
                    <li>
                      <strong>Ethische certificeringen:</strong> HOWND-producten
                      zijn volledig vegan en dierproefvrij — geaccrediteerd met
                      het <em>Leaping Bunny</em>-keurmerk.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
