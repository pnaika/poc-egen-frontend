'use strict';
angular.module('pocEgen.assetSummary',[])
    .controller('assetSummaryCtrl',assetSummaryCtrl);

function assetSummaryCtrl(dataService, $routeParams) {
    var vm = this;
    var id = $routeParams.ID;
    var timeValue;
    var powerConsumedIn30Mins;

    vm.getAssetData = getAssetData;
    vm.assetData = [];
    vm.customOne = false;

    dataService.getAllData()
        .then(function (data) {
            _.forOwn(data, function (value) {
                if(value.deviceId === id) {
                    getAssetData(value);
                }
            })
        });

    function getAssetData (data) {
        vm.assetData = data;

        timeValue =_.map(vm.assetData .DataUsed30Min , function(res) {return res.usedDate});
        powerConsumedIn30Mins =_.map(vm.assetData.DataUsed30Min, function(res) {return res.powerConsumed});

        Highcharts.chart('container', {
            title: {
                text: 'Data Usage in 30 Minute Difference'
            },
            xAxis: {
                categories: timeValue,
                title: {
                    text: 'Date Time'
                }
            },
            yAxis: {
                title: {
                    text: 'Power Consumed'
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                data: powerConsumedIn30Mins
            }]
        });
    }

    vm.toggleCustomOne = function() {
        vm.customOne = vm.customOne === false ? true: false;
    };
}