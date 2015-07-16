angular.module('name')
    .controller('myCtrl', ['$scope', 'myService', function ($scope, myService) {
        $scope.addName = function () {
            myService.addItem($scope.name);
            $scope.name = '';
        };

        $scope.names = myService.items;

    }]);