angular.module('name')
.filter('planetFilter', function() {
        return function(nameList) {
            var filteredList = [];
            var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

            for (var i = 0; i < nameList.length; i++) {
                if (planets.indexOf(nameList[i]) != -1) {
                    filteredList.push(nameList[i]);
                }
            }

            return filteredList;
        }
    });