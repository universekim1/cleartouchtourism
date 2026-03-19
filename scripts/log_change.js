const fs = require('fs');
const path = require('path');

const changelogPath = path.join(__dirname, '../docs/project_changelog.csv');

// Create the docs directory if it doesn't exist
const docsDir = path.dirname(changelogPath);
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Create the file with headers if it doesn't exist
if (!fs.existsSync(changelogPath)) {
  fs.writeFileSync(changelogPath, 'Date,Technical Change,Social Media Content\n');
}

const change = process.argv.slice(2).join(' ');
if (!change) {
  console.error('Please provide a change description.');
  process.exit(1);
}

const date = new Date().toISOString().split('T')[0];
// Escape quotes in CSV
const escapedChange = change.replace(/"/g, '""');
const csvRow = `"${date}","${escapedChange}",""\n`;

fs.appendFileSync(changelogPath, csvRow);
console.log('Successfully logged to docs/project_changelog.csv');
