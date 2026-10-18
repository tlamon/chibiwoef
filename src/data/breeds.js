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
          "Een labrador heeft een korte dichte stokvacht en een waterafstotende ondervacht (dubbele vacht). Dat betekent dat hij ongeveer 1 keer per week geborsteld kan worden om losse haren en vuil te verwijderen. Tijdens de rui periodes (lente en herfst) verliezen ze veel ondervacht en helpt het om de vacht vaker te borstelen (2-3 keer per week of zelfs dagelijks). Zo blijft de vacht schoon en gezond en hebben jij (of je robotstofzuiger) minder werk.",
        freqRow: {
          level: "laag",
          label:
            "🟢 Laag — 1 keer per week borstelen met een rubberen borstel of ondervachtkam (zoals een Furminator) om de dode onderwol los te maken",
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
        title: "Slim maar twijfelachtige waakhond",
        text: "De Golden staat steevast in de top 5 van slimste hondenrassen en kan honderden commando's leren. Tegelijk zijn ze zo vriendelijk dat de kans groter is dat ze een inbreker enthousiast begroeten met een kwispelende staart terwijl ze hem de weg wijzen naar de koelkast.",
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
      "Alles over de Flat-Coated Retriever: trimfrequentie, vachtverzorging en groomingaanpak. ChibiWoef.",
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
              "Nagels knippen of vijlen.",
              "Oren reinigen met een milde oorreinigingsoplossing.",
              "Losse vacht en huidschilfers loswerken met een rubber curry, hark, slicker en/of plukmes.",
              "Waterblazer om de vuiligheid en dode haren in de vacht los te maken.",
              "Klitten in de langharige zones uitborstelen.",
            ],
          },
          {
            title: "Borstelen",
            items: [
              "Lijnborstelen in secties tot de hond volledig klitvrij is.",
              "Extra aandacht voor: achter de oren, kraagzone, dijgebieden, buikvacht en staart.",
              "Bij veel losse ondervacht: lijngewijs harken in de richting van de vachtgroei.",
            ],
          },
          {
            title: "Poten & Hakken",
            items: [
              "Voetzooltjes scheren.",
              "Pootjes rond knippen.",
              "Hakken licht bijwerken met een effileerschaar.",
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
  {
    slug: "nova-scotia-duck-tolling-retriever",
    name: "Nova Scotia Duck Tolling Retriever",
    heroImg: null,
    photo: "nova-scotia-duck-tolling-retriever.webp",
    fci: "FCI Groep 8 · Retrievers, Spaniëls en Waterhonden",
    fciSlug: "groep-8",
    metaDescription:
      "Alles over de Nova Scotia Duck Tolling Retriever: trimfrequentie, vachtverzorging en groomingaanpak. ChibiWoef.",
    weight: "17 – 23 kg",
    height: "45 – 51 cm",
    colors: [
      { label: "Rood / Oranje", cls: "red" },
      { label: "Goud", cls: "yellow" },
    ],
    freq: null,
    price: null,
    didYouKnow: [
      {
        emoji: "🦊",
        title: 'De "Vossentruc" (De Tolling-dans)',
        text: 'De Toller heeft een unieke manier van jagen waar hij zijn naam aan dankt (tollen is oud-Engels voor lokken). In plaats van wild te vangen, rent en speelt de Toller vrolijk langs de waterkant om de aandacht van eenden te trekken. De eenden worden nieuwsgierig door deze "dansende vos" en zwemmen dichtbij, waarna de jager ze kan schieten en de Toller ze netjes apporteert.🦆',
      },
      {
        emoji: "🎺",
        title: "De Toller Scream",
        text: "Als een Toller super enthousiast, nerveus of ongeduldig is (bijvoorbeeld als je een bal gaat gooien), produceert hij een heel specifiek geluid: de Toller Scream. Dit is geen normale blaf, maar een hoge, doordringende, bijna zingende kreet die klinkt alsof hij wordt achtervolgd. Heel typisch voor het ras!",
      },
      {
        emoji: "🚀",
        title: 'De "Red Rocket":',
        text: "Hoewel ze eruitzien als een mini-Golden Retriever, hebben ze het energieniveau van een Border Collie. Het zijn echte werkhonden die een duidelijke taak nodig hebben (zoals agility, flyball of jachttraining) om gelukkig te blijven. In huis zijn ze rustig, mits ze buiten hun energie kwijt kunnen!",
      },
      {
        emoji: "🍁",
        title: "Trots Canadees erfgoed",
        text: "Het ras werd ontwikkeld in Nova Scotia, Canada, in de vroege 19e eeuw. De Toller is zo'n belangrijk deel van de Canadese identiteit dat hij in 1995 tot officieel provinciaal symbool van Nova Scotia werd uitgeroepen.",
      },
    ],
    sections: [
      {
        title: "Trimfrequentie",
        type: "html",
        content:
          "De Nova Scotia Duck Tolling Retriever (kortweg de Toller) is de kleinste van alle retrieverrassen, maar heeft een minstens even grote persoonlijkheid! De verzorging is gelukkig relatief eenvoudig, omdat hun vacht van nature vuil- en waterafstotend is. De Toller hoeft maar <strong>2 à 3 keer per jaar</strong> naar het trimsalon, best rond de ruiperioden:" +
          "<ol style='padding-left:1.8rem'>" +
          "<li><strong>Lenterui (april/mei):</strong> wanneer de dikke wintervacht loslaat.</li>" +
          "<li><strong>Herfstrui (oktober/november):</strong> wanneer de zomervacht plaatsmaakt voor de wintervacht.</li>" +
          "<li><strong>Zomertweak (optioneel):</strong> vlak voor of na de zomer om hardnekkige pluiswol weg te werken.</li>" +
          "</ol>",
        freqRow: {
          level: "laag",
          label:
            "🟢 Laag — 2 à 3 beurten per jaar, afgestemd op de ruiperioden",
          price: "Was & Splash: € 55",
          price2: "Volledige trimbeurt: € 70",
          price3: "Tussentijdse borstel- & kambeurt: € 35",
        },
        warning:
          "Scheer een Toller nooit kaal. Net als bij de Golden en Flat-Coat werkt de dubbele vacht als een natuurlijke isolatielaag en bescherming bij het zwemmen.",
      },
      {
        title: "Trimbeurt",
        type: "grouped",
        exampleImgs: [
          {
            file: "nova-scotia-duck-tolling-retriever-example.png",
            caption: "Naturel model",
          },
        ],
        intro:
          "De trimbeurt van een Toller is vergelijkbaar met die van een Golden Retriever, maar vraagt minder tijd door de compactere bevedering:",
        subSections: [
          {
            title: "Voorbereiding",
            items: [
              "Nagels knippen of vijlen.",
              "Oren reinigen -> Tollers zijn waterliefhebbers, dus de oren worden extra in de gaten gehouden op vocht en infecties.",
              "Losse vacht loswerken met een rubbere kam of ontwoller.",
              "Waterblazer om vuil en losse haren uit de vacht te blazen.",
            ],
          },
          {
            title: "Borstelen",
            items: [
              "Lijnborstelen in secties tot volledig klitvrij.",
              "Extra aandacht voor: achter de oren, kraag, dijgebieden, buikvacht en staart.",
            ],
          },
          {
            title: "Ondervacht behandelen",
            items: [
              "Bij veel losse ondervacht: lijngewijs ontwollen of harken in de richting van de vachtgroei.",
              "Deze is minder uitgesproken dan bij de Golden, maar niet overslaan tijdens ruiperiode.",
            ],
          },
          {
            title: "Poten & Hakken",
            items: [
              "Voetzolen uitscheren voor betere grip en hygiëne.",
              "Haar tussen de tenen bijknippen met dunscharen.",
              "Hakkels licht bijwerken indien nodig.",
            ],
          },
          {
            title: "Afwerking",
            items: [
              "Oren licht bijwerken voor een natuurlijke look.",
              "Afwerken met coat polish voor extra glans op de roodgouden vacht.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "engelse-cocker-spaniel",
    name: "Engelse Cocker Spaniël",
    heroImg: null,
    photo: "engelse-cocker-spaniel.webp",
    fci: "FCI Groep 8 · Retrievers, Spaniëls en Waterhonden",
    fciSlug: "groep-8",
    metaDescription:
      "Alles over de Engelse Cocker Spaniël: trimfrequentie, plukken vs. scheren, vachtverzorging en groomingaanpak. ChibiWoef.",
    weight: "12 – 14,5 kg",
    height: "38 – 41 cm",
    colors: [
      { label: "Zwart", cls: "black" },
      { label: "Goud / Oranje", cls: "yellow" },
      { label: "Chocolade", cls: "chocolate" },
      { label: "Blue Roan", cls: "teal" },
    ],
    freq: null,
    price: null,
    didYouKnow: [
      {
        emoji: "🪵",
        title: '"Cocker" dankt zijn naam aan een vogel',
        text: "De honden zijn oorspronkelijk gefokt in Groot-Brittannië om te jagen op de houtsnip. De Engelse naam voor deze vogel is de Woodcock. Omdat deze spaniëls uitblonken in het opsporen van juist deze vogel, kregen ze de naam 'Cocker' Spaniël.",
      },
      {
        emoji: "👂",
        title: "Gevaar voor natte oren (en infecties)",
        text: "Hun iconische lange flaporen zijn prachtig, maar sluiten de gehoorgang volledig af van frisse lucht. Hierdoor blijft de binnenkant van het oor snel vochtig, wat hen erg gevoelig maakt voor oorontstekingen. Veel eigenaren gebruiken daarom speciale 'snoods' (een soort haarband voor honden) tijdens het eten, zodat de oren niet in de voerbak hangen!",
      },
      {
        emoji: "🎬",
        title: "Beroemdste Disney-hond",
        text: "De bekendste Engelse Cocker Spaniël ter wereld is ongetwijfeld Lady uit de iconische Disney-film Lady and the Tramp (Roel en de Vagebond). Haar elegante uiterlijk en zijdezachte oren zorgden wereldwijd voor een gigantische populariteit van het ras.",
      },
      {
        emoji: "🐾",
        title: "De vrolijke 'Wiggle'",
        text: 'Cockers staan bekend als ontzettend enthousiast. Als ze blij zijn, kwispelen ze niet alleen met hun staart, maar schudt hun hele achterhand en heupen vrolijk mee. In het Engels noemen liefhebbers dit gedrag liefkozend de "Cocker Wiggle".',
      },
    ],
    sections: [
      {
        title: "Trimfrequentie",
        type: "html",
        content:
          "De Engelse Cocker Spaniël heeft een van de meest arbeidsintensieve vachten van de spaniëlgroep. De zijdezachte, halflange vacht met karakteristieke <em>bevedering</em> op oren, borst, buik en poten raakt snel verklít als er niet regelmatig aandacht aan wordt besteed. Een Cocker moet elke <strong>6 à 8 weken</strong> (maximaal 10 weken) naar het trimsalon.",
        freqRow: {
          level: "hoog",
          label: "🔴 Hoog — thuis kammen: minimaal 3 à 4 keer per week",
          price: "Was & Splash: € 65",
          price2: "Volledige trimbeurt: € 80",
          price3: "Tussentijdse borstel- & kambeurt: € 45",
        },
        warning:
          "Gecastreerde of gesteriliseerde Cockers krijgen vaak een hormoonvacht: de vacht wordt pluizig, krullend en niet meer te plukken. Zulke honden moeten volledig geknipt en/of geschoren worden om klitten te voorkomen.",
      },
      {
        title: "De vacht: opbouw en onderhoud",
        type: "html",
        content:
          "Net als bij de Golden Retriever of een herdershond heeft de Engelse Cocker Spaniël een <strong>dubbele vacht</strong> die bestaat uit twee lagen:" +
          "<ul style='padding-left:1.8rem;margin:0.6rem 0'>" +
          "<li><strong>De ondervacht (wol):</strong> Een zachte, kortere laag die dicht op de huid zit om de hond warm te houden.</li>" +
          "<li><strong>De bovenvacht (dekharen):</strong> De langere, gladde haren op de rug en de bevedering aan de poten en buik.</li>" +
          "</ul>" +
          "Bij veel honden met een dubbele vacht (zoals de Toller of de Labrador) valt de dode bovenvacht er vanzelf uit. Bij de Engelse Cocker Spaniël is dat <em>niet</em> zo — de dode haren op de rug blijven in het haarzakje zitten en laten niet uit zichzelf los. Omdat ze handmatig verwijderd moeten worden, noemen we het een <strong>plukvacht</strong>." +
          "<br><br>In de trimsalon behandelen we beide lagen dan ook op een andere manier:" +
          "<ul style='padding-left:1.8rem;margin:0.6rem 0'>" +
          "<li><strong>De bovenvacht wordt geplukt:</strong> de dode, lange haren op de rug worden er met de hand of een plukmesje uitgetrokken.</li>" +
          "<li><strong>De ondervacht wordt gecard:</strong> met een bot mesje of een herdersharkje wordt de overtollige, losse wol eronderuit geharkt.</li>" +
          "</ul>" +
          "Kortom: de Engelse Cocker Spaniël heeft een <strong>dubbele vacht die je onderhoudt als een plukvacht</strong>.",
      },
      {
        title: "Thuis kammen",
        type: "html",
        content:
          "Minstens <strong>3 à 4 keer per week kammen</strong> is een must, dagelijks is zelfs nog beter. Focus op de oksels, liezen, de 'broek' en de lange flaporen: dit zijn ware magneetzones voor klitten, takjes en klitbollen na een wandeling. Gebruik een pennenborstel of slickerborstel om laag voor laag te werken, en controleer altijd tot op de huid met een fijne metalen kam.",
      },
      {
        title: "Trimbeurt",
        type: "grouped",
        exampleImgs: [
          {
            file: "english-cocker-spaniel-example.webp",
            caption: "Ras standaard trimmodel",
          },
          {
            file: "engelse-cocker-spaniel-example2.jpg",
            caption: "Ras standaard trimmodel",
          },
        ],
        intro:
          "Een Cocker-trim combineert twee verschillende technieken: plukken voor de rug en scheren/knippen voor de rest:",
        subSections: [
          {
            title: "Voorbereiding",
            items: [
              "Nagels knippen of vijlen",
              "Oren reinigen; Cockers zijn bijzonder gevoelig voor oorontstekingen door hun afgesloten gehoorgang.",
              "Losse klitten en vacht borstelen met een slickerborstel.",
              "Eventueel een waterblazer om vuil en losse haren uit de vacht te blazen.",
            ],
          },
          {
            title: "Plukken & Carding (rug)",
            items: [
              "De dode, losse bovenvacht op de rug wordt met de hand of een bot trimmesje uitgeplukt.",
              "Plukken behoudt de juiste vachttextuur: glad, glanzend en waterafstotend.",
              "Bij te zachte of wollige vachten (bijv. na castratie) wordt de rug ook weleens geschoren op  3, 6, 9 of 10mm.",
              "Nooit 'tegen de haargroei' knippen — dit maakt gaten in de vacht die vrijwel niet te herstellen zijn.",
            ],
          },
          {
            title: "Scheren & Knippen (hoofd, hals, oren)",
            items: [
              "Het hoofd wordt kort gehouden met een effileerschaar of tondeuze (#7F of #10) voor een strakke look.",
              "De hals en de keelstreek worden kortgeschoren in een 'V'-lijn volgend de cowlick, van de oren naar het borstbeen.",
              "De bovenkant van de oren (top 1/3) wordt kortgeknipt of geschoren voor een betere luchtcirculatie.",
              "De lange bevedering onderaan de oren wordt licht bijgewerkt en rondgeknipt voor een nette look.",
            ],
          },
          {
            title: "Furnishings (bevedering)",
            items: [
              "De lange haren aan de achterkant van de voorpoten en de 'broek' worden gekamd en licht bijgewerkt.",
              "De voorkant van de voorpoten: kort en glad, vloeiend overgaand in de lange bevedering aan de achterkant.",
              "Buikvacht: laten of licht bijknippen voor een gebalanceerde silhouet.",
            ],
          },
          {
            title: "Poten & Hakken",
            items: [
              "Voetzolen uitscheren.",
              "Poten rondknippen.",
              "Hakken licht bijwerken met een effileerschaar of een #4F in omgekeerde richting.",
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
