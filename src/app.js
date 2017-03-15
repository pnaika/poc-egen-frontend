'use strict';

// Declare app level module which depends on views, and components

(function(){

    angular.module('pocEgen',[
        'ngRoute',
        'pocEgen.home',
        'pocEgen.services'
    ])
        .config(moduleConfig);

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'component/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/home'});
    }
})();