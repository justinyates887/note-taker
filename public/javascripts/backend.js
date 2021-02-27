const global = require('./notes.json');
const controller = require('../../controllers/landing');

function noteBuilder() {
    const time = new Date();
    const note = {
        title: controller.submit_note.req.body.noteTitle,
        body: controller.submit_note.req.body.noteBody,
        time: time
    }
    console.log(note);
    global.notesArr.push(note);
    return note;
}

exports.noteBuilder() = noteBuilder();