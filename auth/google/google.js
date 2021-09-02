const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const router = express.Router();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  
  async function(accessToken, refreshToken, profile, cb) {
    console.log("This is from google *******", JSON.stringify(profile));
    let user = await Users.findOrCreate({
      where: {
        loginStrategy: profile.provider,
        loginStrategyId: profile.id,
        firstName: profile.displayName
      }
    });
  
    cb(null, profile)
  }
));

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// because this file is nested, this endpoint is really '/auth/facebook/callback'
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    const id = req.user.id
    console.log(">>>>>>>>>>>>>>");
    console.log(req.user);
    console.log("<<<<<<<<<<<<<<");
    res.redirect(`/profile/${id}`);
  }
);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
  passport.deserializeUser(function(id, done) {
    done(null, id);
});

module.exports = router;