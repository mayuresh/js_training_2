angular.module('common')
    .directive('genericList', function () {
        return {
            scope: {
                collection: '=collection',
                heading: '@heading'
            },
            templateUrl: 'app/common/templates/generic_list_template.html'
        }
    });