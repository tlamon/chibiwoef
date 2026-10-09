import { useEffect, useState } from "react";
import PawIcon from "../assets/paw.svg";
import MobileImg from "../assets/mobile.webp";
import TopDogImg from "../assets/sleepy.png";
import DogXsIcon from "../assets/dog-xs.svg";
import DogSIcon from "../assets/dog-s.svg";
import DogMIcon from "../assets/dog-m.svg";
import DogLIcon from "../assets/dog-l.svg";

const treatments = [
  {
    name: "Was & Splash",
    desc: "Een heerlijke shampoo- en schuimbeurt, uitwaaien onder de föhn en een grondige borstelbeurt. Pedicure (nagels knippen en/of vijlen) is inbegrepen. Perfect als tussendoor behandeling om de vacht fris, glanzend en klit-vrij te houden.",
    price: "€ 40 – € 65",
  },
  {
    name: "Tussentijdse borstel- & kambeurt (±30 min)",
    desc: "Opfris- en ontknoop kambeurt voor honden én katten. Ideaal om klitten te voorkomen, de vacht luchtig te houden of jouw dier rustig te laten wennen aan het borstelen en verzorging. Bij klitten of knopen wordt extra tijd gerekend. 🐾 <b>10 kambeurten = 1 kambeurt gratis</b> (10 kambeurtenkaart in het salon verkrijgbaar)",
    price: "€ 20 - € 45",
  },
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
    name: "Trimbeurt katten ♔",
    desc: "Speciaal voor onze gevoelige harige hoogheden die weigeren mee te werken aan hun eigen vachtverzorging. Omdat katten nu eenmaal de baas zijn, kammen en ontwollen we in alle rust en volledig op hun tempo de koninklijke vacht. Inclusief een vorstelijke manicure (nagels knippen) en een zachte oorreiniging. Wassen? Dat doen we uw majesteit absoluut niet aan!",
    price: "€ 45",
  },
  {
    name: "Ontspanningsmassage (20-30 min)",
    desc: "Een rustmoment voor hond of kat; bevordert de bloedsomloop en verlaagt stress. ",
    price: "€ 25",
  },
  {
    name: "Puppy gewenning – Deel 1: Meet & Greet (15-20 min)",
    desc: "Kennismaking met de kapster, het materiaal en de omgeving via positieve associaties (snoepjes). De pootjes worden voorzichtig natgemaakt en gedroogd, en er wordt rustig gekamd. Liefst tijdens hun 2e socialisatiefase, van 8 tot 12 weken. De nieuwsgierigheid van de puppy is in deze periode groter dan de angst. Het is het ideale moment om de pup op een positieve en rustige manier te laten wennen.",
    price: "€ 15",
  },
  {
    name: "Puppy gewenning – Deel 2: Was & Splash (+/- 60 min)",
    desc: "De pup gaat helemaal in bad, wordt volledig gedroogd en gekamd, de pootjes worden bijgeknipt en geschoren. Een eerste echte badervaring in alle rust, op het tempo van jouw pup.",
    price: "€ 35 - € 50",
  },
  {
    name: "Puppy gewenning – Deel 3: Eerste trimbeurt",
    desc: "Nu de pup vertrouwd is met het salon, gaan we voor de eerste volledige verzorgingsbeurt. Als beloning voor het geduld krijgt het baasje € 15 korting op de standaardprijs (om snoepjes mee te kopen 😉 ).",
    price: "Standaardprijs (-€ 15 korting)",
  },
  {
    name: "Standaard gewenning (15-30 min)",
    desc: "Speciaal voor angstige of onzekere dieren die een trimsalon niet gewend zijn. Hierbij maken we gebruik van positieve associaties met de tools, geuren en geluiden. We werken met lekkernijen, zachte aanrakingen en aanmoediging om vertrouwen op te bouwen. Soms is het nodig om meerdere sessies in te plannen, afhankelijk van het comfortniveau van jouw hond. De ene keer gaat het dier eens in het bad, de andere keer maken we er een spelletje van met de föhn. We stemmen dit volledig af op de behoeften van jouw dier.",
    price: "€ 15 - € 30",
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
    note: "Wassen & drogen, nagels knippen en oren reinigen",
    xs: "€ 45",
    s: "€ 45",
    m: "€ 55",
    l: "€ 60",
  },
  {
    coatType: "Dubbele vacht",
    note: "Ontwollen & naturel model, wassen & drogen, nagels knippen en oren reinigen",
    xs: "€ 55",
    s: "€ 60",
    m: "€ 65",
    l: "€ 75",
  },
  {
    coatType: "Langhaar / bevedering",
    note: "Ontwollen, was-, droog- & knipwerk, nagels knippen en oren reinigen",
    xs: "€ 55",
    s: "€ 65",
    m: "€ 70",
    l: "€ 75",
  },
  {
    coatType: "Krul / fleece (tot 2 cm)",
    note: "Ontwollen, was-, droog- & knipwerk, nagels knippen en oren reinigen, volledige snit (kort)",
    xs: "€ 70",
    s: "€ 80",
    m: "€ 95",
    l: "€ 100",
  },
  {
    coatType: "Krul / fleece (langer dan 2 cm)",
    note: "Ontwollen, wassen, drogen & modelknippen, nagels knippen en oren reinigen",
    xs: "€ 85",
    s: "€ 95",
    m: "€ 105",
    l: "€ 120",
  },
  {
    coatType: "Ruwharig (plukken)",
    note: "Ambachtelijk handmatig plukwerk, wassen & drogen, nagels knippen en oren reinigen",
    xs: "€ 65",
    s: "€ 70",
    m: "€ 90",
    l: "€ 100",
  },
];

const formatEuro = (amount) => `€ ${amount}`;

const parseEuro = (price) => Number(price.replace(/[^\d]/g, ""));

const getDiscountedPrice = (price, discount) => {
  const discountedAmount = parseEuro(price) * (1 - discount);
  return formatEuro(Math.round(discountedAmount / 5) * 5);
};

const breedPriceRows = [
  { breed: "Affenpinscher", price: "€ 60" },
  { breed: "Afgaanse windhond", price: "€ 100" },
  { breed: "Airedale terrier", price: "€ 130" },
  { breed: "Amerikaanse Bulldog", price: "€ 60" },
  { breed: "Amerikaanse cocker", price: "€ 100" },
  { breed: "Amerikaanse Staffordshire terrier", price: "€ 60" },
  { breed: "Australische herder", price: "€ 75" },
  { breed: "Australische herder mini", price: "€ 50" },
  { breed: "Australische terrier", price: "€ 60" },
  { breed: "Basenji", price: "€ 55" },
  { breed: "Basset fauve de Bretagne", price: "€ 75" },
  { breed: "Basset hound", price: "€ 60" },
  { breed: "Beagle", price: "€ 55" },
  { breed: "Bearded collie", price: "€ 90" },
  { breed: "Bedlington terrier", price: "€ 70" },
  { breed: "Bichon frise", price: "€ 70" },
  { breed: "Boemer", price: "€ 55" },
  { breed: "Border collie", price: "€ 65" },
  { breed: "Border terrier", price: "€ 70" },
  { breed: "Boston terrier", price: "€ 45" },
  { breed: "Boxer", price: "€ 60" },
  { breed: "Bulldog Amerikaans", price: "€ 60" },
  { breed: "Bulldog Frans / Frenchy", price: "€ 55" },
  { breed: "Bulldog Engels", price: "€ 55" },
  { breed: "Bull terrier", price: "€ 60" },
  { breed: "Cairn terrier", price: "€ 70" },
  { breed: "Cavalier King Charles", price: "€ 65" },
  { breed: "Cavapoo", price: "€ 70" },
  { breed: "Chihuahua korthaar", price: "€ 45" },
  { breed: "Chihuahua langhaar", price: "€ 50" },
  { breed: "Chinese naakthond", price: "€ 45" },
  { breed: "Clumber spaniel", price: "€ 70" },
  { breed: "Cockapoo", price: "€ 85" },
  { breed: "Corgi", price: "€ 55" },
  { breed: "Coton de tulear", price: "€ 70" },
  { breed: "Dalmatier", price: "€ 60" },
  { breed: "Doodle klein (<10kg)", price: "€ 75" },
  { breed: "Doodle middel (10-20kg)", price: "€ 100" },
  { breed: "Doodle groot (>20kg)", price: "€ 120" },
  { breed: "Drentsche patrijshond", price: "€ 70" },
  { breed: "Duitse jacht terrier glad", price: "€ 65" },
  { breed: "Duitse jacht terrier ruw", price: "€ 80" },
  { breed: "Duitse staande hond glad", price: "€ 65" },
  { breed: "Duitse staande hond ruw", price: "€ 90" },
  { breed: "Dwergkees / Pomeriaan", price: "€ 60" },
  { breed: "Dwergpinscher", price: "€ 45" },
  { breed: "Engelse Bulldog", price: "€ 55" },
  { breed: "Engelse Cocker Spaniel", price: "€ 80" },
  { breed: "Engelse setter", price: "€ 80" },
  { breed: "Engelse Springer Spaniel", price: "€ 85" },
  { breed: "Finse spits", price: "€ 60" },
  { breed: "Flatcoated retriever", price: "€ 75" },
  { breed: "Franse Bulldog", price: "€ 55" },
  { breed: "Fox terrier glad", price: "€ 50" },
  { breed: "Fox terrier ruw", price: "€ 85" },
  { breed: "Friese stabij", price: "€ 70" },
  { breed: "Galgo", price: "€ 60" },
  { breed: "Golden retriever", price: "€ 80" },
  { breed: "Gordon setter", price: "€ 85" },
  { breed: "Grand Basset Griffon Vendeen", price: "€ 70" },
  { breed: "Griffon", price: "€ 60" },
  { breed: "Griffon ruwharig", price: "€ 70" },
  { breed: "Groenendaler", price: "€ 75" },
  { breed: "Havanezer", price: "€ 70" },
  { breed: "Heidewachtel", price: "€ 70" },
  { breed: "Hollandse herder lang", price: "€ 70" },
  { breed: "Hollandse herder ruw", price: "€ 80" },
  { breed: "Hovawart", price: "€ 75" },
  { breed: "Husky", price: "€ 75" },
  { breed: "Ierse setter", price: "€ 80" },
  { breed: "Ierse terrier", price: "€ 90" },
  { breed: "Italiaans windhondje", price: "€ 45" },
  { breed: "Jack Russell terrier kort", price: "€ 45" },
  { breed: "Jack Russell terrier ruw", price: "€ 70" },
  { breed: "Japanse spaniel", price: "€ 55" },
  { breed: "Keeshond klein / Dwergkees / Pomeriaan (<5kg)", price: "€ 60" },
  { breed: "Keeshond middel", price: "€ 65" },
  { breed: "Kerry blue terrier", price: "€ 100" },
  { breed: "Kooikerhondje", price: "€ 60" },
  { breed: "Laekense herder", price: "€ 75" },
  { breed: "Labradoedel klein (<10kg)", price: "€ 75" },
  { breed: "Labradoedel middel (10-20kg)", price: "€ 100" },
  { breed: "Labradoedel groot (>20kg)", price: "€ 120" },
  { breed: "Labrador retriever", price: "€ 60" },
  { breed: "Lhasa apso", price: "€ 70" },
  { breed: "Maltezer", price: "€ 65" },
  { breed: "Mini Maltezer", price: "€ 50" },
  { breed: "Mechelse herder", price: "€ 60" },
  { breed: "Mini Australische herder", price: "€ 50" },
  { breed: "Mopshond", price: "€ 45" },
  { breed: "Morkie", price: "€ 55" },
  { breed: "Munsterlander", price: "€ 75" },
  { breed: "Norfolk terrier", price: "€ 80" },
  { breed: "Norwich terrier", price: "€ 80" },
  { breed: "Nova Scotia duck tolling retriever", price: "€ 70" },
  { breed: "Pekinees", price: "€ 60" },
  { breed: "Poedel groot (koningspoedel)", price: "€ 120" },
  { breed: "Poedel klein", price: "€ 70" },
  { breed: "Poedel middenslag", price: "€ 90" },
  { breed: "Poedel toy", price: "€ 70" },
  { breed: "Pomeranian / dwergkees", price: "€ 60" },
  { breed: "Powderpuff", price: "€ 55" },
  { breed: "Saluki", price: "€ 60" },
  { breed: "Samojeed", price: "€ 90" },
  { breed: "Schapendoes", price: "€ 85" },
  { breed: "Schipperke", price: "€ 55" },
  { breed: "Schnauzer dwerg", price: "€ 65" },
  { breed: "Schnauzer middel", price: "€ 80" },
  { breed: "Schnauzer riezen", price: "€ 100" },
  { breed: "Schotse collie", price: "€ 80" },
  { breed: "Schotse terrier", price: "€ 80" },
  { breed: "Sealyham terrier", price: "€ 70" },
  { breed: "Shar pei", price: "€ 60" },
  { breed: "Sheltie", price: "€ 70" },
  { breed: "Shiba inu", price: "€ 65" },
  { breed: "Shih-tzu", price: "€ 65" },
  { breed: "Siberische husky", price: "€ 75" },
  { breed: "Sky terrier", price: "€ 70" },
  { breed: "Soft coated wheaten terrier", price: "€ 70" },
  { breed: "Spaanse waterhond", price: "€ 100" },
  { breed: "Sussex spaniel", price: "€ 70" },
  { breed: "Teckel Kaninchen korthaar", price: "€ 45" },
  { breed: "Teckel Kaninchen langhaar", price: "€ 50" },
  { breed: "Teckel Kaninchen ruwhaar", price: "€ 70" },
  { breed: "Teckel Dwerg korthaar", price: "€ 45" },
  { breed: "Teckel Dwerg langhaar", price: "€ 55" },
  { breed: "Teckel Dwerg ruwhaar", price: "€ 75" },
  { breed: "Teckel Standaard korthaar", price: "€ 50" },
  { breed: "Teckel Standaard langhaar", price: "€ 60" },
  { breed: "Teckel Standaard ruwhaar", price: "€ 80" },
  { breed: "Tervuerense herder", price: "€ 75" },
  { breed: "Tibetaanse spaniel", price: "€ 55" },
  { breed: "Tibetaanse terrier", price: "€ 80" },
  { breed: "Vizsla glad", price: "€ 60" },
  { breed: "Vizsla ruw", price: "€ 80" },
  { breed: "Vlinderhondje", price: "€ 50" },
  { breed: "Weimaraner kort", price: "€ 60" },
  { breed: "Weimaraner ruw", price: "€ 85" },
  { breed: "Welsh springer spaniel", price: "€ 70" },
  { breed: "Welsh terrier", price: "€ 90" },
  { breed: "West Highland white terrier", price: "€ 65" },
  { breed: "Whippet", price: "€ 55" },
  { breed: "Wolfskeeshond", price: "€ 85" },
  { breed: "Yorkshire terrier", price: "€ 60" },
  { breed: "Zwitserse herder", price: "€ 90" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Tarieven() {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const currentDiscount = 0.15;

  useEffect(() => {
    document.title = "Tarieven – ChibiWoef";
  }, []);

  const breedsByLetter = breedPriceRows.filter(
    (row) => row.breed.charAt(0).toUpperCase() === selectedLetter,
  );

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
                              XS <br />
                              (&lt;5 kg)
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
                              S <br />
                              (5-10 kg)
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
                              M <br />
                              (10-20 kg)
                            </span>
                          </div>
                        </th>
                        <th>
                          <div className="pricing-size-head">
                            <img
                              src={DogLIcon}
                              className="pricing-size-head__icon pricing-size-head__icon--l"
                              alt=""
                              aria-hidden="true"
                            />
                            <span className="pricing-size-head__label">
                              L <br />
                              (20-30 kg)
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
                          <td>
                            <span className="pricing-price pricing-price--original">
                              {row.xs}
                            </span>
                            <span className="pricing-price pricing-price--promo">
                              {getDiscountedPrice(row.xs, currentDiscount)}
                            </span>
                          </td>
                          <td>
                            <span className="pricing-price pricing-price--original">
                              {row.s}
                            </span>
                            <span className="pricing-price pricing-price--promo">
                              {getDiscountedPrice(row.s, currentDiscount)}
                            </span>
                          </td>
                          <td>
                            <span className="pricing-price pricing-price--original">
                              {row.m}
                            </span>
                            <span className="pricing-price pricing-price--promo">
                              {getDiscountedPrice(row.m, currentDiscount)}
                            </span>
                          </td>
                          <td>
                            <span className="pricing-price pricing-price--original">
                              {row.l}
                            </span>
                            <span className="pricing-price pricing-price--promo">
                              {getDiscountedPrice(row.l, currentDiscount)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <section
                  className="breed-pricing"
                  aria-label="Prijsindicatie voor volledige trimbeurt per ras"
                >
                  <h3 className="breed-pricing__title">
                    Prijsindicatie per ras
                  </h3>
                  <p className="breed-pricing__hint">
                    Selecteer een letter om de rassen en prijzen te bekijken.
                  </p>
                  <div className="breed-pricing__letters" role="tablist">
                    {alphabet.map((letter) => {
                      const hasBreeds = breedPriceRows.some(
                        (row) => row.breed.charAt(0).toUpperCase() === letter,
                      );
                      return (
                        <button
                          key={letter}
                          type="button"
                          role="tab"
                          className={`breed-pricing__letter${selectedLetter === letter ? " is-active" : ""}`}
                          aria-selected={selectedLetter === letter}
                          aria-controls="breed-pricing-list"
                          onClick={() => setSelectedLetter(letter)}
                          disabled={!hasBreeds}
                        >
                          {letter}
                        </button>
                      );
                    })}
                  </div>
                  <div
                    className="breed-pricing__panel"
                    id="breed-pricing-list"
                    role="tabpanel"
                  >
                    {breedsByLetter.length > 0 ? (
                      <ul className="breed-pricing__grid">
                        {breedsByLetter.map((row) => (
                          <li key={row.breed} className="breed-pricing__item">
                            <span className="breed-pricing__name">
                              {row.breed}
                            </span>
                            <span className="breed-pricing__price">
                              {row.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="breed-pricing__empty">
                        Geen rassen beschikbaar voor deze letter.
                      </p>
                    )}
                  </div>
                </section>

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
                  vervilting of ongewenst gedrag vraagt dit extra tijd, daarom
                  rekenen we dan een toeslag van €25. Zo garanderen we de rust
                  en kwaliteit die uw dier verdient.
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
