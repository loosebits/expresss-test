define(['../resources/users','lodash'], function(undefined, _) {
  'use strict';
  return ['$scope', 'Users', '$state', function($scope, Users, $state) {
    $scope.users = Users.query();
    $scope.$on('userUpdated', function(event, user) {
      _(_($scope.users).find({_id: user._id})).extend(user);
    });
    $scope.delete = function(user) {
      _.extend(new Users(), user).$remove(function() {
        _($scope.users).remove(user);
        $state.go('root.users');
      });
    };
    $scope.setUser = function(user) {
      $state.go('root.users.user', user);
    };
  }];
});