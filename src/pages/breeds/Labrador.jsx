import { useEffect } from "react";
import LabradorImg from "../../assets/breeds/labrador-retriever.jpg";
import LabradorHeroImg from "../../assets/breeds/labrador-retriever-hero.png";

export default function Labrador() {
  useEffect(() => {
    document.title = "Labrador Retriever – Trimgids – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero breed-page-hero">
        <div>
          <span className="badge">
            FCI Groep 8 · Retrievers, Spaniëls en Waterhonden
          </span>
          <h1 className="page-hero__title">Labrador Retriever</h1>
        </div>
        <img
          src={LabradorHeroImg}
          alt=""
          aria-hidden="true"
          className="breed-page-hero__img"
        />
      </div>

      <section className="contact">
        <div className="container">
          <div className="breed-page__layout">
            <div className="breed-page__photo">
              <div className="breed-polaroid">
                <img
                  src={LabradorImg}
                  alt="Labrador Retriever"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="breed-page__content">
              <h2 className="breed-page__section-title">Kleuren:</h2>
              <div className="breed-page__colors">
                <span className="breed-page__color breed-page__color--black">
                  Zwart
                </span>
                <span className="breed-page__color breed-page__color--yellow">
                  Geel / Crème
                </span>
                <span className="breed-page__color breed-page__color--chocolate">
                  Chocolade / Bruin
                </span>
              </div>

              <h2 className="breed-page__section-title">Grootte en gewicht:</h2>
              <div className="breed-page__tags">
                <span className="breed-page__tag">⚖️ 25 – 36 kg</span>
                <span className="breed-page__tag">📏 54 – 57 cm</span>
              </div>

              <div className="breed-page__section box-white">
                <h2 className="breed-page__section-title">Trimfrequentie:</h2>
                <p className="breed-page__text">
                  Een labrador heeft een korte dubbele vacht. Dat betekent dat
                  hij regelmatig geborsteld moet worden om losse haren te
                  verwijderen en klitten te voorkomen. Eén keer per week tot
                  eens per 12 weken, afhankelijk van de levensstijl van de hond
                  en de tijd van het jaar. Tijdens de rui periodes helpt het om
                  de vacht vaker te wassen (bijvoorbeeld tijdens de lente en
                  herfst), hierdoor blijft de vacht schoon en gezond en hebben
                  jij of je robotstofzuiger minder werk.
                </p>
                <div className="breed-page__freq-row">
                  <span className="breed-page__freq breed-page__freq--laag">
                    🟢 Laag — wassen elke 6–12 weken
                  </span>
                  <span className="breed-page__freq breed-page__freq--price">
                    Volledige trimbeurt/Was & Splash: € 60
                  </span>
                </div>
              </div>

              <div className="breed-page__section box-white">
                <h2 className="breed-page__section-title">Vacht &amp; Huid</h2>
                <ul className="breed-page__list">
                  <li>
                    Korte, waterafstotende, strakke vacht die dicht op het
                    lichaam ligt.
                  </li>
                  <li>
                    Weert zowel warmte als koude dankzij de waterafstotende
                    ondervacht.
                  </li>
                  <li>
                    De huid produceert van nature lichaamsvet — dit kan een
                    "hondengeur" veroorzaken bij sommige honden.
                  </li>
                  <li>
                    Tijdens de rui periodes wisselt de vacht volledig waardoor
                    er veel losse haren vrijkomen.
                  </li>
                </ul>
              </div>

              <div className="breed-page__section box-white">
                <h2 className="breed-page__section-title">
                  Tijdens de trimbeurt
                </h2>
                <p className="breed-page__text">
                  De vacht wordt geborsteld en gewassen met een milde shampoo.
                  Daarna blazen we de losse en dode haren weg met een
                  waterblazer. De oren worden gecontroleerd en indien nodig
                  gereinigd. De nagels worden geknipt en de voetzolen worden
                  gescheerd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
