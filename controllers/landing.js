const back = require('../public/javascripts/backend')
const global = require('../public/javascripts/notes.json')
const notes= global.notesArr;

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Notes' });
}

exports.submit_note = async function (req, res) {
    back(req);
    res.redirect('/notes');
}

exports.show_notes = async function (req, res, next){
    res.render('landing', {title: 'Notes', notes: notes})
}

exports.delete_note = function (req, res, next){
    console.log(req);
    res.redirect('/notes')
}