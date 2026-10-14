import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getBreed } from "../../data/breeds";

/* Vite's import.meta.glob pre-loads all breed images at build time */
const images = import.meta.glob("../../assets/breeds/*", {
  eager: true,
  import: "default",
});

function img(filename) {
  const key = `../../assets/breeds/${filename}`;
  return images[key] ?? "";
}

export default function BreedPage() {
  const { slug } = useParams();
  const breed = getBreed(slug);
  const [lightbox, setLightbox] = useState(null);

  if (!breed) return <Navigate to="/tarieven" replace />;

  return (
    <main>
      {lightbox && (
        <div
          className="breed-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption ?? "Afbeelding"}
        >
          <img src={lightbox.src} alt={lightbox.caption ?? ""} className="breed-lightbox__img" />
          {lightbox.caption && (
            <p className="breed-lightbox__caption">{lightbox.caption}</p>
          )}
        </div>
      )}
      <Helmet>
        <title>{breed.name} – Trimgids – ChibiWoef</title>
        <meta name="description" content={breed.metaDescription} />
        <meta property="og:title" content={`${breed.name} – ChibiWoef`} />
        <meta property="og:description" content={breed.metaDescription} />
      </Helmet>

      <div className="page-hero breed-page-hero">
        <div>
          <span className="badge">{breed.fci}</span>
          <h1 className="page-hero__title">{breed.name}</h1>
        </div>
        {breed.heroImg && (
          <img
            src={img(breed.heroImg)}
            alt=""
            aria-hidden="true"
            className="breed-page-hero__img"
          />
        )}
      </div>

      <section className="contact">
        <div className="container">
          <div className="breed-page__layout">
            <div className="breed-page__photo">
              <div className="breed-polaroid">
                <img
                  src={img(breed.photo)}
                  alt={breed.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="breed-page__content">
              {breed.colors?.length > 0 && (
                <>
                  <h2 className="breed-page__section-title">Kleuren</h2>
                  <div className="breed-page__colors">
                    {breed.colors.map((c) => (
                      <span
                        key={c.label}
                        className={`breed-page__color breed-page__color--${c.cls}`}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {(breed.weight || breed.height) && (
                <>
                  <h2 className="breed-page__section-title">
                    Grootte en gewicht
                  </h2>
                  <div className="breed-page__tags">
                    {breed.weight && (
                      <span className="breed-page__tag">⚖️ {breed.weight}</span>
                    )}
                    {breed.height && (
                      <span className="breed-page__tag">📏 {breed.height}</span>
                    )}
                  </div>
                </>
              )}

              {breed.sections?.map((section) => (
                <div
                  key={section.title}
                  className="breed-page__section box-white"
                >
                  <h2 className="breed-page__section-title">{section.title}</h2>
                  {section.type === "list" ? (
                    <ul className="breed-page__list">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : section.type === "grouped" ? (
                    <>
                      {section.intro && (
                        <p
                          className="breed-page__text"
                          style={{ marginBottom: "16px" }}
                        >
                          {section.intro}
                        </p>
                      )}
                      {section.subSections?.map((sub) => (
                        <div key={sub.title} className="breed-page__subsection">
                          <h3 className="breed-page__subsection-title">
                            {sub.title}
                          </h3>
                          <ul className="breed-page__list">
                            {sub.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {section.exampleImgs?.length > 0 && (
                        <div className="breed-page__examples">
                          {section.exampleImgs.map((ex) => (
                            <figure
                              key={ex.file}
                              className="breed-page__example"
                              onClick={() => setLightbox({ src: img(ex.file), caption: ex.caption })}
                              role="button"
                              tabIndex={0}
                              aria-label={`Vergroot: ${ex.caption ?? "afbeelding"}`}
                            >
                              <img
                                src={img(ex.file)}
                                alt={ex.caption ?? ""}
                                loading="lazy"
                                decoding="async"
                              />
                              {ex.caption && (
                                <figcaption className="breed-page__example-caption">
                                  {ex.caption}
                                </figcaption>
                              )}
                            </figure>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <p
                        className="breed-page__text"
                        dangerouslySetInnerHTML={
                          section.type === "html"
                            ? { __html: section.content }
                            : undefined
                        }
                      >
                        {section.type !== "html" ? section.content : undefined}
                      </p>
                      {section.tip && (
                        <p
                          className="breed-page__text"
                          style={{ marginTop: "10px" }}
                        >
                          <em>{section.tip}</em>
                        </p>
                      )}
                    </>
                  )}
                  {section.freqRow && (
                    <div className="breed-page__freq-row">
                      <span
                        className={`breed-page__freq breed-page__freq--${section.freqRow.level}`}
                      >
                        {section.freqRow.label}
                      </span>
                      {section.freqRow.price && (
                        <span className="breed-page__freq breed-page__freq--price">
                          {section.freqRow.price}
                        </span>
                      )}
                      {section.freqRow.price2 && (
                        <span className="breed-page__freq breed-page__freq--price">
                          {section.freqRow.price2}
                        </span>
                      )}
                      {section.freqRow.price3 && (
                        <span className="breed-page__freq breed-page__freq--price">
                          {section.freqRow.price3}
                        </span>
                      )}
                    </div>
                  )}
                  {section.warning && (
                    <div className="breed-page__warning">
                      ⚠️ {section.warning}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
