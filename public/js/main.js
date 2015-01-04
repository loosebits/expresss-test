require.config({
  paths: {
    'angular': '/lib/angular/angular',
    'angular-resource': '/lib/angular-resource/angular-resource',
    'angularAMD': '/lib/angularAMD/angularAMD',
    'ngload': '/lib/angularAMD/ngload',
    'lodash': '/lib/lodash/dist/lodash',
    'ui-router': '/lib/ui-router/release/angular-ui-router',
    'angular-bootstrap': '/lib/angular-bootstrap/ui-bootstrap-tpls'
  },
  shim: {
    'angularAMD': ['angular'],
    'angular-resource': ['angular'],
    'ui-router': ['angular'],
    'angular-bootstrap': ['angular']
  },
  deps: ['app']

});