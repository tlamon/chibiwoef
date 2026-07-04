import { useEffect, useState } from "react";
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
    name: "Oren reinigen en/of plukken",
    desc: "Milde reiniging met professionele vloeistof. Bij infecties sturen we je (uit liefde) door naar de dierenarts.",
    price: "€ 8",
  },
  {
    name: "Katten trimbeurt (vachtverzorging) ♔",
    desc: "Speciaal voor onze gevoelige harige hoogheden die weigeren mee te werken aan hun eigen vachtverzorging. Omdat katten nu eenmaal de baas zijn, kammen en ontwollen we in alle rust en volledig op hun tempo de koninklijke vacht. Inclusief een vorstelijke manicure (nagels knippen) en een zachte oorreiniging. Wassen? Dat doen we uw majesteit absoluut niet aan!",
    price: "€ 35",
  },
  {
    name: "Ontspanningsmassage (20-30 min)",
    desc: "Een rustmoment voor hond of kat; bevordert de bloedsomloop en verlaagt stress. ",
    price: "€ 25",
  },
  {
    name: "Puppy gewenning (15-30 min)",
    desc: "Een eerste, zachte kennismaking met de geuren en kleuren van een trimsalon. We maken er een leuk, speels moment van met veel positieve associaties, zodat jouw dikke vriend zich goed voelt op de tafel, in het bad en onder de föhn.",
    price: "Gratis (tot 5 maanden)",
  },
  {
    name: "Standaard gewenning (15-30 min)",
    desc: "Speciaal voor angstige of onzekere dieren die een trimsalon niet gewend zijn. Hierbij maken we gebruik van positieve associaties met de tools, geuren en geluiden. We werken met lekkernijen, zachte aanrakingen en aanmoediging om vertrouwen op te bouwen. Soms is het nodig om meerdere sessies in te plannen, afhankelijk van het comfortniveau van jouw hond. De ene keer gaat het dier eens in het bad, de andere keer maken we er een spelletje van met de föhn. We stemmen dit volledig af op de behoeften van jouw dier.",
    price: "€ 15 - € 30",
  },
  {
    name: "Tussentijdse kambeurt",
    desc: "Opfris- en ontknoop kambeurt voor honden én katten. Ideaal om klitten te voorkomen, de vacht luchtig te houden en/of jouw dier rustig te laten wennen aan het borstelen en verzorging. Kleine & middelgrote dieren: ±30 min (€ 20 - € 30). Grote honden: ±40 min (€ 40). 🐾 <b>10 kambeurten = 1 kambeurt gratis</b> (10 kambeurtenkaart in het salon verkrijgbaar)",
    price: "€ 20 - € 40",
  },
  {
    name: "Groene klei behandeling",
    desc: "Heeft jouw hond last van een gevoelige huid, hardnekkige jeuk of een droge, schilferige vacht? Deze gerichte, natuurlijke Vertargil groene klei behandeling helpt om de huid direct te kalmeren en het herstel te ondersteunen. Tijdens de trimbeurt masseren we de zuivere, minerale leempasta in op de probleemzones. Terwijl de hond heerlijk ontspant in een warme handdoek, laten we de klei 10-15 minuten intrekken. Daarna spoelen we het masker grondig uit en wassen we de vacht met een milde shampoo. De groene klei behandeling is geschikt voor alle vachttypes en kan enkel in combinatie met een wasbeurt.",
    price: "vanaf € 15",
  },
  {
    name: "Vlooien & teken behandeling",
    desc: "Extra intensieve wasbeurt met vlooien en teken shampoo. Verplicht bij ongewenste gastjes en om de hygiene in het salon te bewaren.",
    price: "+ € 25",
  },
];

const pricingRows = [
  {
    coatType: "Korthaar / glad",
    note: "Wassen & drogen, nagels knippen, ogen en oren reinigen",
    xs: "€ 45",
    s: "€ 55",
    m: "€ 65",
  },
  {
    coatType: "Dubbele vacht",
    note: "Ontwollen & naturel model, wassen & drogen, nagels knippen, ogen en oren reinigen",
    xs: "€ 60",
    s: "€ 75",
    m: "€ 90",
  },
  {
    coatType: "Langhaar / bevedering",
    note: "Ontwollen, was-, droog- & knipwerk, nagels knippen, ogen en oren reinigen",
    xs: "€ 70",
    s: "€ 80",
    m: "€ 100",
  },
  {
    coatType: "Krul / fleece (tot 2 cm)",
    note: "Ontwollen, was-, droog- & knipwerk, nagels knippen, ogen en oren reinigen, volledige snit (kort)",
    xs: "€ 70",
    s: "€ 85",
    m: "€ 100",
  },
  {
    coatType: "Krul / fleece (langer dan 2 cm)",
    note: "Ontwollen, wassen, drogen & modelknippen, nagels knippen, ogen en oren reinigen ",
    xs: "€ 85",
    s: "€ 100",
    m: "€ 120",
  },
  {
    coatType: "Ruwharig (plukken)",
    note: "Wassen & drogen, plukken, knipwerk, nagels knippen, ogen en oren reinigen",
    xs: "€ 70",
    s: "€ 85",
    m: "€ 110",
  },
];

const formatEuro = (amount) => `€ ${amount}`;

const parseEuro = (price) => Number(price.replace(/[^\d]/g, ""));

const getDiscountedPrice = (price, discount) => {
  const discountedAmount = parseEuro(price) * (1 - discount);
  return formatEuro(Math.round(discountedAmount / 5) * 5);
};

export default function Tarieven() {
  useEffect(() => {
    document.title = "Tarieven – Chibi Woef";
  }, []);

  const currentDiscount = 0.15;
  const [openInfoRow, setOpenInfoRow] = useState(null);

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
                  <div className="pricing-promo">
                    <p className="pricing-promo__item pricing-promo__item--current">
                      <strong>
                        Opstartactie september t.e.m. november 2026:
                      </strong>{" "}
                      15% kennismakingskorting op alle trimbeurten.
                    </p>
                    <p className="pricing-promo__item pricing-promo__item--next">
                      <strong>December 2026 t.e.m. februari 2027:</strong> 10%
                      opstartkorting op alle trimbeurten.
                    </p>
                  </div>
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
                      {pricingRows.map((row, index) => {
                        const tooltipId = `pricing-note-${index}`;
                        const isOpen = openInfoRow === row.coatType;

                        return (
                          <tr key={row.coatType}>
                            <td>
                              <div className="pricing-coat-head">
                                <span className="treatment-row__title">
                                  {row.coatType}
                                </span>
                                <span
                                  className={`pricing-info${isOpen ? " is-open" : ""}`}
                                >
                                  <button
                                    type="button"
                                    className="pricing-info__btn"
                                    aria-label={`Meer info over ${row.coatType}`}
                                    aria-expanded={isOpen}
                                    aria-describedby={tooltipId}
                                    onClick={() =>
                                      setOpenInfoRow(
                                        isOpen ? null : row.coatType,
                                      )
                                    }
                                  >
                                    i
                                  </button>
                                  <span
                                    id={tooltipId}
                                    role="tooltip"
                                    className="pricing-info__tooltip"
                                  >
                                    {row.note}
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td data-label="XS (<5kg)">
                              <span className="pricing-price pricing-price--original">
                                {row.xs}
                              </span>
                              <span className="pricing-price pricing-price--promo">
                                {getDiscountedPrice(row.xs, currentDiscount)}
                              </span>
                            </td>
                            <td data-label="S (5kg - 10kg)">
                              <span className="pricing-price pricing-price--original">
                                {row.s}
                              </span>
                              <span className="pricing-price pricing-price--promo">
                                {getDiscountedPrice(row.s, currentDiscount)}
                              </span>
                            </td>
                            <td data-label="M (10kg - 30kg)">
                              <span className="pricing-price pricing-price--original">
                                {row.m}
                              </span>
                              <span className="pricing-price pricing-price--promo">
                                {getDiscountedPrice(row.m, currentDiscount)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
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
                        <span
                          className="treatment-row__desc"
                          dangerouslySetInnerHTML={{ __html: b.desc }}
                        />
                      </div>
                      <span>{b.price}</span>
                    </li>
                  ))}
                </ul>

                <p className="pricing-note">
                  Heb je een hond boven 30 kg? Laat het gerust weten, dan denken
                  we graag mee en verwijzen we je eventueel warm door waar
                  nodig.
                </p>
              </div>

              <div>
                <p className="box-white__label">
                  Belangrijk om te weten: Scope & Rust
                </p>
                <p className="box-white__items">
                  De bovenstaande tabel dient als richtlijn voor honden/katten
                  met een goed onderhouden vacht. Bij extreme klitten,
                  vervilting of ongewenst gedrag vraagt dit extra tijd en geld.
                  Bij angstige dieren kies ik daarom bewust om eerst rust en
                  vertrouwen op te bouwen. <br />
                  Liever een gelukkig dier dan een perfecte snoet met veel
                  stress.
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
