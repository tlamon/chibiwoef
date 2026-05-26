import { useEffect } from "react";
import PawIcon from "../assets/paw.svg";
import MobileImg from "../assets/mobile.webp";
import TopDogImg from "../assets/sleepy.png";
import DogXsIcon from "../assets/dog-xs.svg";
import DogSIcon from "../assets/dog-s.svg";
import DogMIcon from "../assets/dog-m.svg";

const treatments = [
  {
    name: "Pawdicure",
    desc: "Nagels knippen en/of vijlen. We knippen nooit te kort en vijlen bij voorkeur om splijten te voorkomen. Voor honden die het spannend vinden, knippen we de nagels in meerdere korte sessies. Bij ingegroeide nagels verwijzen we je graag door naar de dierenarts voor een veilige behandeling.",
    price: "€ 10",
  },
  {
    name: "Oren reinigen",
    desc: "Milde reiniging met professionele vloeistof. Bij infecties sturen we je (uit liefde) door naar de dierenarts.",
    price: "€ 8",
  },
  {
    name: "Vlooien & teken shampoo",
    desc: "Extra intensieve wasbeurt. Verplicht bij ongewenste gastjes om de hygiene in het salon te bewaren.",
    price: "€ 12",
  },
  {
    name: "Ontspanningsmassage (20-30 min)",
    desc: "Een rustmoment voor hond of kat; bevordert de bloedsomloop en verlaagt stress. ",
    price: "€ 25",
  },
  {
    name: "Zen massage (40-60 min)",
    desc: "Diepe ontspanning voor lichaam en geest; ideaal voor oudere of angstige dieren. We werken met zachte, langzame bewegingen en aromatherapie om een serene ervaring te creëren. Bij honden met mobiliteitsproblemen of chronische pijn kan deze massage verlichting bieden en de levenskwaliteit verbeteren.",
    price: "€ 45",
  },
  {
    name: "Puppy gewenning (15-30 min)",
    desc: "Een eerste, zachte kennismaking met de geuren en kleuren van een trimsalon. We maken er een leuk, speels moment van met veel positieve associaties, zodat jouw kleine vriendje zich meteen thuis voelt op de tafel, in het bad en onder de föhn.",
    price: "Gratis (tot 6 maanden)",
  },
  {
    name: "Standaard gewenning",
    desc: "Op maat gemaakte sessie om angstige of onzekere dieren te laten wennen aan het salon. Hierbij maken we gebruik van positieve associaties, zoals lekkernijen, zachte aanrakingen en aanmoediging om vertrouwen op te bouwen. Soms is het nodig om meerdere sessies te plannen, afhankelijk van het comfortniveau van jouw hond.",
    price: "vanaf €15 per kwartier",
  },
];

const pricingRows = [
  {
    coatType: "Korthaar / glad",
    note: "Wassen & drogen, nagels knippen en oren reinigen",
    xs: "€ 45",
    s: "€ 55",
    m: "€ 70",
  },
  {
    coatType: "Dubbele vacht",
    note: "Ontwollen & naturel model, wassen & drogen, nagels knippen en oren reinigen",
    xs: "€ 60",
    s: "€ 75",
    m: "€ 90",
  },
  {
    coatType: "Langhaar / bevedering",
    note: "Ontwollen, was-, droog- & knipwerk, nagels knippen en oren reinigen",
    xs: "€ 70",
    s: "€ 85",
    m: "€ 105",
  },
  {
    coatType: "Krul / fleece (tot 2 cm)",
    note: "Ontwollen, was-, droog- & knipwerk, nagels knippen en oren reinigen, volledige snit (kort)",
    xs: "€ 75",
    s: "€ 90",
    m: "€ 110",
  },
  {
    coatType: "Krul / fleece (langer dan 2 cm)",
    note: "Ontwollen, wassen, drogen & modelknippen, nagels knippen en oren reinigen ",
    xs: "€ 95",
    s: "€ 110",
    m: "€ 135",
  },
  {
    coatType: "Ruwharig (plukken)",
    note: "Ambachtelijk handmatig plukwerk, wassen & drogen, nagels knippen en oren reinigen",
    xs: "€ 75",
    s: "€ 95",
    m: "€ 120",
  },
];

export default function Tarieven() {
  useEffect(() => {
    document.title = "Tarieven – Chibi Woef";
  }, []);

  return (
    <main>
      <section className="pricing-section">
        <div className="container pricing">
          <div className="content-stack">
            <div className="content-block">
              <div className="box-white">
                <div className="treatment-mascot">
                  <img src={TopDogImg} alt="" className="top-dog__img" />
                </div>
                <div className="pricing-bone" role="note" aria-live="polite">
                  <h2>Prijslijst</h2>
                </div>
                <div className="content-block__head">
                  <p className="content-block__sub">
                    Richtprijzen incl. 21% BTW. De definitieve prijs hangt af
                    van de vachtconditie en het gedrag. Voorlopig werken we met
                    dieren tot en met een gewicht van 30 kg.
                  </p>
                </div>
                <div className="pricing-table-wrap">
                  <table className="pricing-table">
                    <thead>
                      <tr>
                        <th>Vachttype</th>
                        <th>
                          <div className="pricing-size-head">
                            <img
                              src={DogXsIcon}
                              className="pricing-size-head__icon pricing-size-head__icon--xs"
                              alt=""
                              aria-hidden="true"
                            />
                            <span className="pricing-size-head__label">
                              XS (&lt;5kg)
                            </span>
                          </div>
                        </th>
                        <th>
                          <div className="pricing-size-head">
                            <img
                              src={DogSIcon}
                              className="pricing-size-head__icon pricing-size-head__icon--s"
                              alt=""
                              aria-hidden="true"
                            />
                            <span className="pricing-size-head__label">
                              S (5kg - 10kg)
                            </span>
                          </div>
                        </th>
                        <th>
                          <div className="pricing-size-head">
                            <img
                              src={DogMIcon}
                              className="pricing-size-head__icon pricing-size-head__icon--m"
                              alt=""
                              aria-hidden="true"
                            />
                            <span className="pricing-size-head__label">
                              M (10kg - 30kg)
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingRows.map((row) => (
                        <tr key={row.coatType}>
                          <td>
                            <span className="treatment-row__title">
                              {row.coatType}
                            </span>
                            <span className="treatment-row__desc">
                              {row.note}
                            </span>
                          </td>
                          <td>{row.xs}</td>
                          <td>{row.s}</td>
                          <td>{row.m}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <ul className="treatment-list">
                  {treatments.map((b) => (
                    <li
                      className="treatment-row treatment-row--service"
                      key={b.name}
                    >
                      <img
                        src={PawIcon}
                        className="treatment-row__icon"
                        alt=""
                        aria-hidden="true"
                      />
                      <div className="treatment-row__body">
                        <span className="treatment-row__title">{b.name}</span>
                        <span className="treatment-row__desc">{b.desc}</span>
                      </div>
                      <span>{b.price}</span>
                    </li>
                  ))}
                </ul>

                <p className="pricing-note">
                  Heb je een hond boven 30 kg? Laat het gerust weten, dan denken
                  we graag mee en verwijzen we je warm door waar nodig.
                </p>
              </div>

              <div>
                <p className="box-white__label">
                  Belangrijk om te weten: Scope & Rust
                </p>
                <p className="box-white__items">
                  Onze prijzen zijn gebaseerd op een uurtarief van € 60. De
                  bovenstaande tabel dient als richtlijn voor honden/katten met
                  een goed onderhouden vacht. Bij extreme klitten, vervilting of
                  gedrag dat extra tijd vraagt, rekenen we een toeslag van € 15
                  per begonnen kwartier. Zo garanderen we de rust en kwaliteit
                  die uw dier verdient.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-banner cta-banner--contact">
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
        </div>
      </section>
    </main>
  );
}
