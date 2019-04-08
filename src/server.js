import express from 'express';
import passport from 'passport';
import {} from 'dotenv/config';
import config from './config';
import passportGoogle from './auth/google';

const app = express();

app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 'works' });
});

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

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
