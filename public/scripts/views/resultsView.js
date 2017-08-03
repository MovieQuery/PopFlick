'use strict';

var app = app || {};

(function(module) {

  var resultsView = {};

  resultsView.displayMovie = function (data) {
    const template = Handlebars.compile($('#resultsTemplate').html());
    $('#results').append(template(data));
  }

  module.resultsView = resultsView;

})(app);
