const { Op } = require('sequelize');
const { Note } = require('../db/models');

const getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.findAll({ where: { user: req.session?.user.id } });
    return res.json({ allNotes });
  } catch (error) {
    return res.sendStatus(500);
  }
};

const searchNotes = async (req, res) => {
  const search = req.body.word;
  const posts = await Note.findAll({ where: { title: { [Op.iLike]: `%${search}%` } } });
  res.json({ posts });
};

const addNote = async (req, res) => {
  const newPost = await Note.create({
    title: req.body.title,
    text: req.body.text,
    user: req.session?.user.id,
  });
  res.json({ newPost });
};

const editNote = async (req, res) => {
  const { id } = req.params;
  const { title, text } = req.body;
  try {
    await Note.update({ title, text }, { where: { id } });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const delNote = async (req, res) => {
  const { id } = req.params;
  await Note.destroy({ where: { id } });
  res.sendStatus(200);
};

module.exports = {
  addNote,
  searchNotes,
  editNote,
  getAllNotes,
  delNote,
};
