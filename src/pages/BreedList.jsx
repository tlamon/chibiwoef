import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { breeds } from "../data/breeds";
import { fciGroups } from "../data/fciGroups";

const BreedList = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const lang = (i18n.resolvedLanguage || "nl").split("-")[0];
  const basePath = lang === "en" ? "breeds" : "rassen";
  const baseGroupPath = lang === "en" ? "group" : "groep";

  const getGroupText = (group) => {
    const key = `breedGroups.${group}`;
    const translatedGroupName = t(key);
    if (translatedGroupName !== key) {
      return translatedGroupName;
    }
    return `${t("breedList.groupLabel")} ${group}`;
  };

  const getGroupSlug = (groupId) => {
    const group = fciGroups.find((item) => item.id === groupId);
    if (!group) return "";
    return lang === "en" ? group.slugEN : group.slugNL;
  };

  const filteredBreeds = useMemo(() => {
    return breeds.filter(
      (breed) =>
        breed.nameEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
        breed.nameNL.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <main>
      <Helmet>
        <title>{t("breedList.pageTitle")} - Chibi Woef</title>
        <meta name="description" content={t("breedList.metaDescription")} />
      </Helmet>
      {/* <div className="page-hero">
        <span className="badge">FCI Bibliotheek</span>
        <h1 className="page-hero__title">{t("breedList.title")}</h1>
        <p className="page-hero__sub">{t("breedList.intro")}</p>
      </div> */}

      <section>
        <div className="container">
          <div className="box-white breed-wrap">
            <div className="breed-search-wrap">
              <div className="bone-wrap">
                <input
                  type="text"
                  className="breed-search"
                  placeholder={t("breedList.searchPlaceholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="menu-block">
              {filteredBreeds.length === 0 ? (
                <p className="breed-no-result">{t("breedList.noResults")}</p>
              ) : (
                <div className="breed-grid">
                  {filteredBreeds.map((breed) => (
                    <Link
                      key={breed.id}
                      to={`/${lang}/${basePath}/${breed.slug}`}
                      className="breed-card"
                    >
                      <div className="breed-card__info">
                        <strong className="breed-card__name">
                          {lang === "en" ? breed.nameEN : breed.nameNL}
                        </strong>
                        <Link
                          to={`/${lang}/${baseGroupPath}/${getGroupSlug(breed.fciGroup)}`}
                          className={`breed-card__group-badge fci-group-badge fci-group-badge--${breed.fciGroup}`}
                          onClick={(event) => event.stopPropagation()}
                        >
                          <span
                            className="fci-group-badge__dot"
                            aria-hidden="true"
                          />
                          {getGroupText(breed.fciGroup)}
                        </Link>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BreedList;
