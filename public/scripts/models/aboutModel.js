'use strict';
var app = app || {};

(function(module) {
  function Member (memberDataObj) {
    this.name = memberDataObj.name,
    this.imagePath = memberDataObj.imagePath,
    this.bio = memberDataObj.bio;
  }

  var members = [];

  Member.prototype.toHtml = function() {
    var handlebarsTemplateString = $('#aboutTemplate').html();
    var compiled = Handlebars.compile(handlebarsTemplateString);
    var html = compiled(this);
    return html;
  };

  Member.loadAllMember= function(memberData) {
    members = memberData.map(function(element) {
      return new Member(element);
    });
  };

  Member.retrieveAllMember = function() {
    if (localStorage.rawData) {
      Member.loadAll(JSON.parse(localStorage.getItem('rawdata')));
    } else {
      var path = '../data/members.json';
      $.get(path).then(function functionSuccess(data) {
        var stringfiedData = JSON.stringify(data);
        localStorage.setItem('rawdata', stringfiedData);
        var parsedData = JSON.parse(stringfiedData)
        Member.loadAllMember(parsedData);
        members.forEach(function(member) {
          $('#about').append(member.toHtml());
        });
      }, function functionError(err) {
        console.err(err);
      });
    }
  }

  module.Member = Member;
})(app);
