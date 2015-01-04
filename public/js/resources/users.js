define(['angularAMD','ngload!angular-resource'], function(app) {
  app.factory('Users', ['$resource', function($resource) {
    return $resource('users/:userId',{userId: '@userId'}, {
      save: {method: 'PUT'},
      login: {url: 'login', method: 'PUT'}
    });
  }]);

});