import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "nl").split("-")[0];
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to={`/${lang}`} className="navbar__logo" onClick={close}>
          <img src={logoImg} alt="Chibi Woef" className="logo-img" />
          <h3 className="logo-text">
            Chibi Woef <br />{" "}
            <span>
              hondentrimsalon<small>♡</small>
            </span>
          </h3>
        </Link>

        <button
          className="navbar__hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__nav${open ? " open" : ""}`}>
          <ul className="navbar__links">
            <li>
              <NavLink
                to={`/${lang}`}
                end
                className={({ isActive }) =>
                  `navbar__link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                {t("nav.home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${lang}/tarieven`}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                {t("nav.tarieven")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${lang}/huisregels`}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                {t("nav.huisregels")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${lang}/contact`}
                className={({ isActive }) =>
                  `navbar__link cta-link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                {t("nav.contact")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
