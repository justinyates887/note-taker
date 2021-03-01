const global = require('./notes.json');
const controller = require('../../controllers/landing');

function noteBuilder(req) {
    const time = new Date();
    const note = {
        title: req.body.noteTitle,
        body: req.body.noteBody,
        time: time
    }
    console.log(note);
    global.notesArr.push(note);
    return note;
}

module.exports = noteBuilder;