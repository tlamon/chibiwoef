export const fciGroups = [
  {
    id: 1,
    slugNL: "herdershonden-en-veedrijvers",
    slugEN: "sheepdogs-and-cattle-dogs",
    nameNL: "Herdershonden en Veedrijvers",
    nameEN: "Sheepdogs and Cattle Dogs",
    summaryNL:
      "Intelligent, werkgedreven, loyaal en zeer trainbaar. Vaak waaks en soms gereserveerd naar vreemden.",
    summaryEN:
      "Intelligent, work-driven, loyal and highly trainable. Often watchful and sometimes reserved with strangers.",
  },
  {
    id: 2,
    slugNL: "pinschers-schnauzers-en-molossers",
    slugEN: "pinschers-schnauzers-and-molossoids",
    nameNL: "Pinschers, Schnauzers en Molossers",
    nameEN: "Pinschers, Schnauzers and Molossoids",
    summaryNL:
      "Krachtige, stabiele honden met uiteenlopende vachtstructuren, van onderhoudsvriendelijk tot trimgevoelig.",
    summaryEN:
      "Powerful, stable dogs with varied coat structures, from low-maintenance to grooming-intensive.",
  },
  {
    id: 3,
    slugNL: "terriers",
    slugEN: "terriers",
    nameNL: "Terriërs",
    nameEN: "Terriers",
    summaryNL:
      "Levendige, moedige en karaktervolle honden. Veel terriërvachten vragen pluk- of trimonderhoud.",
    summaryEN:
      "Lively, courageous dogs with strong character. Many terrier coats need hand-stripping or regular trimming.",
  },
  {
    id: 4,
    slugNL: "teckels",
    slugEN: "dachshunds",
    nameNL: "Teckels",
    nameEN: "Dachshunds",
    summaryNL:
      "Compacte honden met groot karakter. Vachtverzorging hangt sterk af van de variëteit: kort-, lang- of ruwharig.",
    summaryEN:
      "Compact dogs with big personality. Grooming needs depend strongly on variety: smooth, long or wire-haired.",
  },
  {
    id: 5,
    slugNL: "spitsen-en-oertypen",
    slugEN: "spitz-and-primitive-types",
    nameNL: "Spitsen en Oertypen",
    nameEN: "Spitz and Primitive Types",
    summaryNL:
      "Vaak zelfstandige, alerte honden met dubbele vacht. Regelmatig ontwollen is belangrijk, zeker in de ruiperiode.",
    summaryEN:
      "Often independent, alert dogs with double coats. Regular de-shedding is important, especially during seasonal shedding.",
  },
  {
    id: 6,
    slugNL: "lopende-honden-en-zweethonden",
    slugEN: "scenthounds-and-related-breeds",
    nameNL: "Lopende Honden en Zweethonden",
    nameEN: "Scenthounds and Related Breeds",
    summaryNL:
      "Functionele jachthonden met doorgaans praktische vachten. Onderhoud varieert van korthaar tot ruwharig.",
    summaryEN:
      "Functional hunting dogs with mostly practical coats. Maintenance ranges from short to rough coats.",
  },
  {
    id: 7,
    slugNL: "voorstaande-honden",
    slugEN: "pointing-dogs",
    nameNL: "Voorstaande Honden",
    nameEN: "Pointing Dogs",
    summaryNL:
      "Actieve, atletische honden. Vachtverzorging loopt uiteen per ras, van kortharig tot draad- of langharig.",
    summaryEN:
      "Active, athletic dogs. Coat care differs per breed, from short-haired to wire or long coats.",
  },
  {
    id: 8,
    slugNL: "retrievers-spaniels-en-waterhonden",
    slugEN: "retrievers-spaniels-and-water-dogs",
    nameNL: "Retrievers, Spaniëls en Waterhonden",
    nameEN: "Retrievers, Spaniels and Water Dogs",
    summaryNL:
      "Populaire gezinshonden met vaak rijkere vacht. Regelmatig borstelen helpt klitten en overmatige vervilting voorkomen.",
    summaryEN:
      "Popular family dogs with often richer coats. Regular brushing helps prevent tangles and matting.",
  },
  {
    id: 9,
    slugNL: "gezelschapshonden",
    slugEN: "companion-and-toy-dogs",
    nameNL: "Gezelschapshonden",
    nameEN: "Companion and Toy Dogs",
    summaryNL:
      "Kleine tot middelgrote huishonden met uiteenlopende vachttypes. Frequent onderhoud zorgt voor comfort en hygiëne.",
    summaryEN:
      "Small to medium companion dogs with diverse coat types. Frequent care improves comfort and hygiene.",
  },
  {
    id: 10,
    slugNL: "windhonden",
    slugEN: "sighthounds",
    nameNL: "Windhonden",
    nameEN: "Sighthounds",
    summaryNL:
      "Elegante, atletische honden. Veel rassen zijn onderhoudsarm, maar langharige varianten vragen extra borstelzorg.",
    summaryEN:
      "Elegant, athletic dogs. Many breeds are low-maintenance, while long-coated varieties need extra brushing.",
  },
];

export function getGroupBySlug(slug, lang = "nl") {
  const key = lang === "en" ? "slugEN" : "slugNL";
  return fciGroups.find((group) => group[key] === slug) || null;
}
