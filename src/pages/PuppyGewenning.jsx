import { useEffect } from "react";
import { Link } from "react-router-dom";
import photoImg from "../assets/puppy.webp";
import photoImg2 from "../assets/maltipoo.jpg";

export default function PuppyGewenning() {
  useEffect(() => {
    document.title = "Puppy Gewenning – ChibiWoef";
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge"> 🐻‍❄️🐾</span>
        <h1 className="page-hero__title">Puppy Gewenning</h1>
        <p className="page-hero__sub">Happy Hearts, Beautiful Starts</p>
      </div>

      <section className="services">
        <div className="container">
          <div className={photoImg ? "dienst__layout" : undefined}>
            {photoImg && (
              <div className="breed-page__photo">
                <div className="polaroid">
                  <img src={photoImg} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="polaroid" style={{ marginTop: "32px", transform: "rotate(1.5deg)" }}>
                  <img src={photoImg2} alt="Puppy" loading="lazy" decoding="async" />
                </div>
              </div>
            )}

            <div>
              <p className="content-block__sub" style={{ marginTop: 0 }}>
                We nemen uitgebreid de tijd om je kleintje op een speelse,
                stressvrije manier te laten kennismaken met alle nieuwe
                prikkels. Snuffelen aan de borstels, even op de trimtafel staan,
                luisteren naar het geluid van de droger en natuurlijk heel veel
                knuffels en snoepjes. Zonder haast of dwang. Puur gericht op
                vertrouwen en een positieve eerste ervaring. Zo leggen we samen
                de basis voor een fijne start!
              </p>

              <p className="content-block__sub">
                <strong>
                  Stap 1 · Meet &amp; Greet — De Socialisatie- &amp; Eerste
                  Angstfase
                </strong>
              </p>
              <ul className="breed-page__list">
                <li>
                  <strong>Wanneer:</strong> Ideaal tussen 12 en 16 weken (na de
                  puppy-entingen)
                </li>
                <li>
                  <strong>Prijs:</strong> € 15 · <strong>Duur:</strong> ± 15–20
                  min
                </li>
                <li>
                  <strong>Waarom nu?</strong> In de socialisatieperiode staat
                  het puppybrein wagenwijd open. Alles wat je pup nu rustig
                  leert kennen, wordt opgeslagen als 'veilig'. Omdat pups ook
                  een eerste angstfase doormaken, houden we deze sessie bewust
                  heel kort en laagdrempelig.
                </li>
                <li>
                  <strong>Wat we doen:</strong> Rustige kennismaking met de
                  trimster, materialen en de ruimte. Snuffelen aan borstels,
                  even op de trimtafel staan, pootjes natmaken en veel snoepjes.
                </li>
              </ul>

              <p className="content-block__sub">
                <strong>Stap 2 · Was &amp; Splash — De Groeifase</strong>
              </p>
              <ul className="breed-page__list">
                <li>
                  <strong>Wanneer:</strong> Ongeveer 3 à 4 weken na Stap 1
                </li>
                <li>
                  <strong>Prijs:</strong> € 35 – € 50 · <strong>Duur:</strong> ±
                  60 min
                </li>
                <li>
                  <strong>Waarom nu?</strong> Nu je pup de salon al kent als een
                  fijne plek, bouwen we het vertrouwen rustig verder uit
                  (voordat de puberteit begint).
                </li>
                <li>
                  <strong>Wat we doen:</strong> De eerste echte badervaring!
                  Lekker warm wassen, een milde puppyshampoo, drogen en daarna
                  borstelen. Zo leert hij dat de droger en warm water helemaal
                  oké zijn.
                </li>
              </ul>

              <p className="content-block__sub">
                <strong>
                  Stap 3 · Eerste Trimbeurt — Richting de Tweede Angstfase
                </strong>
              </p>
              <ul className="breed-page__list">
                <li>
                  <strong>Wanneer:</strong> Zodra de pup er klaar voor is (vaak
                  rond de 5 à 6 maanden)
                </li>
                <li>
                  <strong>Prijs:</strong> Standaardtarief − € 15 korting
                </li>
                <li>
                  <strong>Waarom nu?</strong> Rond de puberteit (6–14 maanden)
                  komen jonge honden in hun tweede angstperiode. Omdat we via
                  Stap 1 en 2 al een sterke vertrouwensband hebben opgebouwd,
                  loodsen we jouw hond met geduld door deze puberfase.
                </li>
                <li>
                  Omdat je pup zo hard zijn best heeft gedaan tijdens het
                  oefenen, krijg je € 15 korting op deze eerste behandeling!
                </li>
              </ul>

              <br />
              <Link to="/contact" className="btn btn-primary">
                Maak een afspraak
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
