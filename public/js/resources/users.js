define(['angularAMD','ngload!angular-resource'], function(app) {
  'use strict';
  app.factory('Users', ['$resource', function($resource) {
    return $resource('users/:_id',{_id: '@_id'}, {
      create: {method: 'POST'},
      save: {method: 'PUT'},
      login: {url: 'users/login', method: 'PUT'},
      logout: {url: 'users/logout', method: 'PUT'},
      signUp: {url: 'users/signUp', method: 'POST'},
      authentication: {url: 'users/authentication', method: 'GET'}
    });
  }]);

});