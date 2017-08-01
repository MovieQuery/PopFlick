'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const PORT = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
const conString = process.env.DATABASE_URL ||  'postgres://localhost:5432/popflick';

const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));



app.get('/search', function(req, res){
  var titles = req.query.titles.split(',');
})

app.get('/movies', function(req, res){


})

function TMDbQuery (params, callback) {
  const options = {
    url : `https://api.themoviedb.org/3/${params}?api_key=${apiKey}`,
    method: 'GET'
  };

  request(options, function(err, res, body) {
    let json = JSON.parse(body);
    callback(json);
  });
}

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    movies (
      id PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      release_date DATE,
      overview TEXT NOT NULL,
      poster_path VARCHAR(255)
    );`
  )
  .then(console.log('movie table created!'))
  .catch(console.error);

  client.query(`
    CREATE TABLE IF NOT EXISTS
    users (
      user_id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      movie_id INTEGER NOT NULL REFERENCES movies(movie_id)
    );`
  )
  .then(console.log('user table created!'))
  .catch(console.error);
}

app.listen(PORT, function() {
  console.log(`Server started on ${PORT}`);
});
