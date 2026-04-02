import { useEffect } from "react";
import PawIcon from "../assets/paw.svg";

const rules = [
  "Kom met een rustig, ontspannen huisdier; een korte wandeling voor de afspraak helpt.",
  "Een sessie duurt gemiddeld 1 tot 3 uur, afhankelijk van de behandeling, zorg dat jouw woef dit niet met een volle blaas hoeft te doen.",
  "Zorg dat je huisdier geen volle maag heeft bij aankomst, dit helpt misselijkheid voorkomen. Een licht tussendoortje is oké, maar vermijd zware maaltijden vlak voor de trimbeurt.",
  "Vertel ons altijd van tevoren over bijzonderheden: angsten, wondjes of medische aandoeningen.",
  "Breng geen zieke dieren mee, dit ter bescherming van onze andere gasten.",
  "Wij werken met diervriendelijke, hypoallergene producten maar horen het graag als uw dier allergisch is.",
  "Afspraken dienen minimaal 24 uur van tevoren te worden gemaakt.",
  "Kom op tijd, niet te vroeg of te laat. Een vertraging van meer dan 15 minuten kan betekenen dat de afspraak verzet wordt.",
  "Sessies doen we graag een-op-een, dus vragen we dat het baasje ons niet stoort tijdens de behandeling. We houden je op de hoogte wanneer je jouw trouwe vriend weer kunt komen ophalen. Uitzonderingen hierop kunnen gelden wanneer het dier erg jong, oud of angstig is.",
  "Annuleren of wijzigen is gratis tot 24 uur voor de afspraak. Daarna rekenen wij 50% van het tarief.",
  "Wij behouden het recht om een trimbeurt stop te zetten wanneer het dier grote stress ervaart en/of agressief gedrag vertoont.",
  "Alle honden dienen up-to-date gevaccineerd te zijn (Distemper, Parvo, Hepatitis & Rabiës).",
  "Katten moeten ingeënt zijn tegen kattenziekte en niesziekte.",
  "Bij vlooien of teken brengen wij extra behandelingskosten in rekening.",
  "Betaling vindt plaats direct na afloop van de dienst.",
  "Prijzen kunnen variëren op basis van vachtconditie, ras en temperament. Bij extra vuile vacht of veel klitvorming neemt dit meer tijd in beslag en rekenen wij een meerprijs aan.",
  "Wij maken graag foto's van onze viervoetige gasten voor op sociale media. Geef aan als u hier bezwaar tegen heeft.",
];

export default function Huisregels() {
  useEffect(() => {
    document.title = "Huisregels – Chibi Woef";
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
      </div>

      <section className="tarieven">
        <div className="container">
          <div className="menu-wrap">
            <div className="menu-block">
              <div className="menu-block__head">
                <h2 className="menu-block__title">Onze huisregels</h2>
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
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
