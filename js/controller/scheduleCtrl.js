angular.module("appModule").controller("scheduleCtrl", function($scope, DbService) {

    $scope.date = {
        month: {
            onNumber: 1,
            onString: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ]
        },
        year: 2016,
        days: 31
    };

    $scope.getNumber = function(num) {
        return new Array(num);
    }


});
