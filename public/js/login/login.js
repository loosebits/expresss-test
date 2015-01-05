define(['../resources/users'], function() {
  return ['$scope','Users', '$state', function($scope, Users, $state) {
    $scope.submit = function() {
      Users.login($scope.model, function(user) {
        if (!user.userId) {
          $scope.error = "You've entered an invalid id or password.";
        } else {
          $scope.authentication.user = user;
          $state.go('root');
        }
      });
    };
  }];
});