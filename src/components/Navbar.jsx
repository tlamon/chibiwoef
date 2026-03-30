import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={close}>
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
                to="/"
                end
                className={({ isActive }) =>
                  `navbar__link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tarieven"
                className={({ isActive }) =>
                  `navbar__link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                Tarieven
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/huisregels"
                className={({ isActive }) =>
                  `navbar__link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                Huisregels
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navbar__link cta-link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
