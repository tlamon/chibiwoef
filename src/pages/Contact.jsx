import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import MobileImg from "../assets/mobile2.png";
import HomeImg from "../assets/home.png";
import EnvelopeImg from "../assets/envelope.png";
import InstagramImg from "../assets/instagram.svg";
import FacebookImg from "../assets/facebook.svg";
import BtnWhatsApp from "../assets/btn-whatsapp.png";
import BtnMessenger from "../assets/btn-messenger.png";
import BtnInstagram from "../assets/btn-instagram.png";

const CAL_USERNAME = "chibiwoef";

const EVENT_TYPES = [
  {
    id: "wassen-drogen",
    title: "Wash & Splash",
    description: "Wassen, drogen, borstelen, nagels en oren verzorgen",
    duration: "45 min - 60 min",
    slug: "wassen-en-drogen",
  },
  {
    id: "volledige-trimbeurt",
    title: "Volledige Trimbeurt",
    description:
      "Wassen, drogen, knippen/scheren/plukken in model of naar wens.",
    duration: "120 min - 180 min",
    slug: "trimbeurt",
  },
  {
    id: "kambeurt-hond",
    title: "Kambeurt Hond",
    duration: "45 min",
    slug: "kambeurt-hond",
  },
  {
    id: "kambeurt-kat",
    title: "Kambeurt Kat",
    duration: "45 min",
    slug: "kat-verzorging",
  },
];

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
];

export default function Contact() {
  // Standaard selecteren we het eerste event type
  const [selectedEvent, setSelectedEvent] = useState(EVENT_TYPES[0]);

  useEffect(() => {
    document.title = "Afspraak maken – ChibiWoef";
  }, []);

  useEffect(() => {
    getCalApi({ namespace: CAL_USERNAME }).then((cal) => {
      cal("ui", { theme: "light", hideEventTypeDetails: true });
    });
  }, []);

  // Dynamische link die de juiste slug combineert met de parameter om details te verbergen
  const currentCalLink = `${CAL_USERNAME}/${selectedEvent.slug}?hideEventTypeDetails=1`;

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Kom jij ook graag snuffelen?</span>
        <h1 className="page-hero__title">Plan hier een afspraak</h1>
        <p className="page-hero__sub">
          Kies een behandeling en een tijdstip dat jou past. Je ontvangt snel
          een bevestiging.
        </p>
      </div>

      <section className="contact">
        <div className="container">
          <div className="contact__grid">
            <div>
              <h2 className="contact__info-heading">Welkom ♡ </h2>
              <p className="contact__info-sub">
                Klaar om jouw chibi te verwennen? Plan je afspraak via{" "}
                <a href={`mailto:${INFO.email}`}>email</a>,{" "}
                <a href={`tel:${INFO.phone.replace(/\s/g, "")}`}>telefoon</a> of
                een van de onderstaande kanalen. Tot snel!
              </p>

              <div className="contact__messaging">
                <a
                  href="https://wa.me/32496309459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__messaging-img-btn"
                >
                  <img
                    src={BtnWhatsApp}
                    alt="WhatsApp"
                    className="contact__messaging-img"
                  />
                </a>
                <a
                  href="https://m.me/61594738795832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__messaging-img-btn"
                >
                  <img
                    src={BtnMessenger}
                    alt="Messenger"
                    className="contact__messaging-img"
                  />
                </a>
                <a
                  href="https://ig.me/m/chibiwoef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__messaging-img-btn"
                >
                  <img
                    src={BtnInstagram}
                    alt="Instagram DM"
                    className="contact__messaging-img"
                  />
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

              <div>
                <p className="hours-heading">
                  Openingsuren (enkel op afspraak)
                </p>
                <dl className="hours-grid">
                  {HOURS.map((h) => (
                    <div key={h.day} style={{ display: "contents" }}>
                      <dt>{h.day}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
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

              <div className="contact__map">
                <iframe
                  title="Locatie ChibiWoef"
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

            <div>
              {/* ── STAP 1: Custom Event Type Knoppen ── */}
              <div className="event-selector" style={{ margin: "2rem 0" }}>
                <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  1. Kies een behandeling:
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {EVENT_TYPES.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => setSelectedEvent(event)}
                      style={{
                        textAlign: "left",
                        padding: "1rem",
                        borderRadius: "8px",
                        border:
                          selectedEvent.id === event.id
                            ? "2px solid #000"
                            : "1px solid #ccc",
                        backgroundColor:
                          selectedEvent.id === event.id ? "#f9f9f9" : "#fff",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: "bold",
                        }}
                      >
                        <span>{event.title}</span>
                        <span style={{ color: "#666" }}>{event.duration}</span>
                      </div>
                      <p
                        style={{
                          margin: "0.25rem 0 0 0",
                          fontSize: "0.9rem",
                          color: "#555",
                        }}
                      >
                        {event.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              {/* ── STAP 2: Dynamische Cal.com embed gebaseerd op selectie ── */}
              <div className="book-form-card">
                <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  2. Kies datum & tijdstip:
                </p>
                <Cal
                  key={selectedEvent.id} // Forceert re-render van widget bij wissel van behandeling
                  namespace={CAL_USERNAME}
                  calLink={currentCalLink}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "650px",
                    border: "none",
                  }}
                  config={{
                    theme: "light",
                    hideEventTypeDetails: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
