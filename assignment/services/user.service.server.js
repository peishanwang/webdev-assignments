
module.exports = function (app) {
  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  var userModel = require("../model/user/user.model.server");

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
