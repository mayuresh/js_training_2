angular.module('common')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home"); // By default route to state1

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/common/partials/home.html"
            })
            .state('aboutus', {
                url: "/aboutus",
                templateUrl: "app/common/partials/aboutus.html"
            })
            .state('aboutus.roadrunner', {
                url: '/roadrunner',
                templateUrl: "app/common/partials/aboutus.roadrunner.html"
            })
            .state('aboutus.coyote', {
                url: '/coyote',
                templateUrl: "app/common/partials/aboutus.coyote.html"
            })
    });