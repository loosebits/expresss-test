define(['../resources/users','lodash','ngload!angular-error-display','./directives'], function(undefined, _) {
  'use strict';
  return ['$scope', 'Users', '$stateParams', 'errorMessageService', 
  function($scope, Users, $stateParams, errorMessageService) {
    errorMessageService.showErrors();
    $scope.model = {roles: {}};
    $scope.user = Users.get($stateParams, function(user) {
      $scope.model.roles.Admin = _.contains(user.roles, 'Admin');
      $scope.model.roles.User = _.contains(user.roles, 'User');
    });
    $scope.submit = function() {
      var roles = [];
      _.each($scope.model.roles, function(val, key) {
        if (val) {
          roles.push(key);
        }
      });
      $scope.user.roles = roles;
      if ($scope.form.$valid) {
        $scope.user.$save(function() {
          $scope.$emit('userUpdated', $scope.user);
        });
      }
    };
  }];
});