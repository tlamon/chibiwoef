import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getBreedsByFciSlug, fciGroups } from "../../data/breeds";

const images = import.meta.glob("../../assets/breeds/*", {
  eager: true,
  import: "default",
});

function img(filename) {
  if (!filename) return null;
  const key = `../../assets/breeds/${filename}`;
  return images[key] ?? null;
}

export default function FciGroupPage() {
  const { groupSlug } = useParams();
  const groupName = fciGroups[groupSlug];
  const groupBreeds = getBreedsByFciSlug(groupSlug);

  if (!groupName) return <Navigate to="/tarieven" replace />;

  return (
    <main>
      <Helmet>
        <title>{groupName} – ChibiWoef</title>
        <meta
          name="description"
          content={`Overzicht van alle rassen in ${groupName} bij ChibiWoef.`}
        />
      </Helmet>

      <div className="page-hero">
        <span className="badge">Notes from the grooming table</span>
        <h1 className="page-hero__title">{groupName}</h1>
        <p className="page-hero__sub">
          Klik op een ras voor de volledige groomingfiche.
        </p>
      </div>

      <section className="contact">
        <div className="container">
          <div className="fci-group__grid">
            {groupBreeds.map((breed) => (
              <Link
                key={breed.slug}
                to={`/rassen/${breed.slug}`}
                className="fci-group__card"
              >
                <div className="breed-polaroid fci-group__polaroid">
                  {img(breed.photo) ? (
                    <img
                      src={img(breed.photo)}
                      alt={breed.name}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="fci-group__placeholder">📷</div>
                  )}
                </div>
                <p className="fci-group__name">{breed.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
