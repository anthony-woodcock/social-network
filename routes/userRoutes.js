var bodyParser = require('body-parser')
var usersControllers = require('../controllers/usersControllers.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

function userRoutes(app){
    app.get('/', function(req, res) {
        res.render('home', {currentUser: req.session.user})
    })

    app.get('/register', function(req, res) {
        res.render('register')
    })

    app.post('/register', urlencodedParser, usersControllers.register, function (req, res){
        res.redirect('/')
    })

    app.get('/login', function(req, res){
        res.render('login')
    })

    app.post('/login', urlencodedParser, usersControllers.login, function (req, res){
        res.redirect('/')
    })
}

module.exports = userRoutes