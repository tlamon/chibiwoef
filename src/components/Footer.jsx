import { Link } from "react-router-dom";
import MobileImg from "../assets/mobile.webp";
import PawIcon from "../assets/paw.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">♥ Chibi Woef</div>
            <p className="footer__tagline">
              Zorg voor jouw fluffy vriendjes met liefde en begrip sinds 2026.
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
                <a href="mailto:hello@chibiwoef.com">
                  <span className="footer__contact-icon footer__contact-icon--text">
                    ◛
                  </span>
                  hello@chibiwoef.com
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon footer__contact-icon--text">
                  ⌂
                </span>
                Haacht
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Chibi Woef. All rights reserved.</span>
          <span className="footer__paw">
            <img
              src={PawIcon}
              alt=""
              aria-hidden="true"
              style={{ width: "20px", opacity: 0.7 }}
            />
          </span>
        </div>
      </div>
    </footer>
  );
}
