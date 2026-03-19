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

const patterns = [
    { search: /src=["'](?!\/|http|https|data:)([^"']*)wp-content\//g, replace: 'src="/$1wp-content/' },
    { search: /srcset=["'](?!\/|http|https)([^"']*)wp-content\//g, replace: 'srcset="/$1wp-content/' },
    { search: /data-src=["'](?!\/|http|https)([^"']*)wp-content\//g, replace: 'data-src="/$1wp-content/' },
    { search: /data-srcset=["'](?!\/|http|https)([^"']*)wp-content\//g, replace: 'data-srcset="/$1wp-content/' },
    { search: /href=["'](?!\/|http|https|#)([^"']*)wp-content\//g, replace: 'href="/$1wp-content/' },
    { search: /src=["'](?!\/|http|https)([^"']*)gtag\//g, replace: 'src="/$1gtag/' },
    { search: /href=["'](?!\/|http|https)([^"']*)gtag\//g, replace: 'href="/$1gtag/' },
];

// Note: The $1 might contain things like ../ or ./
// We want to replace the WHOLE segment like "../wp-content/" with "/wp-content/"
// So let's refine the regex.

const refinedPatterns = [
    // Replace any relative path starting with . or .. or nothing that leads to wp-content/ with /wp-content/
    { search: /(src|srcset|data-src|data-srcset|href|content)=["'](\.\.\/|\.\/)*wp-content\//g, replace: '$1="/wp-content/' },
    { search: /(src|srcset|data-src|data-srcset|href|content)=["'](\.\.\/|\.\/)*gtag\//g, replace: '$1="/gtag/' },
    // Also handle srcset commas: "path/to/img.jpg 480w, path2/to/img.jpg 768w"
    // This is harder with regex, let's do a more robust approach for srcset.
];

allHtmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Normalize simple attributes
    content = content.replace(/(src|data-src|href|content)=["'](\.\.\/|\.\/)*wp-content\//g, '$1="/wp-content/');
    content = content.replace(/(src|data-src|href|content)=["'](\.\.\/|\.\/)*gtag\//g, '$1="/gtag/');

    // Normalize srcset and data-srcset (which can have multiple comma-separated values)
    const srcsetRegex = /(srcset|data-srcset)=["']([^"']+)["']/g;
    content = content.replace(srcsetRegex, (match, attr, value) => {
        const normalizedValue = value.split(',').map(part => {
            const trimmed = part.trim();
            if (trimmed.startsWith('wp-content/') || trimmed.startsWith('../wp-content/') || trimmed.startsWith('./wp-content/')) {
                 // Remove any leading ./ or ../ and add /
                 const cleanPart = trimmed.replace(/^(\.\.\/|\.\/)+/, '');
                 return `/${cleanPart}`;
            }
            // Also handle if the relative path was deeper, but HTTrack usually stays within the root structure.
            return part;
        }).join(', ');
        return `${attr}="${normalizedValue}"`;
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated assets in: ${file}`);
    }
});

console.log("Global Path Normalization Complete!");
