import { useEffect, useState } from "react";
import PawIcon from "../assets/paw.svg";
import MobileImg from "../assets/mobile.webp";
import TopDogImg from "../assets/sleepy.png";

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
    price: "€ 45",
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

const breedPriceRows = [
  { breed: "Affenpinscher", price: "€ 60" },
  { breed: "Afgaanse windhond", price: "€ 100" },
  { breed: "Airedale terrier", price: "€ 130" },
  { breed: "Amerikaanse Bulldog", price: "€ 60" },
  { breed: "Amerikaanse cocker", price: "€ 100" },
  { breed: "Amerikaanse Staffordshire terrier", price: "€ 60" },
  { breed: "Australische herder", price: "€ 75" },
  { breed: "Australische terrier", price: "€ 60" },
  { breed: "Barzoi", price: "€ 76" },
  { breed: "Basenji", price: "€ 55" },
  { breed: "Basset fauve de Bretagne", price: "€ 75" },
  { breed: "Basset hound", price: "€ 60" },
  { breed: "Beagle", price: "€ 55" },
  { breed: "Bearded collie", price: "€ 90" },
  { breed: "Bedlington terrier", price: "€ 70" },
  { breed: "Bichon frise", price: "€ 70" },
  { breed: "Boemer", price: "€ 55" },
  { breed: "Border collie", price: "€ 75" },
  { breed: "Border terrier", price: "€ 70" },
  { breed: "Boston terrier", price: "€ 45" },
  { breed: "Boxer", price: "€ 65" },
  { breed: "Bulldog Amerikaans", price: "€ 60" },
  { breed: "Bulldog Frans / Frenchy", price: "€ 55" },
  { breed: "Bulldog Engels", price: "€ 55" },
  { breed: "Bull terrier", price: "€ 50" },
  { breed: "Cairn terrier", price: "€ 70" },
  { breed: "Cavalier King Charles", price: "€ 70" },
  { breed: "Cavapoo", price: "€ 70" },
  { breed: "Chihuahua korthaar", price: "€ 50" },
  { breed: "Chihuahua langhaar", price: "€ 55" },
  { breed: "Chinese naakthond", price: "€ 45" },
  { breed: "Clumber spaniel", price: "€ 70" },
  { breed: "Cockapoo", price: "€ 90" },
  { breed: "Corgi", price: "€ 55" },
  { breed: "Coton de tulear", price: "€ 70" },
  { breed: "Dalmatier", price: "€ 65" },
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
  { breed: "Galgo", price: "€ 55" },
  { breed: "Golden retriever", price: "€ 80" },
  { breed: "Gordon setter", price: "€ 85" },
  { breed: "Grand Basset Griffon Vendeen", price: "€ 70" },
  { breed: "Griffon", price: "€ 60" },
  { breed: "Griffon ruwharig", price: "€ 80" },
  { breed: "Groenendaler", price: "€ 75" },
  { breed: "Havanezer", price: "€ 70" },
  { breed: "Heidewachtel", price: "€ 70" },
  { breed: "Hollandse herder lang", price: "€ 70" },
  { breed: "Hollandse herder ruw", price: "€ 80" },
  { breed: "Hovawart", price: "€ 80" },
  { breed: "Husky", price: "€ 80" },
  { breed: "Ierse setter", price: "€ 80" },
  { breed: "Ierse terrier", price: "€ 90" },
  { breed: "Italiaans windhondje", price: "€ 45" },
  { breed: "Jack Russell terrier kort", price: "€ 45" },
  { breed: "Jack Russell terrier ruw", price: "€ 80" },
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
  { breed: "Mechelse herder", price: "€ 65" },
  { breed: "Mini Australische herder", price: "€ 50" },
  { breed: "Mini Maltezer", price: "€ 50" },
  { breed: "Mopshond", price: "€ 45" },
  { breed: "Morkie", price: "€ 55" },
  { breed: "Munsterlander", price: "€ 75" },
  { breed: "Norfolk terrier", price: "€ 80" },
  { breed: "Norwich terrier", price: "€ 80" },
  { breed: "Nova Scotia duck tolling retriever", price: "€ 70" },
  { breed: "Otterhound", price: "€ 76" },
  { breed: "Pekinees", price: "€ 60" },
  { breed: "Poedel groot (koningspoedel)", price: "€ 122" },
  { breed: "Poedel klein", price: "€ 70" },
  { breed: "Poedel middenslag", price: "€ 90" },
  { breed: "Poedel toy", price: "€ 70" },
  { breed: "Pomeranian / dwergkees", price: "€ 60" },
  { breed: "Powderpuff", price: "€ 56" },
  { breed: "Saluki", price: "€ 65" },
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
  { breed: "Siberische husky", price: "€ 80" },
  { breed: "Sky terrier", price: "€ 70" },
  { breed: "Soft coated wheaten terrier", price: "€ 70" },
  { breed: "Spaanse waterhond", price: "€ 100" },
  { breed: "Sussex spaniel", price: "€ 70" },
  { breed: "Teckel kort", price: "€ 50" },
  { breed: "Teckel lang", price: "€ 55" },
  { breed: "Teckel ruw", price: "€ 80" },
  { breed: "Tervuerense herder", price: "€ 75" },
  { breed: "Tibetaanse spaniel", price: "€ 55" },
  { breed: "Tibetaanse terrier", price: "€ 80" },
  { breed: "Vizsla glad", price: "€ 65" },
  { breed: "Vizsla ruw", price: "€ 80" },
  { breed: "Vlinderhondje", price: "€ 50" },
  { breed: "Weimaraner kort", price: "€ 55" },
  { breed: "Weimaraner ruw", price: "€ 85" },
  { breed: "Welsh springer spaniel", price: "€ 70" },
  { breed: "Welsh terrier", price: "€ 90" },
  { breed: "West Highland white terrier", price: "€ 65" },
  { breed: "Whippet", price: "€ 50" },
  { breed: "Wolfskeeshond", price: "€ 85" },
  { breed: "Yorkshire terrier", price: "€ 60" },
  { breed: "Zwitserse herder", price: "€ 90" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Tarieven() {
  const [selectedLetter, setSelectedLetter] = useState("A");

  useEffect(() => {
    document.title = "Tarieven – Chibi Woef";
  }, []);

  const breedsByLetter = breedPriceRows.filter(
    (row) => row.breed.charAt(0).toUpperCase() === selectedLetter,
  );

  return (
    <main>
      <section className="pricing-section">
        <div className="container pricing">
          <div className="content-block">
            <div className="treatment-mascot">
              <img src={TopDogImg} alt="" className="top-dog__img" />
            </div>
            <div className="pricing-bone" role="note" aria-live="polite">
              <h2>Prijslijst</h2>
            </div>
            <div className="content-block__head">
              <p className="content-block__sub">
                Richtprijzen incl. 21% BTW. De definitieve prijs hangt af van de
                vachtconditie en het gedrag. Voorlopig werken we met dieren tot
                en met een gewicht van 30 kg.
              </p>
              <div className="pricing-promo">
                <p className="pricing-promo__item pricing-promo__item--current">
                  <strong>Opstartactie september t.e.m. november 2026:</strong>{" "}
                  15% kennismakingskorting op alle trimbeurten.
                </p>
                <p className="pricing-promo__item pricing-promo__item--next">
                  <strong>December 2026 t.e.m. februari 2027:</strong> 10%
                  opstartkorting op alle trimbeurten.
                </p>
              </div>
            </div>
            <section
              className="breed-pricing"
              aria-label="Prijsindicatie per ras"
            >
              <h3 className="breed-pricing__title">Prijsindicatie per ras</h3>
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
                        <span className="breed-pricing__name">{row.breed}</span>
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
              Heb je een hond boven 30 kg? Laat het gerust weten, dan denken we
              graag mee en verwijzen we je eventueel warm door waar nodig.
            </p>
          </div>
        </div>
      </section>
      <section class="about">
        <div class="container text-center">
          <div>
            <p className="box-white__label">
              Belangrijk om te weten: Scope & Rust
            </p>
            <p className="box-white__items">
              De bovenstaande tabel dient als richtlijn voor honden/katten met
              een goed onderhouden vacht. Bij extreme klitten, vervilting of
              ongewenst gedrag vraagt dit extra tijd en geld. Bij angstige
              dieren kies ik daarom bewust om eerst rust en vertrouwen op te
              bouwen. <br />
              Liever een gelukkig dier dan een perfecte snoet met veel stress.
            </p>
          </div>
        </div>
      </section>

      <section class="services">
        <div class="container">
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
      </section>
    </main>
  );
}
