const router = require('express').Router();

const { getAllNotes, createNewNote} = require('../../lib/notes');

//get all notes
router.get('/notes', (req, res) => {
  res.json(JSON.parse(getAllNotes()));
});

//post new note
router.post('/notes', (req, res) => {
  const newNote = {
      title: req.body.title,
      text: req.body.text
  }
  createNewNote(newNote);
  res.json(newNote);
});

module.exports  = router;