'use strict';
angular.module('pocEgen.home',[])
    .controller('homeCtrl',homeCtrl);

function homeCtrl(dataService) {
    var vm = this;
    vm.customOne = "Prashanth";

    dataService.getAllData()
        .then(function (data) {
            console.log('res : : ',data);
        });
}