angular.module('common')
    .filter('capitaliseFilter', function () {
        return function (text) {
            return text.toString().toUpperCase();
        }
    })
    .filter('genericStringFilter', function() {
        return function (nameList, arg) {
            var filteredList = [];

            for (var i = 0; i < nameList.length; i++) {
                if (nameList[i].toString().indexOf(arg) != -1) {
                    filteredList.push(nameList[i]);
                }
            }

            return filteredList;
        }
    });