define(['require','angularAMD','ui-router','angular-error-display'], function(require, angularAMD) {
  'use strict';
  var app = angular.module('express-test',['ui.router','ngErrorDisplay'])
  .config(['$stateProvider',function($stateProvider) {
    $stateProvider.state('root', angularAMD.route({
      url: '/',
      templateUrl: require.toUrl('index.html'),
      controllerUrl: 'index'
    }))
    .state('root.signup', angularAMD.route({
      url: 'signup',
      templateUrl: require.toUrl('signup/signup.html'),
      controllerUrl: 'signup/signup'
    }))
    .state('root.login', angularAMD.route({
      url: 'login',
      templateUrl: require.toUrl('login/login.html'),
      controllerUrl: 'login/login'
    }))
    .state('root.users', angularAMD.route({
      url: 'users',
      templateUrl: require.toUrl('users/users.html'),
      controllerUrl: 'users/users'
    }))
    .state('root.users.user', angularAMD.route({
      url: '/:_id',
      templateUrl: require.toUrl('users/user.html'),
      controllerUrl: 'users/user'
    }))
    ;
  }]).config(['errorMessageServiceProvider',function(errorMessageServiceProvider) {
    errorMessageServiceProvider.errors({
      required: 'This field is required',
      email: 'Please enter a valid email'});
  }]).controller('rootController',['$location', function($location) {
    if (!$location.path()) $location.path('/');
  }]);
  return angularAMD.bootstrap(app);
});