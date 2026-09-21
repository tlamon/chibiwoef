import MobileImg from "../assets/mobile.webp";
import WhatsAppImg from "../assets/whatsapp.svg";
import MessengerImg from "../assets/messenger.svg";
import InstagramImg from "../assets/instagram.svg";

export default function ContactBanner() {
  return (
    <div className="container contact-banner-wrap">
      <div className="cta-banner cta-banner--contact">
        <img
          src={MobileImg}
          className="cta-banner__icon"
          alt=""
          aria-hidden="true"
        />
        <div className="cta-banner__text">
          <h2 className="cta-banner__title">Plan een afspraak</h2>
          {/* <span className="cta-banner__sub">(Vanaf oktober 2026)</span> */}
          <a href="tel:+32496309459" className="cta-banner__phone">
            +32 496 309 459
          </a>
          <div className="cta-banner__messaging">
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
        </div>
      </div>
    </div>
  );
}
