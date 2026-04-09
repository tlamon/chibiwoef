import { Navigate, Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { breeds } from "../data/breeds";
import { fciGroups } from "../data/fciGroups";

const breedBannerImages = import.meta.glob(
  "../assets/breeds/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" },
);

function normalizeAssetName(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const COAT_KEY_BY_TYPE = {
  short: "breedDetail.coat.short",
  long: "breedDetail.coat.long",
  wire: "breedDetail.coat.wire",
  curly: "breedDetail.coat.curly",
  double: "breedDetail.coat.double",
  corded: "breedDetail.coat.corded",
  hairless: "breedDetail.coat.hairless",
};

const SIZE_KEY_BY_TYPE = {
  toy: "breedDetail.size.toy",
  small: "breedDetail.size.small",
  medium: "breedDetail.size.medium",
  large: "breedDetail.size.large",
  standard: "breedDetail.size.standard",
};

const BreedDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "nl").split("-")[0];
  const basePath = lang === "en" ? "breeds" : "rassen";
  const baseGroupPath = lang === "en" ? "group" : "groep";

  const breed = breeds.find((b) => b.slug === slug);

  if (!breed) {
    return <Navigate to={`/${lang}/${basePath}`} replace />;
  }

  const breedName = lang === "nl" ? breed.nameNL : breed.nameEN;
  const coatKey = COAT_KEY_BY_TYPE[breed.coat] || "breedDetail.coat.unknown";
  const sizeKey = SIZE_KEY_BY_TYPE[breed.size] || "breedDetail.size.unknown";
  const character = lang === "nl" ? breed.characterNL : breed.characterEN;
  const groomingCare = lang === "nl" ? breed.groomingNL : breed.groomingEN;
  const groupKey = `breedGroups.${breed.fciGroup}`;
  const translatedGroupName = t(groupKey);
  const groupDisplay =
    translatedGroupName !== groupKey
      ? translatedGroupName
      : `${t("breedList.groupLabel")} ${breed.fciGroup}`;
  const groupOverviewMap = {
    1: t("breedDetail.group1Overview"),
    2: t("breedDetail.group2Overview"),
    3: t("breedDetail.group3Overview"),
    4: t("breedDetail.group4Overview"),
    5: t("breedDetail.group5Overview"),
    6: t("breedDetail.group6Overview"),
    7: t("breedDetail.group7Overview"),
    8: t("breedDetail.group8Overview"),
    9: t("breedDetail.group9Overview"),
    10: t("breedDetail.group10Overview"),
  };
  const groupOverview = groupOverviewMap[breed.fciGroup];
  const group = fciGroups.find((item) => item.id === breed.fciGroup);
  const groupSlug = group ? (lang === "en" ? group.slugEN : group.slugNL) : "";
  const normalizedSlug = normalizeAssetName(breed.slug);
  const breedBannerSrc =
    Object.entries(breedBannerImages).find(([path]) => {
      const fileName = path.split("/").pop()?.replace(/\.[^.]+$/, "") || "";
      return normalizeAssetName(fileName) === normalizedSlug;
    })?.[1] || null;

  return (
    <main>
      <Helmet>
        <title>{breedName} - Chibi Woef</title>
        <meta
          name="description"
          content={`${t("breedDetail.metaDescriptionPrefix")} ${breedName}.`}
        />
      </Helmet>
      <div className={`page-hero${breedBannerSrc ? " page-hero--with-banner" : ""}`}>
        {breedBannerSrc && (
          <img
            src={breedBannerSrc}
            alt=""
            aria-hidden="true"
            className="page-hero__banner-image"
          />
        )}
        {breedBannerSrc && <div className="page-hero__banner-overlay" aria-hidden="true" />}
        <span className="badge">{t("breedDetail.badge")}</span>
        <h1 className="page-hero__title">{breedName}</h1>
        <p className="page-hero__sub">FCI: {groupDisplay}</p>
      </div>

      <section>
        <div className="container grid grid-template-columns-2-1fr">
          <div className="box-white">
            <h2>{t("breedDetail.groomingTitle")}</h2>

            <div className="breed-content">
              <h2>{t("breedDetail.characterTitle")}</h2>
              <p>{character || t("breedDetail.characterPlaceholder")}</p>
            </div>

            <div className="breed-content breed-detail-coatcare-block">
              <h2>{t("breedDetail.coatCareTitle")}</h2>
              <p className="breed-detail-muted-text">
                {groomingCare || t("breedDetail.groomingInfoPlaceholder")}
              </p>
            </div>

            <div className="breed-content">
              <h2>{t("breedDetail.quickFacts")}</h2>
              <ul>
                <li>
                  <strong>FCI:</strong>{" "}
                  {groupSlug ? (
                    <Link to={`/${lang}/${baseGroupPath}/${groupSlug}`}>
                      {groupDisplay}
                    </Link>
                  ) : (
                    groupDisplay
                  )}
                </li>
                <li>
                  <strong>{t("breedDetail.coatLabel")}:</strong> {t(coatKey)}
                </li>
                <li>
                  <strong>{t("breedDetail.sizeLabel")}:</strong> {t(sizeKey)}
                </li>
              </ul>
            </div>

            <Link
              to={`/${lang}/${basePath}`}
              className="btn btn-secondary breed-detail-back-btn"
            >
              {t("breedDetail.backToList")}
            </Link>
          </div>
          {groupOverview && (
            <div className="box-teal">
              <p className="box-teal__label">
                {t("breedDetail.groupOverviewTitle")} {breed.fciGroup}:{" "}
                {groupDisplay}
              </p>
              <p className="box-teal__items">{groupOverview}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BreedDetail;
