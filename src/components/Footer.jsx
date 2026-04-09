import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PawIcon from "../assets/paw.svg";

export default function Footer() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const lang = (i18n.resolvedLanguage || "nl").split("-")[0];

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
                <Link to={`/${lang}`}>{t("nav.home")}</Link>
              </li>
              <li>
                <Link to={`/${lang}/tarieven`}>{t("nav.tarieven")}</Link>
              </li>
              <li>
                <Link to={`/${lang}/huisregels`}>{t("nav.huisregels")}</Link>
              </li>
              <li>
                <Link to={`/${lang}/rassen`}>{t("nav.rassen")}</Link>
              </li>
              <li>
                <Link to={`/${lang}/contact`}>{t("nav.contact")}</Link>
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
          <span>
            © 2026 Chibi Woef. All rights reserved. ·{" "}
            <Link to={`/${lang}/privacy`}>Privacyverklaring</Link>
          </span>
          <span className="footer__paw">
            <img
              src={PawIcon}
              alt=""
              aria-hidden="true"
              className="footer__paw-icon"
            />
          </span>
        </div>
      </div>
    </footer>
  );
}
