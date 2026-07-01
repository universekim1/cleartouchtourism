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
  phone2: "+974 5991 4706",
  phone2Raw: "+97459914706",
  instagram: "https://www.instagram.com/clear_touch_media",
  tiktok: "https://www.tiktok.com/@clear_touch_media",
  socialHandle: "@clear_touch_media",
};

export const nav = [
  { key: "home", label: "Home", href: "/" },
  { key: "tours", label: "Tours", href: "/tours" },
  { key: "photography", label: "Photography", href: "/photography" },
  { key: "portfolio", label: "Portfolio", href: "/portfolio" },
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
// PHOTOGRAPHY PACKAGES  (Clear Touch Media price list). `featured: true`
// highlights a card. Weddings & commercial are quoted per job.
// ---------------------------------------------------------------------------
export const photoPackages = [
  {
    name: "Standard",
    tagline: "Outdoor session",
    unit: "",
    price: "QAR 500",
    featured: false,
    cta: "Book now",
    ctaType: "cal",
    features: [
      "Outdoor location shoot",
      "10 professionally edited photos",
      "1 short video",
      "Private online gallery to download",
      "Makeup artist available on request",
    ],
  },
  {
    name: "Premium",
    tagline: "Studio session",
    unit: "",
    price: "QAR 800",
    featured: true,
    badge: "Most popular",
    cta: "Book now",
    ctaType: "cal",
    features: [
      "Professional studio shoot",
      "10 professionally edited photos",
      "1 short video",
      "Private online gallery to download",
      "Makeup artist available on request",
    ],
  },
  {
    name: "Gold",
    tagline: "Parties & events",
    unit: "",
    price: "QAR 1,500",
    featured: false,
    cta: "Book now",
    ctaType: "cal",
    features: [
      "Full party / event coverage",
      "30 professionally edited photos",
      "1 general highlight video",
      "Candid, group & detail shots",
      "Makeup artist available on request",
    ],
  },
  {
    name: "Weddings & Commercial",
    tagline: "Tailored to your event or brand",
    unit: "",
    price: "Custom quote",
    featured: false,
    cta: "Get a quote",
    ctaType: "contact",
    features: [
      "Full-day weddings & celebrations",
      "Brand, product & campaign shoots",
      "Cinematic films & social reels",
      "Extra shooters & drone on request",
      "Full commercial usage rights",
    ],
  },
];

// Extras clients can add to any package.
export const photoAddons = [
  "Makeup artist on request",
  "Extra edited photos",
  "Additional hours or locations",
  "Drone / aerial coverage",
  "Cinematic highlight film",
];

// "How it works" process steps.
export const photoProcess = [
  { step: "01", title: "Enquire", text: "Message us your vision and dates on WhatsApp or Instagram — we reply fast." },
  { step: "02", title: "Plan",    text: "We agree the package, location and timeline — and book your makeup artist if you'd like one." },
  { step: "03", title: "Shoot",   text: "Relax and enjoy — our crew directs and captures every moment, studio or on location." },
  { step: "04", title: "Deliver", text: "Your professionally edited photos and video arrive in just a few days, ready to share." },
];
