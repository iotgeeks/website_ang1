(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .service('ContactusSerivce', ContactusSerivce);

    ContactusSerivce.$inject = ['$http'];

    /* @ngInject */
    function ContactusSerivce($http) {
        var baseURL = 'http://localhost:8085/components/home/';
        this.getSliders = function () {
            return $http.get(baseURL+'slider.json');
        };
    }
})();