//this file is the primary file
var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require('body-parser');
var methodOverride  = require('method-override');
var _  = require('lodash');


//creating the application
var app = new express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//connecting to db and telling the app to listen on 4321 port
mongoose.connect('mongodb://instaphotouser:1234@ds029814.mongolab.com:29814/instaphotopicker');
mongoose.connection.once('open',function(){

  //this is dependency injection

  //loading models, i.e., though we may have many models all of them will be listed down in index.js model file
  //so to access those models controllers will be using names of the models, those names will redirect them to the
  //concerned model.
  app.models = require('./Models/index');

  //loading routes
  var routes = require('./routes');

  //the below line will traverse through all of the routes defined in the routes file
  //and assign value to "controller" and key to "route" accordingly.
  _.each(routes, function(controller, route){
    app.use(route, controller(app,route));
  });

  app.listen(4321);
  console.log('Listening on port 4321');
});
