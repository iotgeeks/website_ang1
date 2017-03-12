(function() {
    'use strict';

    angular
        .module('app.routor', [
            'ngRoute'
        ]).config(['$routeProvider', function($routeProvider){
            $routeProvider.

            when('/home', {
                templateUrl: 'components/home/homeView.html',
                controller: 'HomeController as vm' 
            }).

            otherwise({redirectTo: '/home'})
        }])
})();