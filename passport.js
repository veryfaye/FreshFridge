const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const db = require("./models");
const User = require("./models/user");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

// authorization (protect the endpoints)
passport.use(
  new JwtStrategy(
    { jwtFromRequest: cookieExtractor, secretOrKey: "FreshFridge" },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        } else if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  )
);

// authenticated local strategy using email and password
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      User.findOne({ email }, (err, user) => {
        console.log(user);
        // something went wrong with db
        if (err) {
          return done(err);
        }
        // user does not exist
        else if (!user) {
          return done(null, false);
        }
        // compare the password sent from the client to the password hashed in the db
        user.comparePassword(password, done);
      });
    }
  )
);
