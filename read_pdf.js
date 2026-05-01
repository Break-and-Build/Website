const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Break and Build Intro Doc.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf-content.txt', data.text);
}).catch(e => console.error(e));
