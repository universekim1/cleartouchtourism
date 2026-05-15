const fs = require('fs');
const path = require('path');

const projectDir = __dirname;

function getAllHtmlFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.htm') || file.endsWith('.html')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const allHtmlFiles = getAllHtmlFiles(projectDir);

allHtmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Developer Credits
    content = content.replace(/https:\/\/thomasmonavon\.com\//g, 'https://oladelejoshua.netlify.app/');
    content = content.replace(/>Thomas Monavon</g, '>Oladele Joshua<');
    content = content.replace(/>TM</g, '>OJ<');

    content = content.replace(/https:\/\/gregorylalle\.com\//g, 'https://traviswayne.com/');
    content = content.replace(/>Grégory Lallé</g, '>Travis Wayne<');
    content = content.replace(/>GL</g, '>TW<');

    // 2. Footer Coordinates & Phone & Email
    // Address format 1 (Footer)
    content = content.replace(/59 Garden Street<br>\s*South Yarra<br>\s*Victoria, Australia 3141/g, 'Doha, Qatar<br>\nWest Bay<br>\nThe Pearl');
    // Address format 2 (Terms page)
    content = content.replace(/<span class="line">59 Garden Street,\s*<\/span><span class="line">South Yarra\s*<\/span><span class="line">Victoria, Australia 3141/g, '<span class="line">Doha, Qatar </span><span class="line">West Bay</span>');

    // Phone
    content = content.replace(/\+61 3 8672 5999/g, '+97455484718');

    // Email
    content = content.replace(/contact@telhaclarke\.com\.au/g, 'bookings@cleartouchmedia.com');
    // For href="mailto:"
    content = content.replace(/mailto:contact@telhaclarke\.com\.au/g, 'mailto:bookings@cleartouchmedia.com');

    // 3. ClearTouch Media naming conventions on Terms page
    content = content.replace(/ClearTouch Media \("we", "us", "our"\)/g, 'ClearTouch Media ("we", "us", "our")');
    // Already replaced earlier mostly, but ensuring the generic text is good.
    content = content.replace(/laws of Victoria, Australia/g, 'laws of Qatar');
    content = content.replace(/courts of Victoria/g, 'courts of Doha');

    // Terms of service title and text
    content = content.replace(/telhaclarke\.com\.au/g, 'cleartouch.com');

    fs.writeFileSync(file, content, 'utf8');
});

console.log("Successfully updated footer credentials and legal terms across all 34 core pages!");
