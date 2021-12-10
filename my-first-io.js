const fs = require('fs');

const sum = fs.readFileSync(process.argv[2], 'utf-8').split('\n').length - 1;

console.log(sum);