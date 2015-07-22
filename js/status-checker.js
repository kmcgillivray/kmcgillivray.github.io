var app = angular.module("statusChecker", ["firebase"]);

app.controller("MainController", function($scope, $firebaseObject) {
  var ref = new Firebase("https://status-checker.firebaseio.com/projects");
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "projects");
});