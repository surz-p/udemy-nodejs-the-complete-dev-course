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

// npm packages
// chalk that is used here is v2.4.x. The latest is on 5.0.0.
// Latest chalk version doesn't allow "require", but only "import".
// import chalk from 'chalk';
const chalk = require('chalk')
const validator = require('validator')

// custom packages
const getNotes = require('./notes.js')


console.log(getNotes());
console.log(validator.isEmail('some@email.com'));
console.log(validator.isURL('https://youtube.com'));

console.log(chalk.green('Success!'))
console.log(chalk.bold('This is bold'))
console.log(chalk.inverse('Colors inverted!'))
console.log(chalk.inverse.green.bold('Success!'))
console.log(chalk.inverse.red.bold('Failed!'))
console.log(chalk.inverse.blue.bold('Wait!'))

// process module
if(process.argv.length > 2) {
    // end in error
    console.log('Error!')
    process.exit();
} else {
    process.argv.forEach(element => {
        console.log(`${element}`);
    });
}