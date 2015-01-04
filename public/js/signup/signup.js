define(['../resources/users'], function() {
  return ['$scope', 'Users', function($scope, Users) {
    $scope.submit = function() {
      Users.save($scope.model.user);
    };
  }];
});