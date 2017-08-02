'use strict';

var app = app || {};

(function(module){
  // This is the title inputs from the user
  module.movieInputs = []
  //This is whats returned from the server
  module.movieData = []


  $('#submitInput').on('click', function(event) {
    event.preventDefault();
    //inputed from user in form
    module.movieInputs = $('.movieInput').val();
    console.log(module.movieInputs);

    module.movieQuery(app.displayMovie); //Insert callback as parameter
    app.resultsController.initResultsView();
    
  });

  // $('.watchedButton').on('click', function(event){
  //
  //   //call movie query again for second option
  // })

// ajax call to send inputed titles to server
  module.movieQuery = function (callback){
    $.ajax({
      // When multiple input forms are added, put in a .join(',') in the query string below:
      url: `/search?titles=${module.movieInputs}`,
      method: 'GET',
    })
    .then(function (data) {
      console.log(data);
      module.movieData = data[0];
      callback(module.movieData);
    });
  }

  module.watchedMovie = function (callback) {
    $.ajax({
      url:`/movies=${module.movieData[0]}`,
      method: 'POST',
    })
    .then(function(data){
      console.log('in POST:');
      console.log(data);
      module.movieData = data[1];
      callback(module.movieData);
    })
  }


})(app);
