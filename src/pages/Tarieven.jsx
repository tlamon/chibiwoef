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
  { breed: "Affenpinscher", price: "€ 61" },
  { breed: "Afgaanse windhond", price: "€ 102" },
  { breed: "Airedale terrier", price: "€ 132" },
  { breed: "Akita Inu", price: "€ 86" },
  { breed: "Alaskan malamute", price: "€ 122" },
  { breed: "Amerikaanse Bulldog", price: "€ 61" },
  { breed: "Amerikaanse cocker", price: "€ 97" },
  { breed: "Amerikaanse Staffordshire terrier", price: "€ 56" },
  { breed: "Anatolische herder", price: "€ 97" },
  { breed: "Argentijnse dog", price: "€ 66" },
  { breed: "Australische herder", price: "€ 70" },
  { breed: "Australische terrier", price: "€ 61" },
  { breed: "Barzoi", price: "€ 76" },
  { breed: "Basenji", price: "€ 56" },
  { breed: "Basset fauve de Bretagne", price: "€ 76" },
  { breed: "Basset hound", price: "€ 51" },
  { breed: "Beagle", price: "€ 50" },
  { breed: "Bearded collie", price: "€ 97" },
  { breed: "Beauceron", price: "€ 76" },
  { breed: "Bedlington terrier", price: "€ 66" },
  { breed: "Berner sennenhond", price: "€ 120" },
  { breed: "Bichon frise", price: "€ 61" },
  { breed: "Bloedhond", price: "€ 71" },
  { breed: "Bobtail", price: "€ 122" },
  { breed: "Boemer", price: "€ 56" },
  { breed: "Border collie", price: "€ 70" },
  { breed: "Border terrier", price: "€ 66" },
  { breed: "Bordeaux dog", price: "€ 66" },
  { breed: "Boston terrier", price: "€ 40" },
  { breed: "Bouvier", price: "€ 122" },
  { breed: "Boxer", price: "€ 61" },
  { breed: "Briard", price: "€ 112" },
  { breed: "Bulldog Amerikaans", price: "€ 61" },
  { breed: "Bulldog Frans / Frenchy", price: "€ 55" },
  { breed: "Bulldog Engels", price: "€ 55" },
  { breed: "Bullmastiff", price: "€ 66" },
  { breed: "Bull terrier", price: "€ 51" },
  { breed: "Cairn terrier", price: "€ 66" },
  { breed: "Cavalier King Charles", price: "€ 65" },
  { breed: "Cavapoo", price: "€ 71" },
  { breed: "Chihuahua korthaar", price: "€ 45" },
  { breed: "Chihuahua langhaar", price: "€ 50" },
  { breed: "Chinese naakthond", price: "€ 45" },
  { breed: "Clumber spaniel", price: "€ 71" },
  { breed: "Cockapoo", price: "€ 86" },
  { breed: "Corgi", price: "€ 56" },
  { breed: "Coton de tulear", price: "€ 71" },
  { breed: "Dalmatier", price: "€ 66" },
  { breed: "Deerhond", price: "€ 97" },
  { breed: "Doodle klein (<10kg)", price: "€ 76" },
  { breed: "Doodle middel (10-20kg)", price: "€ 97" },
  { breed: "Doodle groot (>20kg)", price: "€ 115" },
  { breed: "Dobermann", price: "€ 66" },
  { breed: "Drentsche patrijshond", price: "€ 66" },
  { breed: "Duitse dog", price: "€ 86" },
  { breed: "Duitse herder", price: "€ 86" },
  { breed: "Duitse jacht terrier", price: "€ 66" },
  { breed: "Duitse staande hond glad", price: "€ 61" },
  { breed: "Duitse staande hond ruw", price: "€ 91" },
  { breed: "Dwergkees / Pomeriaan", price: "€ 61" },
  { breed: "Dwergpinscher", price: "€ 45" },
  { breed: "Engelse Bulldog", price: "€ 55" },
  { breed: "Engelse Cocker Spaniel", price: "€ 80" },
  { breed: "Engelse setter", price: "€ 76" },
  { breed: "Engelse Springer Spaniel", price: "€ 76" },
  { breed: "Finse spits", price: "€ 112" },
  { breed: "Flatcoated retriever", price: "€ 66" },
  { breed: "Franse Bulldog", price: "€ 55" },
  { breed: "Fox terrier glad", price: "€ 81" },
  { breed: "Fox terrier ruw", price: "€ 81" },
  { breed: "Friese stabij", price: "€ 66" },
  { breed: "Galgo", price: "€ 51" },
  { breed: "Golden retriever", price: "€ 75" },
  { breed: "Gordon setter", price: "€ 81" },
  { breed: "Grand Basset Griffon Vendeen", price: "€ 71" },
  { breed: "Griffon", price: "€ 51" },
  { breed: "Greyhound", price: "€ 61" },
  { breed: "Groenendaler", price: "€ 71" },
  { breed: "Grote Zwitserse sennenhond", price: "€ 76" },
  { breed: "Havanezer", price: "€ 71" },
  { breed: "Heidewachtel", price: "€ 71" },
  { breed: "Hollandse herder lang", price: "€ 71" },
  { breed: "Hollandse herder ruw", price: "€ 76" },
  { breed: "Hovawart", price: "€ 76" },
  { breed: "Husky", price: "€ 75" },
  { breed: "Ierse setter", price: "€ 76" },
  { breed: "Ierse terrier", price: "€ 86" },
  { breed: "Ierse wolfshond", price: "€ 127" },
  { breed: "Italiaans windhondje", price: "€ 40" },
  { breed: "Jack Russell terrier kort", price: "€ 60" },
  { breed: "Jack Russell terrier ruw", price: "€ 85" },
  { breed: "Japanse spaniel", price: "€ 51" },
  { breed: "Keeshond klein / Dwergkees / Pomeriaan (<5kg)", price: "€ 61" },
  { breed: "Keeshond middel (5-10kg)", price: "€ 70" },
  { breed: "Keeshond groot (>10kg)", price: "€ 75" },
  { breed: "Kerry blue terrier", price: "€ 97" },
  { breed: "Kooikerhondje", price: "€ 91" },
  { breed: "Laekense herder", price: "€ 76" },
  { breed: "Labradoedel klein (<10kg)", price: "€ 76" },
  { breed: "Labradoedel middel (10-20kg)", price: "€ 97" },
  { breed: "Labradoedel groot (>20kg)", price: "€ 115" },
  { breed: "Labrador retriever", price: "€ 65" },
  { breed: "Landseer ECT", price: "€ 122" },
  { breed: "Leonberger", price: "€ 183" },
  { breed: "Lhasa apso", price: "€ 71" },
  { breed: "Maltezer", price: "€ 65" },
  { breed: "Mastiff", price: "€ 81" },
  { breed: "Mastino Napoletano", price: "€ 76" },
  { breed: "Mechelse herder", price: "€ 71" },
  { breed: "Mini Australische herder", price: "€ 46" },
  { breed: "Mini Maltezer", price: "€ 56" },
  { breed: "Mopshond", price: "€ 45" },
  { breed: "Morkie", price: "€ 56" },
  { breed: "Munsterlander", price: "€ 71" },
  { breed: "Newfoundlander", price: "€ 122" },
  { breed: "Norfolk terrier", price: "€ 66" },
  { breed: "Norwich terrier", price: "€ 66" },
  { breed: "Nova Scotia duck tolling retriever", price: "€ 66" },
  { breed: "Otterhound", price: "€ 76" },
  { breed: "Pekinees", price: "€ 71" },
  { breed: "Picardische herder", price: "€ 102" },
  { breed: "Poedel groot (koningspoedel)", price: "€ 122" },
  { breed: "Poedel klein", price: "€ 70" },
  { breed: "Poedel middenslag", price: "€ 90" },
  { breed: "Poedel toy", price: "€ 70" },
  { breed: "Pomeranian / dwergkees", price: "€ 61" },
  { breed: "Powderpuff", price: "€ 56" },
  { breed: "Pyreneese berghond", price: "€ 122" },
  { breed: "Rhodesian Ridgeback", price: "€ 71" },
  { breed: "Saarloos wolfshond", price: "€ 81" },
  { breed: "Saluki", price: "€ 66" },
  { breed: "Samojeed", price: "€ 112" },
  { breed: "Schapendoes", price: "€ 112" },
  { breed: "Schipperke", price: "€ 56" },
  { breed: "Schnauzer dwerg", price: "€ 56" },
  { breed: "Schnauzer middel", price: "€ 76" },
  { breed: "Schnauzer riezen", price: "€ 97" },
  { breed: "Schotse collie", price: "€ 76" },
  { breed: "Schotse terrier", price: "€ 81" },
  { breed: "Sealyham terrier", price: "€ 66" },
  { breed: "Shar pei", price: "€ 61" },
  { breed: "Sheltie", price: "€ 71" },
  { breed: "Shiba inu", price: "€ 66" },
  { breed: "Shih-tzu", price: "€ 65" },
  { breed: "Siberische husky", price: "€ 76" },
  { breed: "Sint Bernard kort", price: "€ 97" },
  { breed: "Sint Bernard lang", price: "€ 122" },
  { breed: "Sky terrier", price: "€ 66" },
  { breed: "Soft coated wheaten terrier", price: "€ 66" },
  { breed: "Spaanse waterhond", price: "€ 81" },
  { breed: "Sussex spaniel", price: "€ 66" },
  { breed: "Teckel kort", price: "€ 50" },
  { breed: "Teckel lang", price: "€ 55" },
  { breed: "Teckel ruw", price: "€ 80" },
  { breed: "Tervuerense herder", price: "€ 86" },
  { breed: "Tibetaanse spaniel", price: "€ 71" },
  { breed: "Tibetaanse terrier", price: "€ 81" },
  { breed: "Vizsla glad", price: "€ 56" },
  { breed: "Vizsla ruw", price: "€ 76" },
  { breed: "Vlinderhondje", price: "€ 51" },
  { breed: "Weimaraner kort", price: "€ 56" },
  { breed: "Weimaraner ruw", price: "€ 86" },
  { breed: "Welsh springer spaniel", price: "€ 66" },
  { breed: "Welsh terrier", price: "€ 86" },
  { breed: "West Highland white terrier", price: "€ 61" },
  { breed: "Whippet", price: "€ 50" },
  { breed: "Wolfskeeshond", price: "€ 70" },
  { breed: "Yorkshire terrier", price: "€ 60" },
  { breed: "Zwitserse herder", price: "€ 81" },
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
                <section
                  className="breed-pricing"
                  aria-label="Prijsindicatie per ras"
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
