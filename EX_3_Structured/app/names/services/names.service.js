/**
 * Created by mayureshp on 4/20/2015.
 */

angular.module('names')
    .factory("nameService", [function () {
        return({
            items: [
                'Text with day',
                'Normal text'
            ],
            addName: function(name) {
                this.items.push(name);
            }

        })
    }]);
