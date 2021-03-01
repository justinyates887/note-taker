const back = require('../public/javascripts/backend')
const global = require('../public/javascripts/notes.json')
const notes= global.notesArr;

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Notes' });
}

exports.submit_note = function (req, res) {
    back.noteBuilder(req);
    res.redirect('/notes');
}

exports.show_notes = function (req, res, next){
    res.render('landing', {title: 'Notes', notes: notes})
}

exports.show_note = function (req, res, next){
    let note = [];
    for(let i = 0; i < notes.length; i++){
        note = (req.param.note_id == notes[i].id) ? note.push(notes[i]) : ['oops']
    }
    res.render('note', { note: note })
}
