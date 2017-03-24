(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .controller('ServiceController', ServiceController);

    ServiceController.$inject = ['$scope','HomeSerivce'];

    /* @ngInject */
    function ServiceController($scope, HomeSerivce) { 
        console.log('welcome to service controller');   
        var vm = this;
    }
})();