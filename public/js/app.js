'use strict';


// Declare app level module which depends on filters, and services
var bolibompa = angular.module('Bolibompa', ['Bolibompa.filters', 'Bolibompa.services', 'Bolibompa.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'templates/welcome.html', controller: MainCtrl, activePage: 'home'});
    $routeProvider.when('/serviceOne', {templateUrl: 'templates/serviceOne.html', controller: ServiceOneCtrl, activePage: 'serviceOne'});
    $routeProvider.when('/fibonacci', {templateUrl: 'templates/fibonacci.html', controller: FibonacciCtrl, activePage: 'fibonacci'});
    $routeProvider.otherwise({redirectTo: '/'});
    
  }]);

