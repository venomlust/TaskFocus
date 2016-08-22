angular.module("appModule").controller("indexCtrl", function($scope, $state) {
  $state.go('index.home');
  console.log('index');
  $scope.goHome = function(){
    $state.go('index.home');
  };
  $scope.goSchedule = function(){
    $state.go('index.schedule');
  };
  $scope.goTodo = function(){
    $state.go('index.todo');
  };
  $scope.goGraph = function(){
    $state.go('index.graph');
  };
});
