const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const contactEmail = 'contact@cleartouch.com';
const contactPhone = '+97459914706';
const instagramUrl = 'https://www.instagram.com/clear_touch_media';
const tiktokUrl = 'https://www.tiktok.com/@clear_touch_media';
const whatsappUrl = "https://wa.me/+97459914706?text=Hi%20ClearTouch%20Media%2C%20I'm%20interested%20in%20booking%20a%20photography%20tour%20in%20Doha!";

function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'wp-content' && file !== '.git' && file !== 'node_modules' && file !== 'scripts') {
                getAllHtmlFiles(filePath, fileList);
            }
        } else if (file.endsWith('.htm') || file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const htmlFiles = getAllHtmlFiles(baseDir);

htmlFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Normalize internal links in <a> tags
    // Matches href="../index.htm", href="index.htm" (if not in root), etc.
    // We want to convert them to /index.htm, /destinations/index.htm, etc.

    // Core pages mapping
    const corePages = ['index.htm', 'destinations', 'agency', 'method', 'contact', 'privacy-policy', 'terms-of-service'];

    corePages.forEach(page => {
        const pagePath = page === 'index.htm' ? 'index.htm' : `${page}/index.htm`;
        const regex = new RegExp(`href="(\\.\\.\\/)*${pagePath.replace(/\//g, '\\/')}"`, 'g');
        content = content.replace(regex, `href="/${pagePath}"`);
    });

    // 2. Normalize work links
    content = content.replace(/href="(\.\.\/)*work\//g, 'href="/work/');

    // 3. Normalize data-widget-url
    content = content.replace(/data-widget-url="(\.\.\/)*work\//g, 'data-widget-url="/work/');
    content = content.replace(/data-widget-url="(\.\.\/)*destinations\//g, 'data-widget-url="/destinations/');

    // 4. Standardize Footer Contact Details
    // Replace various phone numbers
    content = content.replace(/tel:\+974\s?[0-9\s]+/g, `tel:${contactPhone}`);
    content = content.replace(/>\+974\s?[0-9\s]+<\/a>/g, `>${contactPhone}</a>`);

    // Replace emails
    content = content.replace(/mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, `mailto:${contactEmail}`);
    content = content.replace(/class="xl:hover:text-mist">[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}<\/a>/g, `class="xl:hover:text-mist">${contactEmail}</a>`);

    // Replace Address block content
    content = content.replace(/<p>\s*59 Garden Street[\s\S]*?Victoria, Australia 3141\s*<\/p>/g, '<p>Doha<br />Qatar</p>');

    // 5. Standardize Socials
    content = content.replace(/https:\/\/www\.instagram\.com\/clear_touch_media/g, instagramUrl);
    // TikTok often has query params, let's catch them
    content = content.replace(/https:\/\/www\.tiktok\.com\/@clear_touch_media[^"]*/g, tiktokUrl);
    // WhatsApp
    content = content.replace(/https:\/\/wa\.me\/[0-9]+[^"]*/g, whatsappUrl);

    // 6. Fix "Back to all Destinations" (Floating back button usually)
    content = content.replace(/>Go to news list<\/div>/g, '>Back to all Destinations</div>');
    content = content.replace(/>Back to all projects<\/div>/g, '>Back to all Destinations</div>');

    // 7. Fix casing and typos in destination names
    content = content.replace(/Banana lsland/g, 'Banana Island');
    content = content.replace(/Desert safari/g, 'Desert Safari');
    content = content.replace(/Souq waqif/g, 'Souq Waqif');
    content = content.replace(/National museum/g, 'National Museum');
    content = content.replace(/Mina district/g, 'Mina District');
    content = content.replace(/The pearl island/g, 'The Pearl Island');
    content = content.replace(/Al khor park/g, 'Al Khor Park');
    content = content.replace(/Museum of Islamic art/g, 'Museum of Islamic Art');

    // 8. Fix social link text misalignment (handles multiline and various attrs)
    content = content.replace(/href="https:\/\/www\.tiktok\.com\/@clear_touch_media"[\s\S]*?>Linkedin<\/a>/g, (match) => {
        return match.replace('>Linkedin</a>', '>Tiktok</a>');
    });

    // 9. Standardize Company Name and Year (more lenient on spacing/dash)
    content = content.replace(/©\s*ClearTouch\s*Media\s*[0-9]+/gi, '© Clear Touch Tourism & Services 2026');
    content = content.replace(/©\s*Clear\s*Touch\s*Tourism\s*&\s*Services\s*[0-9]+/gi, '© Clear Touch Tourism & Services 2026');
    content = content.replace(/©\s*Clear\s*Touch\s*Tourism\s*&amp;\s*Services\s*[0-9]+/gi, '© Clear Touch Tourism & Services 2026');
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
});
