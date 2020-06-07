var express = require('express');

var path = require('path');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 19000);

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/clinicview', function(req, res) {
    res.render('clinicview');
});

app.get('/meetteam', function(req, res) {
    res.render('meetteam');
});

app.get('/contactus', function(req, res) {
    var urlParams = [];
    for (var p in req.query){
        urlParams.push({'name':p,'value':req.query[p]})
    }
    var context = {};
    context.getList = urlParams;
    res.render('contactus');
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://flip2.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});