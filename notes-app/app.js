// npm packages:
const yargs = require('yargs');

// custom packages:
const noteHelper = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Title of the note being added.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note being added.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        noteHelper.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Title of note to be removed.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        noteHelper.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes.',
    handler: function () {
        console.log('Listing all notes.')
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading note.')
    }
});

// add, remove, read, list
yargs.parse();
// console.log(yargs.argv);
