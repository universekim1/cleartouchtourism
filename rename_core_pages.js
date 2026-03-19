const fs = require('fs');
const path = require('path');

const projectDir = __dirname;

// Folders to rename: Map of Old Name -> New Name
const folderMap = {
    'works': 'destinations',
    'process': 'method',
    'studio': 'agency'
};

// Recursive function to get all HTML files
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

// 1. Update all links in all HTML files FIRST (before renaming folders, so we don't get confused)
allHtmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;

    // We replace occurrences of the folder names in paths.
    // E.g., href="works/index.htm", href="../works/index.htm", "works/index.htm"
    for (const [oldName, newName] of Object.entries(folderMap)) {
        // Look for string literal "oldName/index.htm"
        const regex = new RegExp(`${oldName}/index\\.htm`, 'g');
        if (regex.test(content)) {
            content = content.replace(regex, `${newName}/index.htm`);
            hasChanges = true;
        }
    }

    if (hasChanges) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated links in: ${file}`);
    }
});

// 2. Rename the folders
for (const [oldName, newName] of Object.entries(folderMap)) {
    const oldPath = path.join(projectDir, oldName);
    const newPath = path.join(projectDir, newName);

    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed folder: ${oldName} -> ${newName}`);
    } else {
        console.log(`Folder ${oldName} does not exist. (Maybe already renamed?)`);
    }
}

console.log("Core folder renaming and link updates Complete!");
