var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
var exp = express();
var port = 3001;

/* exp => finds route */

exp.use(bodyParser.json());
exp.use(cors());

exp.use(bodyParser.urlencoded({
    extended: false
}));

var Users = require('../Usuarios');

var Prods = require('../Productos')

exp.use(
    '/usuarios', Users
);
exp.use(
    '/productos', Prods
);

exp.listen(port, function () {
    console.log("Server is running on port: " + port);
});