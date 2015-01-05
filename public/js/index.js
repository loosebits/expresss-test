define(['ngload!resources/users'], function() {
  return ['$scope', 'Users', '$state', function($scope, Users, $state) {
    $scope.authentication = {};
    Users.authentication(function(user) {
      if (user.userId) {
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