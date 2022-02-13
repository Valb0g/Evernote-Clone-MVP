const express = require('express');
const { Note } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allNotes = await Note.findAll({ order: [['id', 'DESC']] });
  res.json({ allNotes });
});
