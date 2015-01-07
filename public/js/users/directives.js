define(['angularAMD','../resources/users', 'lodash'], function(app, undefined, _) {
  'use strict';
  app.directive('uniqueUserId', function(Users, $q) {
    return {
        require: 'ngModel',
        link: function($scope, element, attrs, ngModel) {
            var thisUser = $scope[attrs.uniqueUserId];
            ngModel.$asyncValidators.unique = function(modelValue, viewValue) {
              var deferred = $q.defer();
              Users.query({userId: viewValue}, function(users) {
                var user = _(users).first();
                if (user && user._id != thisUser._id) {
                  return deferred.reject();
                }
                return deferred.resolve();
              });
              return deferred.promise;
            };
        }
    };
  });
});