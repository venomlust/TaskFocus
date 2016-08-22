angular.module("appModule").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/index');

    $stateProvider.state("index", {
        url: "/index",
        templateUrl: "view/index.html",
        controller: 'indexCtrl'
    }).state("index.home", {
        templateUrl: "view/home.html",
        controller: 'homeCtrl'
    }).state("index.schedule", {
        templateUrl: "view/schedule.html",
        controller: 'scheduleCtrl'
    }).state("index.todo", {
        templateUrl: "view/todo.html",
        controller: 'todoCtrl'
    }).state("main.graphs", {
        templateUrl: "view/graphs.html",
        controller:'graphsCtrl'
    });

});
