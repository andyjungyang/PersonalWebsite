import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import readUsers from '../dynamoDB/readUsers';
import putUser from '../dynamoDB/putUser';


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, cb) => {
  try {
    let result = await readUsers(profile.id);
    if (result.Item !== undefined && result.Item !== null) {
      return cb(null, result.Item);
    }
    result = await putUser(profile);
    return cb(null, result);
  } catch (err) {
    return cb(err);
  }
}));

passport.serializeUser((user, cb) => {
  cb(null, user.UserID);
});

passport.deserializeUser(async (id, cb) => {
  try {
    const result = await readUsers(id);
    return cb(null, result.Item);
  } catch (err) {
    return cb(err);
  }
});

export default passport;
