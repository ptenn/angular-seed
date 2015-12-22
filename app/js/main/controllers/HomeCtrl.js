app.controller('HomeCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
  $scope.controllerSettings = {};

  $scope.people = [
    { 'firstName': 'Jane',
      'lastName': 'Smith'},
    { 'firstName': 'Thomas',
      'lastName': 'Adams'},
    { 'firstName': 'Joseph',
      'lastName': 'Rogers'}
  ];

  init();

  function init() {
    $scope.controllerSettings.name = "Philip";
    Restangular
      .one('users', 11)
      .get()
      .then(
        function(response) {
          console.log("Response " + response);
        },
        function(error)
        {
          console.log("an error occurred" + error);
        }
      );

    var idx = _.findIndex($scope.people, {'firstName': 'Thomas'});
    console.log('Index is:' + idx);

  }
}]);