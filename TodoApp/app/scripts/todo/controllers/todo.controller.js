/**
 * Created by mayureshp on 1/23/2015.
 */

angular.module("todo").
    controller("TaskListCtrl", ['$scope', 'TodoService', function ($scope, TodoService) {
        $scope.criteria = 'All';
        $scope.todos = TodoService;

        $scope.addTodo = function () {
            $scope.newTask.completed = false;
            TodoService.add($scope.newTask);
            $scope.newTask = {};

        };

        $scope.remove = function (item) {
            TodoService.delete(item);
        };

        $scope.removeCompleted = function () {
            TodoService.removeCompleted();
        };
    }]);
