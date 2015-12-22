var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'restangular']);

app.run(function(Restangular) {
  Restangular.setBaseUrl('restapi/v1');
});