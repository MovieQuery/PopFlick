'use strict';

var app = app || {};

(function(module){
  var movieModel = {
    // This is the title inputs from the user
    movieInputs: [],
    //This is whats returned from the server
    movieData: []
  };

  $('#submitInput').on('click', function(event) {
    event.preventDefault();
    //inputed from user in form
    movieModel.movieInputs = $('.movieInput').val();
    console.log(movieModel.movieInputs);

  });

// ajax call to send inputed titles to server
  movieModel.prototype.movieQuery = function (callback){
    $.ajax({
      url: `/search?titles=${movieModel.movieInputs.join(',')}`,
      method: 'GET',
    })
    .then(console.log);
    .then(callback);
  }

  module.movieModel = movieModel;
})(app);
