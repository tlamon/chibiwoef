import { useEffect } from "react";
import { Link } from "react-router-dom";

const photoImg = null; // TODO: vervang door het echte foto-bestand

export default function Kambeurt() {
  useEffect(() => {
    document.title = "Tussentijdse Kambeurt – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Diensten · honden &amp; katten 🪮</span>
        <h1 className="page-hero__title">Tussentijdse Kambeurt</h1>
        <p className="page-hero__sub">
          Klitten de baas, vacht luchtig en gezond
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
                Sommige vachten vragen meer aandacht dan een bad alleen. De
                tussentijdse kambeurt is een korte, gerichte sessie waarbij we
                de vacht grondig doorkammen en klitten losmaken — volledig in
                rust, op het tempo van jouw hond of kat. Ideaal als aanvulling
                op de trimbeurt, of als eerste kennismaking met het salon.
              </p>

              <div className="dienst__cards">
                <div className="dienst__card">
                  <p className="info-card__label">🪮 Inbegrepen</p>
                  <p className="dienst__examples">
                    Volledige borstel- en kambeurt · losmaken van klitten ·
                    controle tot op de huid
                  </p>
                </div>
                <div className="dienst__card">
                  <p className="info-card__label">💶 Prijs</p>
                  <p className="dienst__price">€ 20 – € 45</p>
                  <p className="dienst__duration">± 30 min</p>
                  <p className="dienst__examples">
                    Bij veel klitten wordt extra tijd aangerekend
                  </p>
                </div>
                <div className="dienst__card">
                  <p className="info-card__label">🐾 Loyaliteitskaart</p>
                  <p className="dienst__examples">
                    <strong>10 kambeurten = 1 kambeurt gratis.</strong>
                    <br />
                    Stempelkaart verkrijgbaar in het salon.
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
