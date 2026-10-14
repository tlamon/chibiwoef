/**
 * Breed data. To add a new breed:
 * 1. Add an entry here
 * 2. Place heroImg (PNG) and photo (JPG/PNG) in src/assets/breeds/
 * Color options: black | yellow | chocolate | white | cream | red | brindle | blue | custom
 * Freq levels: laag | matig | regelmatig | hoog
 * Section types: list | text
 */

export const breeds = [
  {
    slug: "labrador-retriever",
    name: "Labrador Retriever",
    heroImg: "labrador-retriever-hero.png",
    photo: "labrador-retriever.webp",
    fci: "FCI Groep 8 · Retrievers, Spaniëls en Waterhonden",
    metaDescription:
      "Alles over de Labrador Retriever: trimfrequentie, vachttype, wassen en drogen. ChibiWoef.",
    weight: "25 – 36 kg",
    height: "54 – 57 cm",
    colors: [
      { label: "Zwart", cls: "black" },
      { label: "Geel / Crème", cls: "yellow" },
      { label: "Chocolade / Bruin", cls: "chocolate" },
    ],
    freq: null,
    price: null,
    sections: [
      {
        title: "Trimfrequentie",
        type: "text",
        content:
          "Een labrador heeft een korte dubbele vacht. Dat betekent dat hij regelmatig geborsteld moet worden om losse haren te verwijderen en klitten te voorkomen. Één keer per week tot eens per 12 weken, afhankelijk van de levensstijl van de hond en de tijd van het jaar. Tijdens de rui periodes helpt het om de vacht vaker te wassen (bijvoorbeeld tijdens de lente en herfst), hierdoor blijft de vacht schoon en gezond en hebben jij of je robotstofzuiger minder werk.",
        freqRow: {
          level: "laag",
          label: "🟢 Laag — wassen elke 6–12 weken",
          price: "Volledige trimbeurt/Was & Splash: € 60",
        },
      },
      {
        title: "Vacht & Huid",
        type: "list",
        items: [
          "Korte, waterafstotende, strakke vacht die dicht op het lichaam ligt.",
          "Weert zowel warmte als koude dankzij de waterafstotende ondervacht.",
          "De huid produceert van nature lichaamsvet — dit kan een 'hondengeur' veroorzaken bij sommige honden.",
          "Tijdens de rui periodes wisselt de vacht volledig waardoor er veel losse haren vrijkomen.",
        ],
      },
      {
        title: "Tijdens de trimbeurt",
        type: "text",
        content:
          "De vacht wordt geborsteld en gewassen met een milde shampoo. Daarna blazen we de losse en dode haren weg met een waterblazer. De oren worden gecontroleerd en indien nodig gereinigd. De nagels worden geknipt en de voetzolen worden geschoren.",
      },
    ],
  },
  {
    slug: "golden-retriever",
    name: "Golden Retriever",
    heroImg: null,
    photo: "golden-retriever.webp",
    fci: "FCI Groep 8 · Retrievers, Spaniëls en Waterhonden",
    metaDescription:
      "Alles over de Golden Retriever: trimfrequentie, borstelen, carding en afwerking ChibiWoef.",
    weight: "25 – 34 kg",
    height: "51 – 61 cm",
    colors: [
      { label: "Licht goud / Crème", cls: "yellow" },
      { label: "Goud", cls: "yellow" },
      { label: "Donker goud", cls: "chocolate" },
    ],
    freq: null,
    price: null,
    sections: [
      {
        title: "Trimfrequentie",
        type: "html",
        content:
          "Een Golden Retriever heeft een dubbele vacht met een zachte ondervacht en een waterafstotende bovenvacht. De ondervacht wisselt tijdens de ruiperiode volledig waardoor ze veel losse haren verliezen. Gemiddeld komen ze 2 tot 4 keer per jaar naar het trimsalon (<strong>om de 3 à 6 maanden</strong>).",
        freqRow: {
          level: "matig",
          label: "🟡 Matig — kammen en borstelen: 1 tot 2 keer per week",
          price: "Was & Splash: € 60",
          price2: "Volledige trimbeurt: € 80",
          price3: "Tussentijdse borstel- & kambeurt: € 45",
        },
        warning:
          "Scheer een Golden Retriever nooit kaal. Hun dubbele vacht werkt als een natuurlijke isolatielaag. Als je de vacht afscheert, verstoor je dit systeem, groeit de ondervacht vaak stugger en wolliger terug, en kan de hond zijn warmte juist minder goed kwijt.",
      },
      {
        title: "Trimbeurt",
        type: "grouped",
        exampleImgs: [
          { file: "golden-retriever-example.webp", caption: "Naturel model" },
        ],
        intro:
          "Tijdens een volledige trimbeurt voor jouw Golden Retriever doen we het volgende:",
        subSections: [
          {
            title: "Kleine verzorging",
            items: [
              "Nagels knippen of vijlen",
              "Oren nakijken en reinigen indien nodig",
              "Losse vacht en huidschilfers loswerken met een rubberen borstel, uitwolzaag, puimsteen of trimmes.",
              "Drogen met de waterblazer om losse en dode haren los te maken.",
              "Klitten in de langhaar zones uitborstelen of scheren voor het wassen.",
            ],
          },
          {
            title: "Borstel- en kambeurt",
            items: [
              "Lijnborstelen in secties tot de hond volledig klitvrij is.",
              "Extra aandacht voor: zones achter de oren, kraag, dijgebieden, buikvacht en staart.",
            ],
          },
          {
            title: "Ontwollen of harken van de ondervacht",
            items: [
              "Bij veel losse ondervacht: lijngewijs ontwollen in de richting van de vachtgroei met een herdershark en/of puimsteen.",
              "Dit verwijdert de zachte, donzige ondervacht zodat de dekhaartjes beter aansluiten.",
            ],
          },
          {
            title: "Poten, Hakken en oren",
            items: [
              "Voetzooltjes uitscheren voor een betere grip en om vuilophoping te voorkomen.",
              "Poten rond knippen",
              "De hak bij langere vacht licht bijwerken met de effileerschaar",
              "Oren licht bijwerken en eventueel plukken van dode haren.",
            ],
          },
        ],
      },
    ],
  },
];

export function getBreed(slug) {
  return breeds.find((b) => b.slug === slug) ?? null;
}
