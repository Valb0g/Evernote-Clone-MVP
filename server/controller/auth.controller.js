/* eslint-disable no-underscore-dangle */
const sha256 = require('sha256');
const { User } = require('../db/models');

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (name && password && email) {
    try {
      const hashPassword = await sha256(password);
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
      };
      return res.json({ id: newUser.id, name: newUser.name });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && (await sha256(password) === currentUser.password)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };
        return res.json({ id: currentUser.id, name: currentUser.name });
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);
    res.clearCookie(req.app.get('cookieName'));
    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    if (req.session.user) {
      const user = await User.findByPk(req.session?.user.id, { raw: true });
      return res.json(user);
    }
    return res.sendStatus(400);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signUp,
  signIn,
  signOut,
  checkAuth,
};
