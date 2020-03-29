console.log("Starting App..");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

let argv = yargs.argv;
let command = process.argv[2];
console.log("Command is : ", command);
// console.log(process.argv);
console.log('Yargs', argv);

let title = argv.title;
let body = argv.body;

switch (command) {
    case "list":
        console.log(notes.getAll());
        break;
    case "add":
        notes.addNote(title, body);
        break;
    case "read":
        var note = notes.readNote(title);
        if (note) {
            console.log('Note found');
            notes.logNote(note);
        } else {
            console.log('Note not found');
        }
        break;
    case "remove":
        notes.removeNote(title);
        break;
    default:
        console.log("Invalid Command..");
        break;
}






