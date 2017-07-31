'use strict';

const express = require('express');
const app = express();
const proxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const githubToken = process.env.API_KEY;

app.use(express.static('./public'));



app.get('/themoviedb/*', function (request, response) {
  (
    proxy({
      url: `https://api.themoviedb.org/${request.params[0]}`,
      headers: {
        Authorization: `key ${apiKey}`
      }
    })
  )(request, response);
})

app.get('/index', function (req, res) {
  res.sendFile('index.html', {root: './public'});
})

app.listen(PORT, function() {
  console.log(`Server started on ${PORT}`);
});
