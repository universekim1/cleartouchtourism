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
    
    // 1. Preloader Text
    content = content.replace(/Design studio<br>\s*Architecture & interior/g, 'Media Hub<br>\nTourism & Storytelling');
    content = content.replace(/South Yarra<br>\s*Australia/g, 'Doha<br>\nQatar');

    // 2. Privacy Policy specific content
    content = content.replace(/- Providing architectural and design services\./g, '- Providing tourism photography and videography services.');
    
    // 3. Fix address formatting issues if any left
    content = content.replace(/<span class="line">59 Garden Street, <\/span><span class="line">South Yarra <\/span><span class="line">Victoria, Australia <\/span><span class="line">3141<br>/g, '<span class="line">Doha, Qatar </span><span class="line">West Bay</span><br>');

    fs.writeFileSync(file, content, 'utf8');
});

console.log("Successfully cleaned up remaining architectural references in Preloaders and Privacy Policy!");
