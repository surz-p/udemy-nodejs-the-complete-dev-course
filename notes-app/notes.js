const fs = require('fs')
const chalk = require('chalk')

// set global status formatting types
// Orange color
const warnStatus = chalk.hex('#FFA500');
const addStatus = chalk.green;
const removeStatus = chalk.red;
const readStatus = chalk.italic.underline;
const headerStatus = chalk.bold.inverse;

const fetchNoteList = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesList = notesBuffer.toString();
        return JSON.parse(notesList);
    } catch (e) {
        return [];
    }
}

const saveNoteList = (notes) => {
    const allNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', allNotes)
}

const truncateNoteList = () => {
    fs.truncateSync('notes.json', 0)
}

const addNote = (title, body) => {
    const allNotes = fetchNoteList();
    // push a note, only if the title is not already present in the db store
    const duplicateNote = allNotes.find(note => note.title === title);
    if(!duplicateNote) {
        allNotes.push({
            title: title,
            body: body
        });
        saveNoteList(allNotes);
        console.log(addStatus('New note added!'))
    } else {
        console.log(warnStatus('Duplicate title entered.'));
    }
};

const removeNote = (title) => {
    const allNotes = fetchNoteList();
    if(allNotes.length === 0) {
        console.log(warnStatus('No notes available to remove from.'));
        return;
    }
    const allNotesWithoutTitle = allNotes.filter(note => note.title !== title);
    if(allNotesWithoutTitle.length !== allNotes.length) {
        if(allNotesWithoutTitle.length === 0) {
            truncateNoteList();
        } else {
            saveNoteList(allNotesWithoutTitle);
        }
        console.log(removeStatus('Note removed!'));
    } else {
        console.log(warnStatus('No note with title "' + title + '" found.'));
    }
}

const listNote = () => {
    const allNotes = fetchNoteList();
    if(allNotes.length === 0) {
        console.log(warnStatus('No notes to display.'));
    } else {
        console.log(headerStatus('Your notes:'));
        allNotes.forEach((note, idx) => {
            console.log(idx + 1 + '. ' + note.title);
        });
    }
}

const readNote = (title) => {
    const allNotes = fetchNoteList();
    const noteToRead = allNotes.find(note => note.title === title);
    if(!noteToRead) {
        console.log(warnStatus('No note with title "' + title + '" found.'))
    } else {
        console.log(readStatus(noteToRead.title) + ': ' + noteToRead.body);
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
};
