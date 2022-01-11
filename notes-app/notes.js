const fs = require('fs')
const chalk = require('chalk')
const warnStatus = chalk.hex('#FFA500'); // Orange color
const addStatus = chalk.green;
const removeStatus = chalk.red;

const getNote = function () {
    return 'Your notes...'
};

const fetchNotes = function () {
    try {
        const noteBuffer = fs.readFileSync('notes.json');
        const noteList = noteBuffer.toString();
        return JSON.parse(noteList);
    } catch (e) {
        return [];
    }
}

const saveNotes = function (notes) {
    const allNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', allNotes)
}

const truncateNotes = function () {
    fs.truncateSync('notes.json', 0)
}

const addNote = function (title, body) {
    const allNotes = fetchNotes();
    // push a note, only if the title is not already present in the db store
    const duplicateNotes = allNotes.filter((note) => {
        return note.title === title
    });
    if(duplicateNotes.length === 0) {
        allNotes.push({
            title: title,
            body: body
        });
        saveNotes(allNotes);
        console.log(addStatus('New note added!'))
    } else {
        console.log(warnStatus('Duplicate title entered.'));
        // process.exit();
    }
};

const removeNote = function (title) {
    const allNotes = fetchNotes();
    if(allNotes.length === 0) {
        console.log(warnStatus('No notes available to remove from.'));
        return;
    }
    const allNotesWithoutTitle = allNotes.filter(note => {
        return note.title !== title
    });
    if(allNotesWithoutTitle.length !== allNotes.length) {
        if(allNotesWithoutTitle.length === 0) {
            truncateNotes();
        } else {
            saveNotes(allNotesWithoutTitle);
        }
        console.log(removeStatus('Note deleted!'))
    } else {
        console.log(warnStatus('No note with title "' + title + '" found.'))
    }
}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote
};
