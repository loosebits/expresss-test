define(['require','angularAMD','ui-router','angular-error-display'], function(require, angularAMD) {
  var app = angular.module('express-test',['ui.router','ngErrorDisplay'])
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
  }]).config(['errorMessageServiceProvider',function(errorMessageServiceProvider) {
    errorMessageServiceProvider.errors({
      required: 'This field is required',
      email: 'Please enter a valid email'});
  }]);
  return angularAMD.bootstrap(app);
});