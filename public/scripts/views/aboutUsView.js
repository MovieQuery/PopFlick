'use strict';

var app = app || {};

(function(module) {

  var aboutUsView = {};

  app.membersModel.retrieveAllMember();

  module.aboutUsView = aboutUsView;

})(app);
