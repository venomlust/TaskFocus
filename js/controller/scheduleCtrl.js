angular.module("appModule").controller("scheduleCtrl", function($scope, DbService) {
  $scope.number = 31;
  $scope.getNumber = function(num) {
      return new Array(num);
  }
});
