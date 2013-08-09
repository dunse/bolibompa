'use strict';

/* Controllers */
function NavigationCtrl($scope, $route) {
  $scope.$route = $route;
}

function MainCtrl($scope, $http, $location, $rootScope, $timeout, RoutesService, ApiService) {
  $scope.actions = {};
  console.log('in MainCtrl');
  ApiService.query({}, function(data) {
    data.actions.forEach(function(action) {
      $scope.actions[action.name] = action;
    });
    RoutesService.query({}, function(data) {
      $scope.mydata = data.routes;
    });
  });
  $scope.getAction = function(name) {
    return $scope.actions[name];
  }
  $scope.stringify = function(string) {
    console.log(string);
    return JSON.stringify(string, null, '\t');
  }
}

function ServiceOneCtrl($scope, $http, $location, $rootScope, $route, $routeParams, $timeout, OneService) {
  $scope.thisActivePage = $route.current.activePage;

	$timeout(function fetchall() {
    OneService.query({}, function(data) {
      $scope.mydata = data.ones;
    });
    // Only schedule if still on this view
    if ($route.current.activePage) {
		  $timeout(fetchall, 10000);
    }
	});
}

function FibonacciCtrl($scope, $http, $location, $rootScope, $route, $routeParams, $timeout, FibonacciService) {
  $scope.number = -1;
  $scope.thisActivePage = $route.current.activePage;

  $scope.A = new actionHeroWebSocket({host: ''});
  
  $scope.A.log = function(message){
    console.log(message);
  };

  $scope.A.events = {
    disconnect: function(message){
      $scope.A.log("DISCONNECTED");
    },
    reconnect: function(message){
      $scope.A.log("RECONNECTED");
      $scope.A.log("New ID: " + A.id);
    },
    say: function(message){
      $scope.A.log("SAY:");
      $scope.A.log(message)
      if (message.type == "fibonacci") {
        console.log("Setting $scope.number to " + message.value);
        $scope.updateNumber(message.value);
      }
    },
    welcome: function(message){
      $scope.A.log("WELCOME:");
      $scope.A.log(message);
    },
    alert: function(message){
      $scope.A.log("ALERT:");
      $scope.A.log(message);
    }
  }

  $scope.A.connect(function(err, details){
    if(err != null){
      $scope.A.log(err);
    }else{
      $scope.A.log("CONNECTED");
      $scope.A.log(details);
      console.log("calling get...");
    }
  });

  $scope.getFib = function(iterations) {
    // Reset number to give transient effect
    $scope.number = -1;
    FibonacciService.get({number: iterations, id: $scope.A.id}, function(data) {
      console.log('done:', data);
    });
  };
  $scope.updateNumber = function(val) {
    $scope.number = val;
    $scope.$apply();
  };
}
