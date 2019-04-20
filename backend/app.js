const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb+srv://Michael:vdaDeGGzPD7vxjO9@cluster0-ndgwg.mongodb.net/real-estate?retryWrites=true', {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to the Real Estate database');
  })
  .catch(() => {
    console.log('Connection to the database failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
