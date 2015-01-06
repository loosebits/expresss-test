define(['../resources/users'], function() {
  'use strict';
  return ['$scope','Users', '$state', 'errorMessageService', function($scope, Users, $state, errorMessageService) {
    errorMessageService.hideErrors();
    $scope.submit = function() {
      errorMessageService.showErrors();
      if ($scope.form.$valid) {
        Users.login($scope.model, function(user) {
          if (!user.userId) {
            $scope.error = "You've entered an invalid id or password.";
          } else {
            $scope.authentication.user = user;
            $state.go('root');
          }
        });
      }
    };
  }];
});