export interface CoffeeOffering {
  id: string;
  editionNumber: string;
  name: string;
  subtitle: string;
  origin: string;
  region: string;
  altitude: string;
  varietal: string;
  process: string;
  roastProfile: string;
  flavourNotes: string[];
  shortDescription: string;
  editorialStory: string;
  image: string;
  imageAlt: string;
  sensory: {
    clarity: number;
    sweetness: number;
    body: number;
    aroma: number;
  };
  ritual: {
    method: string;
    dose: string;
    waterTemp: string;
    extraction: string;
    vessel: string;
  };
}

export interface CraftChapter {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  detailNote: string;
  metricLabel: string;
  metricValue: string;
  image: string;
  imageAlt: string;
  caption: string;
}

export interface CoffeeOrigin {
  id: string;
  code: string;
  region: string;
  country: string;
  coordinates: string;
  elevation: string;
  harvestWindow: string;
  terroir: string;
  flavourSignature: string;
  story: string;
  mapX: number; // SVG x coordinate (0-1000)
  mapY: number; // SVG y coordinate (0-460)
}

export interface JournalArticle {
  id: string;
  category: 'Coffee Culture' | 'Brewing Guides' | 'Coffee Origins' | 'Lifestyle';
  title: string;
  deck: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  figureCaption: string;
  pullQuote: string;
  paragraphs: string[];
}

export interface AtelierSalon {
  city: string;
  district: string;
  address: string;
  hours: string;
  experience: string;
}

export const HOKAI_IMAGES = {
  hero: '/src/assets/images/hero_hokai_pour_1795581788652.jpg',
  story: '/src/assets/images/story_editorial_ritual_1795581789559.jpg',
  kuroReserve: '/src/assets/images/coffee_kuro_reserve_1795581790511.jpg',
  amberBloom: '/src/assets/images/coffee_amber_bloom_1795581794247.jpg',
  nocturneCrema: '/src/assets/images/coffee_nocturne_crema_1795581794790.jpg',
  roastingAtelier: '/src/assets/images/craft_roasting_atelier_1795581795281.jpg',
  highlandTerroir: '/src/assets/images/origins_highland_terroir_1795581796498.jpg',
  brewingCeremony: '/src/assets/images/journal_brewing_ceremony_1795581796194.jpg',
} as const;

export const SIGNATURE_COFFEES: CoffeeOffering[] = [
  {
    id: 'kuro-obsidian',
    editionNumber: 'No. 01',
    name: 'Kuro Obsidian',
    subtitle: 'Private Estate Reserve',
    origin: 'Boquete, Panama',
    region: 'Volcán Barú Slopes',
    altitude: '1,850 m',
    varietal: 'Heirloom Geisha',
    process: 'Washed · Raised-Bed Sun Dried',
    roastProfile: 'Light-Medium Architectural',
    flavourNotes: ['White Jasmine', 'Bergamot Zest', 'Wild Clover Honey'],
    shortDescription:
      'Cultivated along cloud-veiled volcanic slopes, revealing crystalline floral aromatics and an unhurried silken finish.',
    editorialStory:
      'Harvested exclusively at peak Brix ripeness during a brief six-week window on the northern flank of Volcán Barú. Slow cast-iron roasting preserves the delicate bergamot aromatics while developing a lingering honeyed resonance reminiscent of aged oolong.',
    image: HOKAI_IMAGES.kuroReserve,
    imageAlt:
      'Matte obsidian cylindrical coffee vessel with muted gold band resting on honed travertine stone with whole dark specialty beans',
    sensory: {
      clarity: 96,
      sweetness: 91,
      body: 68,
      aroma: 98,
    },
    ritual: {
      method: 'Fluted Ceramic Pour-Over',
      dose: '15 g / 250 ml',
      waterTemp: '92 °C',
      extraction: '2 min 45 sec',
      vessel: 'Hand-blown crystal tasting carafe',
    },
  },
  {
    id: 'amber-bloom',
    editionNumber: 'No. 02',
    name: 'Amber Bloom',
    subtitle: 'Single-Garden Filter',
    origin: 'Gedeb, Ethiopia',
    region: 'Yirgacheffe Highlands',
    altitude: '2,150 m',
    varietal: 'Indigenous Heirloom',
    process: 'Natural · 21-Day Shade Dried',
    roastProfile: 'Delicate Amber',
    flavourNotes: ['White Peach', 'Candied Orange Blossom', 'Darjeeling Tea'],
    shortDescription:
      'An expressive, luminous infusion of sun-dried highland cherries crafted for unhurried morning reflection.',
    editorialStory:
      'Sourced from smallholder forest gardens above two thousand meters in Gedeb. Each cherry is turned by hand on woven bamboo beds beneath mountain shade, yielding a translucent amber cup layered with ripe stone fruit and radiant citrus aromatics.',
    image: HOKAI_IMAGES.amberBloom,
    imageAlt:
      'Hand-blown fluted crystal carafe filled with luminous amber specialty filter coffee on warm limestone in golden light',
    sensory: {
      clarity: 93,
      sweetness: 94,
      body: 64,
      aroma: 95,
    },
    ritual: {
      method: 'Slow Immersion Dripper',
      dose: '16 g / 260 ml',
      waterTemp: '93 °C',
      extraction: '3 min 05 sec',
      vessel: 'Thin-rimmed porcelain tasting cup',
    },
  },
  {
    id: 'nocturne-crema',
    editionNumber: 'No. 03',
    name: 'Nocturne Crema',
    subtitle: 'Signature Espresso Expression',
    origin: 'Huila, Colombia',
    region: 'San Agustín Ridge',
    altitude: '1,780 m',
    varietal: 'Pink Bourbon & Caturra',
    process: 'Anaerobic Honey',
    roastProfile: 'Velvet Espresso',
    flavourNotes: ['Dark Cacao Nib', 'Roasted Hazelnut', 'Black Fig'],
    shortDescription:
      'Composed for dense, tiger-striped crema and enveloping dark-chocolate depth without a trace of harsh bitterness.',
    editorialStory:
      'Our house espresso expression pairs high-density Pink Bourbon with slow-caramelized Caturra. Extended thermal development in our vintage drum roaster builds a syrupy, velvet mouthfeel balanced by refined notes of toasted hazelnut and ripe fig.',
    image: HOKAI_IMAGES.nocturneCrema,
    imageAlt:
      'Rich hazelnut-gold tiger-striped espresso crema in a matte dark stoneware demitasse cup resting on smoked oak and bronze',
    sensory: {
      clarity: 78,
      sweetness: 89,
      body: 96,
      aroma: 90,
    },
    ritual: {
      method: '9-Bar Precision Espresso',
      dose: '19 g / 38 g yield',
      waterTemp: '93.5 °C',
      extraction: '29 sec',
      vessel: 'Pre-warmed basalt stoneware demitasse',
    },
  },
];

export const CRAFT_CHAPTERS: CraftChapter[] = [
  {
    id: 'selection',
    index: '01',
    title: 'Coffee Bean Selection',
    subtitle: 'Top 0.5% Highland Micro-Lots',
    description:
      'Long before heat touches a single seed, our green-coffee directors cup hundreds of micro-lots across high-elevation estates. Only cherries hand-picked at uniform deep-crimson ripeness and dried slowly in thin mountain air enter the HOKAI archive.',
    detailNote:
      'Every lot is graded by density, moisture equilibrium, and zero-defect optical sorting before resting in climate-controlled cedar vaults.',
    metricLabel: 'Minimum Cupping Standard',
    metricValue: '90.5+ SCA',
    image: HOKAI_IMAGES.highlandTerroir,
    imageAlt: 'Ripe crimson coffee cherries on dewy green branches overlooking misty volcanic mountain estates at dawn',
    caption: 'Fig. 01 — Dawn harvest across volcanic terraces above 1,850 meters.',
  },
  {
    id: 'roasting',
    index: '02',
    title: 'Roasting Craftsmanship',
    subtitle: 'Small-Batch Cast-Iron Alchemy',
    description:
      'We roast exclusively in 12-kilogram batches on restored cast-iron drums where radiant thermal mass replaces aggressive convection. Our master roasters listen to the acoustic cadence of first crack and judge caramelization by sight, aroma, and split-second airflow modulation.',
    detailNote:
      'Each harvest receives a bespoke thermal curve tailored to its cellular density so origin character speaks clearly above the roast.',
    metricLabel: 'Small-Batch Capacity',
    metricValue: '12 kg / Drum',
    image: HOKAI_IMAGES.roastingAtelier,
    imageAlt: 'Freshly roasted mahogany specialty coffee beans cooling in a cast iron and antique brass tray with rising aromatic vapor',
    caption: 'Fig. 02 — Post-roast cooling tray at the HOKAI Kyoto Roasting Atelier.',
  },
  {
    id: 'aroma',
    index: '03',
    title: 'Aroma & Flavour Architecture',
    subtitle: 'Over 800 Volatile Compounds Preserved',
    description:
      'A great coffee unfolds like fine fragrance: an initial dry bouquet of blossom and spice, a luminous heart of stone fruit or cacao as the liquor cools, and a clean, lingering finish that remains on the palate long after the final sip.',
    detailNote:
      'Every batch rests for seven days in nitrogen-flushed vessels to degas gracefully and lock in peak aromatic clarity.',
    metricLabel: 'Controlled Resting Window',
    metricValue: '168 Hours',
    image: HOKAI_IMAGES.nocturneCrema,
    imageAlt: 'Close-up of velvet golden-brown espresso crema texture in a handmade dark ceramic vessel',
    caption: 'Fig. 03 — Emulsified aromatic oils suspended in velvety micro-crema.',
  },
  {
    id: 'ritual',
    index: '04',
    title: 'Brewing Rituals',
    subtitle: 'Stillness Measured in Seconds',
    description:
      'At HOKAI, preparation is never rushed. Mineral-balanced water heated to the exact degree meets freshly ground coffee in a slow spiral bloom, inviting you to step outside the noise of the day and inhabit five quiet minutes of pure sensory presence.',
    detailNote:
      'From hand-thrown stoneware cups that retain warmth to laminar gooseneck pours, every touchpoint honors the farmer and the craft.',
    metricLabel: 'Optimal Extraction Ratio',
    metricValue: '1 : 16.5',
    image: HOKAI_IMAGES.brewingCeremony,
    imageAlt: 'Minimalist matte-black gooseneck kettle pouring a slender stream of water over blooming coffee grounds in a charcoal dripper',
    caption: 'Fig. 04 — Slow laminar pour-over bloom on honed travertine and raw linen.',
  },
];

export const COFFEE_ORIGINS: CoffeeOrigin[] = [
  {
    id: 'panama',
    code: '01',
    region: 'Boquete, Volcán Barú',
    country: 'Panama',
    coordinates: '8°46′ N · 82°26′ W',
    elevation: '1,750 – 1,950 m',
    harvestWindow: 'January – March',
    terroir: 'Volcanic Ash & Pacific-Caribbean Mist',
    flavourSignature: 'Jasmine blossom, bergamot oil, spun honey',
    story:
      'Where warm winds from two oceans collide along the flanks of Volcán Barú, an afternoon veil of fine bajareque mist slows cherry maturation to an extraordinary pace—concentrating perfume-like aromatics rarely found elsewhere on earth.',
    mapX: 256,
    mapY: 228,
  },
  {
    id: 'colombia',
    code: '02',
    region: 'San Agustín, Huila',
    country: 'Colombia',
    coordinates: '1°52′ N · 76°16′ W',
    elevation: '1,700 – 1,880 m',
    harvestWindow: 'October – December',
    terroir: 'Andean Clay Loam & Cool Mountain Nights',
    flavourSignature: 'Dark cacao, toasted hazelnut, caramelized fig',
    story:
      'Nestled along the high ridges where the Magdalena River begins, multi-generational family estates cultivate dense Pink Bourbon and Caturra lots nourished by mineral-rich Andean soils and dramatic day-to-night temperature shifts.',
    mapX: 286,
    mapY: 252,
  },
  {
    id: 'ethiopia',
    code: '03',
    region: 'Gedeb, Yirgacheffe',
    country: 'Ethiopia',
    coordinates: '5°58′ N · 38°14′ E',
    elevation: '2,050 – 2,250 m',
    harvestWindow: 'November – January',
    terroir: 'Red Basalt Highland Forest Canopy',
    flavourSignature: 'White peach, orange blossom, luminous black tea',
    story:
      'In the ancestral birthplace of Coffea arabica, ancient heirloom varietals grow semi-wild beneath native shade trees. Harvested strictly by hand and dried slowly on elevated bamboo beds, Gedeb lots sing with unmistakable floral vibrancy.',
    mapX: 598,
    mapY: 238,
  },
  {
    id: 'kyoto',
    code: '04',
    region: 'Higashiyama Atelier',
    country: 'Kyoto, Japan',
    coordinates: '35°00′ N · 135°46′ E',
    elevation: 'Roasting Sanctuary',
    harvestWindow: 'Year-Round Micro-Roasts',
    terroir: 'Soft Mountain Spring Water & Cedar Climate Vaults',
    flavourSignature: 'Precision clarity, balanced sweetness, quiet restraint',
    story:
      'Every green harvest converges at our flagship Kyoto roasting house, where Japanese discipline in thermal control, ceramic vessel artistry, and mineral water calibration transforms raw agricultural brilliance into the signature HOKAI cup.',
    mapX: 838,
    mapY: 156,
  },
];

export const FARM_TO_CUP_STAGES = [
  {
    step: '01',
    title: 'Selective Harvest',
    detail: 'Multiple hand-picked passes across high-altitude estates, taking only deep-crimson cherries at peak sugar density.',
  },
  {
    step: '02',
    title: 'Micro-Lot Drying',
    detail: 'Spring-water washing and 18 to 24 days of shaded raised-bed drying to lock in delicate volatile aromatics.',
  },
  {
    step: '03',
    title: 'Atelier Roasting',
    detail: '12 kg cast-iron drum curves calibrated by sound, colorimetry, and sensory cupping in Kyoto.',
  },
  {
    step: '04',
    title: 'The Quiet Ritual',
    detail: 'Prepared with mineral-tuned water and sculptural ceramicware to honor every mile of provenance.',
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'architecture-of-morning-ritual',
    category: 'Coffee Culture',
    title: 'The Architecture of the Morning Ritual',
    deck: 'Why slowing down for four quiet minutes of hand-poured coffee reshapes the cadence of modern living.',
    author: 'Kenji Takahashi',
    date: 'Autumn 2026',
    readTime: '5 min read',
    featured: true,
    image: HOKAI_IMAGES.story,
    imageAlt: 'Charcoal stoneware coffee cup resting on warm travertine plinth in morning architectural sunlight',
    figureCaption: 'Fig. 01 — Morning light study at the HOKAI Aoyama private tasting table.',
    pullQuote:
      'Luxury is no longer measured in excess, but in the rare permission to give a single moment your undivided attention.',
    paragraphs: [
      'Before the first message arrives and before the city accelerates into its familiar rhythm, there exists a narrow corridor of stillness. In that quiet interval, the simple act of warming a stoneware vessel, weighing fifteen grams of highland beans, and listening to water touch fresh grounds becomes an anchor of deliberate living.',
      'Across Tokyo, Milan, and Copenhagen, a quiet shift has taken hold among architects, perfumers, and collectors. Coffee is no longer treated as utilitarian fuel gulped in transit. Instead, it has reclaimed its rightful stature alongside grand cru tea and vintage wine—a sensory discipline shaped by soil, altitude, water chemistry, and tactile craft.',
      'At HOKAI, we design every vessel and roast profile around this unhurried tempo. When aroma rises in a thin ribbon through cool morning air, it asks nothing of you except presence. That pause is where ordinary routine ends and ritual begins.',
    ],
  },
  {
    id: 'geometry-of-the-pour',
    category: 'Brewing Guides',
    title: 'The Geometry of the Laminar Pour',
    deck: 'Mastering water temperature, bloom intervals, and spiral flow rate for crystalline filter clarity.',
    author: 'Claire Moreau',
    date: 'October 2026',
    readTime: '6 min read',
    image: HOKAI_IMAGES.brewingCeremony,
    imageAlt: 'Matte black gooseneck kettle pouring a slender stream into a dark ceramic coffee dripper on travertine',
    figureCaption: 'Fig. 02 — First bloom saturation at 92 °C with a 45-second rest.',
    pullQuote:
      'Water comprises more than ninety-eight percent of the finished cup; treat its mineral balance and descent with the same reverence as the bean.',
    paragraphs: [
      'A translucent, tea-like filter cup is never an accident. It emerges from quiet geometric precision: an unbroken vertical stream falling gently from a narrow gooseneck spout, disturbing the coffee bed just enough to suspend oils without driving bitter fines to the paper wall.',
      'Begin by rinsing the fluted paper with hot water to warm the carafe beneath. Dose fifteen grams of medium-fine ground coffee and introduce forty-five grams of soft water at 92 °C. Pause for forty-five seconds as trapped carbon dioxide lifts the crust into a fragrant dome.',
      'Follow with two measured concentric pours—never rushing, keeping the water height steady until the scale reads two hundred and fifty grams. Allow the drawdown to complete cleanly at two minutes and forty-five seconds, then let the carafe breathe for one minute before your first sip so the floral high notes open in full.',
    ],
  },
  {
    id: 'mist-of-volcan-baru',
    category: 'Coffee Origins',
    title: 'Beneath the Bajareque Mist of Volcán Barú',
    deck: 'Field notes from our winter harvest expedition along Panama’s cloud-draped volcanic coffee estates.',
    author: 'Mateo Valdés',
    date: 'September 2026',
    readTime: '7 min read',
    image: HOKAI_IMAGES.highlandTerroir,
    imageAlt: 'Misty high-altitude mountain coffee terraces glowing in golden sunrise light',
    figureCaption: 'Fig. 03 — Cloud-forest micro-climate descending over the northern Boquete ridge at 1,890 meters.',
    pullQuote:
      'In Boquete, altitude slows time inside the cherry—giving sugars and jasmine aromatics weeks longer to compose themselves.',
    paragraphs: [
      'At five in the morning along the upper trails of Volcán Barú, the air smells of damp volcanic basalt and night-blooming citrus. Here, where Pacific humidity meets cool Caribbean updrafts, a fine silver mist known locally as bajareque settles across the coffee trees almost every afternoon.',
      'This rare micro-climate keeps temperatures crisp even under tropical latitudes. Rather than ripening rapidly in harsh heat, heirloom Geisha cherries mature slowly over months, concentrating complex organic acids and floral terpenes inside dense, jade-green seeds.',
      'Our harvest partners walk the steep terraced rows up to five times each season, selecting only cherries that yield gently to the thumb. By the time those micro-lots arrive in Kyoto, every cup carries the unmistakable hush of that misty mountain ridge.',
    ],
  },
  {
    id: 'tactile-vessels-stoneware',
    category: 'Lifestyle',
    title: 'Stoneware, Weight, and the Perception of Taste',
    deck: 'How lip thickness, dark basalt glaze, and thermal mass subtly transform how the palate reads sweetness.',
    author: 'Haruka Sato',
    date: 'August 2026',
    readTime: '4 min read',
    image: HOKAI_IMAGES.roastingAtelier,
    imageAlt: 'Artisanal roasted coffee beans resting in a cast iron and brass tray inside the quiet roastery',
    figureCaption: 'Fig. 04 — Material dialogues between roasted beans, aged brass, and dark stoneware.',
    pullQuote:
      'You taste a cup first through the fingertips—long before the liquid ever reaches the tongue.',
    paragraphs: [
      'Sensory researchers and ceramic masters have long shared an unspoken truth: the vessel shapes the beverage. A thick, flared ceramic rim encourages a broad sip that highlights velvety body and dark cacao notes, while a thin, tulip-shaped crystal edge channels floral aromatics directly to the olfactory bulb.',
      'In collaboration with ceramicists in Shigaraki, HOKAI developed handleless basalt-glazed cups whose raw exterior invites both palms to cradle the warmth of the brew. Without a handle separating skin from vessel, you sense the exact moment the coffee cools to its sweetest drinking window around sixty degrees Celsius.',
      'When craftsmanship extends from farm soil to ceramic glaze, drinking coffee ceases to be an isolated taste—it becomes an intimate dialogue between hand, heat, shadow, and aroma.',
    ],
  },
];

export const ATELIER_SALONS: AtelierSalon[] = [
  {
    city: 'Tokyo',
    district: 'Minami-Aoyama',
    address: '5-7-21 Minami-Aoyama, Minato-ku',
    hours: 'Tue – Sun · 10:00 – 19:00',
    experience: 'Four-seat basalt counter · Guided three-course single-origin flight',
  },
  {
    city: 'Paris',
    district: 'Le Marais',
    address: '14 Rue des Francs-Bourgeois, 75003',
    hours: 'Wed – Sun · 11:00 – 19:30',
    experience: 'Private sensory tasting salon & seasonal micro-lot archive',
  },
  {
    city: 'Milan',
    district: 'Brera',
    address: 'Via Solferino 18, 20121 Milano',
    hours: 'Tue – Sat · 10:30 – 19:00',
    experience: 'Architectural espresso bar & ceramic vessel gallery',
  },
];
