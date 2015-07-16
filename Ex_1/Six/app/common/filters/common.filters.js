angular.module('common')
    .filter('capitaliseFilter', function () {
        return function (text) {
            return text.toString().toUpperCase();
        }
    });