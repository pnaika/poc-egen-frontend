(function () {
    'use strict';

    angular.module('pocEgen.services', [])
        .service('dataService', dataService);

    // @ngInject
    function dataService($http) {
        var vm = this;
        vm.getAllData = getAllData;
        vm.getDataById = getDataById;

        function getAllData () {
            return $http({
                url: '/resources/mockData/mockData.json',
                method: 'GET'
            })
                .then(function (res) {
                    return res.data;
                });
        }

        function getDataById (id) {
            return $http({
                url: '/resources/mockData/mockData.json',
                method: 'GET',
                params: {id: id}
            })
                .then(function (res) {
                    _.forOwn(res.data, function (data) {
                        if(data.deviceId === id) {
                            console.log(data);
                            return data;
                        }
                    })
                });
        }
    }
}());
