(function () {
    'use strict';

    angular.module('pocEgen.services', [])
        .service('dataService', dataService);

    // @ngInject
    function dataService($http) {
        var vm = this;
        vm.getAllData = getAllData;

        function getAllData () {
            return $http({
                url: '../src/resources/mockData/mockData.json',
                method: 'GET'
            })
                .then(function (res) {
                    return res.data;
                });
        }
    }
}());
