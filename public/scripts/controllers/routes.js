'use strict';
var app = app || {};

page('/results', app.resultsController.initResultsView);
page('/', app.homeController.initHomeView);
page('/about', app.aboutController.initAboutView);

page();
