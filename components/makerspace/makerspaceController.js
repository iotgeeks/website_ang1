(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .controller('MakerspaceController', MakerspaceController);

    MakerspaceController.$inject = ['$scope','MakerspaceSerivce'];

    /* @ngInject */
    function MakerspaceController($scope, HomeSerivce) { 
        console.log('welcome to Makerspace controller');   
        var vm = this;
    }
})();