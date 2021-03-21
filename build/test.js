const path = require('path');
console.log(__dirname);
const aPath1 = path.join(__dirname, '../dist/image')
const aPath2 = path.posix.join(__dirname, '../dist/image')
console.log(aPath1);
console.log(aPath2);
