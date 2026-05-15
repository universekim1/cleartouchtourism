const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'wp-content') {
                walk(filePath, callback);
            }
        } else if (file.endsWith('.htm') || file.endsWith('.html') || file.endsWith('.js')) {
            callback(filePath);
        }
    });
}

let updatedFiles = 0;
walk(__dirname, filePath => {
    if (filePath === __filename) return; // skip this script
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    content = content.replace(/\+97459914706/g, '+97455484718');
    content = content.replace(/contact@cleartouch\.com/g, 'bookings@cleartouchmedia.com');
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
        updatedFiles++;
    }
});
console.log(`Updated ${updatedFiles} files.`);
