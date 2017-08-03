'use strict';

var app = app || {};

(function(module){

  var loadCurrentMovie = function() {
    var selectedMovieLoad =  localStorage.getItem('selectedMovie');
    if (selectedMovieLoad === null){
      return null;
    } else {
      return (JSON.parse(selectedMovieLoad));
    }
  };

  var saveMovie = function() {
    moviesModel.movieSelection = JSON.parse(localStorage.getItem('selectedMovie'));
    if(moviesModel.movieSelection === null) {
      moviesModel.movieSelection = {};
    }
    localStorage.setItem('selectedMovie', JSON.stringify(moviesModel.movieSelection));
  };

  var moviesModel = {};
  // This is the title inputs from the user
  moviesModel.movieInputs = [];
  //This is whats returned from the server
  moviesModel.movieData = [];

  moviesModel.selectMovie = function () {
    moviesModel.movieSelection = moviesModel.movieData.shift();
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
      moviesModel.selectMovie();
      callback(moviesModel.movieSelection);
      app.resultsController.initResultsView();
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
