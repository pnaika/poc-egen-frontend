'use strict';

// Declare app level module which depends on views, and components

(function(){

    angular.module('pocEgen',[
        'ngRoute',
        'ui.grid',
        'pocEgen.home',
        'pocEgen.services',
        'pocEgen.assetSummary'
    ])
        .config(moduleConfig);

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'component/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/asset-summary/:ID', {
                templateUrl: 'component/asset-summary/asset-summary.html',
                controller: 'assetSummaryCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/home'});
    }
})();