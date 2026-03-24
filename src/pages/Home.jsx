import { Link } from "react-router-dom";
import HeroImg from "../assets/shiba.png";
import AboutImg from "../assets/maltipoo.jpg";
// Feature card images — swap each one for your own PNG
import PawImg from "../assets/paw.png";
import CombImg from "../assets/comb.png";
import ScissorsImg from "../assets/scissors.png";
import HairdryerImg from "../assets/hairdryer.png";
import HeartImg from "../assets/heart.png";

const features = [
  {
    img: PawImg, // ← replace with your icon
    bg: "#D8E0D0",
    title: "Vakkundige verzorging",
    text: "Met een professionele trimmersopleiding op zak gaan we vol passie aan de slag. Jouw hond verdient het allerbeste — en dat leveren we.",
  },
  {
    img: PawImg, // ← replace with your icon
    bg: "#F5F0EB",
    title: "Natuurlijke producten",
    text: "We werken uitsluitend met hypoallergene, diervriendelijke shampoos en verzorgingsproducten. Zacht voor de huid, geweldig voor de vacht.",
  },
  {
    img: PawImg, // ← replace with your icon
    bg: "#EDEAE2",
    title: "Rustige, huiselijke sfeer",
    text: "Geen drukke kennel, maar een fijne salon waar jouw hond zich meteen thuis voelt. Stressvrij, warm en persoonlijk.",
  },
  {
    img: PawImg, // ← replace with your icon
    bg: "#D8E0D0",
    title: "Alle rassen welkom",
    text: "Van kleine Chihuahua tot grote Berner Sennenhond — elk ras en elk karakter krijgt de aandacht en aanpak die het verdient.",
  },
  {
    img: PawImg, // ← replace with your icon
    bg: "#F9E8E2",
    title: "Makkelijk afspraak maken",
    text: "In een paar klikken een afspraak inplannen. Je ontvangt een bevestiging en herinnering zodat je nooit een beurt mist.",
  },
  {
    img: PawImg, // ← replace with your icon
    bg: "#EDEAE2",
    title: "Persoonlijke aanpak",
    text: "We nemen de tijd om jouw hond te leren kennen. Zo krijgt elke woef een eigen dossier. Zo weten we precies hoe we jouw Chibi het best in de watten kunnen leggen.",
  },
];

const services = [
  {
    slug: "groom",
    icon: "✂️",
    title: "Volledige trimbeurt",
    text: "Uitgebreide was en schuimbeurt, knippen en/of plukken, nageltjes, oortjes, tandjes.. Check! Jouw hond verlaat het salon zo glanzend dat andere honden er jaloers van gaan blaffen.",
    theme: "groom",
  },
  {
    slug: "vet",
    icon: "🛁",
    title: "Was & Splash",
    text: "Een heerlijke shampoo, even uitwaaien onder de fohn en lekker borstelen. Nageltjes niet vergeten. Perfect als tussendoor behandeling om de vacht fris en glanzend te houden.",
    theme: "vet",
  },
  {
    slug: "board",
    icon: "💅",
    title: "Kleine behandelingen",
    text: "Alleen nagels knippen, oren reinigen of een tandenborstelbeurt nodig? We helpen je snel en vakkundig zonder vaste afspraak voor grote beurten.",
    theme: "board",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__inner">
          <div>
            <div className="hero__badge">
              Chibi = klein & lief • Woef = <span className="emoji">🐶</span>
            </div>
            <h1 className="hero__title">Chibi woef</h1>
            <h2 className="hero__subtitle">
              Nieuw honden trimsalon in Haacht in het najaar van 2026
            </h2>
            <br />
            <p className="hero__text">
              <em>Chibi</em> (ちび) is Japans voor klein, schattig en dierbaar.
              Woef spreekt voor zich. Bij Chibi Woef behandelen we jouw hond
              zoals wij onze eigen kleintjes behandelen, want voor ons zijn het
              echte kindjes.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">
                Plan een afspraak →
              </Link>
              <Link to="/tarieven" className="btn btn-secondary">
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
              className="hero__float hero__float--pom"
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
            <p className="about__label">Wie of wat is Chibi?</p>
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
              to="/contact"
              className="btn btn-primary"
              style={{ marginTop: "28px" }}
            >
              Plan een afspraak →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="features">
        <div className="container text-center">
          <span className="badge">Waarom Chibi Woef? 🐾</span>
          <h2 className="section-heading">Wat we doen?</h2>
          <p className="section-sub">
            We staan voor vakmanschap, rust en een oprechte liefde voor honden.
            Dat merk je vanaf het eerste moment.
          </p>
          <div className="features__grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div
                  className="feature-card__icon"
                  style={{ background: f.bg }}
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
          <h2 className="section-heading">onze diensten</h2>
          <p className="section-sub">
            Van een uitgebreide trimbeurt tot een snelle wasbeurt of kleine
            behandeling — we helpen jouw hond er altijd tiptop uit te zien.
          </p>
          <div className="services__grid">
            {services.map((s) => (
              <div
                className={`service-card service-card--${s.theme}`}
                key={s.slug}
              >
                <div className="service-card__thumb">{s.icon}</div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__text">{s.text}</p>
                  <Link to="/tarieven" className="service-card__link">
                    Bekijk tarieven →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="container" style={{ paddingBottom: "0" }}>
        <div className="cta-banner">
          <h2 className="cta-banner__title">
            Klaar voor de allermooiste versie van jouw hond?
          </h2>
          <p className="cta-banner__sub">
            Afspraken zijn snel vol — plan vandaag nog jouw beurt in!
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary">
              Nu inplannen →
            </Link>
            <a href="tel:+15551234567" className="btn btn-ghost-white">
              📞 Bel ons
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
