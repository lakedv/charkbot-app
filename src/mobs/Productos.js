var express = require('express');
var prods = express.Router();
var database = require('./mysql/Datab');
var cors = require('cors')

prods.use(cors());

process.env.SECRET_KEY = "prods";

prods.get('/', function (req, res) {
  res.send('TEST');
})

prods.post('/create', function (req, res) {
    console.log('create');
    var appData = {
      "error": 1,
      "data": ""
    };
    var prodsData = {
      "name": req.body.name,
      "value": req.body.value,
      "description": req.body.description,
      "IDuser": req.body.IDuser
    }
    console.log(prodsData)

    database.connection.getConnection(function (err, connection) {
      console.log('connected');
      if (err) {
        appData["error"] = 1;
        appData["data"] = "Internal Server Error";
        res.json(appData);
      } else {
        connection.query('INSERT INTO productos SET ?', prodsData, function (err, rows, fields) {
          if (!err) {
            appData.error = 0;
            appData["data"] = "Product added Correctly";
            res.json(appData);
          } else {
            appData["data"] = "Error Occured!";
            res.json(appData);
            console.log(err)
          }
        });
        connection.release();
      }
    });
  });
  
  module.exports = prods;