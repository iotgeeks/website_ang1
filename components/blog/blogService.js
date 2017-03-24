(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .service('BlogSerivce', BlogSerivce);

    BlogSerivce.$inject = ['$http'];

    /* @ngInject */
    function BlogSerivce($http) {
        var baseURL = 'http://localhost:8085/components/home/';
        this.getSliders = function () {
            return $http.get(baseURL+'slider.json');
        };
    }
})();