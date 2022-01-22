// module that defines/exports types of text formats
const chalk = require('chalk')

const info = chalk.bold.green;
const warn = chalk.bold.red;
const log = chalk.bold;

module.exports = {
    info: info,
    warn: warn,
    log: log
};
