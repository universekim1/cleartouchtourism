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

// `tour` points each destination tile at the tour page that covers it.
export const destinations = [
  { slug: "desert-safari",      name: "Desert Safari",         tag: "Inland Sea",      tour: "desert-safari" },
  { slug: "souq-waqif",         name: "Souq Waqif",            tag: "Old Doha",        tour: "doha-city-tour" },
  { slug: "the-pearl",          name: "The Pearl Island",      tag: "Marina living",   tour: "doha-city-tour" },
  { slug: "museum-islamic-art", name: "Museum of Islamic Art", tag: "Iconic landmark", tour: "doha-city-tour" },
  { slug: "banana-island",      name: "Banana Island",         tag: "Resort escape",   tour: "banana-island" },
  { slug: "katara",             name: "Katara",                tag: "Cultural village",tour: "doha-city-tour" },
];

// Individual tours with detail pages at /tours/[slug]. Pricing is quote-based
// (tailored per group/season) — no public numbers, matching the rest of the site.
export const tours = [
  {
    slug: "desert-safari",
    name: "Desert Safari & Inland Sea",
    tagline: "Dune bashing, camel rides & a BBQ under the stars",
    img: "desert-safari",
    duration: "Approx. 6 hours",
    groupSize: "Private or shared",
    overview:
      "Head deep into Qatar's southern desert for the country's most thrilling day out. Feel the rush of 4x4 dune bashing over golden sand, ride a camel, sandboard the slopes, and watch the sun set over Khor Al Adaid — the rare Inland Sea where the desert meets the Gulf.",
    highlights: [
      "Adrenaline-filled 4x4 dune bashing",
      "Camel ride & sandboarding",
      "Sunset at the Inland Sea (Khor Al Adaid)",
      "Traditional BBQ dinner at a desert camp",
      "Hotel pickup & drop-off included",
    ],
    includes: ["Hotel pickup & drop-off", "Experienced desert driver-guide", "Dune bashing & sandboarding", "BBQ dinner & refreshments", "Bottled water"],
    excludes: ["Personal expenses & gratuities", "Quad bike hire (optional)"],
    itinerary: [
      { time: "Afternoon", title: "Hotel pickup", text: "We collect you from your hotel or residence in a comfortable 4x4." },
      { time: "En route", title: "Into the dunes", text: "Reach the desert edge, deflate the tyres and begin an exhilarating dune-bashing ride." },
      { time: "Golden hour", title: "Inland Sea & camels", text: "Camel rides, sandboarding and photos as the sun sets over Khor Al Adaid." },
      { time: "Evening", title: "Desert BBQ", text: "Relax at camp with a traditional BBQ dinner before the drive back to your hotel." },
    ],
    gallery: ["desert-safari", "banana-island", "the-pearl"],
  },
  {
    slug: "doha-city-tour",
    name: "Doha City Tour",
    tagline: "Old souqs, modern skylines & cultural icons in one day",
    img: "souq-waqif",
    duration: "Approx. 4 hours",
    groupSize: "Private or shared",
    overview:
      "See the best of Doha with a local guide — from the winding lanes of Souq Waqif to the striking Museum of Islamic Art, the Corniche waterfront, the Pearl-Qatar and the cultural village of Katara. The perfect introduction to Qatar's past and its dazzling present.",
    highlights: [
      "Souq Waqif — spices, crafts & old Doha",
      "Museum of Islamic Art & its gardens",
      "The Corniche & West Bay skyline",
      "Katara Cultural Village",
      "Photo stops at the Pearl-Qatar",
    ],
    includes: ["Hotel pickup & drop-off", "Licensed local guide", "Air-conditioned vehicle", "Bottled water"],
    excludes: ["Entry tickets (where applicable)", "Meals & personal expenses", "Gratuities"],
    itinerary: [
      { time: "Morning", title: "Souq Waqif", text: "Wander the restored old market — spices, textiles, falcons and traditional cafés." },
      { time: "Late morning", title: "Museum of Islamic Art", text: "Admire I. M. Pei's masterpiece and its world-class collection (exterior + gardens)." },
      { time: "Midday", title: "Corniche & West Bay", text: "Drive the bay with photo stops beneath Doha's futuristic skyline." },
      { time: "Afternoon", title: "Katara & The Pearl", text: "Explore the cultural village and the marina promenade before heading back." },
    ],
    gallery: ["souq-waqif", "museum-islamic-art", "katara", "national-museum"],
  },
  {
    slug: "dhow-cruise",
    name: "Traditional Dhow Cruise",
    tagline: "Sail Doha Bay beneath the glittering skyline",
    img: "cruises",
    duration: "Approx. 1.5–2 hours",
    groupSize: "Private or shared",
    overview:
      "Step aboard a traditional wooden dhow and glide across Doha Bay. Relax on deck as the West Bay skyline lights up, with the Museum of Islamic Art and the Corniche gliding past. A dinner cruise upgrade is available for a truly special evening.",
    highlights: [
      "Classic wooden dhow on Doha Bay",
      "Front-row views of the West Bay skyline",
      "Sunset or evening sailings",
      "Optional dinner cruise upgrade",
      "Great for couples, families & groups",
    ],
    includes: ["Dhow cruise on Doha Bay", "Onboard seating & refreshments", "Bottled water"],
    excludes: ["Hotel transfers (add-on)", "Dinner (optional upgrade)", "Gratuities"],
    itinerary: [
      { time: "Boarding", title: "Embark at the Corniche", text: "Meet your crew and board the dhow at the Corniche jetty." },
      { time: "Cruise", title: "Sail the bay", text: "Cruise past the Museum of Islamic Art and beneath the West Bay towers." },
      { time: "Golden hour", title: "Skyline & sunset", text: "Relax on deck for photos as the city lights come alive." },
      { time: "Return", title: "Back to shore", text: "Return to the jetty after an unforgettable sail." },
    ],
    gallery: ["cruises", "the-pearl", "mina-district"],
  },
  {
    slug: "banana-island",
    name: "Banana Island Day Escape",
    tagline: "A crescent-shaped resort island off the Doha coast",
    img: "banana-island",
    duration: "Full day",
    groupSize: "Private or shared",
    overview:
      "Hop on a catamaran to Banana Island — a serene resort escape just off Doha. Spend the day on pristine beaches and pools, try water sports, or simply unwind with the Gulf breeze and the Doha skyline on the horizon.",
    highlights: [
      "Scenic catamaran transfer from Doha",
      "Pristine beaches & swimming pools",
      "Water sports & activities",
      "Relaxed, family-friendly day out",
      "Dining options on the island",
    ],
    includes: ["Return catamaran transfer", "Day access to island facilities", "Beach & pool access"],
    excludes: ["Meals & drinks", "Water sports & spa (payable on site)", "Hotel transfers (add-on)"],
    itinerary: [
      { time: "Morning", title: "Set sail", text: "Board the catamaran from Doha for the short, scenic crossing to the island." },
      { time: "Daytime", title: "Beach & pools", text: "Enjoy the beaches, pools and activities at your own pace." },
      { time: "Afternoon", title: "Unwind or explore", text: "Try water sports, book a spa treatment, or simply relax by the Gulf." },
      { time: "Evening", title: "Return to Doha", text: "Catch the catamaran back to the mainland." },
    ],
    gallery: ["banana-island", "the-pearl"],
  },
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
