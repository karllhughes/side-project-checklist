const fs = require('fs');
const path = require('path');
const util = require('util');

const stats = fs.statSync(path.join(__dirname, '..', 'marketing-checklist.md'));
const mtime = new Date(util.inspect(stats.mtime));
console.log(mtime);

