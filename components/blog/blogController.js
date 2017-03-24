(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['$scope','BlogSerivce'];

    /* @ngInject */
    function BlogController($scope, BlogSerivce) { 
        console.log('welcome to blog controller');   
        var vm = this;
    }
})();