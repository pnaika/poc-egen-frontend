'use strict';
angular.module('pocEgen.home',[])
    .controller('homeCtrl',homeCtrl);

function homeCtrl(dataService) {
    var vm = this;

    vm.gridOptions = {};
    vm.gridOptions.columnDefs = [
        {
            name: 'deviceId' ,
            cellTemplate:'<a href="#!/asset-summary/{{ COL_FIELD }}">{{ COL_FIELD }}</a>'
        },
        { name: 'deviceName'},
        { name: 'Currency' },
        { name: 'signalStrength' },
        { name: 'energyCost' },
        { name: 'Threshold' },
        { name: 'deviceMAC' }
    ];
    vm.assetData = [];
    dataService.getAllData()
        .then(function (data) {
            _.forOwn(data, function (value) {
                vm.assetData.push(_.omit(value, ['DataUsed30Min', 'Enery Usage']));
            })

            vm.gridOptions.data = vm.assetData;
        });
}