define(['../resources/users','ngload!angular-input-match'], function() {
  return ['$scope', 'Users', '$state', 'errorMessageService', function($scope, Users, $state, errorMessageService) {
    errorMessageService.hideErrors();
    $scope.submit = function() {
      errorMessageService.showErrors();
      if ($scope.form.$valid) {
        Users.signUp($scope.model.user, function(user) {
          if (user.userId) {
            $scope.authentication.user = user;
            $state.go('root');
          }
        });
      }
    };
  }];
});