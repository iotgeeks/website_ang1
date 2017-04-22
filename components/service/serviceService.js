(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .service('ServiceSerivce', ServiceSerivce);

    ServiceSerivce.$inject = ['$http'];

    /* @ngInject */
    function ServiceSerivce($http) {
        var baseURL = 'http://localhost:8085/components/service/';
        this.getService= function () {
            return $http.get(baseURL+'service.json');
        };
    }
})();