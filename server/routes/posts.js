const { Router } = require('express');
const notesController = require('../controller/notes.controller');

const notesRouter = Router();

notesRouter.get('/', notesController.getAllNotes);
notesRouter.post('/', notesController.searchNotes);
notesRouter.post('/add', notesController.addNote);
notesRouter.put('/edit/:id', notesController.editNote);
notesRouter.delete('/delete/:id', notesController.delNote);

module.exports = notesRouter;
