console.log("Starting Notes App..");

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json', 'utf-8');
        return JSON.parse(notesString);
    } catch (e) {
        console.log(e);

    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let getAll = () => {
    return fetchNotes();

}


let addNote = (title, body) => {
    //  -----------------  Array To save notes - -------------------
    let notes = [];
    let note = {
        title,
        body
    };

    // --------------- Fetching Notes  -------------

    try {
        let noteString = fs.readFileSync('notes-data.json', 'utf-8');
        notes = JSON.parse(noteString);
    } catch (e) {
        //
    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    // -------------- check for Duplicate Title ----------------

    if (duplicateNotes.length == 0) {
        // --------------- save comming note into notes array -----------
        notes.push(note);
        // Wrinting in notes file
        saveNotes(notes);
        console.log("------------------- Note Added Successfully -------------- ");
        console.log("------------------You Have : " + notes.length + " Notes  --------------");
    } else {
        console.log(" ----- Title Already Exist  ---------------");

    }


}

let readNote = (title) => {
    console.log("Reading Note : ", title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];

}

let removeNote = (title) => {
    console.log("Removing Note : ", title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

}

var logNote = (note) => {
    console.log('                ------------------------      ');
    console.log(`Title: ${note.title} || Body: ${note.body}`);
};


module.exports = {
    getAll, addNote, readNote, removeNote, logNote
};
