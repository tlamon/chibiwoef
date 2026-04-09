import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import MobileImg from "../assets/mobile2.png";
import HomeImg from "../assets/home.png";
import EnvelopeImg from "../assets/envelope.png";

const CAL_USERNAME = "chibiwoef";

const INFO = {
  address: "Haacht, België",
  phone: "+32 496 309 459",
  email: "hallo@chibiwoef.be",
};

const HOURS = [
  { day: "Di – Wo", time: "09:00 – 18:00" },
  // { day: "Zaterdag", time: "09:00 – 12:00" },
  // { day: "Zondag en feestdagen", time: "Gesloten" },
];

export default function Contact() {
  useEffect(() => {
    document.title = "Afspraak maken – Chibi Woef";
  }, []);

  useEffect(() => {
    getCalApi({ namespace: CAL_USERNAME }).then((cal) => {
      cal("ui", { theme: "light", hideEventTypeDetails: false });
    });
  }, []);

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Kom jij ook graag snuffelen?</span>
        <h1 className="page-hero__title">Plan een afspraak</h1>
        <p className="page-hero__sub">
          Kies een dienst en een tijdstip dat jou past. Je ontvangt meteen een
          bevestiging in je agenda.
        </p>
      </div>

      <section className="contact">
        <div className="container">
          <div className="contact__grid">
            <div>
              <h2 className="contact__info-heading">Kom ons bezoeken ♡</h2>
              <p className="contact__info-sub">
                We leren jouw chibi graag kennen. Bel ons gerust als je vragen
                hebt of plan meteen een afspraak via de kalender.
              </p>

              <div className="contact-info-cards">
                <div className="info-card">
                  <img
                    src={HomeImg}
                    className="info-card__icon info-card__icon--img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div>
                    <p className="info-card__label">Adres</p>
                    <p className="info-card__value">{INFO.address}</p>
                  </div>
                </div>

                <div className="info-card">
                  <img
                    src={MobileImg}
                    className="info-card__icon info-card__icon--img info-card__icon--mobile"
                    alt=""
                    aria-hidden="true"
                  />
                  <div>
                    <p className="info-card__label">Telefoon</p>
                    <a
                      href={`tel:${INFO.phone.replace(/\s/g, "")}`}
                      className="info-card__value"
                    >
                      {INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="info-card">
                  <img
                    src={EnvelopeImg}
                    className="info-card__icon info-card__icon--img"
                    alt=""
                    aria-hidden="true"
                  />
                  <div>
                    <p className="info-card__label">E-mail</p>
                    <a
                      href={`mailto:${INFO.email}`}
                      className="info-card__value"
                    >
                      {INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <p className="hours-heading">Openingsuren</p>
              <dl className="hours-grid">
                {HOURS.map((h) => (
                  <>
                    <dt key={h.day}>{h.day}</dt>
                    <dd key={h.time}>{h.time}</dd>
                  </>
                ))}
              </dl>
            </div>

            {/* ── Cal.com embed ── */}
            <div className="book-form-card">
              <Cal
                namespace={CAL_USERNAME}
                calLink={CAL_USERNAME}
                className="cal-embed"
                config={{ theme: "light" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
