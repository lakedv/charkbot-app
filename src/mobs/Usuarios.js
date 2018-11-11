
var express = require('express');
var users = express.Router();
var database = require('./mysql/Datab');
var cors = require('cors')

users.use(cors());

process.env.SECRET_KEY = "users";

users.get('/', function(req, res){
  res.send('TEST');
})

/* Register handler */

users.post('/register', function (req, res) {
  console.log('register');
  var appData = {
    "error": 1,
    "data": ""
  };
  var userData = {
    "email": req.body.email,
    "name": req.body.name,
    "password": req.body.password,
    "username": req.body.username
  }

  database.connection.getConnection(function (err, connection) {
    console.log('getConnection');
    if (err) {
      appData["error"] = 1;
      appData["data"] = "Internal Server Error";
      res.status(500).json(appData);
    } else {
      connection.query('INSERT INTO usuarios SET ?', userData, function (err, rows, fields) {
        if (!err) {
          appData.error = 0;
          appData["data"] = "User registered successfully!";
          res.status(201).json(appData);
        } else {
          appData["data"] = "Error Occured!";
          res.status(400).json(appData);
        }
      });
      connection.release();
    }
  });
});

/* Login handler: */

users.post('/login', function (req, res) {
  console.log('login');
  var appData = {};
  var email = req.body.usuario;
  var password = req.body.password;
  console.log(req.body)

  database.connection.getConnection(function (err, connection) {
    console.log('getConnection');
    if (err) {
      appData["error"] = 1;
      appData["data"] = "Internal Server Error";
      appData["err"] = err.message;
      res.status(500).json(appData);
    } else {
      connection.query('SELECT * FROM usuarios WHERE email = ?', [email], function (err, rows, fields) {
        if (err) {
          appData.error = 1;
          appData["data"] = "Error Occured!";
          res.status(400).json(appData);
        } else {
          console.log(rows.length)
          if (rows.length > 0) {
            if (rows[0].password == password) {
              console.log(process.env.SECRET_KEY)
              appData.error = 0;
              res.status(200).json(appData);
            } else {
              appData.error = 1;
              appData["data"] = "Email and Password does not match";
              res.status(204).json(appData);
            }
          } else {
            appData.error = 1;
            appData["data"] = "Email does not exists!";
            res.status(204).json(appData);
          }
        }
      });
      connection.release();
    }
  });
});
users.get('/getUsers', function (req, res) {
  console.log('getUsers');
  var token = req.body.token || req.headers['token'];
  var appData = {};

  database.connection.getConnection(function (err, connection) {
    if (err) {
      appData["error"] = 1;
      appData["data"] = "Internal Server Error";
      res.status(500).json(appData);
    } else {
      connection.query('SELECT * FROM usuarios', function (err, rows, fields) {
        if (!err) {
          appData["error"] = 0;
          appData["data"] = rows;
          res.status(200).json(appData);
        } else {
          appData["data"] = "No data found";
          res.status(204).json(appData);
        }
      });
      connection.release();
    }
  });
});

module.exports = users;