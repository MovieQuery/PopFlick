'use strict';
var app = app || {};

(function(module) {

  var membersModel = {};
  membersModel.members = [];

  function Member (memberDataObj) {
    this.name = memberDataObj.name,
    this.imagePath = memberDataObj.imagePath,
    this.bio = memberDataObj.bio;
  }


  Member.prototype.toHtml = function() {
    var handlebarsTemplateString = $('#aboutTemplate').html();
    var compiled = Handlebars.compile(handlebarsTemplateString);
    var html = compiled(this);
    return html;
  };

  membersModel.loadAllMember= function(memberData) {
    membersModel.members = memberData.map(function(element) {
      return new Member(element);
    });
  };

  membersModel.retrieveAllMember = function() {
    var path = '../data/members.json';
    $.get(path).then(function functionSuccess(data) {
      var stringfiedData = JSON.stringify(data);
      localStorage.setItem('rawdata', stringfiedData);
      var parsedData = JSON.parse(stringfiedData)
      membersModel.loadAllMember(parsedData);
      membersModel.members.forEach(function(member) {
        $('#about').append(member.toHtml());
      });
    }, function functionError(err) {
      console.err(err);
    });

  }

  module.membersModel = membersModel;
})(app);
