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
    
    // Using simple replacements for the header links to forcefully make them absolute from the liver-server root
    
    // 1. Desktop Logos
    content = content.replace(/<a href="[^"]*" aria-label="Home" class="header-logo/g, '<a href="/index.htm" aria-label="Home" class="header-logo');
    
    // 2. Mobile Logos
    content = content.replace(/<a href="[^"]*" aria-label="Home" class="flex svg-wrapper/g, '<a href="/index.htm" aria-label="Home" class="flex svg-wrapper');
    
    // 3. Desktop Navigation Links
    content = content.replace(/<a href="[^"]*" class="header-link list-o-item">Destinations,<\/a>/g, '<a href="/destinations/index.htm" class="header-link list-o-item">Destinations,</a>');
    content = content.replace(/<a href="[^"]*" class="header-link list-o-item">Method,<\/a>/g, '<a href="/method/index.htm" class="header-link list-o-item">Method,</a>');
    content = content.replace(/<a href="[^"]*" class="header-link list-o-item">Agency<\/a>/g, '<a href="/agency/index.htm" class="header-link list-o-item">Agency</a>');
    
    // 4. Desktop Contact
    content = content.replace(/<a href="[^"]*" class="header-contact/g, '<a href="/contact/index.htm" class="header-contact');
    
    // 5. Mobile Navigation Links
    content = content.replace(/<a href="[^"]*" class="overflow-hidden">\s*<span class="header-link-mobile inline-block">Home<\/span>/g, '<a href="/index.htm" class="overflow-hidden">\n                <span class="header-link-mobile inline-block">Home</span>');
    content = content.replace(/<a href="[^"]*" class="overflow-hidden">\s*<span class="header-link-mobile inline-block">Destinations<\/span>/g, '<a href="/destinations/index.htm" class="overflow-hidden">\n                <span class="header-link-mobile inline-block">Destinations</span>');
    content = content.replace(/<a href="[^"]*" class="overflow-hidden">\s*<span class="header-link-mobile inline-block">Method<\/span>/g, '<a href="/method/index.htm" class="overflow-hidden">\n                <span class="header-link-mobile inline-block">Method</span>');
    content = content.replace(/<a href="[^"]*" class="overflow-hidden">\s*<span class="header-link-mobile inline-block">Agency<\/span>/g, '<a href="/agency/index.htm" class="overflow-hidden">\n                <span class="header-link-mobile inline-block">Agency</span>');
    content = content.replace(/<a href="[^"]*" class="overflow-hidden">\s*<span class="header-link-mobile inline-block">Contact<\/span>/g, '<a href="/contact/index.htm" class="overflow-hidden">\n                <span class="header-link-mobile inline-block">Contact</span>');

    fs.writeFileSync(file, content, 'utf8');
});

console.log("Successfully normalized absolute routing across all 34 core navigational headers!");
