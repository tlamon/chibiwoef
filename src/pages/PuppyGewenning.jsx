import { useEffect } from "react";
import { Link } from "react-router-dom";

const photoImg = null; // TODO: vervang door het echte foto-bestand

export default function PuppyGewenning() {
  useEffect(() => {
    document.title = "Puppy Gewenning – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Diensten · honden 🐾</span>
        <h1 className="page-hero__title">Puppy Gewenning</h1>
        <p className="page-hero__sub">
          Een positieve start voor een leven lang verzorging
        </p>
      </div>

      <section className="services">
        <div className="container">
          <div className={photoImg ? "dienst__layout" : undefined}>
            {photoImg && (
              <div className="about__img-wrap">
                <div className="about__img-card">
                  <img src={photoImg} alt="" loading="lazy" decoding="async" />
                </div>
              </div>
            )}

            <div>
              <p className="content-block__sub" style={{ marginTop: 0 }}>
                Hoe een pup voor het eerst het salon binnenwandelt, bepaalt mee
                hoe hij de rest van zijn leven naar de trimmer kijkt. Bij
                ChibiWoef bouwen we dat vertrouwen stap voor stap op — via
                positieve associaties, snoepjes en volledig op het tempo van
                jouw pup. Geen dwang, geen haast.
              </p>

              <div className="dienst__cards">
                <div className="dienst__card">
                  <p className="info-card__label">
                    Stap 1 · Meet &amp; Greet
                  </p>
                  <p className="dienst__price">€ 15</p>
                  <p className="dienst__duration">± 15 – 20 min</p>
                  <p className="dienst__examples">
                    Kennismaking met de trimster, het materiaal en de ruimte.
                    Pootjes natmaken, rustig kammen. Liefst tijdens de 2e
                    socialisatiefase (8–12 weken).
                  </p>
                </div>
                <div className="dienst__card">
                  <p className="info-card__label">
                    Stap 2 · Was &amp; Splash
                  </p>
                  <p className="dienst__price">€ 35 – € 50</p>
                  <p className="dienst__duration">± 60 min</p>
                  <p className="dienst__examples">
                    Eerste echte badervaring in alle rust — volledig wassen,
                    drogen en kammen op het tempo van jouw pup.
                  </p>
                </div>
                <div className="dienst__card">
                  <p className="info-card__label">Stap 3 · Eerste trimbeurt</p>
                  <p className="dienst__price">
                    Standaardprijs − € 15 korting
                  </p>
                  <p className="dienst__examples">
                    Nu de pup het salon kent, gaan we voor de eerste volledige
                    verzorgingsbeurt. Als beloning voor het geduld: € 15 korting
                    op de standaardprijs.
                  </p>
                </div>
              </div>

              <p className="pricing-note">
                Bekijk de volledige tarieven op de{" "}
                <Link to="/tarieven">tariefpagina</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
