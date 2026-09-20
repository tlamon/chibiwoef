import { Link } from "react-router-dom";
import MobileImg from "../assets/mobile.webp";
import PawIcon from "../assets/paw.svg";
import InstagramIcon from "../assets/instagram.svg";
import FacebookIcon from "../assets/facebook.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">♥ Chibi Woef</div>
            <p className="footer__tagline">
              Zorg voor jouw trouwe viervoeters met liefde en begrip vanaf eind
              2026.
            </p>
          </div>

          <div>
            <div className="footer__heading">Pagina's</div>
            <ul className="footer__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tarieven">Tarieven</Link>
              </li>
              <li>
                <Link to="/huisregels">Huisregels</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer__heading">Contact</div>
            <ul className="footer__links">
              <li>
                <a href="tel:0496/309.459">
                  <span className="footer__contact-icon footer__contact-icon--text">
                    &#9742;
                  </span>
                  0496/309.459
                </a>
              </li>
              <li>
                <a href="mailto:chibiwoef@gmail.com">
                  <span className="footer__contact-icon footer__contact-icon--text">
                    ◛
                  </span>
                  chibiwoef@gmail.com
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon footer__contact-icon--text">
                  ⌂
                </span>
                Langerheide 26, Haacht
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © 2026 Chibi Woef. All rights reserved. ·{" "}
            <Link to="/privacy">Privacyverklaring</Link>
          </span>
          <span className="footer__paw">
            <img
              src={PawIcon}
              alt=""
              aria-hidden="true"
              className="footer__paw-icon"
            />
          </span>
          <a
            href="https://www.facebook.com/profile.php?id=61594738795832"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer__social footer__social--first"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="footer__social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/chibiwoef"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer__social"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
