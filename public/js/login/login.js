define(['../resources/users'], function() {
  return ['$scope','Users', function($scope, Users) {
    $scope.submit = function() {
      Users.login($scope.model, function(user) {
        if (!user.userId) {
          //Unauthenticated
        }
      });
    };
  }];
});