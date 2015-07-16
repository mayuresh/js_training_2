angular.module('common')
    .filter('capitaliseFilter', function () { // Convert string to uppercase
        return function (text) {
            return text.toString().toUpperCase();
        }
    })
    .filter('genericStringFilter', function() { // Filter list to only retain strings containing the string in filterString
        return function (nameList, filterString) {
            var filteredList = [];

            for (var i = 0; i < nameList.length; i++) {
                if (nameList[i].toString().indexOf(filterString) != -1) {
                    filteredList.push(nameList[i]);
                }
            }

            return filteredList;
        }
    });