'use strict';
var app = app || {};

(function(module) {
  const resultsController = {};

  resultsController.cycleResultsView = function() {
    $('#results').empty();
    app.resultsView.displayMovie(app.moviesModel.movieSelection);
    var button = $('<button>Watched!</button>').attr('id', 'watchedButton');
    $('#results').append(button);
    app.moviesModel.selectMovie();
    app.moviesModel.saveMovie();

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
