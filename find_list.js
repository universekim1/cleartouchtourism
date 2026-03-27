const fs = require('fs');
const content = fs.readFileSync('c:\\telhaclarke.com.au\\destinations\\index.htm', 'utf8');

// find all indexes of Desert safari
let regex = /Desert safari/gi;
let match;
while ((match = regex.exec(content)) !== null) {
   let idx = match.index;
   console.log(`--- Match at idx ${idx} ---`);
   console.log(content.substring(Math.max(0, idx - 100), Math.min(content.length, idx + 100)));
}
