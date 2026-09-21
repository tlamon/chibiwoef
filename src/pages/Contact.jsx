import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import MobileImg from "../assets/mobile2.png";
import HomeImg from "../assets/home.png";
import EnvelopeImg from "../assets/envelope.png";
import InstagramImg from "../assets/instagram.svg";
import FacebookImg from "../assets/facebook.svg";
import WhatsAppImg from "../assets/whatsapp.svg";
import MessengerImg from "../assets/messenger.svg";

const CAL_USERNAME = "chibiwoef";

const INFO = {
  address: "Langerheide 26, 3150 Haacht, België",
  phone: "+32 496 309 459",
  email: "chibiwoef@gmail.com",
};

const HOURS = [
  { day: "Maandag", time: "08:00 – 18:00" },
  { day: "Donderdag", time: "08:00 – 18:00" },
  { day: "Vrijdag", time: "08:00 – 18:00" },
  { day: "Zaterdag", time: "08:00 – 13:00" },
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
        <h1 className="page-hero__title">Plan hier een afspraak</h1>
        <p className="page-hero__sub">
          Kies een dienst en een tijdstip dat jou past. Je ontvangt meteen een
          bevestiging in je agenda.
        </p>
      </div>

      <section className="contact">
        <div className="container">
          <div className="contact__grid">
            <div>
              <h2 className="contact__info-heading">Welkom ♡ </h2>
              <p className="contact__info-sub">
                Weldra opent ChibiWoef haar deuren, maar je kunt nu al een
                afspraak plannen! Via <a href={`mailto:${INFO.email}`}>email</a>, telefoon of een van de onderstaande kanalen kan je mij ook bereiken. Tot snel!
              </p>

              <div className="contact__messaging">
                <a
                  href="https://wa.me/32496309459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__messaging-btn"
                >
                  <img
                    src={WhatsAppImg}
                    alt=""
                    aria-hidden="true"
                    className="contact__messaging-icon"
                  />
                  WhatsApp
                </a>
                <a
                  href="https://m.me/61594738795832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__messaging-btn"
                >
                  <img
                    src={MessengerImg}
                    alt=""
                    aria-hidden="true"
                    className="contact__messaging-icon"
                  />
                  Messenger
                </a>
                <a
                  href="https://ig.me/m/chibiwoef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__messaging-btn"
                >
                  <img
                    src={InstagramImg}
                    alt=""
                    aria-hidden="true"
                    className="contact__messaging-icon"
                  />
                  Instagram DM
                </a>
              </div>

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

              <div className="contact__social">
                <a
                  href="https://www.instagram.com/chibiwoef"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="contact__social-link"
                >
                  <img
                    src={InstagramImg}
                    alt="Instagram"
                    className="contact__social-icon"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61594738795832"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="contact__social-link"
                >
                  <img
                    src={FacebookImg}
                    alt="Facebook"
                    className="contact__social-icon"
                  />
                </a>
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

              <div className="contact__map">
                <iframe
                  title="Locatie Chibi Woef"
                  src="https://maps.google.com/maps?q=Langerheide+26,+3150+Haacht,+Belgium&hl=nl&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Langerheide+26,+3150+Haacht,+Belgium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__map-link"
                >
                  Route plannen ↗
                </a>
              </div>
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
