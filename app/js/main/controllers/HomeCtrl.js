app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.controllerSettings = {};

  init();

  function init() {
    $scope.controllerSettings.name = "Philip";
  }
}]);