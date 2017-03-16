'use strict';
angular.module('pocEgen.home',[])
    .controller('homeCtrl',homeCtrl);

function homeCtrl(dataService) {
    var vm = this;

    vm.getGraphData = getGraphData;
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

            getGraphData(vm.assetData);

            vm.gridOptions.data = vm.assetData;
        });

    function getGraphData(assetData) {
        Highcharts.chart('barGraph', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Device Details'
            },
            xAxis: {
                categories: _.map(assetData, 'deviceName'),
                title: {
                    text: null
                }
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'signalStrength',
                    data: _.map(assetData, 'signalStrength')
                },
                {
                    name: 'energyCost',
                    data: _.map(assetData, 'energyCost')
                },
                {
                    name: 'energyCost',
                    data: _.map(assetData, 'Threshold')
                }
            ]
        });
    }
}