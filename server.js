'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const PORT = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

const conString = ''
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));


app.listen(PORT, function() {
  console.log(`Server started on ${PORT}`);
});
