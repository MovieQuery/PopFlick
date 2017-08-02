'use strict';
var app = app || {};

(function(module) {
  const resultsController = {};

  resultsController.initResultsView = function() {
    $('.tab-content').hide();
    $('#results').show();
    var button = $('<button>Watched!</button>').attr('id', 'watchedButton');
    $('#results').append(button);
    $('#watchedButton').on('click', function(){
      event.preventDefault();
      app.watchedMovie();
      app.selectMovie();
      $('#results').empty();
      app.displayMovie(app.movieSelection);
      var button = $('<button>Watched!</button>').attr('id', 'watchedButton');
      $('#results').append(button);
    })
  }

  module.resultsController = resultsController;
})(app);
