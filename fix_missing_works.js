const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'works', 'index.htm');
let content = fs.readFileSync(filePath, 'utf8');

const newTitles = [
    "Desert Safari Highlights", "Souq Waqif Evening Walk", "National Museum Perspectives",
    "Pearl Qatar Drone Shoot", "Katara Cultural Village", "Inland Sea Oasis",
    "Lusail Marina Sunset", "Al Zubarah Fort Heritage", "West Bay Skyline",
    "Dhow Cruise Experience", "Villaggio Mall Grandeur", "Msheireb Downtown Vibe",
    "Aspire Park Serenity", "Al Wakrah Souq Colors", "Banana Island Retreat",
    "Purple Island Kayaking", "Fanar Islamic Center", "Barzan Towers History",
    "Education City Architecture", "Qanat Quartier Charm", "Museum of Islamic Art",
    "Tornado Tower Views", "Al Khor Park Wildlife", "Sealine Beach Adventure",
    "Qatar National Library", "Al Thakira Mangroves", "Doha Corniche Stroll"
];

let lsTitleIndex = 0;
// In works/index.htm, List view titles are the FIRST col-span-3 inside <div class="grid-w pt-8 pb-5">
content = content.replace(/<div class="grid-w pt-8 pb-5">\s*<div class="col-span-3">\s*(.*?)\s*<\/div>/g, (match, p1) => {
    if (p1.trim().length > 0) {
        const newTitle = newTitles[lsTitleIndex % newTitles.length];
        lsTitleIndex++;
        return `<div class="grid-w pt-8 pb-5">\n                          <div class="col-span-3">${newTitle}</div>`;
    }
    return match;
});

// Update Locations for List View. It uses class col-span-2 -mr-30
content = content.replace(/<div class="col-span-2 -mr-30">\s*(.*?)\s*<\/div>/g, (match, p1) => {
    if (p1.trim().length > 0) {
        return `<div class="col-span-2 -mr-30">\n                            Doha, Qatar\n                          </div>`;
    }
    return match;
});

// Save the file
fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully patched works/index.htm list views!");
