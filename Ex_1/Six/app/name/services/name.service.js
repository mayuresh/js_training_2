angular.module('name').
    factory('myService', function() {
        return({
            items: [],
            addItem: function(item) {
                this.items.push(item);
            }
        });
    });