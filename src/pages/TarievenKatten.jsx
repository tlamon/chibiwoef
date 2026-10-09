import { useEffect } from "react";
import { Link } from "react-router-dom";
import CrownImg from "../assets/crown.png";
import PikachuImg from "../assets/pikachu.png";
import KittyStareImg from "../assets/kittie-stare.png";

export default function TarievenKatten() {
  useEffect(() => {
    document.title = "Tarieven Katten – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">
          Voor onze koninklijke vrienden{" "}
          <img
            src={CrownImg}
            alt=""
            aria-hidden="true"
            className="badge__icon"
          />
        </span>
        <h1 className="page-hero__title">Tarieven – Katten</h1>
        <p className="page-hero__sub">
          <i>
            "Owners of dogs will have noticed that, if you provide them with
            food and water and shelter and affection, they will think you are
            god. <br />
            Whereas owners of cats are compelled to realize that, if you provide
            them with food and water and shelter and affection, they draw the
            conclusion that <strong>they are gods.</strong>”
          </i>
        </p>
      </div>
      <section className="services">
        <div className="container">
          <div className="cat-pricing__layout">
            <div className="about__img-wrap">
              <div className="about__img-card">
                <img
                  src={PikachuImg}
                  alt="Pikachu"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="about__caption">Queen Pikachu, mijn mooie meid ♥</p>
            </div>
            <div>
              <p className="content-block__sub" style={{ marginTop: 0 }}>
                Tijdens een kattenbeurt kammen en borstelen we de vacht grondig
                om klitten en losse haren te verwijderen. Vervolgens knippen we
                de nageltjes en reinigen we de ogen en oren voorzichtig. Als de
                poes het toelaat, doen we ook een sanitaire trim. <br />
                Alles gebeurt op het tempo van jouw kat, in alle rust en met
                veel geduld.
              </p>

              <div className="cat-pricing__cards">
                <div className="cat-pricing__card">
                  <p className="info-card__label">
                    <span className="icon">♔</span> Korthaar
                  </p>
                  <p className="cat-pricing__price">€ 40</p>
                  <p className="cat-pricing__duration">± 30 – 45 min</p>
                  <p className="cat-pricing__examples">
                    Europese korthaar, Britse korthaar, Siamees…
                  </p>
                </div>
                <div className="cat-pricing__card">
                  <p className="info-card__label">
                    <span className="icon">♔</span> Langhaar
                  </p>
                  <p className="cat-pricing__price">€ 50</p>
                  <p className="cat-pricing__duration">± 45 – 60 min</p>
                  <p className="cat-pricing__examples">
                    Maine Coon, Ragdoll, Pers, Noorse boskat…
                  </p>
                </div>
              </div>

              <p className="pricing-note">
                Bij extreme klitten wordt een toeslag van €10 aangerekend. We
                werken uitsluitend met katten die gewend zijn aan aanraking en
                verzorging. Bij te hoge angst, stress of pijn wordt de sessie
                afgebroken. Het welzijn van jouw kat staat altijd voorop.
              </p>

              <div className="cat-pricing__cards">
                <div className="cat-pricing__card">
                  <p className="info-card__label">
                    <span className="icon">♔</span> Lion cut
                  </p>
                  <p className="cat-pricing__price">€ 55</p>
                  <p className="cat-pricing__duration">± 30 – 45 min</p>
                  <p className="cat-pricing__examples">
                    Enkel en alleen bij extreme gevallen wordt een kat
                    geschoren.
                  </p>
                </div>
              </div>

              <p className="content-block__sub" style={{ marginTop: 0 }}>
                Bij extreme klitten of wanneer de kat zichzelf niet meer kan
                verzorgen kunnen we samen beslissen om over te gaan tot het
                scheren van de vacht in een Lion cut of leeuwenkapsel. Hierbij
                scheren we de vacht op het lichaam kort, maar wordt Zijn/Haar
                waardigheid behouden door de vacht rond de kop, poten en staart
                lang te houden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="kitty-stare-wrap">
        <img
          src={KittyStareImg}
          alt=""
          aria-hidden="true"
          className="kitty-stare"
        />
      </div>
    </main>
  );
}
