'use strict';

var app = app || {};

(function(module){
  // This is the title inputs from the user
  module.movieInputs = [];
  //This is whats returned from the server
  module.movieData = [];
  //this is the selected movie
  module.movieSelection = {};

  app.selectMovie = function () {
    app.movieSelection = app.movieData.shift();
  }

  $('#submitInput').on('click', function(event) {
    event.preventDefault();
    //inputed from user in form
    module.movieInputs = $('.movieInput').val();
    console.log(module.movieInputs);

    module.movieQuery(app.displayMovie); //Insert callback as parameter
    app.resultsController.initResultsView();

  });



// ajax call to send inputed titles to server
  module.movieQuery = function (callback){
    $.ajax({
      // When multiple input forms are added, put in a .join(',') in the query string below:
      url: `/search?titles=${module.movieInputs}`,
      method: 'GET',
    })
    .then(function (data) {
      console.log(data);
      module.movieData = data;
      app.selectMovie();
      callback(module.movieSelection);
    });
  }

  module.watchedMovie = function () {
    $.ajax({
      url:`/movies`,
      method: 'POST',
      data: app.movieSelection
    })
    .then(function(data){
      console.log(data)
    })
  }


})(app);
