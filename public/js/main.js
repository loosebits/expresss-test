require.config({
  paths: {
    'angular': '/lib/angular/angular',
    'angular-resource': '/lib/angular-resource/angular-resource',
    'angularAMD': '/lib/angularAMD/angularAMD',
    'ngload': '/lib/angularAMD/ngload',
    'lodash': '/lib/lodash/dist/lodash',
    'ui-router': '/lib/ui-router/release/angular-ui-router',
    'angular-bootstrap': '/lib/angular-bootstrap/ui-bootstrap-tpls',
    'angular-input-match': '/lib/angular-input-match/dist/angular-input-match',
    'angular-error-display': '/lib/angular-error-display/angular-error-display'
  },
  shim: {
    'angularAMD': ['angular'],
    'angular-resource': ['angular'],
    'ui-router': ['angular'],
    'angular-bootstrap': ['angular'],
    'angular-error-display': ['angular', 'lodash'],
    'angular-input-match': ['angular']
  },
  deps: ['app']

});