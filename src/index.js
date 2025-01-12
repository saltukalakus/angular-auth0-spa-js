import angular from 'angular';
import {Auth0Client} from '@auth0/auth0-spa-js';
import version from './version';

if (typeof angular !== 'object') {
  throw new Error('Angular must be loaded.');
}

//if (!angular.isObject(Auth0Client)) {
//  throw new Error('Auth0 must be loaded.');
//}

angular.module('auth0.auth0', []).provider('angularAuth0', angularAuth0);

function angularAuth0() {
  this.init = function(config) {
    if (!config) {
      throw new Error('Client ID and Domain are required to initialize auth0-spa-js');
    }
    if (config._telemetryInfo) {
      config._telemetryInfo.env = angular.extend({}, this.config._telemetryInfo.env, {
        'angular-auth0-spa-js': version
      });
    } else {
      config._telemetryInfo = {
        name: 'angular-auth0-spa-js',
        version: version,
        env: {
          'auth0-spa-js': "^1.17.0"//auth0.version.raw
        }
      }
    }
    this.config = config;
  };

  this.$get = [
    '$rootScope',
    function($rootScope) {
      var Auth0Js = new Auth0Client(this.config);
      var webAuth = {};
      var functions = [];

      for (var i in Auth0Js) {
        if (angular.isFunction(Auth0Js[i])) {
          functions.push(i);
        }
        if (angular.isObject(Auth0Js[i])) {
          webAuth[i] = Auth0Js[i];
        }
      }

      function wrapArguments(parameters) {
        var lastIndex = parameters.length - 1,
          func = parameters[lastIndex];
        if (angular.isFunction(func)) {
          parameters[lastIndex] = function() {
            var args = arguments;
            $rootScope.$evalAsync(function() {
              func.apply(Auth0Js, args);
            });
          };
        }
        return parameters;
      }

      for (var i = 0; i < functions.length; i++) {
        webAuth[functions[i]] = (function(name) {
          var customFunction = function() {
            return Auth0Js[name].apply(Auth0Js, wrapArguments(arguments));
          };
          return customFunction;
        })(functions[i]);
      }

      return webAuth;
    }
  ];
}
