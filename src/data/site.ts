export const site = {
  name: "Clear Touch",
  fullName: "Clear Touch Tourism & Services",
  tagline: "Doha-based Tourism · Photography · Videography",
  phone: "+974 5548 4718",
  phoneRaw: "+97455484718",
  whatsapp: "97455484718",
  email: "bookings@cleartouchtourism.com",
  location: "Doha, Qatar",
  // Google Business Profile — "Ask for reviews" share link + Place ID.
  googleReviewUrl: "https://g.page/r/CZWJda8heIGeEBM/review",
  googlePlaceId: "ChIJD92iwbDFRT4RlYl1ryF4gZ4",
  // Public Maps listing — "read all reviews" links.
  googleMapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJD92iwbDFRT4RlYl1ryF4gZ4",
  // Tours: 3h, max 2/day. Slug kept from when one event covered both, so
  // links shared before the 2026-08-31 split still resolve.
  calLink: "kiberu-jobs-slnno2/book-a-tour-or-photo-session",
  calUrl: "https://cal.com/kiberu-jobs-slnno2/book-a-tour-or-photo-session",
  // Photo & video: 2h, max 2/day.
  calLinkPhoto: "kiberu-jobs-slnno2/book-a-photo-session",
  calUrlPhoto: "https://cal.com/kiberu-jobs-slnno2/book-a-photo-session",
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
  { slug: "old-doha-port",      name: "Old Doha Port",         tag: "Mina District",   tour: "doha-city-tour" },
  { slug: "the-pearl",          name: "The Pearl Island",      tag: "Marina living",   tour: "doha-city-tour" },
  { slug: "museum-islamic-art", name: "Museum of Islamic Art", tag: "Iconic landmark", tour: "doha-city-tour" },
  { slug: "banana-island",      name: "Banana Island",         tag: "Resort escape",   tour: "banana-island" },
  { slug: "katara",             name: "Katara",                tag: "Cultural village",tour: "doha-city-tour" },
];

// Merged homepage grid: offerings + destinations as one flip-card set, one
// card per photo (no repeats). `href` is the tour page that covers it, or
// /contact for services. `vehicles: true` renders the van+car SVG instead of a photo.
export const experiences = [
  { img: "desert-safari",      title: "Desert Safaris",        tag: "Inland Sea",        text: "Dune bashing, camel rides & BBQ dinners by the Inland Sea.",                       href: "/tours/desert-safari",  cta: "View tour" },
  { img: "souq-waqif",         title: "City & Culture",        tag: "Old Doha & beyond", text: "Souq Waqif, Katara & the National Museum of Qatar.",                               href: "/tours/doha-city-tour", cta: "View tour" },
  { img: "cruises",            title: "Cruises & Dining",      tag: "On the water",      text: "Traditional dhow & luxury yacht cruises on the Corniche.",                         href: "/tours/dhow-cruise",    cta: "View tour" },
  { img: "the-pearl",          title: "The Pearl Island",      tag: "Marina living",     text: "Waterfront promenades, marinas and boutique shopping on Doha's man-made island.", href: "/tours/doha-city-tour", cta: "View tour" },
  { img: "banana-island",      title: "Island & Beach",        tag: "Resort escape",     text: "Banana Island escapes & pristine Gulf getaways.",                                 href: "/tours/banana-island",  cta: "View tour" },
  { img: "museum-islamic-art", title: "Museum of Islamic Art", tag: "Iconic landmark",   text: "I.M. Pei's masterpiece on the Corniche — art spanning 1,400 years.",              href: "/tours/doha-city-tour", cta: "View tour" },
  { img: "katara",             title: "Katara",                tag: "Cultural village",  text: "Amphitheatres, galleries and beachside dining in the cultural village.",          href: "/tours/doha-city-tour", cta: "View tour" },
  { img: "visa-welcome",       title: "Visa Services",         tag: "Travel made easy",  text: "Fast, hassle-free Qatar tourist visa processing.",                                href: "/contact",              cta: "Enquire" },
  { vehicles: true,            title: "Airport Transfers",     tag: "Door to door",      text: "Private transfers and group vans from Hamad International, around the clock.",    href: "/contact",              cta: "Enquire" },
];

// Individual tours with detail pages at /tours/[slug].
//
// PRICING (added 2026-08-28) — `from` is the headline per-person rate used on
// cards and in Offer schema; `rates` is the table shown on the detail page.
// Benchmarked against the live Doha market: Visit Qatar's official half-day
// Inland Sea is QAR 330pp, Discover Qatar (Qatar Airways' DMC) private tours
// run from QAR 227pp, shared desert safaris sit at QAR 150–350pp, sunset dhow
// cruises at QAR 110–200pp, and Anantara's own Banana Island day pass is a
// fixed QAR 395pp. We sit deliberately under the DMC/official rates and above
// the budget operators, which is what "best price guarantee" can actually back.
// Banana Island is a resale of the resort's own pass, so the margin there is
// the transfer, not the pass.
export const tours = [
  {
    slug: "desert-safari",
    from: 250,
    rates: [
      { label: "Shared group tour", price: "QAR 250", unit: "per person" },
      { label: "Private 4x4", price: "QAR 950", unit: "up to 6 guests" },
      { label: "Children 4–11", price: "QAR 175", unit: "per child" },
    ],
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
    experience: [
      "The drive south is part of the experience. Doha's towers thin into low scrub, then into open sand, and somewhere along the way your driver pulls over to let the tyres down — the small ritual that turns a road car into a desert one. After that the tarmac ends and the ride begins.",
      "Dune bashing is the part everyone films. A good driver reads sand the way a sailor reads water, carving along the crests and dropping down the soft faces, and it is genuinely thrilling rather than merely bumpy. We pace it to the car: say the word and your driver will ease off without being asked twice.",
      "Then the desert goes quiet. Khor Al Adaid — the Inland Sea — is one of the few places on earth where the sea reaches into the desert, a protected reserve near the Saudi border that you cannot reach any way but by 4x4. Camels wait at the ridge, sandboards lean against the cars, and as the sun drops the whole basin turns copper. Dinner at camp follows: grilled meat, salads, bread, sweet tea, and enough time to sit still.",
    ],
    goodToKnow: [
      { title: "Pickup", text: "We collect you from your hotel or residence in Doha. Departures are timed so you reach the Inland Sea for golden hour, so the exact hour moves with the season's sunset and is confirmed the day before." },
      { title: "What to wear", text: "Loose clothes and shoes you do not mind filling with sand. Between November and March the desert cools fast once the sun is down — bring a light jacket even if the afternoon was warm." },
      { title: "What to bring", text: "Sunglasses, sunscreen, a hat, and a charged phone or camera. There is no shade between the dunes and nowhere to buy anything once you leave the road." },
      { title: "Who should sit this out", text: "Dune bashing is not advised during pregnancy, or with back, neck or heart conditions. Tell us when you book and we will plan a gentler desert route rather than cancel your day." },
      { title: "Best time of year", text: "October to April is the season. From June to September afternoons regularly pass 40°C, so we push departures later or steer you toward a different day out." },
    ],
    faqs: [
      { q: "How far is the Inland Sea from Doha?", a: "Roughly an hour and a half each way, part of it on tarmac and the last stretch across open sand. That travel time is already inside the six-hour window, not on top of it." },
      { q: "Can I skip the dune bashing?", a: "Yes. Tell your driver and they will take a level route through the desert to the Inland Sea instead. You will still get the camels, the sandboarding, the sunset and the camp." },
      { q: "Is the BBQ dinner included?", a: "It is — grilled meat, salads, bread, fruit and soft drinks at the desert camp. Vegetarian and other dietary needs are easy to cover if you tell us in advance." },
      { q: "Can we swim at the Inland Sea?", a: "The water is shallow, warm and very calm, and plenty of guests do. There are no changing facilities out there, so wear swimwear under your clothes and pack a towel." },
      { q: "Will we get good photographs?", a: "Your guide is happy to shoot on your phone. If you want the day properly documented, we are also a photography studio — a photographer can join your safari, and the dunes at golden hour are about the best backdrop in Qatar." },
    ],
    gallery: ["desert-safari", "banana-island", "the-pearl"],
  },
  {
    slug: "doha-city-tour",
    from: 175,
    rates: [
      { label: "Shared group tour", price: "QAR 175", unit: "per person" },
      { label: "Private vehicle & guide", price: "QAR 750", unit: "up to 6 guests" },
      { label: "Children 4–11", price: "QAR 120", unit: "per child" },
    ],
    name: "Doha City Tour",
    tagline: "Old souqs, modern skylines & cultural icons in one day",
    img: "souq-waqif",
    duration: "Approx. 5 hours",
    groupSize: "Private or shared",
    overview:
      "See the best of Doha with a local guide — from the winding lanes of Souq Waqif to the striking Museum of Islamic Art, the painted houses of Old Doha Port, the Corniche waterfront, the Pearl-Qatar and the cultural village of Katara. The perfect introduction to Qatar's past and its dazzling present.",
    highlights: [
      "Souq Waqif — spices, crafts & old Doha",
      "Museum of Islamic Art & its gardens",
      "Old Doha Port — the painted houses of Mina District",
      "The Corniche & West Bay skyline",
      "Katara Cultural Village",
      "Photo stops at the Pearl-Qatar",
    ],
    includes: ["Hotel pickup & drop-off", "Licensed local guide", "Air-conditioned vehicle", "Bottled water"],
    excludes: ["Entry tickets (where applicable)", "Meals & personal expenses", "Gratuities"],
    itinerary: [
      { time: "Morning", title: "Souq Waqif", text: "Wander the restored old market — spices, textiles, falcons and traditional cafés." },
      { time: "Late morning", title: "Museum of Islamic Art", text: "Admire I. M. Pei's masterpiece and its world-class collection (exterior + gardens)." },
      { time: "Midday", title: "Old Doha Port", text: "Walk Mina District's painted houses and murals, the old dhow harbour and the waterfront promenade." },
      { time: "Early afternoon", title: "Corniche & West Bay", text: "Drive the bay with photo stops beneath Doha's futuristic skyline." },
      { time: "Afternoon", title: "Katara & The Pearl", text: "Explore the cultural village and the marina promenade before heading back." },
    ],
    experience: [
      "Souq Waqif is where the day starts, and where most people would happily spend it. The restored market is a warren of narrow lanes selling spices, oud, textiles and Persian carpets, with a falcon souq at one end where hooded birds sit on perches and their owners talk shop. Behind it are the Emiri horse stables. It is a working market, not a museum, and it smells like one.",
      "From there the city changes register entirely. The Museum of Islamic Art is I. M. Pei's last great building, set on its own island with fourteen centuries of art inside and a park behind it that frames the West Bay skyline better than any postcard. We drive the Corniche between stops, which is when the scale of what Qatar has built in thirty years lands.",
      "Just south of the museum sits the part of the day nobody expects. Old Doha Port was the city's working harbour, and the Mina District behind it has been repainted top to bottom — pastel pink, lilac and blue houses, with whole façades handed to muralists, so an ordinary stairwell ends up beneath a four-storey portrait. The dhows are still moored along the water and the fishermen still use the slipway, which stops it feeling staged. Come early and the lanes are empty; it is the best colour in Doha and the easiest place on this tour to photograph.",
      "The afternoon runs on culture and coastline: Katara Cultural Village with its amphitheatre, galleries and tiled mosques, then the Pearl-Qatar, an island of marinas and pastel Mediterranean facades where Doha comes to walk in the evening. Your guide adjusts the order to the light and the crowds rather than marching a fixed list.",
    ],
    goodToKnow: [
      { title: "Pickup", text: "Hotel, residence, airport or cruise terminal, in an air-conditioned vehicle. Morning starts are the norm because the museums and souq are calmest then, but we can run the same tour into the evening." },
      { title: "What to wear", text: "Dress modestly at cultural and religious sites — shoulders and knees covered for everyone. Visitors are not expected to wear an abaya. Comfortable shoes matter more than you would think; there is a fair amount of walking between stops." },
      { title: "Fridays", text: "Friday is the day of congregational prayer, so shops and some sites open later in the afternoon. We shift the running order around it rather than skipping anything." },
      { title: "Entry tickets", text: "The tour covers exteriors, gardens and grounds. Museum interiors are a simple add-on — tell us in advance and we will build the tickets and the extra time into your day." },
      { title: "Best time of year", text: "October to April is comfortable for walking. In high summer we keep stops shorter, lean on indoor sites, and run the tour later in the day." },
    ],
    faqs: [
      { q: "Do we go inside the Museum of Islamic Art?", a: "The standard five hours covers the building, the island and MIA Park, which is where the skyline view is. Going inside is worth doing and easy to add — just say so when you book and we will allow the time and arrange tickets." },
      { q: "Is this a good layover tour?", a: "One of the most common reasons people book it. Five hours plus airport transfers still fits inside a long layover — check your own entry requirements, then send us your flight times and we will build the tour backwards from them." },
      { q: "Can we change the stops?", a: "Yes, on a private tour. Swap the Pearl for the National Museum of Qatar, add Lusail, spend longer in the souq — it is your afternoon. On shared departures the route is fixed." },
      { q: "Is it suitable for older travellers?", a: "Largely, yes. Every stop is reachable by vehicle and the walking is flat, but Souq Waqif is cobbled and uneven underfoot. Tell us about mobility needs and we will pick the drop-off points accordingly." },
      { q: "Can we do this and a desert safari in one day?", a: "You can, and many guests do — city tour in the morning, safari from the afternoon. It is a long day, so we suggest it mainly when your time in Qatar is short." },
    ],
    gallery: [
      "old-doha-port", "souq-waqif", "old-doha-port-2", "museum-islamic-art",
      "old-doha-port-3", "katara", "old-doha-port-4", "national-museum",
      "old-doha-port-5", "old-doha-port-6",
    ],
  },
  {
    slug: "dhow-cruise",
    from: 150,
    rates: [
      { label: "Sunset cruise", price: "QAR 150", unit: "per person" },
      { label: "With BBQ dinner", price: "QAR 250", unit: "per person" },
      { label: "Children 5–11", price: "QAR 90", unit: "under 5 free" },
      { label: "Private dhow charter", price: "QAR 2,500", unit: "up to 20 guests" },
    ],
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
    experience: [
      "The dhow is the point. These wooden boats carried pearl divers and cargo across the Gulf long before the skyline existed, and the ones on Doha Bay today are built the same way — timber decks, low cushioned seating, a wheelhouse that would not have looked out of place a century ago. You board at the Corniche, and the city starts to recede almost immediately.",
      "For the next couple of hours the whole of Doha rotates slowly past the rail. The Museum of Islamic Art from the water, the dhow harbour, the Corniche's long curve, and then West Bay — a wall of towers that switches on floor by floor as the light goes. It is the one view of the city that no photograph taken from land quite manages.",
      "It is a slow, unhurried thing to do, which is exactly why people like it. Couples take the bow, families spread out on the cushions, and nobody is rushed off the boat at the end. Add the BBQ dinner and it stretches into a full evening on the water.",
    ],
    goodToKnow: [
      { title: "Boarding", text: "Boats leave from the dhow jetty on the Corniche. Arrive ten to fifteen minutes early to board without hurrying. Hotel transfers are an easy add-on if you would rather not find it yourself." },
      { title: "Timing", text: "Sailing times follow the sunset, so they move through the year — earlier from October to February, later from March to September. Your confirmed time comes with your booking." },
      { title: "What to wear", text: "Smart-casual is right. There is a real breeze out on the bay even on a warm evening, so bring a light layer, and flat shoes are easier on a moving deck than heels." },
      { title: "Seasickness", text: "Doha Bay is sheltered and the water is usually glassy. This is a gentle sail rather than open-sea sailing, and it suits people who would normally avoid boats." },
      { title: "Children", text: "Very welcome, and under-fives sail free. The decks are open, so small children need an adult within arm's reach throughout." },
    ],
    faqs: [
      { q: "How long is the cruise?", a: "About an hour and a half to two hours for the sunset sailing. The dinner cruise runs a little longer because nobody eats in a hurry." },
      { q: "What is the difference between the sunset and dinner cruises?", a: "The route is the same. The sunset sailing is the cruise on its own; the dinner version adds a BBQ buffet served on board, which turns it from an outing into the evening's plan." },
      { q: "Is the boat private?", a: "Standard sailings are shared, which is part of the atmosphere. If you want the boat to yourselves — a proposal, a birthday, a company evening — we charter a whole dhow for up to twenty guests." },
      { q: "Do we need to book ahead?", a: "Sunset sailings fill up quickly from October through April, and around public holidays. A day or two ahead is usually enough; the same evening is often possible, but we cannot promise it in season." },
      { q: "Can you photograph a proposal on board?", a: "Yes, and we are asked often. Because we are a photography studio as well as a tour operator, a photographer can be aboard and unobtrusive, with the skyline lighting up behind you. Tell us the plan and we will keep it quiet." },
    ],
    gallery: ["cruises", "the-pearl", "mina-district"],
  },
  {
    slug: "banana-island",
    from: 450,
    rates: [
      { label: "Day escape", price: "QAR 450", unit: "per person" },
      { label: "Children 3–11", price: "QAR 195", unit: "under 3 free" },
    ],
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
    experience: [
      "Getting there sets the tone. The catamaran leaves from the mainland port and crosses in around twenty-five minutes, and by the time Doha's skyline has shrunk to a strip on the horizon the day has already changed pace. The island appears as a low green crescent with a beach curved around the inside of it.",
      "What you do with the day is genuinely up to you. There is a long stretch of calm, shallow beach on the sheltered side, a set of pools if you would rather not deal with sand, and water sports for anyone who came to move rather than to lie still. There is also a good case for doing none of it and reading under a parasol until lunch.",
      "It works particularly well for families, because the beach shelves gently and there is enough on the island to keep older children busy while the adults do not move. Couples come for the opposite reason. Either way you are back on the mainland by evening with the whole day behind you.",
    ],
    goodToKnow: [
      { title: "Getting there", text: "Return catamaran transfers are included and sail to a fixed timetable, so the crossing times shape your day. We confirm both sailings when you book. Hotel pickup to the port is included in the price." },
      { title: "What is included", text: "Your pass covers the crossing, beach and pool access, and resort credit toward food and activities. The exact credit depends on the pass and the day of the week, and we confirm it in writing before you pay." },
      { title: "What to bring", text: "Swimwear, a towel, sunscreen and photo ID. Changing facilities are available on the island, and anything you have not brought is generally buyable there at resort prices." },
      { title: "Payable on site", text: "Meals beyond your credit, spa treatments and some water sports are settled directly with the resort. Bring a card — it is a cashless island." },
      { title: "Best time of year", text: "October to May is ideal. July and August are swimmable but genuinely hot, so the pools and shade matter more than the beach does." },
    ],
    faqs: [
      { q: "How long is the boat ride?", a: "Around twenty-five minutes each way on a comfortable catamaran, with seating inside and out. It is a short, calm crossing rather than a sea voyage." },
      { q: "Is it a full day?", a: "Effectively, yes — the sailing times bracket it. You get the better part of a day on the island, and we choose the crossing pair that gives you the most of it." },
      { q: "Is it good for young children?", a: "Very. The beach is shallow and calm and the island is entirely self-contained, so there is no traffic and nothing to walk to. Under-threes come free." },
      { q: "Can we stay overnight instead?", a: "The island is a resort as well as a day destination. If you would rather stay the night, tell us and we will quote the stay instead of the day pass." },
      { q: "Can we book a photo session there?", a: "Yes. The crescent beach and the Doha skyline across the water make it one of the better shoots in Qatar, and we run it as a package — day pass plus a photographer for part of the day." },
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

// Real Google reviews (added 2026-07-09) — quotes are VERBATIM from the
// public listing (typos and all) so every entry stays checkable on Google
// via site.googleMapsUrl. Do not edit the wording; swap entries only for
// other real reviews.
export const testimonials: { quote: string; name: string; place: string; initial: string }[] = [
  {
    quote: "Best photographers in Qatar",
    name: "Julian Nalubega",
    place: "Google review",
    initial: "J",
  },
  {
    quote: "most professional people i know made my birthday a movie,u highly recommed,forever in my heart",
    name: "Ann Muthoni",
    place: "Google review",
    initial: "A",
  },
  {
    quote: "Had a great tour with great photos and videos for my memories",
    name: "Lydia Henrietta Atuhairwe",
    place: "Google review",
    initial: "L",
  },
  {
    quote: "I had the best experience with Clear touch and services",
    name: "Elesu Edrian",
    place: "Google review",
    initial: "E",
  },
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
