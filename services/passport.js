const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if(existingUser) {
            // we aleady have a record with the given profile ID
            done(null, existingUser);
          } else {
            // we don't have a user record with this ID, create a new record
            new User({
              googleId: profile.id,
              firstName: profile["_json"].given_name,
              lastName: profile["_json"].family_name,
              email: profile["_json"].email,
              profilePhoto: profile["_json"].picture,
            })
            .save()
            .then((user) => done(null, user));
          }
        })
    }
  )
);
