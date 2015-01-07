define(['angularAMD','ngload!angular-resource','lodash'], function(app, undefined, _) {
  'use strict';
  app.factory('Users', ['$resource', function($resource) {
    var interceptor = {
          response: function(config) {
            var user = config.data;
            if (user._id) {
              user.admin = _.contains(user.roles, "Admin");
            }
            return user;
          }
        };
    return $resource('users/:_id',{_id: '@_id'}, {
      create: {method: 'POST'},
      save: {method: 'PUT'},
      login: {url: 'users/login', method: 'PUT', interceptor: interceptor},
      logout: {url: 'users/logout', method: 'PUT'},
      signUp: {url: 'users/signUp', method: 'POST', interceptor: interceptor},
      authentication: {url: 'users/authentication', method: 'GET', interceptor: interceptor
      }
    });
  }]);

});