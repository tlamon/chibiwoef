import { useEffect } from "react";
import { Link } from "react-router-dom";
import MemeImg from "../assets/lipstick-dog.webp";

export default function NotFound() {
  useEffect(() => {
    document.title = "Pagina niet gevonden – Chibi Woef";
  }, []);

  return (
    <main className="not-found">
      <div className="not-found__inner">
        <h1 className="not-found__code">404</h1>
        <img
          src={MemeImg}
          alt="Nope... I have not seen your page"
          className="not-found__meme"
        />
        <p className="not-found__msg">
          Deze pagina bestaat niet... of toch wel? 🐾
        </p>
        <Link to="/" className="btn btn-primary">
          Terug naar huis →
        </Link>
      </div>
    </main>
  );
}
