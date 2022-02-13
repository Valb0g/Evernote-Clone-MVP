const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');
const loginRouter = require('./routes/login');
const postRouter = require('./routes/posts');

const app = express();
const { COOKIE_SECRET, COOKIE_NAME } = process.env;
const PORT = process.env.PORT ?? 3001;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('cookieName', COOKIE_NAME);
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(session({
  name: app.get('cookieName'),
  store: new FileStore(),
  key: 'key',
  secret: process.env.SECRET ?? COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  secure: false,
  cookie: {
    path: '/',
    httpOnly: true,
    expires: 24 * 60 * 60e3,
  },
}));

app.use('/users', loginRouter);
app.use('/posts', postRouter);

app.listen(PORT);
