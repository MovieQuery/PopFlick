'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.initAboutView = function() {
    $('.tab-content').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(app);
