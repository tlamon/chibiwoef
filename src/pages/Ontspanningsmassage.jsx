import { useEffect } from "react";
import { Link } from "react-router-dom";

const photoImg = null; // TODO: vervang door het echte foto-bestand

export default function Ontspanningsmassage() {
  useEffect(() => {
    document.title = "Ontspanningsmassage – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Diensten · honden &amp; katten 🌿</span>
        <h1 className="page-hero__title">Ontspanningsmassage</h1>
        <p className="page-hero__sub">Even pauzeren, van snuit tot staart</p>
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
                Niet elke sessie hoeft te eindigen met een schaar. De
                ontspanningsmassage is een rustig moment waarbij we jouw hond
                of kat van top tot teen masseren. We werken langzaam en
                bewust — geheel op het tempo van jouw dier, zonder druk en
                zonder haast. Ideaal als standalone sessie, maar ook als
                aanvulling op een trimbeurt of kambeurt.
              </p>

              <div className="dienst__cards">
                <div className="dienst__card">
                  <p className="info-card__label">🌿 Voordelen</p>
                  <p className="dienst__examples">
                    Bevordert de bloedsomloop · verlaagt stress · helpt bij
                    stijve spieren · versterkt het vertrouwen in aanraking
                  </p>
                </div>
                <div className="dienst__card">
                  <p className="dienst__price">€ 25</p>
                  <p className="dienst__duration">± 20 – 30 min</p>
                  <p className="dienst__examples">
                    Voor honden én katten
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
