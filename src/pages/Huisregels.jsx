import { useEffect } from "react";
import PawIcon from "../assets/paw.svg";
import RulesIcon from "../assets/rules.png";
import HeartIcon from "../assets/heart.png";
import PoodleImg from "../assets/poodle.jpg";
import CatMusicImg from "../assets/cat-music.png";

const rules = [
  {
    title: "Rustig en ontspannen huisdier",
    text: "Kom met een rustig, ontspannen huisdier; een korte wandeling voor de afspraak helpt. Op 100 meter van het salon is er een veldweg waar jouw hondje nog even kan snuffelen en plassen voor de trimbeurt.",
  },
  {
    title: "Plasje doen voor de afspraak",
    text: "Een sessie duurt gemiddeld rond de 2 uur, afhankelijk van de behandeling, zorg dat jouw dier dit niet met een volle blaas hoeft te doen.",
  },
  {
    title: "Niet met volle maag",
    text: "Zorg dat je huisdier geen volle maag heeft bij aankomst, dit helpt misselijkheid en ongelukjes op de tafel te voorkomen. Een licht tussendoortje is oké, maar vermijd zware maaltijden vlak voor de trimbeurt.",
  },
  {
    title: "Medische info melden",
    text: "Vertel ons altijd van tevoren over bijzonderheden: angsten, allergieën, wondjes of medische aandoeningen. Wij werken met diervriendelijke, hypoallergene producten maar horen het graag als uw dier allergisch is.",
  },
  {
    title: "Ziekte of loopsheid",
    text: "Breng geen zieke of loopse dieren mee, dit ter bescherming van jouw dier en onze andere gasten. We zoeken graag samen naar een nieuw moment om jouw dier te verwennen wanneer hij/zij zich beter voelt.",
  },
  {
    title: "Op tijd komen",
    text: "Kom op tijd, niet te vroeg of te laat. Een vertraging van meer dan 15 minuten kan betekenen dat de afspraak verzet of geannuleerd wordt.",
  },
  {
    title: "Annuleren of wijzigen afspraak",
    text: "We snappen het, soms is het nodig om een afspraak te wijzigen of te annuleren. Daarom is dit gratis tot 24 uur voor de afspraak zodat we eventueel tijdig iemand anders kunnen inplannen. Daarna rekenen wij 50% van het tarief.",
  },
  {
    title: "Een-op-een begeleiding?",
    text: "Soms gaan sessies beter een-op-een omdat dit kan helpen om jouw dier zich beter te laten ontspannen en om het vertrouwen met de kapster op te bouwen. Soms werkt het ook averechts en vind het dier juist veel steun en moed bij de aanwezigheid van het baasje. Elk dier is anders en we bekijken individueel wat het beste werkt. ",
  },
  {
    title: "Veiligheid eerst",
    text: "Wij behouden het recht om een trimbeurt stop te zetten wanneer het dier grote stress ervaart en/of agressief gedrag vertoont. We gaan steeds op zoek naar een oplossing die het beste is voor jouw dier, en zullen dit altijd in overleg doen.",
  },
  {
    title: "Vlooienbeleid",
    text: "Bij vlooien kunnen we uw afspraak annuleren of brengen wij extra behandelingskosten in rekening. Het salon moet nadien grondig worden gereinigd en gedesinfecteerd, wat extra tijd en middelen kost. Afspraken die na een vlooienbehandeling plaatsvinden moeten worden geannulleerd. Gelieve uw huisdier daarom vooraf te behandelen tegen deze parasieten om ongemak en extra kosten te voorkomen. Indien dit niet mogelijk is, kunnen we samen zoeken naar een oplossing, zoals het plannen van een vlooienbehandeling op het einde van de dag zodat de rest van de afspraken niet wordt beïnvloed.",
  },
  {
    title: "Betaling",
    text: "Betaling vindt plaats direct na afloop van de dienst via Cash, Bancontact/Payconiq of PayPal. Gelieve gepast te betalen bij een cash betaling want ik heb niet altijd wisselgeld beschikbaar.",
  },
  {
    title: "Mogelijke meerprijs",
    text: "Prijzen kunnen variëren op basis van vachtconditie, ras en temperament. Bij extra vuile vacht of veel klitvorming neemt dit meer tijd in beslag en rekenen wij een meerprijs aan vanaf €25. Bij angstige of onhandelbare dieren raden we u aan om eerst een gewenningstraject te volgen zodat we de behandeling in alle rust kunnen uitvoeren. We bespreken dit altijd vooraf en zoeken samen naar de beste oplossing voor jouw dier.",
  },
  {
    title: "Foto's op sociale media",
    text: "Ik maak graag foto's van mijn pluizige bezoekers voor op sociale media. Geef gerust aan als u hier bezwaar tegen heeft.",
  },
];

export default function Huisregels() {
  useEffect(() => {
    document.title = "Huisregels – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Voor alle snoetjes 🐾</span>
        <h1 className="page-hero__title">Huisregels</h1>
        <p className="page-hero__sub">
          Om een veilige en prettige omgeving te garanderen voor alle dieren en
          hun baasjes, houden wij ons graag aan de volgende regels.
        </p>
        <div className="container rules">
          <div className="content-block">
            <div className="rules-icon-wrap">
              <img
                src={RulesIcon}
                className="rules-icon"
                alt=""
                aria-hidden="true"
              />
              <img
                src={CatMusicImg}
                className="rules-icon rules-icon--cat-music"
                alt=""
                aria-hidden="true"
              />
            </div>
            <ul className="rules-list">
              {rules.map((rule, i) => (
                <li key={i} className="rules-list__item">
                  <img
                    src={PawIcon}
                    className="rules-list__paw"
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="rules-list__content">
                    <span className="rules-list__title">{rule.title}</span>
                    <span className="rules-list__text">{rule.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Poodle blob decoration ── */}
        <div className="rules-poodle-blob">
          <img
            src={PoodleImg}
            alt=""
            aria-hidden="true"
            className="rules-poodle-blob__img"
          />
        </div>
        <p className="page-hero__sub">
          Dankjewel voor je begrip{" "}
          <img src={HeartIcon} alt="" aria-hidden="true" />
        </p>
      </div>{" "}
    </main>
  );
}
