export const site = {
  name: "Clear Touch",
  fullName: "Clear Touch Tourism & Services",
  tagline: "Doha-based Tourism · Photography · Videography",
  phone: "+974 5548 4718",
  phoneRaw: "+97455484718",
  whatsapp: "97455484718",
  email: "bookings@cleartouchmedia.com",
  location: "Doha, Qatar",
  rating: "4.9",
  reviewCount: "2,800+",
  yearsBadge: "12+",
  calLink: "kiberu-jobs-slnno2/book-a-tour-or-photo-session",
  calUrl: "https://cal.com/kiberu-jobs-slnno2/book-a-tour-or-photo-session",
};

export const nav = [
  { key: "home", label: "Home", href: "/" },
  { key: "tours", label: "Tours", href: "/tours" },
  { key: "photography", label: "Photography", href: "/photography" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
];

// Tourism service pillars
export const offerings = [
  { icon: "dune",    img: "desert-safari",      title: "Desert Safaris",   text: "Dune bashing, camel rides & BBQ dinners by the Inland Sea." },
  { icon: "mosque",  img: "souq-waqif",         title: "City & Culture",   text: "Souq Waqif, Katara & the National Museum of Qatar." },
  { icon: "boat",    img: "cruises",            title: "Cruises & Dining", text: "Traditional dhow & luxury yacht cruises on the Corniche." },
  { icon: "island",  img: "banana-island",      title: "Island & Beach",   text: "Banana Island escapes & pristine Gulf getaways." },
  { icon: "passport",img: "visa-welcome",       title: "Visa Services",    text: "Fast, hassle-free Qatar tourist visa processing." },
  { icon: "car",     vehicles: true,            title: "Airport Transfers",text: "Private transfers and group vans from Hamad International, around the clock." },
];

// Photography & video pillar — equal billing
export const photoServices = [
  { icon: "camera", title: "Destination & Travel", text: "Editorial travel imagery that sells the experience." },
  { icon: "film",   title: "Video & Reels",        text: "Cinematic films, social reels and drone coverage." },
  { icon: "people", title: "Events & Portraits",   text: "Weddings, corporate events and professional portraits." },
];

export const destinations = [
  { slug: "desert-safari",      name: "Desert Safari",         tag: "Inland Sea" },
  { slug: "souq-waqif",         name: "Souq Waqif",            tag: "Old Doha" },
  { slug: "the-pearl",          name: "The Pearl Island",      tag: "Marina living" },
  { slug: "museum-islamic-art", name: "Museum of Islamic Art", tag: "Iconic landmark" },
  { slug: "banana-island",      name: "Banana Island",         tag: "Resort escape" },
  { slug: "katara",             name: "Katara",                tag: "Cultural village" },
];

export const why = [
  { icon: "diamond", title: "Best price guarantee", text: "Find it cheaper and we'll match it — no hidden fees, ever." },
  { icon: "bolt",    title: "Instant confirmation", text: "Book in under a minute and get your voucher immediately." },
  { icon: "shield",  title: "Licensed & insured",   text: "Registered with Qatar Tourism. Safe, vetted, professional team." },
  { icon: "chat",    title: "24/7 human support",   text: "Real people on WhatsApp whenever you need us." },
];

export const testimonials = [
  { quote: "The desert safari to the Inland Sea was the highlight of our trip! Pickup was on time, the dune bashing was thrilling and the BBQ dinner was delicious. Clear Touch took care of everything.", name: "Sophie M.", place: "🇬🇧 United Kingdom", initial: "S" },
  { quote: "Booked the Doha city tour and the dhow cruise. Seamless from start to finish and the best price I found anywhere. Our guide was friendly and super knowledgeable about Souq Waqif.", name: "Arjun P.", place: "🇮🇳 India", initial: "A" },
];

// ---------------------------------------------------------------------------
// PHOTOGRAPHY PACKAGES  —  ⚠️ PLACEHOLDER PRICES/NUMBERS: replace the [ … ]
// markers with your real figures. `featured: true` highlights a card.
// ---------------------------------------------------------------------------
export const photoPackages = [
  {
    name: "Portrait Session",
    tagline: "Headshots, family & personal branding",
    unit: "from",
    price: "QAR [ ••• ]",
    featured: false,
    cta: "Enquire",
    ctaType: "contact",
    features: [
      "Up to 1-hour session, 1 location",
      "[ 15 ]+ professionally edited photos",
      "Private online gallery to download",
      "Print-ready high-resolution files",
      "Outfit & location guidance",
    ],
  },
  {
    name: "Event Coverage",
    tagline: "Corporate events, parties & conferences",
    unit: "from",
    price: "QAR [ ••• ]",
    featured: false,
    cta: "Enquire",
    ctaType: "contact",
    features: [
      "Up to [ 4 ] hours of coverage",
      "[ 150 ]+ edited photos",
      "48–72 hour delivery",
      "Candid, group & detail shots",
      "Optional highlight reel add-on",
    ],
  },
  {
    name: "Wedding & Celebration",
    tagline: "Your day, captured beautifully",
    unit: "from",
    price: "QAR [ ••• ]",
    featured: true,
    badge: "Most popular",
    cta: "Check a date",
    ctaType: "cal",
    features: [
      "Full-day coverage, [ 2 ] shooters",
      "Engagement mini-session included",
      "[ 400 ]+ edited photos",
      "Cinematic highlight film (3–5 min)",
      "Premium album + teaser reel",
    ],
  },
  {
    name: "Brand & Commercial",
    tagline: "Product, campaign & content",
    unit: "",
    price: "Custom quote",
    featured: false,
    cta: "Get a quote",
    ctaType: "contact",
    features: [
      "Creative direction & shot list",
      "Studio or on-location, anywhere in Qatar",
      "Product, lifestyle & team imagery",
      "Video / reels add-ons available",
      "Full commercial usage rights",
    ],
  },
];

// Small strip under the packages — extras clients can bolt on.
export const photoAddons = [
  "Drone / aerial coverage",
  "Extra hours or 2nd shooter",
  "Express 24-hour delivery",
  "Printed album & wall art",
  "Hair & makeup coordination",
  "Vertical social reels",
];

// "How it works" process steps.
export const photoProcess = [
  { step: "01", title: "Enquire", text: "Message us your vision, dates and any references. We reply fast on WhatsApp." },
  { step: "02", title: "Plan",    text: "We scout the location, build a shot list and lock the timeline so nothing is left to chance." },
  { step: "03", title: "Shoot",   text: "Relax and enjoy — our crew directs and captures every moment, on location across Qatar." },
  { step: "04", title: "Deliver", text: "Your edited gallery and films arrive in [ 5–7 ] days, ready to download and share." },
];
