const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'works', 'index.htm');
let content = fs.readFileSync(filePath, 'utf8');

// The durations we will cycle through
const durations = [
    "Half-Day", "Full-Day", "2 Hours", "4 Hours", 
    "Evening", "1 Day", "3 Hours", "Morning"
];

// Replace the column header "Date"
content = content.replace(/<div class="col-span-1 flex justify-end">Date<\/div>/g, '<div class="col-span-1 flex justify-end">Duration</div>');

// Replace the years in list view
let countList = 0;
content = content.replace(/<div class="col-span-1 flex justify-end">\s*(201\d|202\d|203\d)\s*<\/div>/g, (match, year) => {
    const dur = durations[countList % durations.length];
    countList++;
    return `<div class="col-span-1 flex justify-end">${dur}</div>`;
});

// Replace the years in grid badges. They look like: <span>2025</span> within <div class="card-work-date ...">
let countGrid = 0;
content = content.replace(/(<div[^>]*class="card-work-date[^>]*>[\s\S]*?<span>)\s*(201\d|202\d|203\d)\s*(<\/span>)/g, (match, p1, p2, p3) => {
    const dur = durations[countGrid % durations.length];
    countGrid++;
    return `${p1}${dur}${p3}`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated dates to durations in works/index.htm!");
