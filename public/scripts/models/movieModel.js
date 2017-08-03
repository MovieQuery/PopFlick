'use strict';

var app = app || {};

(function(module){

  var moviesModel = {};
  // This is the title inputs from the user
  moviesModel.movieInputs = [];
  //This is whats returned from the server
  moviesModel.movieData = [];
  //this is the selected movie
  moviesModel.movieSelection = {};

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
