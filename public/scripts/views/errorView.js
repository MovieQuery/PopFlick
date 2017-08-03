'use strict';

var app = app || {};

(function(module){
  var errorView = {};

  errorView.prependErrorMessage = function() {
    $('.mainArea').prepend(
      '<div id="errorSection"><h1>Sorry, that movie doesn\'t seem to exist. Please try again.</h1> <img src="../../image/spilledpopcorn.jpg"><input id="restart" type="submit" value="Try Again"></div>');
  }

  module.errorView = errorView;
})(app);
