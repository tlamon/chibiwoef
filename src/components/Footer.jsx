import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">🐾 Paws &amp; Whiskers Pet Care</div>
            <p className="footer__tagline">
              Caring for your furry, feathered, and scaly family members with
              love and expertise since 2012.
            </p>
          </div>

          <div>
            <div className="footer__heading">Pages</div>
            <ul className="footer__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tarieven">Tarieven</Link>
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
                <a href="tel:+15551234567">📞 (555) 123-4567</a>
              </li>
              <li>
                <a href="mailto:hello@pawsandwhiskers.com">
                  ✉️ hello@pawsandwhiskers.com
                </a>
              </li>
              <li>📍 123 Maple Street, Portland, OR 97201</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Paws &amp; Whiskers Pet Care. All rights reserved.</span>
          <span className="footer__paw">🐾</span>
        </div>
      </div>
    </footer>
  );
}
