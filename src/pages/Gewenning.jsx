import { useEffect } from "react";
import { Link } from "react-router-dom";
import photoImg from "../assets/scared.webp";

export default function Gewenning() {
  useEffect(() => {
    document.title = "Standaard Gewenning – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Diensten · honden &amp; katten 💛</span>
        <h1 className="page-hero__title">Standaard Gewenning</h1>
        <p className="page-hero__sub">Voor angstige of onzekere dieren</p>
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
                De gewenningssessies zijn speciaal voor honden die angstig of
                onzeker zijn, slechte ervaringen hebben gehad of gewoon wat meer
                bedenktijd nodig hebben. <br />
                Daarom werken we steeds in een rustige omgeving. We nemen de
                tijd om naar jouw hond te luisteren, zijn lichaamstaal te lezen
                en zijn tempo te volgen. <br />
                Geen harde aanpak of onnodige dwang, maar een zachte begeleiding
                waarbij vertrouwen, veiligheid en comfort altijd op de eerste
                plaats komen. Gelukkige honden zijn immers de mooiste honden!
              </p>

              <p className="content-block__sub">
                <strong>Aanpak 💛</strong>
              </p>
              <ul className="breed-page__list">
                <li>
                  <strong>Rustig verkennen & ontprikkelen: </strong>We laten
                  jouw hond of kat eerst rustig rondkijken en snuffelen om
                  vertrouwd te raken met de nieuwe geuren en geluiden. Wist je
                  dat snuffelen stressverlagend werkt? Daarom ligt er hier een
                  leuke snuffelmat met lekkernijen! 🐾
                </li>
                <li>
                  <strong>Zelfvertrouwen & zachte aanraking:</strong> We
                  benaderen jouw huisdier zonder druk of dwang. We bouwen het
                  fysieke contact stapje voor stapje op, zodat je dier zich
                  gerespecteerd en veilig voelt.
                </li>
                <li>
                  <strong>Positieve associaties met tools: </strong>
                  We laten ze op een speelse, rustige manier kennismaken met de
                  föhn, borstel en nagelvijl. Zo leren ze dat deze materialen
                  geen bedreiging (meer) vormen.
                </li>
              </ul>

              <div className="dienst__cards">
                <div className="dienst__card">
                  <p className="info-card__label">💶 Prijs</p>
                  <p className="dienst__price">€ 15 – € 30</p>
                  <p className="dienst__duration">± 15 – 30 min</p>
                  <p className="dienst__examples">Voor honden én katten</p>
                </div>
              </div>

              <p className="pricing-note">
                Soms zijn meerdere sessies nodig, dat is volledig normaal en
                wordt steeds samen besproken.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
