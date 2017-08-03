'use strict';

var app = app || {};

(function(module) {

  var aboutUsView = {};

  aboutUsView.Member.retrieveAllMember();

  module.aboutUsView = aboutUsView;

})(app);
