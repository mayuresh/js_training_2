/**
 * Created by mayureshp on 1/28/2015.
 */

angular.module("common").
    directive("editableLabel", [function() {
        return {
            restrict : 'AE',
            template: '<span ng-dblclick="enterEditMode()" ng-bind="value" ng-show="!editMode"></span><input ng-keyup="exitEditMode()" ng-bind="value" ng-show="editMode" type="text">',
            scope: {
                value: '='
            },
            link: function(scope, elem, attrs) {
                scope.editMode = false;
                scope.oldValue = null;
                scope.enterEditMode = function() {
                    scope.oldValue = scope.value;
                    scope.editMode = true;
                };
                scope.exitEditMode = function () {
                    if (event.keyCode === 13) {
                        scope.editMode = false;
                    }
                    if (event.keyCode === 27) {
                        scope.value = scope.oldValue;
                        scope.editMode = false;
                    }
                };

            }

        }
    }]);

// Install yo
// install
// yo angular todoapp
