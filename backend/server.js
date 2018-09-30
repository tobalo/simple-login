// Initialize libraries
var express = require("express");
var login = require('./routes/yeetLoginRoutes');
var bodyParser = require('body-parser');


// Initialize express and bodyparser to parse requests as JSON
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Initialize router
var router = express.Router();

// Test route connection
 router.get('/', function(req,res){
    res.json({message: 'Welcome this is the API to connect to DB server'})
 });

//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);
app.listen(5000);