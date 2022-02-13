const checkSession = (req, res, next) => {
  if (req.session.user) {
    res.sendStatus(200);
  }
  next();
};

module.exports = checkSession;
