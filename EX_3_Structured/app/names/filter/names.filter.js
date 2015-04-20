
/**
 * Created by mayureshp on 4/20/2015.
 */

angular.module('names')
    .filter('listFilter', [function () {
        return function (items) {
            var filtered = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.search(/day/) != -1) {
                    filtered.push(item);
                }
            }
            return filtered;
        }
    }])
    .filter('capFilter', function () {
        return function (text) {
            return text.toString().toUpperCase();
        }
    });
