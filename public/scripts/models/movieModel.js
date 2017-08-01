'use strict';

var app = app || {};

(function(module){
  var movieModel = {
    movieInputs: [],
    movieData: []
  };



  $('#submitInput').on('click', function(event) {
    event.preventDefault();
    movieModel.movieInputs = $('.movieInput').val();
    console.log(movieModel.movieInputs)
  });

  module.movieModel = movieModel;
})(app)
