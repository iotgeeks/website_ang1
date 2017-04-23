(function() {
    'use strict';

    angular
        .module('app.routor', [
            'ngRoute'
        ]).config(['$routeProvider', function($routeProvider){
            //console.log(LightboxProvider);

            $routeProvider.

            when('/home', {
                templateUrl: 'components/home/homeView.html',
                controller: 'HomeController as vm' 
            }).

            when('/about-us', {
                templateUrl: 'components/aboutus/aboutusView.html',
                controller: 'AboutusController as vm'
            }).

            when('/service', {
                templateUrl: 'components/service/serviceView.html',
                controller: 'ServiceController as vm'
            }).

            when('/makerspace', {
                templateUrl: 'components/makerspace/makerspaceView.html',
                controller: 'MakerspaceController as vm'
            }).

            when('/blog', {
                templateUrl: 'components/blog/blogView.html',
                controller: 'BlogController as vm'
            }).

            when('/contactus', {
                templateUrl: 'components/contactus/contactusView.html',
                controller: 'ContactusController as vm'
            }).

            otherwise({redirectTo: '/home'})
        }])
})();