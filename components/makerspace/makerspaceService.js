(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .service('MakerspaceSerivce', MakerspaceSerivce);

    MakerspaceSerivce.$inject = ['$http'];

    /* @ngInject */
    function MakerspaceSerivce($http) {
        var baseURL = 'http://localhost:8085/components/home/';
        this.getSliders = function () {
            return $http.get(baseURL+'slider.json');
        };
    }
})();