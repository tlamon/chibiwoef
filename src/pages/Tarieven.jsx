import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PawIcon from "../assets/paw.svg";
import MobileImg from "../assets/mobile.webp";
import TopDogImg from "../assets/sleepy.png";
import DogXsIcon from "../assets/dog-xs.svg";
import DogSIcon from "../assets/dog-s.svg";
import DogMIcon from "../assets/dog-m.svg";
import DogLIcon from "../assets/dog-l.svg";
import DoggyBackIcon from "../assets/doggy-back-icon.webp";
import CatIcon from "../assets/cat-icon.png";
import KittieStareImg from "../assets/kittie-stare.png";

const treatments = [
  {
    name: "Was & Splash",
    page: "/diensten/was-en-splash",
    price: "€ 40 – € 65",
  },
  {
    name: "Tussentijdse borstel- & kambeurt (±30 min)",
    page: "/diensten/kambeurt",
    price: "€ 20 - € 45",
  },
  {
    name: "Pawdicure",
    price: "€ 10",
  },
  {
    name: "Oren reinigen en/of plukken",
    price: "€ 8",
  },
  {
    name: "Trimbeurt katten ♔",
    page: "/diensten/trimbeurt-katten",
    price: "€ 40 – € 55",
  },
  {
    name: "Ontspanningsmassage (20-30 min)",
    page: "/diensten/ontspanningsmassage",
    price: "€ 25",
  },
  {
    name: "Standaard gewenning (15-30 min)",
    page: "/diensten/gewenning",
    price: "€ 15 - € 30",
  },
  {
    name: "Vlooien & teken behandeling",
    price: "+ € 25",
  },
  {
    name: "Puppy gewenning – Deel 1: Meet & Greet (15-20 min)",
    page: "/diensten/puppy-gewenning",
    price: "€ 15",
  },
  {
    name: "Puppy gewenning – Deel 2: Was & Splash (+/- 60 min)",
    page: "/diensten/puppy-gewenning",
    price: "€ 35 - € 50",
  },
  {
    name: "Puppy gewenning – Deel 3: Eerste trimbeurt",
    page: "/diensten/puppy-gewenning",
    price: "Standaardprijs (-€ 15 korting)",
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
    s: "€ 75",
    m: "€ 85",
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
    note: "Ambachtelijk handmatig plukwerk, wassen & drogen, nagels knippen en oren reinigen. Arbeidsintensieve rassen (Airedale, Kerry Blue, Ierse terrier…): € 90 – € 130",
    xs: "€ 65",
    s: "€ 70",
    m: "€ 80",
    l: "€ 90",
  },
];

const formatEuro = (amount) => `€ ${amount}`;

const parseEuro = (price) => Number(price.replace(/[^\d]/g, ""));

const getDiscountedPrice = (price, discount) => {
  const discountedAmount = parseEuro(price) * (1 - discount);
  return formatEuro(Math.round(discountedAmount / 5) * 5);
};

// handles single prices and ranges like "€ 75 – € 95"
const getDiscountedBreedPrice = (price, discount) => {
  if (!price || !/\d/.test(price)) return null;
  if (price.includes("–")) {
    const [lo, hi] = price.split("–").map((p) => p.trim());
    return `${getDiscountedPrice(lo, discount)} – ${getDiscountedPrice(hi, discount)}`;
  }
  return getDiscountedPrice(price, discount);
};

const breedPriceRows = [
  { breed: "Affenpinscher", coat: "Ruwharig", price: "€ 60" },
  { breed: "Afgaanse windhond", coat: "Langhaar/Bevedering", price: "€ 100" },
  { breed: "Airedale terrier", coat: "Ruwharig", price: "€ 130" },
  { breed: "Amerikaanse Bulldog", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Amerikaanse cocker", coat: "Langhaar/Bevedering", price: "€ 100" },
  {
    breed: "Amerikaanse Staffordshire terrier",
    coat: "Korthaar/glad",
    price: "€ 60",
  },
  { breed: "Australische herder", coat: "Dubbele vacht", price: "€ 75" },
  { breed: "Australische herder mini", coat: "Dubbele vacht", price: "€ 65" },
  { breed: "Australische terrier", coat: "Ruwharig", price: "€ 60" },
  { breed: "Basenji", coat: "Korthaar/glad", price: "€ 55" },
  { breed: "Basset fauve de Bretagne", coat: "Ruwharig", price: "€ 75" },
  { breed: "Basset hound", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Beagle", coat: "Korthaar/glad", price: "€ 55" },
  { breed: "Bearded collie", coat: "Langhaar/Bevedering", price: "€ 90" },
  { breed: "Bedlington terrier", coat: "Krul / fleece", price: "€ 70" },
  { breed: "Bichon frise", coat: "Krul / fleece", price: "€ 70 – € 85" },
  { breed: "Boemer", coat: "Korthaar/glad", price: "€ 55" },
  { breed: "Border collie", coat: "Dubbele vacht", price: "€ 65" },
  { breed: "Border terrier", coat: "Ruwharig", price: "€ 70" },
  { breed: "Boston terrier", coat: "Korthaar/glad", price: "€ 45" },
  { breed: "Boxer", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Bulldog Amerikaans", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Bulldog Frans / Frenchy", coat: "Korthaar/glad", price: "€ 55" },
  { breed: "Bulldog Engels", coat: "Korthaar/glad", price: "€ 55" },
  { breed: "Bull terrier", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Cairn terrier", coat: "Ruwharig", price: "€ 70" },
  {
    breed: "Cavalier King Charles",
    coat: "Langhaar/Bevedering",
    price: "€ 65",
  },
  { breed: "Cavapoo", coat: "Krul / fleece", price: "€ 75 – € 95" },
  { breed: "Chihuahua korthaar", coat: "Korthaar/glad", price: "€ 45" },
  { breed: "Chihuahua langhaar", coat: "Langhaar/Bevedering", price: "€ 50" },
  { breed: "Chinese naakthond", coat: "Korthaar/glad", price: "€ 45" },
  { breed: "Clumber spaniel", coat: "Langhaar/Bevedering", price: "€ 70" },
  { breed: "Cockapoo", coat: "Krul / fleece", price: "€ 75 – € 95" },
  {
    breed: "Cocker Spaniel (Engels)",
    coat: "Langhaar/Bevedering met plukvacht",
    price: "€ 80",
    page: "/rassen/engelse-cocker-spaniel",
  },
  { breed: "Corgi", coat: "Dubbele vacht", price: "€ 55" },
  { breed: "Coton de tulear", coat: "Langhaar/Bevedering", price: "€ 70" },
  { breed: "Dalmatier", coat: "Korthaar/glad", price: "€ 60" },
  {
    breed: "Doodle klein (<10kg)",
    coat: "Krul / fleece",
    price: "€ 75 – € 95",
  },
  {
    breed: "Doodle middel (10-20kg)",
    coat: "Krul / fleece",
    price: "€ 100 – € 105",
  },
  {
    breed: "Doodle groot (>20kg)",
    coat: "Krul / fleece",
    price: "€ 100 – € 120",
  },
  {
    breed: "Drentsche patrijshond",
    coat: "Langhaar/Bevedering",
    price: "€ 70",
  },
  { breed: "Duitse jacht terrier glad", coat: "Korthaar/glad", price: "€ 65" },
  { breed: "Duitse jacht terrier ruw", coat: "Ruwharig", price: "€ 80" },
  { breed: "Duitse staande hond glad", coat: "Korthaar/glad", price: "€ 65" },
  { breed: "Duitse staande hond ruw", coat: "Ruwharig", price: "€ 90" },
  { breed: "Dwergkees / Pomeriaan", coat: "Dubbele vacht", price: "€ 60" },
  { breed: "Dwergpinscher", coat: "Korthaar/glad", price: "€ 45" },
  { breed: "Engelse Bulldog", coat: "Korthaar/glad", price: "€ 55" },
  {
    breed: "Engelse Cocker Spaniel",
    coat: "Langhaar/Bevedering",
    price: "€ 80",
    page: "/rassen/engelse-cocker-spaniel",
  },
  { breed: "Engelse setter", coat: "Langhaar/Bevedering", price: "€ 80" },
  {
    breed: "Engelse Springer Spaniel",
    coat: "Langhaar/Bevedering",
    price: "€ 85",
  },
  { breed: "Finse spits", coat: "Dubbele vacht", price: "€ 60" },
  {
    breed: "Flatcoated retriever",
    coat: "Langhaar/Bevedering",
    price: "€ 75",
    page: "/rassen/flat-coated-retriever",
  },
  { breed: "Franse Bulldog", coat: "Korthaar/glad", price: "€ 55" },
  { breed: "Fox terrier glad", coat: "Korthaar/glad", price: "€ 50" },
  { breed: "Fox terrier ruw", coat: "Ruwharig", price: "€ 85" },
  { breed: "Friese stabij", coat: "Langhaar/Bevedering", price: "€ 70" },
  { breed: "Galgo", coat: "Korthaar/glad", price: "€ 60" },
  {
    breed: "Golden retriever",
    coat: "Dubbele vacht met bevedering",
    price: "€ 75 ",
    page: "/rassen/golden-retriever",
  },
  { breed: "Gordon setter", coat: "Langhaar/Bevedering", price: "€ 85" },
  { breed: "Grand Basset Griffon Vendeen", coat: "Ruwharig", price: "€ 70" },
  { breed: "Griffon", coat: "Ruwharig", price: "€ 60" },
  { breed: "Griffon ruwharig", coat: "Ruwharig", price: "€ 70" },
  { breed: "Groenendaler", coat: "Langhaar/Bevedering", price: "€ 75" },
  { breed: "Havanezer", coat: "Langhaar/Bevedering", price: "€ 70" },
  { breed: "Heidewachtel", coat: "Ruwharig", price: "€ 70" },
  {
    breed: "Hollandse herder lang",
    coat: "Langhaar/Bevedering",
    price: "€ 70",
  },
  { breed: "Hollandse herder ruw", coat: "Ruwharig", price: "€ 80" },
  { breed: "Hovawart", coat: "Langhaar/Bevedering", price: "€ 75" },
  { breed: "Husky", coat: "Dubbele vacht", price: "€ 80" },
  {
    breed: "Ierse setter",
    coat: "Langhaar/Bevedering",
    price: "€ 80",
  },
  { breed: "Ierse terrier", coat: "Ruwharig", price: "€ 90" },
  { breed: "Italiaans windhondje", coat: "Korthaar/glad", price: "€ 45" },
  { breed: "Jack Russell terrier kort", coat: "Korthaar/glad", price: "€ 45" },
  { breed: "Jack Russell terrier ruw", coat: "Ruwharig", price: "€ 70" },
  { breed: "Japanse spaniel", coat: "Langhaar/Bevedering", price: "€ 55" },
  {
    breed: "Keeshond klein / Dwergkees / Pomeriaan (<5kg)",
    coat: "Dubbele vacht",
    price: "€ 60",
  },
  { breed: "Keeshond middel", coat: "Dubbele vacht", price: "€ 65" },
  { breed: "Kerry blue terrier", coat: "Krul / fleece", price: "€ 100" },
  { breed: "Kooikerhondje", coat: "Langhaar/Bevedering", price: "€ 60" },
  { breed: "Laekense herder", coat: "Ruwharig", price: "€ 75" },
  {
    breed: "Labradoedel klein (<10kg)",
    coat: "Krul / fleece",
    price: "€ 75 – € 95",
  },
  {
    breed: "Labradoedel middel (10-20kg)",
    coat: "Krul / fleece",
    price: "€ 100 – € 105",
  },
  {
    breed: "Labradoedel groot (>20kg)",
    coat: "Krul / fleece",
    price: "€ 100 – € 120",
  },
  {
    breed: "Labrador retriever",
    coat: "Dubbele vacht/kort",
    price: "€ 60",
    page: "/rassen/labrador-retriever",
  },
  { breed: "Lhasa apso", coat: "Langhaar/Bevedering", price: "€ 70" },
  { breed: "Maltezer", coat: "Langhaar/Bevedering", price: "€ 65" },
  { breed: "Mini Maltezer", coat: "Langhaar/Bevedering", price: "€ 50" },
  { breed: "Mechelse herder", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Mini Australische herder", coat: "Dubbele vacht", price: "€ 50" },
  { breed: "Mopshond", coat: "Korthaar/glad", price: "€ 45" },
  { breed: "Morkie", coat: "Langhaar/Bevedering", price: "€ 55" },
  { breed: "Munsterlander", coat: "Langhaar/Bevedering", price: "€ 75" },
  { breed: "Norfolk terrier", coat: "Ruwharig", price: "€ 80" },
  { breed: "Norwich terrier", coat: "Ruwharig", price: "€ 80" },
  {
    breed: "Nova Scotia duck tolling retriever",
    coat: "Dubbele vacht",
    price: "€ 70",
    page: "/rassen/nova-scotia-duck-tolling-retriever",
  },
  { breed: "Pekinees", coat: "Langhaar/Bevedering", price: "€ 60" },
  {
    breed: "Poedel groot (koningspoedel)",
    coat: "Krul / fleece",
    price: "€ 100 – € 120",
  },
  { breed: "Poedel klein", coat: "Krul / fleece", price: "€ 75 – € 95" },
  { breed: "Poedel middenslag", coat: "Krul / fleece", price: "€ 85 – € 105" },
  { breed: "Poedel toy", coat: "Krul / fleece", price: "€ 70 – € 85" },
  { breed: "Pomeranian / dwergkees", coat: "Dubbele vacht", price: "€ 60" },
  { breed: "Powderpuff", coat: "Langhaar/Bevedering", price: "€ 55" },
  { breed: "Saluki", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Samojeed", coat: "Dubbele vacht", price: "€ 90" },
  { breed: "Schapendoes", coat: "Langhaar/Bevedering", price: "€ 85" },
  { breed: "Schipperke", coat: "Dubbele vacht", price: "€ 55" },
  { breed: "Schnauzer dwerg", coat: "Ruwharig", price: "€ 65" },
  { breed: "Schnauzer middel", coat: "Ruwharig", price: "€ 80" },
  { breed: "Schnauzer riezen", coat: "Ruwharig", price: "€ 100" },
  { breed: "Schotse collie", coat: "Langhaar/Bevedering", price: "€ 80" },
  { breed: "Schotse terrier", coat: "Ruwharig", price: "€ 80" },
  { breed: "Sealyham terrier", coat: "Ruwharig", price: "€ 70" },
  { breed: "Shar pei", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Sheltie", coat: "Dubbele vacht", price: "€ 70" },
  { breed: "Shiba inu", coat: "Dubbele vacht", price: "€ 65" },
  { breed: "Shih-tzu", coat: "Langhaar/Bevedering", price: "€ 65" },
  { breed: "Siberische husky", coat: "Dubbele vacht", price: "€ 80" },
  { breed: "Sky terrier", coat: "Langhaar/Bevedering", price: "€ 70" },
  { breed: "Soft coated wheaten terrier", coat: "Ruwharig", price: "€ 70" },
  { breed: "Spaanse waterhond", coat: "Krul / fleece", price: "€ 85 – € 105" },
  { breed: "Sussex spaniel", coat: "Langhaar/Bevedering", price: "€ 70" },
  { breed: "Teckel Kaninchen korthaar", coat: "Korthaar/glad", price: "€ 45" },
  {
    breed: "Teckel Kaninchen langhaar",
    coat: "Langhaar/Bevedering",
    price: "€ 50",
  },
  { breed: "Teckel Kaninchen ruwhaar", coat: "Ruwharig", price: "€ 70" },
  { breed: "Teckel Dwerg korthaar", coat: "Korthaar/glad", price: "€ 45" },
  {
    breed: "Teckel Dwerg langhaar",
    coat: "Langhaar/Bevedering",
    price: "€ 55",
  },
  { breed: "Teckel Dwerg ruwhaar", coat: "Ruwharig", price: "€ 75" },
  { breed: "Teckel Standaard korthaar", coat: "Korthaar/glad", price: "€ 50" },
  {
    breed: "Teckel Standaard langhaar",
    coat: "Langhaar/Bevedering",
    price: "€ 60",
  },
  { breed: "Teckel Standaard ruwhaar", coat: "Ruwharig", price: "€ 80" },
  { breed: "Tervuerense herder", coat: "Langhaar/Bevedering", price: "€ 75" },
  { breed: "Tibetaanse spaniel", coat: "Langhaar/Bevedering", price: "€ 55" },
  { breed: "Tibetaanse terrier", coat: "Langhaar/Bevedering", price: "€ 80" },
  { breed: "Vizsla glad", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Vizsla ruw", coat: "Ruwharig", price: "€ 80" },
  { breed: "Vlinderhondje", coat: "Langhaar/Bevedering", price: "€ 50" },
  { breed: "Weimaraner kort", coat: "Korthaar/glad", price: "€ 60" },
  { breed: "Weimaraner ruw", coat: "Ruwharig", price: "€ 85" },
  {
    breed: "Welsh springer spaniel",
    coat: "Langhaar/Bevedering",
    price: "€ 70",
  },
  { breed: "Welsh terrier", coat: "Ruwharig", price: "€ 90" },
  { breed: "West Highland white terrier", coat: "Ruwharig", price: "€ 65" },
  { breed: "Whippet", coat: "Korthaar/glad", price: "€ 55" },
  { breed: "Wolfskeeshond", coat: "Dubbele vacht", price: "€ 85" },
  { breed: "Yorkshire terrier", coat: "Langhaar/Bevedering", price: "€ 60" },
  { breed: "Zwitserse herder", coat: "Dubbele vacht", price: "€ 90" },
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
                  <h2>Prijslijst Honden</h2>
                </div>

                <div className="content-block__head">
                  <p className="content-block__sub">
                    Richtprijzen incl. 21% BTW. De definitieve prijs hangt af
                    van de vachtconditie en het gedrag. Bekijk ook de{" "}
                    <u>
                      <a href="#rassentabel">rassentabel onderaan</a>
                    </u>{" "}
                    om een beter idee te krijgen van de prijzen. Voorlopig
                    werken we met dieren tot en met een gewicht van 30 kg.
                  </p>
                  <div className="pricing-promo">
                    <p className="pricing-promo__item pricing-promo__item--current">
                      Opstartactie september t.e.m. november 2026:
                      <strong>
                        15% kennismakingskorting op alle trimbeurten!
                      </strong>
                    </p>
                    <p className="pricing-promo__item pricing-promo__item--next">
                      December 2026 t.e.m. februari 2027:
                      <strong>10% opstartkorting op alle trimbeurten!</strong>
                    </p>
                  </div>

                  <p className="pricing-note">
                    Niet zeker welke vacht jouw hond heeft?{" "}
                    <a
                      href="#rassentabel"
                      style={{ textDecoration: "underline" }}
                    >
                      Bekijk de rassentabel
                    </a>{" "}
                    of{" "}
                    <Link to="/contact" style={{ textDecoration: "underline" }}>
                      geef een seintje
                    </Link>
                    .
                  </p>
                </div>
                <p className="table-scroll-hint" aria-hidden="true">
                  ← veeg om meer te zien →
                </p>
                <div className="pricing-table-wrap">
                  <table className="pricing-table">
                    <thead>
                      <tr>
                        <th>
                          <div style={{ textAlign: "left" }}>
                            <Link
                              to="/diensten/trimbeurt-honden"
                              style={{
                                color: "var(--teal-dark)",
                                textDecoration: "underline",
                                textUnderlineOffset: "3px",
                              }}
                            >
                              Trimbeurt honden
                            </Link>{" "}
                            <small
                              style={{
                                fontWeight: "normal",
                                color: "var(--muted)",
                              }}
                            >
                              (prijsindicatie)
                            </small>
                            <small
                              className="treatment-row__desc"
                              style={{ display: "block", fontWeight: "normal" }}
                            >
                              Knippen, scheren, plukken, wassen, drogen, nagels
                              knippen &amp; oren reinigen
                            </small>
                          </div>
                        </th>
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

                {/* mobile-only card grid — hidden on desktop via CSS */}
                <div className="pricing-cards-mobile">
                  {pricingRows.map((row) => (
                    <div key={row.coatType} className="pricing-card-mobile">
                      <p className="pricing-card-mobile__title">
                        {row.coatType}
                      </p>
                      {[
                        { label: "XS  (<5 kg)", orig: row.xs },
                        { label: "S   (5–10 kg)", orig: row.s },
                        { label: "M   (10–20 kg)", orig: row.m },
                        { label: "L   (20–30 kg)", orig: row.l },
                      ].map(({ label, orig }) => (
                        <div key={label} className="pricing-card-mobile__row">
                          <span className="pricing-card-mobile__label">
                            {label}
                          </span>
                          <span>
                            <span className="pricing-price pricing-price--original">
                              {orig}
                            </span>
                            <span className="pricing-price pricing-price--promo">
                              {getDiscountedPrice(orig, currentDiscount)}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <h3
                  className="breed-pricing__title"
                  style={{ marginTop: "32px" }}
                >
                  Andere behandelingen
                </h3>
                <ul className="treatment-list">
                  {treatments.map((b) => (
                    <li
                      className={`treatment-row treatment-row--service${
                        b.name.startsWith("Puppy gewenning")
                          ? " treatment-row--full"
                          : ""
                      }`}
                      key={b.name}
                    >
                      <img
                        src={PawIcon}
                        className="treatment-row__icon"
                        alt=""
                        aria-hidden="true"
                      />
                      <span className="treatment-row__title">
                        {b.page ? <Link to={b.page}>{b.name}</Link> : b.name}
                      </span>
                      <span className="treatment-row__price">{b.price}</span>
                    </li>
                  ))}
                </ul>

                <section
                  className="breed-pricing"
                  aria-label="Prijsindicatie voor volledige trimbeurt per ras"
                >
                  <div style={{ justifyItems: "center", marginTop: "12px" }}>
                    <img
                      src={DoggyBackIcon}
                      alt=""
                      aria-hidden="true"
                      style={{ height: "80px", width: "auto" }}
                    />
                  </div>
                  <h3 className="breed-pricing__title">
                    Rassentabel - Prijsindicatie per ras
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
                              {row.page ? (
                                <Link
                                  to={row.page}
                                  className="breed-pricing__page-link"
                                  title="Trimgids"
                                >
                                  {row.breed}
                                </Link>
                              ) : (
                                row.breed
                              )}

                              {row.coat && (
                                <small className="breed-pricing__coat">
                                  {row.coat}
                                </small>
                              )}
                            </span>
                            <span className="breed-pricing__price">
                              <span className="pricing-price pricing-price--original">
                                {row.price}
                              </span>
                              <span className="pricing-price pricing-price--promo">
                                {getDiscountedBreedPrice(
                                  row.price,
                                  currentDiscount,
                                )}
                              </span>
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
              </div>
              {/* end box-white honden */}

              <div className="box-white">
                <div style={{ justifyItems: "center", position: "relative" }}>
                  <img
                    src={KittieStareImg}
                    alt=""
                    aria-hidden="true"
                    className="top-cat__img"
                  />
                  <div style={{ margin: "20px 0" }}>
                    <h2>Prijslijst katten</h2>
                  </div>
                </div>
                <p className="table-scroll-hint" aria-hidden="true">
                  ← veeg om meer te zien →
                </p>
                <div className="pricing-table-wrap pricing-table-wrap--always-visible">
                  <table className="pricing-table">
                    <thead>
                      <tr>
                        <th>
                          <div style={{ textAlign: "left" }}>
                            <Link
                              to="/diensten/trimbeurt-katten"
                              style={{
                                color: "var(--teal-dark)",
                                textDecoration: "underline",
                                textUnderlineOffset: "3px",
                              }}
                            >
                              Trimbeurt katten ♔
                            </Link>{" "}
                            <small
                              style={{
                                fontWeight: "normal",
                                color: "var(--muted)",
                              }}
                            >
                              (prijsindicatie)
                            </small>
                          </div>
                        </th>
                        <th style={{ textAlign: "center" }}>Prijs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          type: "Korthaar",
                          note: "± 30–45 min · Europese korthaar, Britse korthaar, Siamees…",
                          price: "€ 40",
                        },
                        {
                          type: "Langhaar",
                          note: "± 45–60 min · Maine Coon, Ragdoll, Pers, Noorse boskat…",
                          price: "€ 50",
                        },
                        {
                          type: "Lion cut",
                          note: "± 30–45 min · enkel bij extreme klitten of op aanvraag",
                          price: "€ 55",
                        },
                      ].map((row) => (
                        <tr key={row.type}>
                          <td>
                            <span className="treatment-row__title">
                              {row.type}
                            </span>
                            <span className="treatment-row__desc">
                              {row.note}
                            </span>
                          </td>
                          <td>
                            <span className="pricing-price pricing-price--original">
                              {row.price}
                            </span>
                            <span className="pricing-price pricing-price--promo">
                              {getDiscountedPrice(row.price, currentDiscount)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ justifySelf: "right", marginTop: "12px" }}>
                  <img
                    src={CatIcon}
                    alt=""
                    aria-hidden="true"
                    style={{ height: "80px", width: "auto" }}
                  />
                </div>
              </div>
              {/* end box-white katten */}

              <div className="box-white box-white--info">
                <p className="box-white__label">
                  Goed om te weten: Scope & Rust
                </p>
                <p className="box-white__items">
                  De bovenstaande tabellen dienen als richtlijn voor
                  honden/katten met een goed onderhouden vacht. Bij extreme
                  klitten, vervilting of ongewenst gedrag vraagt dit extra tijd,
                  daarom rekenen we dan een toeslag van €25. Zo garanderen we de
                  rust en kwaliteit die uw dier verdient.
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
