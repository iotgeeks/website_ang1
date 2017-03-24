(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .controller('ContactusController', ContactusController);

    ContactusController.$inject = ['$scope','ContactusSerivce'];

    /* @ngInject */
    function ContactusController($scope, ContactusSerivce) { 
        console.log('welcome to contactus controller');   
        var vm = this;
    }
})();