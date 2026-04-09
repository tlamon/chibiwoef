import { Helmet } from "react-helmet";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { breeds } from "../data/breeds";
import { getGroupBySlug } from "../data/fciGroups";

export default function FciGroup() {
  const { groupSlug } = useParams();
  const { i18n, t } = useTranslation();
  const lang = (i18n.resolvedLanguage || "nl").split("-")[0];

  const baseBreedPath = lang === "en" ? "breeds" : "rassen";
  const baseGroupPath = lang === "en" ? "group" : "groep";

  const group = getGroupBySlug(groupSlug, lang);

  if (!group) {
    return <Navigate to={`/${lang}/${baseBreedPath}`} replace />;
  }

  const groupName = lang === "en" ? group.nameEN : group.nameNL;
  const groupSummary = lang === "en" ? group.summaryEN : group.summaryNL;

  const groupBreeds = breeds
    .filter((breed) => breed.fciGroup === group.id)
    .sort((a, b) => {
      const aName = lang === "en" ? a.nameEN : a.nameNL;
      const bName = lang === "en" ? b.nameEN : b.nameNL;
      return aName.localeCompare(bName, lang);
    });

  return (
    <main>
      <Helmet>
        <title>{`FCI ${group.id}: ${groupName} - Chibi Woef`}</title>
        <meta
          name="description"
          content={`${t("fciGroups.pageDescriptionPrefix")} ${groupName}.`}
        />
      </Helmet>

      <div className="page-hero">
        <span className="badge">FCI Groep {group.id}</span>
        <div
          className={`fci-group-icon fci-group-icon--${group.id}`}
          aria-hidden="true"
        >
          <span className="fci-group-icon__core" />
        </div>
        <h1 className="page-hero__title">{groupName}</h1>
        <p className="page-hero__sub">{groupSummary}</p>
      </div>

      <section className="pricing-section">
        <div className="container">
          <div className="box-white">
            <p className="box-white__label">{t("fciGroups.breedsInGroup")}</p>

            <div className="breed-grid breed-grid--compact">
              {groupBreeds.map((breed) => (
                <Link
                  key={breed.id}
                  to={`/${lang}/${baseBreedPath}/${breed.slug}`}
                  className="breed-card"
                >
                  <div className="breed-card__info">
                    <strong className="breed-card__name">
                      {lang === "en" ? breed.nameEN : breed.nameNL}
                    </strong>
                  </div>
                </Link>
              ))}
            </div>

            <div className="fci-group-actions">
              <Link
                to={`/${lang}/${baseBreedPath}`}
                className="btn btn-secondary"
              >
                {t("fciGroups.backToBreeds")}
              </Link>
              <Link
                to={`/${lang}/${baseGroupPath}/${groupSlug}`}
                className="btn btn-primary"
              >
                {t("fciGroups.shareGroup")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
