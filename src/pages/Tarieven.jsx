import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PawIcon from "../assets/paw.svg";
import MobileImg from "../assets/mobile.webp";
import PugPhoneImg from "../assets/pug-phone.webp";
import TopDogImg from "../assets/sleepy.png";

const treatments = [
  {
    name: "Pawdicure",
    desc: "Nagels knippen en/of vijlen.",
    price: "€10",
  },
  {
    name: "Oren reinigen",
    desc: "Reinigen met professionele reinigingsvloeistof, voorkomt irritatie en infectie. Bij infecties verwijs ik je liever door naar de dierenarts.",
    price: "€10",
  },
  {
    name: "Tandjes poetsen",
    desc: "Fris gebit, gezonde adem.",
    price: "€10",
  },
  {
    name: "Vlooien & teken shampoo",
    desc: "Extra wasbeurt met anti-parasitaire shampoo — dit wordt automatisch aangerekend wanneer jouw woef vlooit!",
    price: "€12",
  },
  {
    name: "Ontspanningsmassage (15 min)",
    desc: "Rustgevende massage voor hond of kat — bevordering van de bloedcirculatie.",
    price: "€25",
  },
  {
    name: "Puppy gewenning",
    desc: "Eerste kennismaking in een rustige setting — gratis voor pups tot 6 maand.",
    price: "gratis",
  },
];

const breeds = [
  { ras: "Akita", variants: [{ label: "", prijs: "€120" }] },
  { ras: "Alaskan Malamute", variants: [{ label: "", prijs: "€140" }] },
  {
    ras: "Amerikaanse Cocker Spaniël",
    variants: [{ label: "Kort scheren", prijs: "€105" }],
  },
  {
    ras: "Amerikaanse Staffordshire Terriër",
    variants: [{ label: "", prijs: "€80" }],
  },
  {
    ras: "Australian Shepherd Mini",
    variants: [
      { label: "Naturel", prijs: "€90" },
      { label: "Inkorten", prijs: "€105" },
    ],
  },
  { ras: "Basset Hound", variants: [{ label: "", prijs: "€80" }] },
  { ras: "Beagle", variants: [{ label: "", prijs: "€65" }] },
  { ras: "Beauceron", variants: [{ label: "", prijs: "€90" }] },
  {
    ras: "Biewer",
    variants: [{ label: "Kort scheren · Knippen", prijs: "€75" }],
  },
  {
    ras: "Boomer",
    variants: [{ label: "Kort scheren · Knippen", prijs: "€75" }],
  },
  { ras: "Bordeaux Dog", variants: [{ label: "", prijs: "€85" }] },
  {
    ras: "Border Collie",
    variants: [
      { label: "Naturel of minder dan 3 maand", prijs: "€100" },
      { label: "Inkorten of langer dan 3 maand geleden", prijs: "€115" },
    ],
  },
  { ras: "Boxer", variants: [{ label: "", prijs: "€70" }] },
  { ras: "Bull Mastiff", variants: [{ label: "", prijs: "€85" }] },
  { ras: "Bull Terriër", variants: [{ label: "", prijs: "€75" }] },
  { ras: "Caïrn Terriër", variants: [{ label: "Scheren kort", prijs: "€75" }] },
  {
    ras: "Cavalier King Charles Spaniël",
    variants: [
      { label: "Klein of weinig vacht", prijs: "€90" },
      { label: "Groot of veel vacht", prijs: "€105" },
    ],
  },
  {
    ras: "Cavapoo",
    variants: [
      { label: "Lengte vacht tot 1 cm", prijs: "€85" },
      { label: "Van 1 tot 2 cm", prijs: "€105" },
    ],
  },
  {
    ras: "Chihuahua",
    variants: [
      { label: "Korthaar", prijs: "€45" },
      { label: "Langhaar", prijs: "€70" },
    ],
  },
  {
    ras: "Cockapoo",
    variants: [
      { label: "Lengte vacht tot 1 cm", prijs: "€100" },
      { label: "Van 1 tot 2 cm", prijs: "€125" },
    ],
  },
  { ras: "Dalmatiër", variants: [{ label: "", prijs: "€75" }] },
  { ras: "Dobermann", variants: [{ label: "", prijs: "€80" }] },
  { ras: "Duitse Dog", variants: [{ label: "", prijs: "€85" }] },
  { ras: "Duitse Dwergpincher", variants: [{ label: "", prijs: "€50" }] },
  {
    ras: "Duitse Herder",
    variants: [{ label: "Kort stokhaar", prijs: "€90" }],
  },
  { ras: "Duitse Pincher", variants: [{ label: "", prijs: "€60" }] },
  { ras: "Duitse Staander", variants: [{ label: "Korthaar", prijs: "€75" }] },
  { ras: "Engelse Bulldog", variants: [{ label: "", prijs: "€70" }] },
  {
    ras: "Engelse Cocker Spaniël",
    variants: [{ label: "Kort scheren", prijs: "€105" }],
  },
  {
    ras: "Flatcoated Retriever",
    variants: [
      { label: "Naturel", prijs: "€105" },
      { label: "Inkorten / langer dan 3 mnd", prijs: "€115" },
    ],
  },
  { ras: "Fox Terriër", variants: [{ label: "Gladhaar", prijs: "€60" }] },
  { ras: "Franse Bulldog", variants: [{ label: "", prijs: "€65" }] },
  { ras: "Friese Stabij", variants: [{ label: "", prijs: "€100" }] },
  { ras: "Galgo Espagnol", variants: [{ label: "", prijs: "€70" }] },
  {
    ras: "Golden Retriever",
    variants: [
      { label: "Naturel", prijs: "€100" },
      { label: "Inkorten of langer dan 3 maand geleden", prijs: "€115" },
    ],
  },
  { ras: "Greyhound", variants: [{ label: "", prijs: "€70" }] },
  { ras: "Hovawart", variants: [{ label: "", prijs: "€125" }] },
  {
    ras: "Jack Russell Terriër",
    variants: [{ label: "Korthaar", prijs: "€55" }],
  },
  {
    ras: "Keeshond Dwerg / Pom",
    variants: [
      { label: "Naturel + masker", prijs: "€85" },
      { label: "Inkorten + masker", prijs: "€105" },
    ],
  },
  { ras: "Keeshond Klein", variants: [{ label: "Naturel", prijs: "€85" }] },
  {
    ras: "Labradoodle Mini (< 13 kg)",
    variants: [
      { label: "Lengte vacht tot 1 cm", prijs: "€100" },
      { label: "Van 1 tot 2.5 cm", prijs: "€135" },
    ],
  },
  {
    ras: "Labradoodle Middenslag (13 – 22 kg)",
    variants: [
      { label: "Lengte vacht tot 1 cm", prijs: "€125" },
      { label: "Van 1 tot 2.5 cm", prijs: "€150" },
    ],
  },
  {
    ras: "Labradoodle Groot (v.a. 23 kg)",
    variants: [
      { label: "Lengte vacht tot 1 cm", prijs: "€135" },
      { label: "Van 1 tot 2.5 cm", prijs: "€175" },
    ],
  },
  { ras: "Labrador Retriever", variants: [{ label: "", prijs: "€75" }] },
  {
    ras: "Lagotto Romagnolo",
    variants: [{ label: "Lengte vacht tot 1 cm", prijs: "€125" }],
  },
  {
    ras: "Lhasa Apso",
    variants: [{ label: "Kort scheren · Knippen", prijs: "€75" }],
  },
  {
    ras: "Maltezer",
    variants: [{ label: "Kort scheren · Knippen", prijs: "€75" }],
  },
  {
    ras: "Maltipoo",
    variants: [
      { label: "Lengte vacht tot 1 cm", prijs: "€75" },
      { label: "Van 1 tot 2.5 cm", prijs: "€100" },
    ],
  },
  { ras: "Mastiff", variants: [{ label: "", prijs: "€85" }] },
  { ras: "Mechelse Herder", variants: [{ label: "", prijs: "€85" }] },
  { ras: "Mopshond", variants: [{ label: "", prijs: "€60" }] },
  {
    ras: "Nova Scotia Duck Tolling Retriever",
    variants: [{ label: "", prijs: "€100" }],
  },
  {
    ras: "Parson Russell Terriër",
    variants: [{ label: "Gladhaar", prijs: "€60" }],
  },
  {
    ras: "Poedel Toy (< 3 kg)",
    variants: [
      { label: "Lengte vacht tot 1 cm", prijs: "€85" },
      { label: "Van 1 tot 2.5 cm", prijs: "€100" },
    ],
  },
  {
    ras: "Poedel Dwerg",
    variants: [
      { label: "Lengte vacht tot 1 cm", prijs: "€95" },
      { label: "Van 1 tot 2.5 cm", prijs: "€110" },
    ],
  },
  {
    ras: "Poedel Middenslag",
    variants: [{ label: "Lengte vacht tot 1 cm", prijs: "€105" }],
  },
  {
    ras: "Poedel Groot (Koningspoedel)",
    variants: [{ label: "Lengte vacht tot 1 cm", prijs: "€125" }],
  },
  { ras: "Rhodesian Ridgeback", variants: [{ label: "", prijs: "€80" }] },
  { ras: "Rottweiler", variants: [{ label: "", prijs: "€95" }] },
  {
    ras: "Schotse Collie",
    variants: [
      { label: "Korthaar", prijs: "€85" },
      { label: "Langhaar", prijs: "€130" },
    ],
  },
  {
    ras: "Shetland Sheepdog (Sheltie)",
    variants: [{ label: "", prijs: "€90" }],
  },
  { ras: "Shiba", variants: [{ label: "", prijs: "€75" }] },
  { ras: "Shih Tzu", variants: [{ label: "Kort scheren", prijs: "€75" }] },
  { ras: "Siberische Husky", variants: [{ label: "", prijs: "€115" }] },
  { ras: "Sint-Bernard", variants: [{ label: "Korthaar", prijs: "€115" }] },
  {
    ras: "Spaanse Waterhond",
    variants: [{ label: "Lengte vacht tot 1 cm", prijs: "€125" }],
  },
  {
    ras: "Staffordshire Bull Terriër",
    variants: [{ label: "", prijs: "€75" }],
  },
  {
    ras: "Teckel Kaninchen",
    variants: [
      { label: "Korthaar", prijs: "€55" },
      { label: "Langhaar", prijs: "€70" },
    ],
  },
  {
    ras: "Teckel Dwerg",
    variants: [
      { label: "Korthaar", prijs: "€60" },
      { label: "Langhaar", prijs: "€75" },
    ],
  },
  {
    ras: "Teckel Standaard",
    variants: [
      { label: "Korthaar", prijs: "€65" },
      { label: "Langhaar", prijs: "€85" },
    ],
  },
  {
    ras: "Tibetaanse Terriër",
    variants: [{ label: "Kort scheren", prijs: "€95" }],
  },
  { ras: "Vizsla", variants: [{ label: "Gladhaar", prijs: "€75" }] },
  { ras: "Weimaraner", variants: [{ label: "Korthaar", prijs: "€75" }] },
  { ras: "Welsh Corgi Cardigan", variants: [{ label: "", prijs: "€80" }] },
  { ras: "Welsh Corgi Pembroke", variants: [{ label: "", prijs: "€80" }] },
  {
    ras: "West Highland White Terriër",
    variants: [{ label: "Scheren kort", prijs: "€75" }],
  },
  { ras: "Whippet", variants: [{ label: "", prijs: "€55" }] },
  {
    ras: "Yorkshire Terriër",
    variants: [{ label: "Kort scheren", prijs: "€75" }],
  },
  {
    ras: "Zwitserse Witte Herdershond",
    variants: [{ label: "Kortharig", prijs: "€90" }],
  },
];

export default function Tarieven() {
  const [query, setQuery] = useState("");

  const filteredBreeds = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return breeds;
    return breeds.filter(
      (b) =>
        b.ras.toLowerCase().includes(q) ||
        b.variants.some((v) => v.label.toLowerCase().includes(q)),
    );
  }, [query]);
  return (
    <main>
      <div className="page-hero">
        <span className="badge">Prijslijst 2026</span>
        <h1 className="page-hero__title">Tarieven</h1>
        <p className="page-hero__sub">
          Prijzen zijn richtprijzen en kunnen variëren op basis van
          vachtconditie, ras en temperament. Definitieve prijs na gratis
          vachtinspectie bij aankomst.
        </p>
      </div>

      <section className="tarieven">
        <div className="container">
          <div className="menu-wrap">
            <div className="menu-block">
              <div className="menu-block__head">
                <h2 className="menu-block__title">Losse behandelingen</h2>
                <p className="menu-block__sub">
                  Apart in te plannen of toe te voegen aan elke beurt
                </p>
              </div>
              <div className="box-white">
                <div className="menu-top-dog">
                  <img src={TopDogImg} alt="" className="top-dog__img" />
                </div>
                <ul className="menu-list">
                  {treatments.map((b) => (
                    <li className="menu-row menu-row--treatment" key={b.name}>
                      <img
                        src={PawIcon}
                        className="menu-row__paw"
                        alt=""
                        aria-hidden="true"
                      />
                      <div className="menu-row__body">
                        <span className="menu-row__name">{b.name}</span>
                        <span className="menu-row__desc">{b.desc}</span>
                      </div>
                      <span>{b.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="menu-block">
              <div className="menu-block__head">
                <h2 className="menu-block__title">Prijzen per ras</h2>
                <p className="menu-block__sub">
                  Richtprijzen voor een volledige trimbeurt · incl. 21% BTW
                </p>
              </div>

              <div>
                <p className="box-yellow__label">
                  Inbegrepen bij elke trimbeurt
                </p>
                <p className="box-yellow__items">
                  Borstelen · Ontwollen · Verwijderen dode haren · Wassen
                  (diepreinigende + verzorgende shampoo + conditioner) · Föhnen
                  en volledig drogen · Reinigen oren en ogen · Nagels knippen ·
                  Scheren overvloedig haar tussen voetzolen en onderbuik ·
                  Knippen / scheren
                </p>
              </div>

              <div className="box-white breed-wrap">
                <div className="breed-search-wrap">
                  <div className="bone-wrap">
                    <input
                      type="search"
                      className="breed-search"
                      placeholder="Ras zoeken…"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      aria-label="Zoek op ras"
                    />
                  </div>
                  {filteredBreeds.length === 0 && (
                    <p className="breed-no-result">
                      Geen resultaten voor &ldquo;{query}&rdquo;. Neem contact
                      op voor een offerte op maat.
                    </p>
                  )}
                </div>

                {filteredBreeds.length > 0 && (
                  <div className="breed-grid">
                    {filteredBreeds.map((b, i) => {
                      const prices = [
                        ...new Set(b.variants.map((v) => v.prijs)),
                      ].join(" / ");
                      const labels = b.variants
                        .filter((v) => v.label)
                        .map((v) => v.label)
                        .join(" / ");
                      return (
                        <div className="breed-card" key={i}>
                          <div className="breed-card__info">
                            <span className="breed-card__name">{b.ras}</span>
                            {labels && (
                              <span className="breed-card__variants">
                                {labels}
                              </span>
                            )}
                          </div>
                          <span className="breed-card__price">{prices}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <p className="menu-block__note">
                Staat jouw woef er niet bij? Contacteer mij gerust voor een
                persoonlijke prijsopgave. <br />
                Kruisingen worden ingedeeld volgens grootte en vachtsoort.
              </p>
            </div>

            {/* CTA */}
            <div
              className="cta-banner"
              style={{ backgroundImage: `url(${PugPhoneImg})` }}
            >
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
