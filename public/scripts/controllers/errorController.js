'use strict';

var app = app || {};

(function(module){
  const errorController = {};

  errorController.displayError = function() {
    $('#home').hide();
    app.errorView.prependErrorMessage();
    $('#restart').on('click', () => {
      $('#errorSection').remove();
      $('#home').show();
    })
  }

  module.errorController = errorController;
})(app);
