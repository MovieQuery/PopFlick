'use strict';
var app = app || {};

(function(module) {
  const resultsController = {};

  resultsController.cycleResultsView = function() {
    $('#results').empty();
    var button = $('<button>Watched!</button>').attr('id', 'watchedButton');
    app.moviesModel.selectMovie();
    app.resultsView.displayMovie(app.moviesModel.movieSelection);
    $('#results').append(button);

    $('#watchedButton').on('click', function(){
      event.preventDefault();
      app.moviesModel.watchedMovie();
      resultsController.cycleResultsView();
    })
  }

  resultsController.initResultsView = function() {
    $('.tab-content').hide();
    $('#results').show();
  }

  module.resultsController = resultsController;
})(app);
