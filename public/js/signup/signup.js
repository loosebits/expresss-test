define(['../resources/users','ngload!angular-input-match'], function() {
  'use strict';
  return ['$scope', 'Users', '$state', 'errorMessageService', function($scope, Users, $state, errorMessageService) {
    errorMessageService.hideErrors();
    $scope.submit = function() {
      errorMessageService.showErrors();
      if ($scope.form.$valid) {
        Users.signUp($scope.model.user, function(user) {
          if (user._id) {
            $scope.authentication.user = user;
            $state.go('root');
          }
        }, function(err) {
          if (err.status == 409){
            $scope.error = "A user with this ID already exists";
          }
        });
      }
    };
  }];
});