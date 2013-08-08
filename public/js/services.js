'use strict';

/* Services */


//Demonstrate how to register services
//In this case it is a simple value service.
angular.module('Bolibompa.services', ['ngResource']).
  value('version', '0.1').
  factory('OneService', function ($resource) {
    return $resource('api/one/:id', { id: '@id' }, {
      'get': { method: 'GET', params: { }, isArray : false },
      'query': { method: 'GET', params: { }, isArray : false },
    });
  }).
  factory('SessionService', function ($resource) {
    return $resource('api/session/:id', { id: '@id' }, {
      'get': { method: 'GET', params: { }, isArray : false },
      'query': { method: 'GET', params: { }, isArray : false },
    });
  }).
  factory('FibonacciService', function ($resource) {
    return $resource('api/fibonacci/:id/:number', { id: '@id', number: '@number' }, {
      'get': { method: 'GET', params: { }, isArray : false },
      'query': { method: 'GET', params: { }, isArray : false },
    });
  }).
  factory('ApiService', function ($resource) {
    return $resource('api/actionsView/:id', { id: '@id' }, {
     'get': { method: 'GET', params: { }, isArray : false },
     'query': { method: 'GET', params: { }, isArray : false },
    });
  });
