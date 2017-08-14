var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

function userRoutes(app){
    app.get('/', function(req, res) {
        res.render('home', {currentUser: req.session.user})
    })
}

module.exports = userRoutes