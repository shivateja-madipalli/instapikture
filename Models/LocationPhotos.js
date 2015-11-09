//This is creating a model, thus it should be like creating a schema to the db

var mongoose = require('mongoose');

//Creating a schema
var LocationSchema = new mongoose.Schema({
  Location: {
    type: String,
    required: true
  },
  Longitude: {
    type: String,
    required: true
  },
  Latitude: {
    type: String,
    required: true
  }
});

// Exporting the model schema
//Make sure this is exported because, who ever requires it
//we'll be passing this back to them.
module.exports = LocationSchema;
