const express = require('express');
const app = express();

//This is the age service that we just made
const ageService = require('./age-service');

app.get('/', function(req, res) {
  const {name} = req.query
  console.log(name);
  ageService(name, age => {
    res.end(age)
  })
});

app.listen(3000, function() {
  console.log('App listening on port 3000');
});
