/**
 * Created by mayureshp on 1/23/2015.
 */

angular.module("todo").
    factory("TodoService", [function () {
        var todoService = {};
        todoService.items = [
            {
                task: "Task One",
                completed: false,
                deleted: false
            },
            {
                task: "Task Two",
                completed: false,
                deleted: false
            },
            {
                task: "Task Three",
                completed: false,
                deleted: false
            },
            {
                task: "Task Four",
                completed: false,
                deleted: false
            }
        ];

        todoService.add = function (newTask) {
            newTask.deleted = false;
            this.items.push(newTask);
        };

        todoService.delete = function (task) {
            var index = this.items.indexOf(task);
            this.items.splice(index, 1);
        };

        todoService.removeCompleted = function () {
            this.items.forEach(function (item) {
                if (item.completed) {
                    item.deleted = true;
                }
            })
        };

        return todoService;

    }]);