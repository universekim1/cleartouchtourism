const fs = require('fs');
const path = require('path');

const projectDir = __dirname;

const folderMap = {
    'works': 'destinations',
    'process': 'method',
    'studio': 'agency'
};

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
    let hasChanges = false;

    for (const [oldName, newName] of Object.entries(folderMap)) {
        // Replace absolute URLs
        const absoluteRegex = new RegExp(`https://(?:telhaclarke\\.com\\.au|cleartouch\\.com)/${oldName}/`, 'g');
        if (absoluteRegex.test(content)) {
            content = content.replace(absoluteRegex, (match) => {
                return match.replace(`/${oldName}/`, `/${newName}/`);
            });
            hasChanges = true;
        }

        // Replace relative root paths (like href="/works/" or href="/works")
        const rootRegex = new RegExp(`(href|data-widget-url)="([^"]*)/${oldName}/?([^"]*)"`, 'g');
        if (rootRegex.test(content)) {
            content = content.replace(rootRegex, (match, p1, p2, p3) => {
                return `${p1}="${p2}/${newName}/${p3}"`;
            });
            hasChanges = true;
        }

        // Catch href="works/" or href="../works/" which might just be trailing
        // Note: my previous script caught works/index.htm. This catches ones without index.htm.
        const bareRegex = new RegExp(`(href|data-widget-url)="([^"]*)(/|^)${oldName}/?"`, 'g');
        if (bareRegex.test(content)) {
            content = content.replace(bareRegex, `$1="$2$3${newName}/"`);
            hasChanges = true;
        }
    }

    if (hasChanges) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated routing links in: ${file}`);
    }
});

console.log("Secondary link updates Complete!");
