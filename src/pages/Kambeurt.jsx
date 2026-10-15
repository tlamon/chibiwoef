import { useEffect } from "react";
import { Link } from "react-router-dom";
import photoImg from "../assets/poodlepaws.webp";

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
          Houdt de vacht luchtig, klitvrij en gezond!
        </p>
      </div>

      <section className="services">
        <div className="container">
          <div className={photoImg ? "dienst__layout" : undefined}>
            {photoImg && (
              <div className="breed-page__photo">
                <div className="polaroid">
                  <img src={photoImg} alt="" loading="lazy" decoding="async" />
                </div>
              </div>
            )}

            <div>
              <p className="content-block__sub" style={{ marginTop: 0 }}>
                Soms heeft een vacht net dat beetje extra verzorging nodig om
                klitvrij en gezond te blijven. De tussentijdse kambeurt is een
                korte, gerichte sessie waarbij we de vacht grondig doorkammen om
                klitten los te maken en te voorkomen. Dit doen we volledig in
                alle rust en op het eigen tempo van jouw hond of kat. Ideaal als
                aanvulling op de trimbeurt, of als eerste kennismaking met het
                salon.
              </p>
              <p className="content-block__sub">
                <strong>Wat is inbegrepen?</strong>
                <br />
                <ul className="breed-page__list">
                  <li>Grondige borstel- en kambeurt</li>
                  <li>Losmaken en verwijderen van klitten en dode haren</li>
                  <li>Controle tot op de huid</li>
                </ul>
              </p>

              <div className="hero__badge " style={{ marginTop: "16px" }}>
                Stempelkaart: 10 kambeurten = 1 kambeurt gratis
              </div>

              <div className="dienst__cards">
                <div className="dienst__card">
                  <p className="dienst__price">€ 20 – € 45</p>
                  <p className="dienst__duration">± 30 min</p>
                  <p className="dienst__examples">
                    Bij veel klitten wordt extra tijd aangerekend (€ 15 per 15
                    min).
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
                <strong>⚠️ Let op:</strong> Zit de vacht vol hardnekkige knopen
                en vervilte plekken die moeilijk te verwijderen zijn, kiezen we
                voor het welzijn van jouw dier en bespreken we samen een passend
                alternatief. Dit voorkomt onnodige stress en/of pijn voor jouw
                huisdier.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
