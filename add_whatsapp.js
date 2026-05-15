const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const whatsappNumber = '+97455484718';
const whatsappMessage = encodeURIComponent("Hi ClearTouch Media, I'm interested in booking a photography tour in Doha!");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const instagramLink = 'https://www.instagram.com/clear_touch_media';
const tiktokLink = 'https://www.tiktok.com/@clear_touch_media';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== '.gemini' && file !== 'wp-content' && file !== 'gtag' && file !== 'wp-includes') {
                walk(filePath, callback);
            }
        } else if (file.endsWith('.htm') || file.endsWith('.html')) {
            callback(filePath);
        }
    });
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Update Instagram Link
    content = content.replace(/https:\/\/www\.instagram\.com\/telhaclarke\/?/g, instagramLink);

    // 2. Update Linkedin to Tiktok Link
    content = content.replace(/https:\/\/www\.linkedin\.com\/company\/telhaclarke/g, tiktokLink);

    // 3. Update Link Text (Linkedin -> Tiktok)
    // We do this carefully for both classes

    // Header pattern
    content = content.replace(/(class="header-social-link[^>]+">)Linkedin(<\/a>)/g, '$1Tiktok$2');

    // Footer pattern
    content = content.replace(/(class="xl:hover:text-mist">)Linkedin(<\/a>)/g, '$1Tiktok$2');

    // Contact page pattern
    content = content.replace(/(class="xl:hover:text-white">)Linkedin(<\/a>)/g, '$1Tiktok$2');

    // 4. Add WhatsApp after TikTok/Tiktok (if not already added)
    if (!content.includes('wa.me/+97455484718')) {
        // Header pattern
        content = content.replace(/(class="header-social-link[^>]+">(?:TikTok|Tiktok))<\/a>/g,
            '$1,</a>\n              <a href="' + whatsappLink + '" target="_blank" rel="noopener"\n                class="header-social-link xl:hover:text-mist transition-colors duration-normal ease-out">WhatsApp</a>');

        // Footer pattern
        content = content.replace(/(class="xl:hover:text-mist">(?:TikTok|Tiktok))<\/a>/g,
            '$1,</a>\n                      <a href="' + whatsappLink + '" target="_blank" rel="noopener"\n                        class="xl:hover:text-mist">WhatsApp</a>');

        // Contact page pattern
        content = content.replace(/(class="xl:hover:text-white">(?:TikTok|Tiktok))<\/a>/g,
            '$1,</a>\n                      <a href="' + whatsappLink + '" target="_blank" rel="noopener"\n                        class="xl:hover:text-white">WhatsApp</a>');
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

let filesProcessed = 0;
walk(rootDir, (filePath) => {
    if (processFile(filePath)) {
        filesProcessed++;
        console.log(`Updated: ${filePath}`);
    }
});

console.log(`\nFinished! Updated ${filesProcessed} files.`);
