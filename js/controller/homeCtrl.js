angular.module("appModule").controller("homeCtrl", function($scope, $state, DbService) {
  $scope.tasks = [{name:'Programar' , mark:'X'}];
});
