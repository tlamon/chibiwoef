import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
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
import BreedList from "./pages/BreedList";
import BreedDetail from "./pages/BreedDetail";
import FciGroup from "./pages/FciGroup";

const GA_ID = "G-RCSNBD9NJN";

function getCurrentLangFromPath(pathname) {
  const lang = pathname.split("/")[1];
  return lang === "en" ? "en" : "nl";
}

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
        <Route path="/" element={<Navigate to="/nl" />} />
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/tarieven" element={<Tarieven />} />
        <Route path="/:lang/huisregels" element={<Huisregels />} />
        <Route path="/:lang/contact" element={<Contact />} />
        <Route path="/:lang/privacy" element={<Privacy />} />
        <Route path="/:lang/rassen" element={<BreedList />} />
        <Route path="/:lang/rassen/:slug" element={<BreedDetail />} />
        <Route path="/:lang/groep/:groupSlug" element={<FciGroup />} />
        <Route path="/:lang/breeds" element={<BreedList />} />
        <Route path="/:lang/breeds/:slug" element={<BreedDetail />} />
        <Route path="/:lang/group/:groupSlug" element={<FciGroup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieConsent
        cookieName="chibiwoef_cookie_consent"
        location="bottom"
        buttonText="Accepteren"
        declineButtonText="Weigeren"
        enableDeclineButton
        disableStyles
        containerClasses="cookie-consent"
        contentClasses="cookie-consent__content"
        buttonClasses="cookie-consent__accept"
        declineButtonClasses="cookie-consent__decline"
        onAccept={() => {
          initGA();
          ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        }}
      >
        Wij gebruiken cookies voor analytische doeleinden (Google Analytics) om
        onze website te verbeteren.{" "}
        <Link
          to={`/${getCurrentLangFromPath(window.location.pathname)}/privacy`}
          className="cookie-consent__link"
        >
          Meer info
        </Link>
      </CookieConsent>
    </BrowserRouter>
  );
}
