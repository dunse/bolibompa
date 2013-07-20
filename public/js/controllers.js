'use strict';

/* Controllers */

function MainCtrl($scope, $http, $location, $rootScope, $timeout, ApiService) {
  console.log('in MainCtrl');
  ApiService.query({}, function(data) {
    $scope.mydata = data.actions;
  });
}

function ServiceOneCtrl($scope, $http, $location, $rootScope, $timeout, OneService) {
  console.log('in ServiceOneCtrl');
	$timeout(function fetchall() {
    OneService.query({}, function(data) {
      $scope.mydata = data.ones;
    });
		$timeout(fetchall, 10000);
	});
}
