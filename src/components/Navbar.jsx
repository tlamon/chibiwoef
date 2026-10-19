import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Nieuwe state voor de mobiele dropdown
  const { pathname } = useLocation();

  const closeAll = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeAll}>
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
                onClick={closeAll}
              >
                Home
              </NavLink>
            </li>

            <li className="navbar__dropdown">
              <button
                type="button"
                className={`navbar__link dropdown-toggle ${pathname.startsWith("/diensten") ? " active" : ""}`}
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
                style={{
                  background: "none",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
              >
                Diensten
                <span style={{ marginLeft: "6px", fontSize: "12px" }}>
                  {dropdownOpen ? "▴" : "▾"}
                </span>
              </button>

              <ul
                className={`navbar__dropdown-menu${dropdownOpen ? " open" : " closed"}`}
              >
                <li>
                  <NavLink
                    to="/diensten/trimbeurt-honden"
                    className={({ isActive }) =>
                      `navbar__dropdown-item${isActive ? " active" : ""}`
                    }
                    onClick={closeAll}
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
                    onClick={closeAll}
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
                    onClick={closeAll}
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
                    onClick={closeAll}
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
                    onClick={closeAll}
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
                    onClick={closeAll}
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
                    onClick={closeAll}
                  >
                    Ontspanningsmassage
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/huisregels"
                className={({ isActive }) =>
                  `navbar__link${isActive ? " active" : ""}`
                }
                onClick={closeAll}
              >
                Huisregels
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tarieven"
                className={({ isActive }) =>
                  `navbar__link${isActive ? " active" : ""}`
                }
                onClick={closeAll}
              >
                Tarieven
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navbar__link cta-link${isActive ? " active" : ""}`
                }
                onClick={closeAll}
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
