(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .controller('ServiceController', ServiceController);

    ServiceController.$inject = ['$scope','ServiceSerivce'];

    /* @ngInject */
    function ServiceController($scope, ServiceSerivce) { 
        console.log('welcome to service controller');   
        var vm = this;
        ServiceSerivce.getService().then(function(successResponse){
            vm.services = successResponse.data.services;
        }, function(errorResponse){
            //error console
        });
        console.log(vm.services);
    }
})();