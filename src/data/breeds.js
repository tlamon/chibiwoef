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
    fciSlug: "groep-8",
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
    fciSlug: "groep-8",
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
    didYouKnow: [
      {
        emoji: "💦",
        title: "Gebouwd voor het water",
        text: "Golden Retrievers hebben heuse zwemvliezen tussen hun tenen. Samen met hun waterafstotende vacht en hun staart die als een roer werkt, zijn het geboren watersporthonden. Ze werden in de 19e eeuw gefokt door Lord Tweedmouth in Schotland als ultieme jachthond voor ijskoud water.",
      },
      {
        emoji: "🥚",
        title: "De zachte bek",
        text: "Een getrainde Golden Retriever kan een rauw kippenei in zijn bek nemen en dragen zonder dat de schaal breekt. Dit is ook waarom ze zo graag 'cadeautjes' brengen als je thuiskomt — een schoen, een sok, een tak. Ze móéten iets in hun bek hebben om hun enthousiasme te tonen.",
      },
      {
        emoji: "🧠",
        title: "Slim maar slechte waakhond",
        text: "De Golden staat steevast in de top 5 van slimste hondenrassen en kan honderden commando's leren. Tegelijk zijn ze zo vriendelijk dat de kans groter is dat ze een inbreker enthousiast begroeten met een kwispelende staart en hem de weg wijzen naar de koelkast.",
      },
      {
        emoji: "🕵️",
        title: "Een hond met een baan",
        text: "Door hun intelligentie en kalm karakter worden ze wereldwijd het meest ingezet als geleidehond, hulphond en therapiehond. In Hollywood zijn ze ook onmisbaar — denk aan Shadow uit Homeward Bound of Buddy uit de Air Bud-films.",
      },
      {
        emoji: "🎨",
        title: "Oren als kleurenkaart",
        text: "Je kunt aan de oren van een Golden Retriever puppy zien welke kleur hij krijgt als volwassen hond. De rest van de vacht kleurt na verloop van tijd mee met de (vaak donkerdere) tint van de oren.",
      },
    ],
  },
  {
    slug: "flat-coated-retriever",
    name: "Flat-Coated Retriever",
    heroImg: null,
    photo: "flat-coated-retriever.webp",
    fci: "FCI Groep 8 · Retrievers, Spaniëls en Waterhonden",
    fciSlug: "groep-8",
    metaDescription:
      "Alles over de Flat-Coated Retriever: trimfrequentie, vachtverzorging en groomingaanpak. Notes from the grooming table – ChibiWoef.",
    weight: "25 – 35 kg",
    height: "56 – 62 cm",
    colors: [
      { label: "Zwart", cls: "black" },
      { label: "Lever / Bruin", cls: "chocolate" },
    ],
    freq: null,
    price: null,
    didYouKnow: [
      {
        emoji: "🧚",
        title: "De 'Peter Pan' van de hondenwereld",
        text: "Terwijl de meeste honden rond hun tweede jaar volwassen en rustiger worden, blijft een Flat-coat tot zijn derde of vierde levensjaar (en vaak zelfs tot op hoge leeftijd!) een speelse, maffe puppy met een onuitputtelijke dosis energie.",
      },
      {
        emoji: "😁",
        title: "De 'Flatcoat Smile'",
        text: "Dit ras staat erom bekend dat ze letterlijk kunnen glimlachen als ze super blij zijn. Ze trekken dan hun lippen een stukje naar achteren waardoor je hun tanden ziet. Geen paniek, het is absoluut geen dreiggedrag, maar een teken van pure, aanstekelijke vreugde!",
      },
      {
        emoji: "🐕",
        title: "De vrolijkste staart van het hondenrijk",
        text: "Volgens keurmeesters en liefhebbers heeft de Flat-coat een van de meest actieve staarten ter wereld. Hun staart staat werkelijk nooit stil. Zelfs als ze geconcentreerd aan het werk zijn of rustig moeten wachten, blijft die harige staart onvermoeibaar heen en weer zwiepen.",
      },
      {
        emoji: "🧱",
        title: "Gegoten silhouet",
        text: "Als je een Flat-coat van de zijkant bekijkt, zie je iets heel bijzonders aan zijn hoofd. Waar een Golden of Labrador een duidelijke 'stop' (de knik tussen de snuit en het voorhoofd) heeft, loopt de kop van de Flat-coat in één vloeiende, elegante lijn door. Kynologen omschrijven dit als een hoofd dat 'uit één stuk gegoten is'.",
      },
      {
        emoji: "🎩",
        title: "Bijna uitgestorven",
        text: "Vóór de grote doorbraak van de Labrador en de Golden Retriever was de Flat-coat dé populairste jachthond van de Britse adel en boswachters. Door de Wereldoorlogen stierf het ras echter bijna uit. Gelukkig hebben toegewijde liefhebbers het ras kunnen redden, al is het nog steeds een exclusiever ras dan de Golden.",
      },
      {
        emoji: "🍫",
        title: "Zwart of Lever",
        text: "In tegenstelling tot de regenboog aan kleuren bij andere retrievers, is de Flat-coat er officieel in slechts twee kleuren: gitzwart (black) of prachtig diepbruin (liver). Heel uitzonderlijk wordt er weleens een gele puppy geboren, maar die kleur is volgens de officiële rasstandaard niet erkend.",
      },
    ],
    sections: [
      {
        title: "Trimfrequentie",
        type: "html",
        content:
          "De Flat-Coated Retriever heeft een vergelijkbare vacht als de Golden Retriever: een dichte, waterafstotende buitenvacht met bevedering op oren, borst, buik, poten en staart. De vacht is iets platter en gladder. Gemiddeld komen ze <strong>om de 3 à 6 maanden</strong> naar het trimsalon.",
        freqRow: {
          level: "matig",
          label: "🟡 Matig — kammen en borstelen: 1 tot 2 keer per week",
          price: "Was & Splash: € 60",
          price2: "Volledige trimbeurt: € 80",
          price3: "Tussentijdse borstel- & kambeurt: € 45",
        },
        warning:
          "Scheer een Flat-Coated Retriever nooit kaal. Net als bij de Golden Retriever werkt de dubbele vacht als een natuurlijke isolatielaag. Scheren verstoort dit systeem en de ondervacht kan stugger en wolliger teruggroeien.",
      },
      {
        title: "Trimbeurt",
        type: "grouped",
        intro:
          "De trimbeurt van een Flat-Coated Retriever is vrijwel identiek aan die van een Golden Retriever. Tijdens een volledige trimbeurt doen we het volgende:",
        subSections: [
          {
            title: "Voorbereiding",
            items: [
              "Nagels knippen of vijlen elke 4–6 weken.",
              "Oren reinigen met een milde oorreinigingsoplossing.",
              "Losse vacht en huidschilfers loswerken met een rubber curry, shedding blade of carding tool.",
              "High-velocity dryer over de vacht om vuil te liften en losse haren los te maken.",
              "Klitten in de langhaar zones uitborstelen.",
            ],
          },
          {
            title: "Borstelen",
            items: [
              "Lijnborstelen in secties tot de hond volledig klitvrij is.",
              "Controleer af met een brede kam en je handen.",
              "Extra aandacht voor: achter de oren, kraagzone, dijgebieden, buikvacht en staart.",
            ],
          },
          {
            title: "Carding (ondervacht)",
            items: [
              "Bij veel losse ondervacht: lijngewijs carden in de richting van de vachtgroei.",
              "Gebruik een fijn strippingmes, puimsteen of #40 mes gehouden tussen de vingers.",
            ],
          },
          {
            title: "Poten & Hakken",
            items: [
              "Pads scheren met een #15 tot #40 mes.",
              "Haar tussen de tenen bijknippen met dunscharen.",
              "Hakkels licht bijwerken met dunscharen.",
            ],
          },
          {
            title: "Afwerking",
            items: [
              "Oren licht bijwerken met dunscharen voor een natuurlijke look.",
              "Lange uitwaaierende haren rond de oren met de hand wegtrekken.",
              "Afwerken met een fijne mist coat polish voor extra glans.",
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

export function getBreedsByFciSlug(fciSlug) {
  return breeds.filter((b) => b.fciSlug === fciSlug);
}

export const fciGroups = {
  "groep-8": "FCI Groep 8 · Retrievers, Spaniëls en Waterhonden",
};
