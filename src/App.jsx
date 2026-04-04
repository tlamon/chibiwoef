import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tarieven from "./pages/Tarieven";
import Contact from "./pages/Contact";
import Huisregels from "./pages/Huisregels";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";

const GA_ID = "G-RCSNBD9NJN";

function initGA() {
  ReactGA.initialize(GA_ID);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (getCookieConsentValue("chibiwoef_cookie_consent") === "true") {
      ReactGA.send({ hitType: "pageview", page: pathname });
    }
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    if (getCookieConsentValue("chibiwoef_cookie_consent") === "true") {
      initGA();
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarieven" element={<Tarieven />} />
        <Route path="/huisregels" element={<Huisregels />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieConsent
        cookieName="chibiwoef_cookie_consent"
        location="bottom"
        buttonText="Accepteren"
        declineButtonText="Weigeren"
        enableDeclineButton
        onAccept={() => {
          initGA();
          ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        }}
        style={{
          background: "var(--teal-dark)",
          color: "#fff",
          fontSize: "0.875rem",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem 1.5rem",
        }}
        buttonStyle={{
          background: "var(--ocre)",
          color: "#fff",
          fontFamily: "var(--font-body)",
          fontWeight: "700",
          fontSize: "0.875rem",
          borderRadius: "999px",
          padding: "0.5rem 1.25rem",
          border: "none",
          cursor: "pointer",
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "rgba(255,255,255,0.7)",
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "999px",
          padding: "0.5rem 1.25rem",
          cursor: "pointer",
        }}
      >
        Wij gebruiken cookies voor analytische doeleinden (Google Analytics) om
        onze website te verbeteren.{" "}
        <Link
          to="/privacy"
          style={{
            color: "rgba(255,255,255,0.85)",
            textDecoration: "underline",
          }}
        >
          Meer info
        </Link>
      </CookieConsent>
    </BrowserRouter>
  );
}
