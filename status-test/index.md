---
layout: page
title: Status
---

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
<script src="https://cdn.firebase.com/js/client/2.2.7/firebase.js"></script>
<script src="https://cdn.firebase.com/libs/angularfire/1.1.2/angularfire.min.js"></script>
<script src="/js/status-checker.js"></script>

<div ng-app="statusChecker" ng-controller="MainController">
  <h2>Currently working on...</h2>
  {% raw %}
    <ul>
      <li ng-repeat="project in projects">{{ project.name }}</li>
    </ul>
  {% endraw %}
</div>

