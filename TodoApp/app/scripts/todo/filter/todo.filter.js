/**
 * Created by mayureshp on 1/23/2015.
 */

angular.module("todo").
    filter('TaskFilter', [function() {
        return function(array, criteria) {
            return array.filter(function (i) {
                if(criteria === 'Completed') return(i.completed == true);
                if(criteria === 'Active') return(i.completed == false);
                if(criteria === 'All') return true;
            });
        }
    }]);