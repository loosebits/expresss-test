define(['ngload!resources/users'], function() {
  'use strict';
  return ['$scope', 'Users', '$state', function($scope, Users, $state) {
    $scope.authentication = {};
    Users.authentication(function(user) {
      if (user._id) {
        $scope.authentication.user = user;
      }
    });
    $scope.logout = function() {
      Users.logout(function() {
        delete $scope.authentication.user;
        $state.go('root.login');
      });
    };
  }];
});