(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .controller('AboutusController', AboutusController);

    AboutusController.$inject = ['$scope','AboutusSerivce'];

    /* @ngInject */
    function AboutusController($scope, HomeSerivce) { 
        console.log('welcome to aboutus controller');   
        var vm = this;
    }
})();