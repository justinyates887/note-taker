const back = require('../public/javascripts/backend')
const global = require('../public/javascripts/notes.json')
const notes= global.notesArr;

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Notes' });
}

exports.submit_note = function (req, res) {
    await back.noteBuilder().then(note => {
            res.redirect('/notes')
        });
}

exports.show_notes = function (req, res, next){
    console.log(notes);
    return notes
        .then(notes => {
            console.log(notes);
            res.render('landing', {title: 'Notes', notes: notes})
        })
}