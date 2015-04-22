angular.module('names').
    controller('nameCtrl', ['$scope', 'nameService', function($scope, myService) {
        $scope.addName = function() {
            myService.addName($scope.name);
            $scope.name = '';

        };

        $scope.names = myService.items;
    }]);