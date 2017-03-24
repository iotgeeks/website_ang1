(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .service('AboutusSerivce', AboutusSerivce);

    AboutusSerivce.$inject = ['$http'];

    /* @ngInject */
    function AboutusSerivce($http) {
        var baseURL = 'http://localhost:8085/components/home/';
        this.getSliders = function () {
            return $http.get(baseURL+'slider.json');
        };
    }
})();