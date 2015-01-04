define(['require','angularAMD','ui-router'], function(require, angularAMD) {
  var app = angular.module('express-test',['ui.router'])
  .config(['$stateProvider',function($stateProvider) {
    $stateProvider.state('root', angularAMD.route({
      url: '',
      templateUrl: require.toUrl('index.html'),
      controllerUrl: 'index'
    }))
    .state('root.signup', angularAMD.route({
      url: '/signup',
      templateUrl: require.toUrl('signup/signup.html'),
      controllerUrl: 'signup/signup'
    }))
    .state('root.login', angularAMD.route({
      url: '/login',
      templateUrl: require.toUrl('login/login.html'),
      controllerUrl: 'login/login'
    }));
  }]);
  return angularAMD.bootstrap(app);
});