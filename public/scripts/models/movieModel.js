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

    app.moviesModel.movieQuery(app.resultsController.cycleResultsView); //Insert callback as parameter
    app.resultsController.initResultsView();
    // app.resultsController.cycleResultsView();
  });



// ajax call to send inputed titles to server
  moviesModel.movieQuery = function (callback){
    $.ajax({
      // When multiple input forms are added, put in a .join(',') in the query string below:
      url: `/search?titles=${moviesModel.movieInputs}`,
      method: 'GET',
    })
    .then(function (data) {
      console.log(data);
      moviesModel.movieData = data;
      moviesModel.selectMovie();
      callback(moviesModel.movieSelection);
    });
  }

  moviesModel.watchedMovie = function () {
    $.ajax({
      url:`/movies`,
      method: 'POST',
      data: app.moviesModel.movieSelection
    })
    .then(function(data){
      console.log(data)
    })
  }

  module.moviesModel = moviesModel;

})(app);
