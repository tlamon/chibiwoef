import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_USERNAME = "chibiwoef";

const INFO = {
  address: "Haacht, België",
  phone: "+32 000 00 00 00",
  email: "hallo@chibiwoef.be",
};

const HOURS = [
  { day: "Ma – Vr", time: "9:00 – 18:00" },
  { day: "Zaterdag", time: "9:00 – 17:00" },
  { day: "Zondag", time: "Gesloten" },
  { day: "Feestdagen", time: "Gesloten" },
];

export default function Contact() {
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
              <h2 className="contact__info-heading">Kom ons bezoeken 👋</h2>
              <p className="contact__info-sub">
                We leren jouw chibi graag kennen. Stel een vraag, bel ons of
                plan meteen een afspraak via de kalender.
              </p>

              <div className="contact-info-cards">
                <div className="info-card">
                  <span className="info-card__icon">📍</span>
                  <div>
                    <p className="info-card__label">Adres</p>
                    <p className="info-card__value">{INFO.address}</p>
                  </div>
                </div>

                <div className="info-card">
                  <span className="info-card__icon">📞</span>
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
                  <span className="info-card__icon">✉️</span>
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
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "600px",
                  border: "none",
                }}
                config={{ theme: "light" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
