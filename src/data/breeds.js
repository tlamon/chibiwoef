/**
 * Breed data. To add a new breed:
 * 1. Add an entry here
 * 2. Place heroImg (PNG) and photo (JPG/PNG) in src/assets/breeds/
 * Color options: black | yellow | chocolate | white | cream | red | brindle | blue | custom
 * Freq levels: laag | matig | regelmatig | hoog
 * Section types: list | text
 */

export const breeds = [
  // D
  {
    slug: "doodle",
    name: "Doodle",
    heroImg: "labradoodle.jpg",
    photo: "labradoodle-colors.avif",
    fci: "Geen FCI-erkenning · Populaire kruising / Gezelshapsmix",
    fciSlug: "groep-9",
    metaDescription:
      "Alles over de Doodle-vachtverzorging: trimfrequentie, de beruchte vachtwissel, het voorkomen van vilt en handige thuistips. ChibiWoef.",
    description:
      "De Doodle (zoals de Labradoodle en Goldendoodle) is oorspronkelijk ontstaan uit de wens om een allergievriendelijke geleidehond te fokken. Inmiddels hebben deze 'teddyberen' de harten van duizenden gezinnen veroverd. Hoewel ze bekendstaan om hun vrolijke, sociale en intelligente karakter, is hun unieke, non-shedding krul- of golfvacht een van de meest intensieve vachttypes in het trimsalon. Zonder de juiste verzorging ligt vilt snel op de loer.",
    weight: "3 – 35 kg",
    height: "25 – 65 cm",
    colors: [
      { label: "Crème", cls: "cream" },
      { label: "Rood", cls: "red" },
      { label: "Chocolade", cls: "chocolate" },
      { label: "Zwart", cls: "black" },
      { label: "Goud", cls: "yellow" },
      { label: "Wit", cls: "white" },
      { label: "Zilver / Grijs", cls: "gray" },
      { label: "Abrikoos", cls: "apricot" },
    ],
    freq: null,
    price: null,
    didYouKnow: [
      {
        emoji: "🦮",
        title: "Geboren als 'hypoallergene' hulphond",
        text: "In 1989 kruiste de Australiër Wally Conron een Labrador met een Poedel. Zijn doel? Een geleidehond fokken voor een blinde vrouw op Hawaï wiens echtgenoot zwaar allergisch was voor hondenhaartjes. De Labradoodle was geboren!",
      },
      {
        emoji: "🪮",
        title: "De beruchte 'Vachtwissel'",
        text: "Rond de leeftijd van 7 tot 14 maanden wisselt een Doodle-pup zijn zachte puppyvacht in voor een volwassen vacht. De dode puppyharen blijven massaal in de nieuwe krullen hangen. Dit is de meest kritieke periode waarin een Doodle binnen een paar dagen compleet in de vilt kan schieten!",
      },
      {
        emoji: "🧸",
        title: "Geen 'erkend' hondenras",
        text: "Hoewel je ze op elke straathoek ziet, is de Doodle officieel geen erkend hondenras door de FCI. Het is een kruising. Hierdoor is elke vacht een verrassing: de ene Doodle heeft dikke poedelkrullen (wool coat), de ander losse golven (fleece coat) en een enkeling heeft stugge haren (hair coat). Wist je trouwens dat de doodle voor 75% uit poedelgenen bestaat? Vandaar hun hoge intelligentie en trainbaarheid.",
      },
      {
        emoji: "🌪️",
        title: "Wandelende stofzuigers",
        text: "Omdat een Doodle-vacht zo dicht en wollig is, werkt deze buiten als een magneet voor de natuur. Takjes, blaadjes, zand en klisbollen blijven moeiteloos in de vacht haken. Na een boswandeling nemen ze vaak het halve bos mee naar binnen!",
      },
    ],
    sections: [
      {
        title: "Trimfrequentie & Tarieven",
        type: "html",
        content:
          "De Doodle-vacht behoort tot de absolute topklasse qua onderhoudsintensiviteit. Omdat ze nauwelijks tot niet verharen, blijven alle dode haren in de vacht zitten. Wordt dit niet losgemaakt? Dan transformeert de vacht binnen no-time in een harde viltlaag die pijnlijk strak op de huid zit. Een Doodle moet elke <strong>6 à 8 weken</strong> naar het trimsalon voor een professionele behandeling. Omdat het type vacht (krul of fleece) en het gedrag van de hond de behandeltijd sterk beïnvloeden, werken wij met transparante <strong>vanaf-prijzen</strong> per gewichtsklasse:" +
          "<ul style='padding-left:1.8rem;margin:0.6rem 0'>" +
          "<li><strong>Doodle mini/extra klein (<5kg):</strong> Voor de allerkleinste Doodles, zoals de Toy Doodle. Heeft de kortste behandeltijd.</li>" +
          "<li><strong>Doodle Klein (5-10kg):</strong> Ideaal voor handzame varianten (zoals de Cockapoo of Mini Doodle). Heeft een kortere behandeltijd.</li>" +
          "<li><strong>Doodle Middel (10-20kg):</strong> De meest voorkomende, actieve gezinshond-grootte (Medium Labradoodle).</li>" +
          "<li><strong>Doodle Groot (>20kg):</strong> Vraagt de maximale behandeltijd en aanzienlijk meer droog- en knipwerk wegens het grote oppervlak (Standaard Labradoodle of Bernedoodle).</li>" +
          "</ul>" +
          "<ol style='padding-left:1.8rem'>" +
          "<li><strong>Volledige trimbeurt:</strong> Inclusief wassen met professionele shampoo, conditioner, handmatig droogblazen, volledig doorkammen en modelleren met de schaar of opzetkammen.</li>" +
          "<li><strong>Tussentijdse was- & blaasbeurt:</strong> Dé perfecte onderhoudsbeurt tussen twee grote trimbeurten in. De vacht wordt gewassen, gevoed met conditioner, volledig droog- en uitgeblazen met de waterblazer en grondig doorgekamd om klitten tijdig te verwijderen.</li>" +
          "<li><strong>Huid- en oorverzorging:</strong> Inspectie en milde reiniging van de gehoorgang en het knippen van de nagels is bij elke behandeling standaard inbegrepen.</li>" +
          "</ol>",
        freqRow: {
          level: "hoog",
          label:
            "🔴 Hoog — minimaal 3 tot 4 keer per week grondig borstelen (vanaf de huid)",
          price: "Volledige trimbeurt - Extra klein (<5kg): Vanaf € 75",
          price: "Volledige trimbeurt - Klein (5-10kg): Vanaf € 80",
          price2: "Volledige trimbeurt - Middel (10-20kg): Vanaf € 100",
          price3: "Volledige trimbeurt - Groot (>20kg): Vanaf € 120",
          price4:
            "Was- & Blaasbeurt (Was & Splash) - Klein: € 45 | Middel: € 60 | Groot: € 75",
          price5:
            "Meerprijs bij zware klitten/vilt (per kwartier extra werk): € 15",
        },
        warning:
          "Onze tarieven zijn gebaseerd op een klitvrije vacht en een meewerkende hond. Als een Doodle ernstig vervilt in het salon binnenkomt, is er uit het oogpunt van dierenwelzijn vaak maar één milde optie: kort scheren. Het ontvilten van een volledig vervilte vacht is voor de hond pijnlijk en beschadigt de huid. Goed thuisborstelen voorkomt deze 'kort-en-kaal-beurt'!",
      },
      {
        title: "De Vacht: Fleece vs. Wool",
        type: "html",
        content:
          "Bij Doodles onderscheiden we hoofdzakelijk twee veeleisende vachttypes die in het salon een specifieke aanpak vragen:" +
          "<ul style='padding-left:1.8rem;margin:0.6rem 0'>" +
          "<li><strong>Fleece Coat (Golvend/Zacht):</strong> Deze vacht heeft losse golven of krullen en voelt zijdezacht aan. Het vraagt veel borstelwerk omdat er makkelijk pluisklitten in ontstaan.</li>" +
          "<li><strong>Wool Coat (Krullend/Dicht):</strong> Deze lijkt erg op de poedelvacht. Het is een zeer dichte vacht met spiraalkrullen die nauwelijks vuil doorlaat, maar enorm snel vilt bij de huid.</li>" +
          "</ul>" +
          "Beide vachttypes worden in het trimsalon <strong>nooit geplukt</strong>, maar met de hand geknipt, geëffileerd of met speciale opzetkammen op de tondeuse gemodelleerd naar de gewenste 'teddybeer-look'.",
      },
      {
        title: "Thuisverzorging: De Gouden Regels",
        type: "html",
        content:
          "Thuisverzorging is bij een Doodle 80% van het werk. Gebruik de juiste materialen om het je makkelijk te maken:" +
          "<ol style='padding-left:1.8rem;margin:0.6rem 0'>" +
          "<li><strong>Lijngewijs borstelen:</strong> Schuif de vacht omhoog en borstel laagje voor laagje vanaf de huid naar buiten met een stevige slickerborstel (zoals een Activet). Alleen over de bovenkant aaien heeft geen zin.</li>" +
          "<li><strong>De nacontrole:</strong> Ga na het borstelen áltijd met een metalen kam door de vacht. Blijft de kam hangen? Then zit er nog een klit.</li>" +
          "<li><strong>Focuszones:</strong> Schenk extra aandacht aan de oksels, de liezen, achter de oren en de snuit (waar eten in blijft hangen).</li>" +
          "</ol>",
      },
      {
        title: "Trimbeurt",
        type: "grouped",
        exampleImgs: [
          {
            file: "doodle-example.jpg",
            caption: "Soorten Doodle-vachten: van zacht golvend tot krullend",
          },
          {
            file: "doodle-example.webp",
            caption: "Teddy-look",
          },
          {
            file: "doodle-example2.webp",
            caption: "Langere vacht voor een weelderige look",
          },

          {
            file: "doodle-example3.webp",
            caption: "Langere vacht voor een weelderige look",
          },
          {
            file: "doodle-example4.webp",
            caption: "Teddy-look",
          },
          {
            file: "doodle-example5.jpg",
            caption: "",
          },
          {
            file: "doodle-example6.jpg",
          },
        ],
        intro:
          "Een complete trimbeurt voor een Doodle is een intensieve wellness-sessie die gemiddeld 2 tot 3 uur in beslag neemt:",
        subSections: [
          {
            title: "Voorbereiding & Inspectie",
            items: [
              "Nagels knippen en het overtollige haar tussen de voetzolen wegscheren om uitglijden te voorkomen.",
              "De gehoorgang controleren; Doedels groeien vaak veel haar in de oren dat vuil vasthoudt. Dit wordt voorzichtig vrijgemaakt.",
              "De vacht volledig controleren op eventuele klitten en viltplekken.",
            ],
          },
          {
            title: "Wassen & Krachtig Uitblazen",
            items: [
              "Grondig wassen met een diepreinigende shampoo, gevolgd door een intensief voedende conditioner om het haar elastisch te maken.",
              "Droogblazen met de waterblazer. De krachtige luchtstroom blaast de krullen recht (stretchen), waardoor eventuele diepe miniklitten direct zichtbaar worden en de vacht makkelijker te knippen is.",
            ],
          },
          {
            title: "Knippen & Modelleren",
            items: [
              "De vacht wordt met een schaar of opzetkammen op de gewenste lengte gebracht (veelal de fluffy teddy-look).",
              "De pootjes worden mooi rond ('kattenpootjes') geknipt.",
              "De snuit wordt in een karakteristieke ronde vorm geknipt, waarbij de oogjes goed vrijgemaakt worden zodat de hond weer helder kan kijken.",
            ],
          },
        ],
      },
    ],
  },
  // E
  {
    slug: "engelse-cocker-spaniel",
    name: "Engelse Cocker Spaniël",
    heroImg: null,
    photo: "engelse-cocker-spaniel.webp",
    fci: "FCI Groep 8 · Retrievers, Spaniëls en Waterhonden",
    fciSlug: "groep-8",
    metaDescription:
      "Alles over de Engelse Cocker Spaniël: trimfrequentie, plukken vs. scheren, vachtverzorging en groomingaanpak. ChibiWoef.",
    description:
      "De Engelse Cocker Spaniël is een middelgroot hondenras dat bekend staat om zijn vrolijke en aanhankelijke karakter. Oorspronkelijk gefokt als jachthond in Groot-Brittannië, excelleert hij in het opsporen van vogels zoals de houtsnip. Tegenwoordig is het een geliefde gezinshond die veel aandacht en verzorging nodig heeft, vooral vanwege zijn zijdezachte, halflange vacht met karakteristieke bevedering.",
    weight: "12 – 14,5 kg",
    height: "38 – 41 cm",
    colors: [
      { label: "Zwart", cls: "black" },
      { label: "Goud / Oranje", cls: "yellow" },
      { label: "Chocolade", cls: "chocolate" },
      { label: "Blue Roan", cls: "teal" },
      { label: "Rood", cls: "red" },
      { label: "Brindle", cls: "brindle" },
      { label: "Wit", cls: "white" },
      { label: "Crème", cls: "cream" },
      { label: "Blauw", cls: "blue" },
      { label: "Bruin", cls: "brown" },
      { label: "Fawn", cls: "fawn" },
      { label: "Grijs", cls: "gray" },
      { label: "Biscuit", cls: "biscuit" },
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
  // F
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
  // G
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
  // L
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
  // M
  {
    slug: "mopshond",
    name: "Mopshond",
    heroImg: null,
    photo: "mopshond.webp",
    didYouKnowImg: "imperial-pugs.jpg",
    fci: "FCI Groep 9 · Gezelschapshonden",
    fciSlug: "groep-9",
    metaDescription:
      "Alles over de Mopshond: onderhoudsvriendelijke korthaarvacht, rimpelverzorging en de aanpak van het seizoensgebonden verharen. ChibiWoef.",
    description:
      "De Mopshond (of Pug) is een eeuwenoud en charmant gezelschapshondje dat zijn oorsprong vindt in het oude China als ware metgezel van de keizerlijke familie. Ze staan bekend om hun compacte, vierkante bouw, diepe rimpels en grote, expressieve ogen. Het is een vrolijke, loyale en komische metgezel die houdt van menselijk gezelschap, maar door zijn specifieke bouw wel de juiste zorg en aandacht nodig heeft.",
    weight: "6.3 – 8.1 kg",
    height: "25 – 33 cm",
    colors: [
      { label: "Fawn (Zandkleurig)", cls: "fawn" },
      { label: "Zwart", cls: "black" },
      { label: "Zilver", cls: "silver" },
      { label: "Abrikoos", cls: "apricot" },
    ],
    freq: null,
    price: null,
    didYouKnow: [
      {
        emoji: "🇨🇳",
        title: "Afstammeling van de Happa",
        text: "De Mopshond deelt zijn wortels met de mysterieuze 'Happa'. Dit was een eeuwenoud, kortharig minihondje uit het keizerlijke China. Samen met de langharige Pekingees vormde de Happa de basis voor de kleine gezelschapshonden die we vandaag kennen. De mops is dus direct familie van de keizerlijke paleishonden!",
      },
      {
        emoji: "👑",
        title: "Het koninklijke merkteken",
        text: "De diepe rimpels op het voorhoofd van de mops waren in het oude China zeer waardevol. De Chinezen zagen in het rimpelpatroon vaak het karakter voor 'Prins' (王). Men geloofde dat deze honden met een koninklijk merkteken werden geboren.",
      },
      {
        emoji: "🔤",
        title: "Mopperend gezicht",
        text: "De mops heeft wereldwijd veel verschillende namen. In Engelstalige landen heet hij 'Pug' (mogelijk afgeleid van het Latijnse 'pugnus', wat vuist betekent, vanwege zijn compacte kop). In Duitsland en Nederland noemen we hem 'Mops', wat afgeleid is van het Oudhollandse woord 'mopoeren' (mopperen of een nors gezicht trekken).",
      },
      {
        emoji: "👃",
        title: "Korte snuit, grote zorg",
        text: "Net als de Pekingees is de Mopshond brachycefaal (kortsnuitig). Ze kunnen slecht tegen extreme hitte and raken snel oververhit omdat ze hun warmte niet goed kwijt kunnen via hijgen. Tijdens warme zomerdagen of een bezoek aan het trimsalon zijn een koele omgeving en voldoende rust cruciaal.",
      },
    ],
    sections: [
      {
        title: "Trimfrequentie",
        type: "html",
        content:
          "De Mopshond heeft een korte, gladde vacht die een <strong>lage tot gemiddelde intensiteit</strong> van verzorging vraagt. Hoewel ze niet geknipt of geschoren hoeven te worden, kunnen mopsen (vooral de fawn-kleurige varianten met een dubbele vacht) enorm hard verharen. Een bezoek aan het trimsalon is voornamelijk gericht op het effectief verwijderen van losse ondervacht en het verzorgen van de huidplooien. Dit gebeurt idealiter <strong>2 à 4 keer per jaar</strong>, bij voorkeur tijdens de grote ruiperioden in het voor- en najaar." +
          "<ol style='padding-left:1.8rem'>" +
          "<li><strong>Rui-behandeling (2-4 keer per jaar):</strong> om de loslatende, stugge haren en ondervacht professioneel uit te wassen en te blazen.</li>" +
          "<li><strong>Rimpel- en neusverzorging:</strong> de diepe huidplooi boven de neus moet wekelijks (thuis) gecontroleerd en schoongemaakt worden om smetplekken te voorkomen.</li>" +
          "<li><strong>Nagelverzorging:</strong> Mopshonden lopen hun nagels door hun lichte gewicht en bouw vaak niet goed af, waardoor regelmatig knippen nodig is.</li>" +
          "</ol>",
        freqRow: {
          level: "laag",
          label:
            "🟢 Laag tot Medium — 2 à 4 keer per jaar een rui- en opfrisbehandeling",
          price: "Wassen & Korthaar rui-behandeling: € 45",
          price2: "Tussentijdse plooi- & nagelverzorging: € 10",
          price3: null,
        },
        warning:
          "Doordat de Mopshond een brachycefaal ras is, kan hij slecht tegen hitte. Tijdens warme dagen of in een warme trimsalon is het belangrijk om de hond voldoende rust en koelte te bieden. Oververhitting kan leiden tot ernstige gezondheidsproblemen. Door hun compacte vorm staan hun tandjes vaak dicht op elkaar, daarom is het belangrijk om een goede mondhygiëne te handhaven, poets regelmatig de tanden en laat de tandjes controleren door een dierenarts.",
      },
      {
        title: "Leuke Weetjes & Raskenmerken",
        type: "grouped",
        exampleImgs: [
          {
            file: "mops.jpg",
            caption:
              "Zachtaardig, loyaal, intelligent met een sprankeltje koppigheid.",
          },
          {
            file: "mops2.webp",
            caption:
              "Een dolblij, sociaal karakter en een echte vriend voor wie dat verdient.",
          },
          {
            file: "mops-teefje.jpg",
            caption:
              "Vierkant gebouwd, met een stevige, compacte bouw en een krulstaart die strak over de rug op de heup gedragen wordt.",
          },
        ],
        intro:
          "De Mopshond is een fascinerend ras vol verrassingen. Ontdek de unieke uiterlijke kenmerken en het gouden karakter van deze kleine royale patat:",
        subSections: [
          {
            title: "Multum in Parvo (Veel in een klein beetje)",
            items: [
              "Ideaal vierkant gebouwd: de Mopshond hoort evenveel ruglengte als beenlengte te hebben.",
              "Stevig en compact gebouwd, afgewerkt met een krulstaart (bij voorkeur een dubbele krul) die strak vlak over de rug op de heup gedragen wordt.",
              "Grote, donkere en bolvormige ogen met een zachte, vragende of denkende(?) blik die met momenten ondeugend kunnen glinsteren.",
            ],
          },
          {
            title: "Gespierd, niet dik",
            items: [
              "Hoewel de mops er dik uit kan zien, is hij dat van nature niet! Zijn robuuste voorkomen komt door een zeer goed ontwikkeld bottenstelsel en stevige spieren.",
              "Het zijn actieve honden die graag wandelen en rondrennen; voldoende beweging houdt hun spiermassa in topconditie.",
            ],
          },
          {
            title: "Unieke Vachttekeningen",
            items: [
              "Voorzien van een gitzwart, contrasterend masker rond de snuit en een donkere duimafdruk op het voorhoofd.",
              "Beschikt over de kenmerkende 'aalstreep': een fijne, donkere lijn die van de achterhoofdsknobbel helemaal tot aan de staartpunt loopt.",
            ],
          },
          {
            title: "Karakter & Vitaliteit",
            items: [
              "Een zachtaardige huishond en grote kindervriend die bekenden altijd dolblij en met karakter onthaalt.",
              "Grappig-koppig, nieuwsgierig, moedig en dol op gezelligheid. Vanwege hun gevoelige aard reageren ze het best op een consequente, maar zachte opvoeding.",
              "Gezond en vitaal tot op hoge leeftijd: mopsen worden met gemak 13 tot 15 jaar oud, met uitschieters die zelfs de 18 jaar aantikken!",
            ],
          },
        ],
      },
    ],
  },
  // N
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
  // P
  {
    slug: "pekingees",
    name: "Pekingees",
    heroImg: null,
    photo: "pekingese.webp",
    didYouKnowImg: "pekingese-royal.jpg",
    fci: "FCI Groep 9 · Gezelschapshonden",
    fciSlug: "groep-9",
    metaDescription:
      "Alles over de Pekingees: trimfrequentie, intensieve vachtverzorging en de specifieke groomingaanpak voor de leeuwenkraag. ChibiWoef.",
    description:
      "De Pekingees (of Pekinees) is een eeuwenoud Chinees hondenras dat oorspronkelijk exclusief werd gefokt als gezelschapshond voor de keizerlijke familie in het Gerechtelijk Hof van Beijing. Vanwege hun weelderige kraag en trotse houding stonden ze destijds bekend als 'leeuwhonden'. Tegenwoordig is het een karaktervolle, rustige gezelschapshond die erg gehecht is aan zijn eigen gezin, maar ook specifieke zorg en aandacht vraagt vanwege hun unieke vacht en bouw.",
    weight: "3.5 – 6 kg",
    height: "15 – 25 cm",
    colors: [
      { label: "Rood", cls: "red" },
      { label: "Fawn", cls: "fawn" },
      { label: "Crème", cls: "cream" },
      { label: "Wit", cls: "white" },
      { label: "Zwart", cls: "black" },
      { label: "Grijs", cls: "gray" },
      { label: "Biscuit", cls: "biscuit" },
      { label: "Bruin", cls: "brown" },
      { label: "Abrikoos", cls: "apricot" },
    ],
    freq: null,
    price: null,
    didYouKnow: [
      {
        emoji: "🦁",
        title: "De kleine leeuw van de keizer",
        text: "Volgens een oude Chinese legende werd de Pekingees geboren uit een liefde tussen een leeuw en een vlinder. De leeuw smeekte de Boeddha om hem te verkleinen zodat hij met zijn geliefde kon zijn, maar hij behield wel zijn dappere leeuwenhart en weelderige manen. Vandaar hun trotse en moedige karakter!",
      },
      {
        emoji: "👑",
        title: "Exclusief koninklijk bezit",
        text: "In het oude China was de Pekingees heilig. Ze mochten uitsluitend worden bezeten door leden van het keizerlijke hof in de Verboden Stad. Gewone burgers die probeerden een Pekingees te stelen, riskeerden de doodstraf. De honden werden zelfs behandeld als royalty en hadden hun eigen bedienden.",
      },
      {
        emoji: " sleeve",
        title: "Mouwhondjes",
        text: "De allerkleinste Pekingezen stonden bekend als 'mouwhondjes'. De keizerlijke familie droeg deze mini-hondjes letterlijk in de brede, hangende mouwen van hun traditionele gewaden. Ze dienden niet alleen als gezelschap, maar ook als een soort levende kruik om de handen warm te houden.",
      },
      {
        emoji: "👃",
        title: "Gevoelig voor hitte",
        text: "Vanwege hun extreem korte snuit (brachycefaal) kunnen Pekingezen hun warmte erg moeilijk kwijt via hijgen. In de zomer of in een warme trimsalon hebben ze snel last van ademhalingsproblemen. Koeling, rust en een airco zijn voor dit ras tijdens het trimmen van levensbelang!",
      },
    ],
    sections: [
      {
        title: "Trimfrequentie",
        type: "html",
        content:
          "De Pekingees heeft een weelderige, dubbele vacht die zeer intensieve verzorging vraagt. Hoewel ze een klein formaat hebben, is hun vachtonderhoud een grote taak. Om klitten en pijnlijke viltplekken te voorkomen, moet een Pekingees met een volle showvacht elke <strong>6 à 8 weken</strong> naar het trimsalon. Wordt de vacht korter gehouden in een praktisch model? Dan is 4 à 5 keer per jaar voldoende. De verzorging thuis blijft echter dagelijks noodzakelijk." +
          "<ol style='padding-left:1.8rem'>" +
          "<li><strong>Regelmatig onderhoud (elke 6-8 weken):</strong> voor het professioneel uitwollen, wassen en klitvrij maken van de lange dubbele vacht.</li>" +
          "<li><strong>Ruiperioden:</strong> extra intensieve behandelingen om de zware ondervacht los te werken.</li>" +
          "<li><strong>Gezichtsverzorging:</strong> de diepe neusplooi moet continu schoon en droog gehouden worden om infecties te voorkomen.</li>" +
          "</ol>",
        freqRow: {
          level: "hoog",
          label:
            "🔴 Hoog — Elke 6 à 8 weken intensieve verzorging (of vaker thuis borstelen)",
          price: "Was & Splash: € 45",
          price2: "Volledige trimbeurt (Korthaar/Model): € 65",
          price3: "Tussentijdse borstel- & kambeurt: € 40",
        },
        warning:
          "Scheer de dubbele vacht van een Pekingees bij voorkeur niet volledig kaal. De vacht beschermt de kwetsbare huid tegen zonnebrand en helpt (ondanks de dikte) paradoxaal genoeg bij de thermoregulatie, mits deze volledig klitvrij en uitgewold is.",
      },
      {
        title: "Trimbeurt",
        type: "grouped",
        exampleImgs: [
          {
            file: "pekingese-example1.jpg",
            caption:
              "Praktisch model met korte vacht voor makkelijker onderhoud",
          },
          {
            file: "pekingese-example2.jpg",
            caption:
              "Praktisch model met korte vacht voor makkelijker onderhoud",
          },
          {
            file: "pekingese-example.webp",
            caption: "Model met leeuwenkraag",
          },
        ],
        intro:
          "De trimbeurt van een Pekingees is een secuur werk waarbij rust en verkoeling centraal staan vanwege hun gevoelige ademhaling:",
        subSections: [
          {
            title: "Voorbereiding & Gezicht",
            items: [
              "Nagels knippen en de haren tussen de voetzooltjes voorzichtig wegscheren.",
              "Grote, bolle ogen controleren en voorzichtig reinigen met een milde oogcleaner.",
              "De diepe huidplooi boven de neus grondig reinigen en drogen om smetplekken en schimmels te voorkomen.",
              "Oren nakijken op overtollig haar en vuil.",
            ],
          },
          {
            title: "Wassen & Drogen",
            items: [
              "Wassen met een milde, hydraterende shampoo die geschikt is voor een zware, dubbele vacht.",
              "Gebruik van een rijke conditioner om het borstelen te vergemakkelijken.",
              "Voorzichtig droogblazen met de waterblazer op een milde, lauwe stand (let op stress en oververhitting).",
            ],
          },
          {
            title: "Borstelen & Ontwollen",
            items: [
              "Lijngewijs borstelen met een pinnenborstel (zonder nopjes) om de ondervacht vanaf de huid los te werken.",
              "Met een grove kam controleren op hardnekkige klitten, specifiek achter de oren, in de oksels en bij de broek (achterkant).",
              "Dode ondervacht voorzichtig uitharken zonder de lange dekvacht te beschadigen.",
            ],
          },
          {
            title: "Modelleren & Knippen",
            items: [
              "De karakteristieke 'leeuwenkraag' rond de nek mooi vol uitborstelen en in model brengen.",
              "De 'broek' en de lange bevedering aan de poten subtiel bijpunten met een effileerschaar voor een verzorgde look.",
              "De lange staartvacht (die over de rug gedragen wordt) uitwaaieren en controleren op klitten.",
              "Optioneel (op verzoek van eigenaar): de vacht inkorten tot een vlot, korter 'pet-coat' model voor makkelijker thuisweldadig onderhoud.",
            ],
          },
        ],
      },
    ],
  },
  // Y
  {
    slug: "yorkshire-terrier",
    name: "Yorkshire Terriër",
    heroImg: null,
    photo: "yorkshire-terrier.jpg",
    fci: "FCI Groep 3 · Terriërs",
    fciSlug: "groep-3",
    metaDescription:
      "Alles over de Yorkshire Terriër: trimfrequentie, de zijdeachtige vacht zonder ondervacht en de specifieke groomingaanpak voor de topknot. ChibiWoef.",
    description:
      "De Yorkshire Terriër is een van de kleinste en populairste terriërrassen ter wereld. Oorspronkelijk gefokt in het noorden van Engeland voor de jacht op ongedierte, is deze kleine 'reus' tegenwoordig een geliefde en pittige gezelschapshond. Hun meest opvallende kenmerk is de prachtige, staalblauwe en tankleurige vacht die van nature zijdezacht is en tot aan de grond kan groeien. Een Yorkie heeft karakter in overvloed, maar vraagt door zijn unieke haarstructuur wel om een consequente vachtverzorging.",
    weight: "2.5 – 3.2 kg",
    height: "15 – 23 cm",
    colors: [
      { label: "Staalblauw & Tan", cls: "blue" },
      { label: "Zwart & Tan", cls: "black" },
      { label: "Zwart & Goud", cls: "yellow" },
    ],
    freq: null,
    price: null,
    didYouKnow: [
      {
        emoji: "🏭",
        title: "Van textielfabriek naar de catwalk",
        text: "In de 19e eeuw werden Yorkies door Schotse wevers meegenomen naar de textielfabrieken en kolenmijnen in Yorkshire. Door hun compacte formaat en razendsnelle reflexen waren ze de ultieme jagers op ratten en muizen tussen de ronkende machines. Pas later ontdekte de high-society hoe elegant ze waren!",
      },
      {
        emoji: "💆",
        title: "Menselijk haar in plaats van bont",
        text: "De vacht van een Yorkshire Terriër is heel bijzonder: ze hebben namelijk geen ondervacht en hun haren verharen amper. De structuur lijkt sprekend op menselijk haar; het groeit continu door en raakt niet in de rui. Hierdoor worden ze vaak beter verdragen door mensen met een milde hondenallergie.",
      },
      {
        emoji: "🎖️",
        title: "De eerste officiële therapiehond",
        text: "Een kleine Yorkie genaamd Smoky werd tijdens de Tweede Wereldoorlog gevonden in de jungle van Nieuw-Guinea. Ze overleefde tientallen gevechtsmissies en bezocht gewonde soldaten in de hospitalen. Smoky bleek een ongekend helend effect te hebben op de soldaten en ging de boeken in als de allereerste geregistreerde therapiehond.",
      },
      {
        emoji: "🎀",
        title: "De functionele 'Topknot'",
        text: "Het iconische elastiekje of strikje op het hoofd van een Yorkie (de topknot) is niet alleen voor de show. Omdat de haren op hun snuit en voorhoofd erg lang worden, vallen ze continu in de grote, donkere ogen. De topknot voorkomt chronische oogirritaties en zorgt ervoor dat de hond weer vrij kan kijken.",
      },
    ],
    sections: [
      {
        title: "Trimfrequentie",
        type: "html",
        content:
          "Hoewel de Yorkshire Terriër een minihondje is, mag de vachtverzorging absoluut niet onderschat worden. Omdat het haar continu doorgroeit en heel fijn van structuur is, ontstaan er achter de oren, in de oksels en bij de pootjes razendsnel hardnekkige klitten. Om de vacht gezond, glanzend en klitvrij te houden, moet een Yorkie elke <strong>6 à 8 weken</strong> naar het trimsalon. Wordt de vacht in een heel kort en praktisch 'puppy-model' gehouden? Dan is een bezoek om de 8 à 10 weken vaak voldoende.",
        freqRow: {
          level: "regelmatig",
          label:
            "🟡 Regelmatig - minimaal 2 tot 3 keer per week thuis borstelen",
          price: "Was & Splash (Tussentijds): € 40",
          price2: "Volledige trimbeurt (Knippen/Model): € 60",
          price3: "Tussentijdse borstel- & kambeurt: € 20",
        },
        warning:
          "Gebruik thuis nooit een gewone hondenborstel met dikke nopjes; deze trekken de fijne zijdeharen kapot. Kies altijd voor een zachte slickerborstel zonder nopjes en een fijne metalen kam om tot diep op de huid te controleren.",
      },
      {
        title: "De Vacht: Geen Ondervacht",
        type: "html",
        content:
          "Omdat de Yorkshire Terriër geen ondervacht (wol) heeft, is de verzorging anders dan bij de meeste kleine hondjes:" +
          "<ul style='padding-left:1.8rem;margin:0.6rem 0'>" +
          "<li><strong>Geen plukvacht:</strong> Hoewel het een terriër is, wordt de zijdeachtige vacht van een Yorkie <em>nooit</em> geplukt.</li>" +
          "<li><strong>Knippen of Scheren:</strong> In het trimsalon wordt de vacht met de hand geknipt (voor een vloeiende, natuurlijke look) of met opzetkammen zachtjes gemodelleerd naar de wensen van de eigenaar.</li>" +
          "<li><strong>Gevoelig voor kou en nattigheid:</strong> Door het ontbreken van die isolerende wollaag hebben Yorkies het snel koud. Een goede was- en droogbeurt met warme handdoeken is in de trimsalon dan ook pure verwennerij.</li>" +
          "</ul>",
      },
      {
        title: "Trimbeurt",
        type: "grouped",
        exampleImgs: [
          {
            file: "yorkie.jpg",
          },
          {
            file: "yorkie2.jpeg",
          },
          {
            file: "yorkie3.jpg",
          },
          {
            file: "yorkie4.jpeg",
          },
          {
            file: "yorkie5.webp",
            caption:
              "Een Yorkie met een klassieke topknot en een kort model op het lichaam met langere poten.",
          },
          {
            file: "yorkie6.jpg",
            caption: "Een Yorkie met een teddybeer model.",
          },
        ],
        intro:
          "Een complete trimbeurt voor een Yorkshire Terriër is een verfijnd precisiewerkje waarbij we comfort en een schattige uitstraling combineren:",
        subSections: [
          {
            title: "Hygiëne & Voorbereiding",
            items: [
              "Nageltjes zorgvuldig knippen. Omdat ze zo licht zijn, slijten de nagels nauwelijks vanzelf af.",
              "De gevoelige ooghoeken heel voorzichtig reinigen en de traanstrepen vrijmaken van harde korstjes.",
              "De haartjes aan de binnenkant en op de bovenste eenderde van de oren heel kort scheren (volgens de rasstandaard) zodat de oren mooi rechtop blijven staan en niet doorhangen.",
              "De hygiënische zones (buik en rond de anus) netjes kortzetten voor een optimale hygiëne thuis.",
            ],
          },
          {
            title: "Zijdezacht Wassen",
            items: [
              "Wassen met een milde, intensief voedende glansshampoo die speciaal geschikt is voor fijne haarstructuren.",
              "Gebruik van een hoogwaardige conditioner of maskertje om het haar extra soepel te maken, te beschermen tegen afbreken en glans te geven.",
              "Met een handdoek droogdeppen (niet wild wrijven om klitten te voorkomen) en daarna handmatig droogfohnen terwijl er gelijktijdig wordt uitgeborsteld.",
            ],
          },
          {
            title: "Styling & Knippen",
            items: [
              "Het hoofdje mooi rond uitknippen in een guitig 'teddy-face' of het haar op het hoofd juist lang laten voor de klassieke topknot.",
              "Het lichaam stylen naar keuze: een vlot kortharig sportmodel of het subtiel bijpunten van de lange, vallende zijdeharen.",
              "De voetjes netjes rondom vrijknippen ('kattenpootjes') zodat de hond geen vuil of steentjes mee naar binnen loopt.",
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
  "groep-1": "FCI Groep 1 · Herdershonden en Veedrijvers",
  "groep-2": "FCI Groep 2 · Pinschers, Schnauzers, Molossers en Sennenhonden",
  "groep-3": "FCI Groep 3 · Terriërs",
  "groep-4": "FCI Groep 4 · Teckels",
  "groep-5": "FCI Groep 5 · Spitsen en Oertypen",
  "groep-6": "FCI Groep 6 · Lopende honden, zweethonden en verwante rassen",
  "groep-7": "FCI Groep 7 · Voorstaande honden",
  "groep-8": "FCI Groep 8 · Retrievers, Spaniëls en Waterhonden",
  "groep-9": "FCI Groep 9 · Gezelschapshonden",
  "groep-10": "FCI Groep 10 · Windhonden",
  "groep-11": "Niet erkende rassen of kruisingen",
};
