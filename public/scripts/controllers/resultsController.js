'use strict';
var app = app || {};

(function(module) {
  const resultsController = {};

  resultsController.initResultsView = function() {
    $('.tab-content').hide();
    $('#results').show();
  }

  module.resultsController = resultsController;
})(app);
