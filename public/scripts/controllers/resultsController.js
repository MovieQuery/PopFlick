'use strict';
var app = app || {};

(function(module) {
  const resultsController = {};

  resultsController.cycleResultsView = function() {
    $('#results').empty();
    var button = $('<button>Watched!</button>').attr('id', 'watchedButton');
    $('#results').append(button);
    app.selectMovie();
    app.displayMovie(app.movieSelection);

    $('#watchedButton').on('click', function(){
      event.preventDefault();
      resultsController.cycleResultsView();
    })
  }

  resultsController.initResultsView = function() {
    $('.tab-content').hide();
    $('#results').show();

    resultsController.cycleResultsView();
  }

  module.resultsController = resultsController;
})(app);
