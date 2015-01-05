define(['../resources/users'], function() {
  return ['$scope', 'Users', '$state', function($scope, Users, $state) {
    $scope.submit = function() {
      Users.signUp($scope.model.user, function(user) {
        if (user.userId) {
          $scope.authentication.user = user;
          $state.go('root');
        }
      });
    };
  }];
});