import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacyverklaring – Chibi Woef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <h1 className="page-hero__title">Privacyverklaring</h1>
        <p className="page-hero__sub">
          Chibi Woef respecteert jouw privacy en verwerkt persoonsgegevens in
          overeenstemming met de AVG / GDPR.
        </p>
      </div>

      <section className="huisregels">
        <div className="container">
          <div
            className="box-white"
            style={{ maxWidth: "760px", margin: "0 auto" }}
          >
            <div className="privacy-content">
              <h2>1. Wie zijn wij?</h2>
              <p>
                <strong>Chibi Woef</strong> — hondentrimsalon
                <br />
                Haacht, België
                <br />
                E-mail:{" "}
                <a href="mailto:hallo@chibiwoef.be">hallo@chibiwoef.be</a>
                <br />
                Tel: <a href="tel:+32496309459">+32 496 309 459</a>
              </p>

              <h2>2. Welke gegevens verzamelen we?</h2>
              <p>
                Wij verzamelen enkel gegevens die noodzakelijk zijn voor de
                dienstverlening:
              </p>
              <ul>
                <li>Naam en contactgegevens (e-mail, telefoonnummer)</li>
                <li>
                  Gegevens over jouw huisdier (naam, ras, gewicht,
                  bijzonderheden)
                </li>
                <li>Afspraakhistoriek</li>
              </ul>

              <h2>3. Waarom verwerken we jouw gegevens?</h2>
              <p>Jouw gegevens worden uitsluitend gebruikt voor:</p>
              <ul>
                <li>Het beheren en bevestigen van afspraken</li>
                <li>Contact opnemen bij vragen of wijzigingen</li>
                <li>Wettelijke verplichtingen (boekhouding, facturen)</li>
              </ul>
              <p>
                De rechtsgrond voor deze verwerking is de uitvoering van een
                overeenkomst (art. 6.1.b AVG) en het gerechtvaardigde belang
                (art. 6.1.f AVG) voor het opvolgen van afspraken.
              </p>

              <h2>4. Hoe lang bewaren we jouw gegevens?</h2>
              <p>
                Persoonsgegevens worden bewaard zolang dit noodzakelijk is voor
                de doeleinden waarvoor ze verzameld zijn, of zolang de wet dit
                vereist (boekhoudkundige documenten: 7 jaar).
              </p>

              <h2>5. Delen we jouw gegevens?</h2>
              <p>
                Wij verkopen of verhuren jouw gegevens nooit aan derden.
                Gegevens worden enkel gedeeld met verwerkers die noodzakelijk
                zijn voor onze dienstverlening (bv. afsprakentool Cal.com), en
                dit steeds onder passende verwerkersovereenkomst.
              </p>

              <h2>6. Jouw rechten</h2>
              <p>Onder de AVG heb je de volgende rechten:</p>
              <ul>
                <li>
                  <strong>Inzagerecht</strong> — je kunt opvragen welke gegevens
                  we van je hebben.
                </li>
                <li>
                  <strong>Rectificatierecht</strong> — je kunt onjuiste gegevens
                  laten corrigeren.
                </li>
                <li>
                  <strong>Recht op verwijdering</strong> — je kunt vragen om
                  verwijdering van jouw gegevens.
                </li>
                <li>
                  <strong>Recht op beperking</strong> — je kunt de verwerking
                  laten beperken.
                </li>
                <li>
                  <strong>Bezwaarrecht</strong> — je kunt bezwaar maken tegen de
                  verwerking.
                </li>
              </ul>
              <p>
                Stuur je verzoek naar{" "}
                <a href="mailto:hallo@chibiwoef.be">hallo@chibiwoef.be</a>. We
                reageren binnen 30 dagen.
              </p>

              <h2>7. Klacht indienen</h2>
              <p>
                Ben je niet tevreden met hoe we jouw gegevens behandelen? Je
                kunt een klacht indienen bij de Gegevensbeschermingsautoriteit
                (GBA):
              </p>
              <p>
                <a
                  href="https://www.gegevensbeschermingsautoriteit.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.gegevensbeschermingsautoriteit.be
                </a>
              </p>

              <h2>8. Cookies</h2>
              <p>
                Deze website gebruikt geen advertentiecookies. Wel worden de
                volgende services geladen:
              </p>
              <ul>
                <li>
                  <strong>Cal.com</strong> — de ingebedde afsprakentool kan
                  functionele cookies plaatsen die noodzakelijk zijn voor het
                  boekingsproces. Dit zijn geen tracking cookies.
                </li>
                <li>
                  <strong>Google Fonts</strong> — lettertypes worden geladen via
                  Google's servers, waarbij het IP-adres van de bezoeker wordt
                  doorgegeven aan Google. Je kunt dit vermijden door cookies te
                  blokkeren in je browser.
                </li>
                <li>
                  <strong>Google Analytics</strong> — deze website maakt gebruik
                  van Google Analytics om bezoekersgedrag te analyseren. Dit
                  plaatst analytische cookies uitsluitend{" "}
                  <em>na uw toestemming</em> via de cookiebanner. U kunt uw
                  toestemming te allen tijde intrekken door de cookies in uw
                  browser te verwijderen. Meer info:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Privacy Policy
                  </a>
                  .
                </li>
              </ul>

              <h2>9. Wijzigingen</h2>
              <p>
                Deze privacyverklaring kan worden gewijzigd. De meest recente
                versie is altijd beschikbaar op{" "}
                <Link to="/privacy">chibiwoef.be/privacy</Link>.
              </p>
              <p>
                <em>Laatste update: april 2026</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
