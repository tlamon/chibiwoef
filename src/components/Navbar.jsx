import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={close}>
          <img src={logoImg} alt="ChibiWoef" className="logo-img" />
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
            <li className="navbar__dropdown">
              <span
                className={`navbar__link${pathname.startsWith("/diensten") ? " active" : ""}`}
              >
                Diensten
              </span>
              <ul className="navbar__dropdown-menu">
                <li>
                  <NavLink
                    to="/diensten/trimbeurt-honden"
                    className={({ isActive }) =>
                      `navbar__dropdown-item${isActive ? " active" : ""}`
                    }
                    onClick={close}
                  >
                    Trimbeurt honden
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/diensten/trimbeurt-katten"
                    className={({ isActive }) =>
                      `navbar__dropdown-item${isActive ? " active" : ""}`
                    }
                    onClick={close}
                  >
                    Trimbeurt katten
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/diensten/was-en-splash"
                    className={({ isActive }) =>
                      `navbar__dropdown-item${isActive ? " active" : ""}`
                    }
                    onClick={close}
                  >
                    Was &amp; Splash
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/diensten/kambeurt"
                    className={({ isActive }) =>
                      `navbar__dropdown-item${isActive ? " active" : ""}`
                    }
                    onClick={close}
                  >
                    Kambeurt
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/diensten/puppy-gewenning"
                    className={({ isActive }) =>
                      `navbar__dropdown-item${isActive ? " active" : ""}`
                    }
                    onClick={close}
                  >
                    Puppy gewenning
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/diensten/gewenning"
                    className={({ isActive }) =>
                      `navbar__dropdown-item${isActive ? " active" : ""}`
                    }
                    onClick={close}
                  >
                    Gewenning
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/diensten/ontspanningsmassage"
                    className={({ isActive }) =>
                      `navbar__dropdown-item${isActive ? " active" : ""}`
                    }
                    onClick={close}
                  >
                    Ontspanningsmassage
                  </NavLink>
                </li>
              </ul>
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
