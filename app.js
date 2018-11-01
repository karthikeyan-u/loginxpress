var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//MIDDLEWARE//
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
//ROUTES//
app.get('/',function(req,res){
    res.render('home');
});

//LISTEN//
app.listen(process.env.PORT||3000,function(){
    console.log('Server Started and Listening on Port : 3000');
});