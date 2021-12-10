const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(folder, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
        if (path.extname(file) === extension) {
            console.log(file);
        }
    })
})