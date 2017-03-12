(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .service('HomeSerivce', HomeSerivce);

    HomeSerivce.$inject = ['$http'];

    /* @ngInject */
    function HomeSerivce($http) {
        var baseURL = 'http://localhost:8085/components/home/';
        this.getSliders = function () {
            return $http.get(baseURL+'slider.json');
        };
        this.getFeatures = function() {
            return $http.get(baseURL+'feature.json');
        };
        this.getRecentWorks = function() {
            return $http.get(baseURL+'recent_work.json');
        };
        this.getServices = function() {
            return $http.get(baseURL+'service.json');
        };
        this.getSkills = function() {
            return $http.get(baseURL+'skills.json');
        };
        this.getLikeUs = function() {
            return $http.get(baseURL+'likeus.json');
        };
        this.getResponse = function() {
            return $http.get(baseURL+'response.json');
        };
        this.getTestimonial = function() {
            return $http.get(baseURL+'testimonial.json');
        }
    }
})();