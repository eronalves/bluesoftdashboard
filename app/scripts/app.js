'use strict';

/**
 * @ngdoc overview
 * @name bluesoftdashboardApp
 * @description
 * # bluesoftdashboardApp
 *
 * Main module of the application.
 */
var dashApp = angular
  .module('bluesoftdashboardApp', [
    'ngResource',
    'ngRoute',
    'angular-advanced-poller',
    'ui.moment-duration'
  ]);

dashApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
