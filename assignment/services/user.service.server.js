
module.exports = function (app) {
  var passport = require('passport');
  var userModel = require("../model/user/user.model.server");
  var LocalStrategy = require('passport-local').Strategy;
  var bcrypt = require("bcrypt-nodejs");
  var FacebookStrategy = require('passport-facebook').Strategy;
  var facebookConfig = {
    clientID     : '753617761508015',
    clientSecret : '0c7de6e798e384c0995388977daeda26',
    callbackURL  : 'https://cs5610-webdev-peishanwang.herokuapp.com/auth/facebook/callback'
  };

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post ('/api/register', register);
  app.post('/api/loggedIn', loggedIn);


  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function loggedIn(req, res) {
    console.log(req.isAuthenticated());
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  // Use the request's logout function to invalidate the currently logged in user.
  function logout(req, res) {
    req.logOut(); // passport utility function logout
    res.send(200);
  }

  // an encrypted representation of the user in a cookie, If the user is found,
  // the login function is invoked and the current user is available in req.user.
  function login(req, res) {
    // the login is from req from passport
    res.json(req.user);
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    console.log("facebook strategy");
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            console.log("create new user to database");
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              username: 'username',
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }

  // use the userModel to retrieve the user by username and password.
  function localStrategy(username, password, done) {
    userModel
      .findUserByUserName(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            console.log(user);
            console.log(bcrypt.compareSync(password, user.password));
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          res.sendStatus(400).send(err);
        });
  }

  // Once the user is created in the database, use the request's login() to set the current user.
  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .findUserByUserName(user.username)
      .then(function (data) {
        if(data){
          res.status(400).send('Username is in use!');
          return;
        } else{
          userModel
            .createUser(user)
            .then(
              function(user){
                if(user){
                  req.login(user, function(err) {
                    if(err) {
                      res.status(400).send(err);
                    } else {
                      res.json(user);
                    }
                  });
                }
              }
            );
        }
      })

  }




  /*  var users = [
      {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
      {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
      {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
      {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];*/

  //helper functions -- can be removed after testing
  app.get("/api/user/findall", findAllUsers);
  function findAllUsers(req, res) {
    userModel
      .findAllUsers()
      .then(
        function (users) {
          res.send(users);
        },
        function (err) {
          res.sendStatus(400).send(err);
        });
  }

  function createUser(req, res) {
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function(user){
        res.json(user);
      })
  }

  function findUser(req, res){
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password){
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
        //console.log(user);
      })
      return;
    } else if (username){
      userModel.findUserByUserName(username)
        .then(function(user){
          res.json(user);
        })
      return;
    }
    res.json(users);
  }

  function findUserById(req, res){
    var userId = req.params["userId"]
    userModel.findUserById(userId).then(function (user){
      res.json(user);
    })
  }

  function updateUser(req, res){
    var userId = req.params.userId;
    var user = req.body;

    userModel.updateUser(userId, user)
      .then(function(status){
        res.send(status);
      })
  }

  function deleteUser(req, res) {
    var userId = req.params.userId;
    userModel
      .deleteUser(userId)
      //responds with some stats
      .then(function (status) {
        res.send(status);
      });
  }
}
