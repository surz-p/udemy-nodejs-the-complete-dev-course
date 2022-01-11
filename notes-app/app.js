// npm packages:
const yargs = require('yargs');
const notes = require('./notes.js');

// custom packages:
const noteUtility = require('./notes.js')

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
        noteUtility.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function () {
        console.log('Note removed!.')
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
