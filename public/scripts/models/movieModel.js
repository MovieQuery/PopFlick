'use strict';

var app = app || {};

(function(module){
  var moviesModel = {};

  moviesModel.loadMovie = function () {
    var selectedMovieLoad =  localStorage.getItem('selectedMovie');
    var movieDataLoad = localStorage.getItem('movieData')
    if (selectedMovieLoad !== null){
      moviesModel.movieSelection = JSON.parse(selectedMovieLoad);
      app.resultsView.displayMovie(moviesModel.movieSelection);
      var button = $('<button>Watched!</button>').attr('id', 'watchedButton');
      $('#results').append(button);
      $('#watchedButton').on('click', function(){
        event.preventDefault();
        app.moviesModel.watchedMovie();
        app.resultsController.cycleResultsView();
      })
    }
    if (movieDataLoad !== null){
      moviesModel.movieData = JSON.parse(movieDataLoad);
    }
  };

  moviesModel.saveMovie = function () {
    localStorage.setItem('selectedMovie', JSON.stringify(moviesModel.movieSelection));
    localStorage.setItem('movieData', JSON.stringify(moviesModel.movieData));
  }
  // This is the title inputs from the user
  moviesModel.movieInputs = [];
  //This is whats returned from the server
  moviesModel.movieData = [];

  moviesModel.loadMovie();

  moviesModel.selectMovie = function () {
    if ($('input[name="orderRemoved"]:checked').val() === 'obscure'){
      moviesModel.movieSelection = moviesModel.movieData.pop();
    } else {
      moviesModel.movieSelection = moviesModel.movieData.shift();
    }
  }

  $('#submitInput').on('click', function(event) {
    event.preventDefault();
    //inputed from user in form
    app.moviesModel.movieInputs = $('.movieInput').val();

    app.moviesModel.movieQuery(app.resultsController.cycleResultsView);
  });

// ajax call to send inputed titles to server
  moviesModel.movieQuery = function (callback){
    $.ajax({
      url: `/search?titles=${moviesModel.movieInputs}`,
      method: 'GET',
    })
    .then(function (data) {
      moviesModel.movieData = data;
      if (moviesModel.movieData.length === 0) {
        app.errorController.displayError();
      } else {
        moviesModel.selectMovie();
        callback(moviesModel.movieSelection);
        app.resultsController.initResultsView();
      }
    });
  }

  moviesModel.watchedMovie = function () {
    $.ajax({
      url:`/movies`,
      method: 'POST',
      data: app.moviesModel.movieSelection
    })
  }

  module.moviesModel = moviesModel;

})(app);
