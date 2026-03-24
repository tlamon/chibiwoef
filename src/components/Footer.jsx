import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">♥ Chibi Woef</div>
            <p className="footer__tagline">
              Zorg voor je harige vriendjes met liefde en expertise sinds 2026.
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
                <Link to="/contact">Plan een afspraak</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer__heading">Contact</div>
            <ul className="footer__links">
              <li>
                <a href="tel:0496/309.459">📞 0496/309.459</a>
              </li>
              <li>
                <a href="mailto:hello@chibiwoef.com">✉️ hello@chibiwoef.com</a>
              </li>
              <li>📍 Haacht</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Chibi Woef. All rights reserved.</span>
          <span className="footer__paw">🐾</span>
        </div>
      </div>
    </footer>
  );
}
