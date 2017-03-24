(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .service('serviceSerivce', ServiceSerivce);

    ServiceSerivce.$inject = ['$http'];

    /* @ngInject */
    function ServiceSerivce($http) {
        var baseURL = 'http://localhost:8085/components/home/';
        this.getSliders = function () {
            return $http.get(baseURL+'slider.json');
        };
    }
})();