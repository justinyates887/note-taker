const global = require('./notes.json');
const controller = require('../../controllers/landing');
const notes = global.notesArr;

 exports.noteBuilder = function(req) {
    const time = new Date();
    const id = Math.floor((Math.random() * 1000000) + 1);
    const note = {
        title: req.body.noteTitle,
        body: req.body.noteBody,
        time: time,
        id: id
    }
    notes.push(note);
    return note;
}

exports.showNote = function(req) {
    let note = [];

    for(let i = 0; i < notes.length; i++){
        if(req.params.note_id == notes[i].id){
             note.push(notes[i]);
        }
    }
    console.log(`Note: ${note}`)
    return note;
}