const fs = require('fs')

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

const writeNotes = function (notes) {
    const allNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', allNotes)
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
        writeNotes(allNotes);
        console.log('New note added!')
    } else {
        console.log('Duplicate title entered.');
        // process.exit();
    }
};

module.exports = {
    getNote: getNote,
    addNote: addNote
};
