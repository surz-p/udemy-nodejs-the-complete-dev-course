const fs = require('fs');
fs.writeFileSync('notes.txt', 'This file was created by node.js\n');
fs.appendFileSync('notes.txt', 'This line was however appended by node.js');