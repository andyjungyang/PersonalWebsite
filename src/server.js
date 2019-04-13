/* eslint no-unused-vars: ["error", { "args": "none"}] */

import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import {} from 'dotenv/config';
import config from './config';
import passportGoogle from './auth/google';
import initialData from './data/personal.json';
import scanContacts from './dynamoDB/scanContacts';
import putContact from './dynamoDB/putContact';

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
  secret: process.env.PASSPORT_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/auth/google', passportGoogle.authenticate('google', {
  scope: ['profile'],
}));

app.get('/auth/google/callback',
  passportGoogle.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

app.post('/contact', jsonParser, async (req, res) => {
  try {
    const result = await putContact(req.body);
    res.send(result);
  } catch (err) {
    console.error('Put failed. Error JSON:', JSON.stringify(err, null, 2));
    res.send(err);
  }
});

app.get('/edit*', async (req, res) => {
  try {
    const contacts = await scanContacts();
    if (contacts && contacts.length > 0) {
      initialData.contacts = contacts;
    }
  } catch (err) {
    console.error('Scanning failed. Error JSON:', JSON.stringify(err, null, 2));
  }
  if ((!req.user || !req.user.isAdmin) && process.env.SERVER_ENV !== 'dev') {
    res.redirect('/');
  } else {
    res.render('edit', { initialData });
  }
});

app.get('/*', async (req, res) => {
  try {
    const contacts = await scanContacts();
    if (contacts && contacts.length > 0) {
      initialData.contacts = contacts;
    }
  } catch (err) {
    console.error('Scanning failed. Error JSON:', JSON.stringify(err, null, 2));
  }
  res.render('index', { initialData });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
