const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "works", "index.htm");
let content = fs.readFileSync(filePath, "utf8");

// 1. Header & Meta Context
content = content.replace(
  /<title>ClearTouch Media &#8212; Work<\/title>/g,
  "<title>ClearTouch Media &#8212; Destinations</title>",
);
content = content.replace(
  /content="Explore our work across commercial, hospitality, multi-residential, public space, residential, retail and senior’s living typologies."/g,
  'content="Explore our stunning tourism photography and videography across adventure, culture, heritage, luxury, and landscape destinations."',
);
content = content.replace(
  /content="ClearTouch Media &#8212; Work"/g,
  'content="ClearTouch Media &#8212; Destinations"',
);
content = content.replace(
  /"name": "ClearTouch Media &#8212; Work"/g,
  '"name": "ClearTouch Media &#8212; Destinations"',
);
content = content.replace(
  /"description": "Explore our work across commercial, hospitality, multi-residential, public space, residential, retail and senior’s living typologies."/g,
  '"description": "Explore our stunning tourism photography and videography across adventure, culture, heritage, luxury, and landscape destinations."',
);
content = content.replace(/"name": "Work"/g, '"name": "Destinations"');

// Preloader
content = content.replace(
  /Media Hub<br \/>\n            Architecture & interior/g,
  "Media Hub<br />\n            Tourism & Storytelling",
);
content = content.replace(
  /South Yarra<br \/>\s*Australia/g,
  "Doha<br />\n            Qatar",
);

// Navigation links
content = content.replace(
  /<a href="index\.htm" class="header-link list-o-item">Work,<\/a>/g,
  '<a href="index.htm" class="header-link list-o-item">Destinations,</a>',
);
content = content.replace(
  /<a href="\.\.\/process\/index\.htm" class="header-link list-o-item"\s*>Process,<\/a\s*>/g,
  '<a href="../process/index.htm" class="header-link list-o-item">Method,</a>',
);
content = content.replace(
  /<a href="\.\.\/studio\/index\.htm" class="header-link list-o-item"\s*>Studio<\/a\s*>/g,
  '<a href="../studio/index.htm" class="header-link list-o-item">Agency</a>',
);

content = content.replace(
  /<span class="header-link-mobile inline-block">Work<\/span>/g,
  '<span class="header-link-mobile inline-block">Destinations</span>',
);
content = content.replace(
  /<span class="header-link-mobile inline-block">Process<\/span>/g,
  '<span class="header-link-mobile inline-block">Method</span>',
);
content = content.replace(
  /<span class="header-link-mobile inline-block">Studio<\/span>/g,
  '<span class="header-link-mobile inline-block">Agency</span>',
);

// 2. Filter Categories Transformations
content = content.replace(/Commercial/g, "Adventure");
content = content.replace(/Hospitality/g, "Culture");
content = content.replace(/Multi-residential/g, "Landscape");
content = content.replace(/Residential/g, "Luxury");
content = content.replace(/Retail/g, "Events");
content = content.replace(/Seniors' Living/g, "Heritage");
content = content.replace(/All Work/g, "All Destinations");
content = content.replace(/All works/g, "All Destinations");

// 3. Project Listings Transformations
// We have 27 projects. We will replace the text inside <h2 class="flex-1">...</h2> with new titles.
const newTitles = [
  "Desert Safari Highlights",
  "Souq Waqif Evening Walk",
  "National Museum Perspectives",
  "Pearl Qatar Drone Shoot",
  "Katara Cultural Village",
  "Inland Sea Oasis",
  "Lusail Marina Sunset",
  "Al Zubarah Fort Heritage",
  "West Bay Skyline",
  "Dhow Cruise Experience",
  "Villaggio Mall Grandeur",
  "Msheireb Downtown Vibe",
  "Aspire Park Serenity",
  "Al Wakrah Souq Colors",
  "Banana Island Retreat",
  "Purple Island Kayaking",
  "Fanar Islamic Center",
  "Barzan Towers History",
  "Education City Architecture",
  "Qanat Quartier Charm",
  "Museum of Islamic Art",
  "Tornado Tower Views",
  "Al Khor Park Wildlife",
  "Sealine Beach Adventure",
  "Qatar National Library",
  "Al Thakira Mangroves",
  "Doha Corniche Stroll",
  // Adding some extras just in case
  "Zekreet Rock Formations",
  "Al Shahaniya Camel Racing",
  "MIA Park Landscapes",
];

let titleIndex = 0;
content = content.replace(
  /<h2 class="flex-1">\s*(.*?)\s*<\/h2>/g,
  (match, p1) => {
    if (p1.trim().length > 0) {
      const newTitle = newTitles[titleIndex % newTitles.length];
      titleIndex++;
      return `<h2 class="flex-1">${newTitle}</h2>`;
    }
    return match;
  },
);

// For List view in modal, they might be in an h3 tag instead
let titleIndexH3 = 0;
content = content.replace(
  /<h3 class="body-24 md:body-36 lg:body-48">\s*(.*?)\s*<\/h3>/g,
  (match, p1) => {
    if (p1.trim().length > 0) {
      const newTitle = newTitles[titleIndexH3 % newTitles.length];
      titleIndexH3++;
      return `<h3 class="body-24 md:body-36 lg:body-48">\n                          ${newTitle}\n                        </h3>`;
    }
    return match;
  },
);

// Update Locations
content = content.replace(
  /<div class="body-14 opacity-52">\s*(.*?)\s*<\/div>/g,
  (match, p1) => {
    if (p1.trim().length > 0 && p1.trim() !== "Filters") {
      return `<div class="body-14 opacity-52">Doha, Qatar</div>`;
    }
    return match;
  },
);

// Image ALT tags
content = content.replace(/alt=""/g, 'alt="Tourism Photography in Qatar"');

// Footer Update
content = content.replace(
  /Talk to us about your project/g,
  "Talk to us about your tour",
);

// Save the file
fs.writeFileSync(filePath, content, "utf8");
console.log("Successfully updated works/index.htm completely!");
