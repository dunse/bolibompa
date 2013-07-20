'use strict';

/* Controllers */
function NavigationCtrl($scope, $route) {
  $scope.$route = $route;
}

function MainCtrl($scope, $http, $location, $rootScope, $timeout, ApiService) {
  console.log('in MainCtrl');
  ApiService.query({}, function(data) {
    $scope.mydata = data.actions;
  });
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
