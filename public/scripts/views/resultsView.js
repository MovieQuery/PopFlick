'use strict';

var app = app || {};

(function(module) {

  // var resultsData = app.movieData[0];
  module.displayMovie = function (data) {
    const template = Handlebars.compile($('#resultsTemplate').html());
    $('#results').append(template(data));
    var button = $('<button>Watched!</button>').attr('id', 'watchedButton');
    $('#title').append(button);
  }

})(app);
