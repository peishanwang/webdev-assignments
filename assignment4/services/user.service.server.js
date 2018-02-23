module.exports = function (app) {

  var users = [
    {id: 123, name : "name123"}
  ]
  /*getAllUsers() {
    return users
  }*/

  //'/api' convention : info from server
  app.get('/api/users', function (req, res) {
    res.send(users);
  })


  app.get('/api/users/:userId', function (req, res) {
    const userId = req.params["userId"];
    //const user = users.find()

  })
}



