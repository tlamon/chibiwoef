import MobileImg from "../assets/mobile.webp";
import BtnWhatsApp from "../assets/btn-whatsapp.png";
import BtnMessenger from "../assets/btn-messenger.png";
import BtnInstagram from "../assets/btn-instagram.png";

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
        </div>
      </div>
    </div>
  );
}
