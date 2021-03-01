var express = require('express');
var router = express.Router();
let landing = require('../controllers/landing')

router.get('/', landing.get_landing);
router.post('/', landing.submit_note);
router.get('/notes', landing.show_notes);
router.get('note/:note_id', landing.show_note);

module.exports = router;
