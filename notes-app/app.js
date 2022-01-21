// npm packages:
const yargs = require('yargs');

// custom packages:
const notesHelper = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note.',
    builder: {
        title: {
            describe: 'Title of the note to be added.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note to be added.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesHelper.addNote(argv.title, argv.body);
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
    handler(argv) {
        notesHelper.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes.',
    handler() {
        notesHelper.listNote();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of the note to be read.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesHelper.readNote(argv.title);
    }
});

// add, remove, read, list
yargs.parse();
// console.log(yargs.argv);
