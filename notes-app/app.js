/**
 *  const fs = require('fs');
 *  fs.writeFileSync('notes.txt', 'This file was created by node.js\n');
 *  fs.appendFileSync('notes.txt', 'This line was however appended by node.js');

 *  const utils = require('./utils.js')
 *  const add = require('./utils.js')
 *  console.log(utils);
 *  const sum = add(2, 3);
 *  console.log(sum);
 */

const getNotes = require('./notes.js')

console.log(getNotes());
