import { useEffect } from "react";
import { Link } from "react-router-dom";

const photoImg = null; // TODO: vervang door het echte foto-bestand

export default function Gewenning() {
  useEffect(() => {
    document.title = "Standaard Gewenning – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Diensten · honden &amp; katten 💛</span>
        <h1 className="page-hero__title">Standaard Gewenning</h1>
        <p className="page-hero__sub">
          Voor dieren die het salon nog niet kennen
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
                Niet elk dier wandelt fluitend het trimsalon binnen — en dat is
                volledig oké. De gewenningssessie is speciaal voor honden en
                katten die angstig of onzeker zijn, slechte ervaringen hebben
                gehad, of gewoon wat meer bedenktijd nodig hebben. We werken
                uitsluitend met positieve associaties: lekkernijen, zachte
                aanrakingen en aanmoediging. Niets wordt geforceerd.
              </p>

              <div className="dienst__cards">
                <div className="dienst__card">
                  <p className="info-card__label">💛 Aanpak</p>
                  <p className="dienst__examples">
                    Kennismaking met de ruimte · verkenning van tools op eigen
                    tempo · positieve associaties met föhn, borstel en nagelvijl
                    · geen druk, geen haast
                  </p>
                </div>
                <div className="dienst__card">
                  <p className="info-card__label">💶 Prijs</p>
                  <p className="dienst__price">€ 15 – € 30</p>
                  <p className="dienst__duration">± 15 – 30 min</p>
                  <p className="dienst__examples">
                    Voor honden én katten · meerdere sessies mogelijk
                  </p>
                </div>
              </div>

              <p className="pricing-note">
                Soms zijn meerdere sessies nodig — dat is volledig normaal en
                wordt steeds samen besproken. Bekijk de volledige tarieven op
                de <Link to="/tarieven">tariefpagina</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
