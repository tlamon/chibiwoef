import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getService } from "../../data/services";
import MobileImg from "../../assets/mobile.webp";

function renderSection(section, i) {
  switch (section.type) {
    case "html":
      return (
        <div key={i} className="service-page__section">
          <h2 className="breed-page__section-title">{section.title}</h2>
          <div
            className="service-page__html"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      );
    case "list":
      return (
        <div key={i} className="service-page__section">
          <h2 className="breed-page__section-title">{section.title}</h2>
          <ul className="service-page__list">
            {section.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "grouped":
      return (
        <div key={i} className="service-page__section">
          <h2 className="breed-page__section-title">{section.title}</h2>
          {section.subSections.map((sub, j) => (
            <div key={j} className="breed-page__subsection">
              <h3 className="breed-page__subsection-title">{sub.title}</h3>
              <ul className="service-page__list">
                {sub.items.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/diensten" replace />;

  return (
    <main>
      <Helmet>
        <title>{service.name} – ChibiWoef</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      <div className="page-hero">
        <span className="badge">{service.emoji} Diensten</span>
        <h1 className="page-hero__title">{service.name}</h1>
        <p className="page-hero__sub">{service.tagline}</p>
      </div>

      <section className="service-page">
        <div className="container">
          <div className="content-stack">
            <div className="content-block">
              <div className="box-white">
                <div className="service-page__meta">
                  <div className="service-page__meta-badges">
                    {service.species.map((s) => (
                      <span key={s} className="service-page__species-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="service-page__meta-info">
                    <span className="service-page__meta-item">
                      ⏱ {service.duration}
                    </span>
                    <span className="service-page__meta-item service-page__meta-item--price">
                      {service.price}
                    </span>
                  </div>
                </div>

                <p className="service-page__intro">{service.intro}</p>

                {service.sections.map((section, i) =>
                  renderSection(section, i),
                )}

                <p className="pricing-note">
                  {service.tariefNote} <Link to="/tarieven">tariefpagina</Link>.
                </p>
              </div>
            </div>

            <div className="cta-banner cta-banner--contact">
              <img
                src={MobileImg}
                className="cta-banner__icon"
                alt=""
                aria-hidden="true"
              />
              <div className="cta-banner__text">
                <h2 className="cta-banner__title">Plan een afspraak</h2>
                <a href="tel:+32496309459" className="cta-banner__phone">
                  +32 496 309 459
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
