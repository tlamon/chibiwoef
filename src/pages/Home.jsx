import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroImg from "../assets/shiba.webp";
import AboutImg from "../assets/maltipoo.jpg";
import PawImg from "../assets/paw.svg";
import CombImg from "../assets/comb.png";
import ScissorsImg from "../assets/scissors.png";
import HairdryerImg from "../assets/hairdryer.png";
import HeartImg from "../assets/heart.png";
import HaircutImg from "../assets/haircut.jpg";
import massageImg from "../assets/massage.webp";
import ChihuahuaImg from "../assets/chihuahua.jpg";
import MobileImg from "../assets/mobile.webp";
import PugPhoneImg from "../assets/pug-phone.webp";

const features = [
  {
    slug: "care",
    img: PawImg,
    title: "Vakkundige verzorging",
    text: "Met professionele trimmersopleiding op zak gaan we vol passie aan de slag. Jouw hondje verdient het allerbeste.",
  },
  {
    slug: "products",
    img: PawImg,
    title: "Natuurlijke producten",
    text: "We werken uitsluitend met hypoallergene, diervriendelijke shampoos en verzorgingsproducten. Zacht voor de huid, geweldig voor de vacht.",
  },
  {
    slug: "atmosphere",
    img: PawImg,
    title: "Rustige, warme sfeer",
    text: "Hier draait alles om comfort en ontspanning. We creëren een stressvrije omgeving en maken gebruik van aromatherapie en kalmerende kruiden, waardoor jouw viervoeter zich veilig en geliefd voelt.",
  },
  {
    slug: "personal",
    img: PawImg,
    title: "Persoonlijke aanpak",
    text: "We nemen de tijd om jouw hond te leren kennen. Zo krijgt elke woef een eigen dossier. Zo weten we precies hoe we jouw trouwe viervoeter het best in de watten kunnen leggen. Want elke chibi is uniek!",
  },
];

const services = [
  {
    slug: "groom",
    img: HaircutImg,
    title: "Volledige trimbeurt",
    text: "Uitgebreide was en schuimbeurt, knippen en/of plukken, nageltjes, oortjes, tandjes.. Check! ✔ Jouw woef verlaat het salon zo glanzend dat andere honden jaloers gaan blaffen.",
    theme: "groom",
  },
  {
    slug: "vet",
    img: ChihuahuaImg,
    title: "Was & Splash",
    text: "Een heerlijke shampoo, even uitwaaien onder de fohn en lekker borstelen. Nageltjes niet vergeten. Perfect als tussendoor behandeling om de vacht fris en glanzend te houden.",
    theme: "vet",
  },
  {
    slug: "board",
    img: massageImg,
    title: "Massage",
    text: "Geef jouw hond of kat een zachte en warme massage. Dit is niet alleen ontspannend, maar stimuleert ook de bloedcirculatie en bevordert een gezonde vacht. Perfect voor gespannen of oudere dieren die aan artritis lijden.",
    theme: "board",
  },
];

export default function Home() {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "nl").split("-")[0];

  useEffect(() => {
    document.title = "Chibi Woef – Hondentrimsalon in Haacht";
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero__inner">
          <div>
            <div className="hero__badge">
              Chibi = klein & lief • Woef = <span className="emoji">🐶</span>
            </div>
            <h1 className="hero__title">Chibi Woef</h1>
            <h2 className="hero__subtitle">
              Zorg voor jouw trouwe viervoeter met liefde en begrip.
            </h2>
            <br />
            <p className="hero__text">
              Hello! Zoek je nog een warme en stressvrije plek om jouw hond of
              kat te verwennen? Bij Chibi Woef kan je terecht voor een
              professionele was- en trimbeurt, een ontspannende massage of
              gewoon een momentje van rust en aandacht voor jouw trouwe
              viervoeter. Wij maken gebruik van natuurlijke, cruelty-free
              producten en kalmerende kruiden. Klaar om jouw chibi te laten
              stralen? Kom snel eens snuffelen want wij openen binnenkort in
              Haacht en kunnen niet wachten om jouw fluffy vriendje te
              ontmoeten! Tot snel bij Chibi Woef!
            </p>
            <div className="hero__actions">
              <Link to={`/${lang}/contact`} className="btn btn-primary">
                Plan een afspraak
              </Link>
              <Link to={`/${lang}/tarieven`} className="btn btn-secondary">
                Bekijk tarieven
              </Link>
            </div>
            <div className="hero__paw-track" />
          </div>

          <div className="hero__visual">
            <div className="hero__blob" />
            <div className="hero__img">
              <img
                src={HeroImg}
                alt="ChibiWoef"
                className="hero__emoji"
                fetchpriority="high"
                decoding="async"
              />
            </div>
            <img
              src={ScissorsImg}
              alt=""
              className="hero__float hero__float--scissors"
              aria-hidden="true"
            />
            <img
              src={HairdryerImg}
              alt=""
              className="hero__float hero__float--dryer"
              aria-hidden="true"
            />
            <img
              src={CombImg}
              alt=""
              className="hero__float hero__float--paw"
              aria-hidden="true"
            />
            <img
              src={HeartImg}
              alt=""
              className="hero__float hero__float--heart"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="about">
        <div className="about__inner">
          <div className="about__img-wrap">
            <div className="about__img-bg" />
            <div className="about__img-card">
              <img
                src={AboutImg}
                alt="ChibiWoef"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div>
            <span className="badge">Wie of wat is Chibi?</span>
            <h2 className="about__title">Chibi = klein, lief & dierbaar</h2>
            <p className="about__text">
              <em>Chibi</em> (ちび) komt uit het Japans en betekent zoiets als
              "klein en schattig" of "kleintje". Het is een koosnaampje dat we
              gebruiken voor onze eigen hondjes, want voor ons zijn het niet
              zomaar huisdieren, het zijn onze kindjes.
            </p>
            <p className="about__text">
              Die liefde nemen we mee in alles wat we doen. Jouw hond is ook
              iemands chibi en dat verdient een plek waar hij of zij met rust,
              geduld en echte aandacht wordt verzorgd.
            </p>
            <p className="about__text">
              Chibi Woef is een nieuw trimsalon, klein van opzet maar groot van
              hart. We zijn net gestart en leren nog elke dag. Kom gerust eens
              snuffelen. Wij kijken er naar uit om jouw chibi te ontmoeten!
            </p>
            <Link
              to={`/${lang}/contact`}
              className="btn btn-primary about-contact-btn"
            >
              Contacteer mij →
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container text-center">
          <span className="badge">Waarom Chibi Woef? 🐾</span>
          <h2 className="section-heading">Wie ik ben</h2>
          <p className="section-sub">
            Dieren zijn voor mij altijd een constante geweest; een bron van
            onvoorwaardelijke liefde en troost die ik vaak makkelijker bij hen
            vond dan bij mensen. Ze leren me elke dag hoe waardevol het is om
            simpelweg in het 'nu' te leven. Wat begon als het verzorgen van mijn
            eigen hondjes en katjes, groeide uit tot een diepe passie die ik nu
            mag omzetten in mijn beroep. Tijdens een erkende opleiding bij
            Toscanzahoeve leer ik de fijne knepen van het vak, zodat ik eind
            2026 de deuren van Chibi Woef kan openen. <br />
            Een plek waar rust, begrip en oprechte zorg voor jouw trouwe
            viervoeter centraal staan.
          </p>
          <div className="features__grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div
                  className={`feature-card__icon feature-card__icon--${f.slug}`}
                >
                  <img src={f.img} alt="" loading="lazy" decoding="async" />
                </div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services">
        <div className="container text-center">
          <span className="badge">Wat we doen ♥</span>
          <h2 className="section-heading">Aanbod</h2>
          <p className="section-sub">
            Wij willen de wereld graag een beetje mooier maken, één chibi
            tegelijk. Daarom maken we gebruik van natuurlijke en
            diervriendelijke producten en bieden we een persoonlijke,
            stressvrije aanpak. Jouw trouwe viervoeter staat hier centraal. Zo
            kunnen we samen zorgen voor een stralende vacht en een gelukkig
            hart.
          </p>
          <div className="services__grid">
            {services.map((s) => (
              <div
                className={`service-card service-card--${s.theme}`}
                key={s.slug}
              >
                <div className="service-card__thumb">
                  <img src={s.img} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__text">{s.text}</p>
                  <Link to={`/${lang}/tarieven`} className="service-card__link">
                    Bekijk tarieven →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="container container--no-bottom-padding">
        <div className="cta-banner cta-banner--with-bg">
          <img
            src={PugPhoneImg}
            className="cta-banner__bg"
            alt=""
            aria-hidden="true"
          />
          <img
            src={MobileImg}
            className="cta-banner__icon"
            alt=""
            aria-hidden="true"
          />
          <div className="cta-banner__text">
            <h2 className="cta-banner__title">Plan een afspraak</h2>
            <a href="tel:+32496309459" className="cta-banner__phone">
              +32 496 309 459
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
