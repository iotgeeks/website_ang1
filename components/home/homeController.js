(function() {
    'use strict';

    angular
        .module('iotgeeks')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope','HomeSerivce'];

    /* @ngInject */
    function HomeController($scope, HomeSerivce) { 
    console.log('welcome to home controller');   
        var vm = this;
        vm.title = 'Controllers';
        //like us 
        vm.changeActiveLike = changeActiveLike;
        vm.currentActiveLike = 1;
        //response
        vm.responseActive = 3;
        vm.changeResponseActive = changeResponseActive;

        ///On load sliders
        HomeSerivce.getSliders().then(function(response) {
            if(response.status === 200) {
                vm.sliders = response.data.slides;
            }
        }, function(errorResponse) {
            //error response
        });

        //On load feature
        HomeSerivce.getFeatures().then(function(response) {
            if(response.status === 200) {
                vm.features = response.data.features;
            }
        }, function(errorResponse) {
            //error response
        });

        // On load recent works
        HomeSerivce.getRecentWorks().then(function(response) {
            if(response.status === 200) {
                vm.recentWorks = response.data.recent_works;
            }
        }, function(errorResponse) {
            //error response
        });

        //On load services 
        HomeSerivce.getServices().then(function(response) {
            if(response.status === 200)
                vm.services = response.data.services;
        }, function(errorResponse) {
            //error response
        });

        //On load skills load
        HomeSerivce.getSkills().then(function(response) {
            if(response.status === 200)
                vm.skills = response.data.skills;
        }, function(errorResponse) {
            //error respone 
        });

        //On load likeus 
        HomeSerivce.getLikeUs().then(function(response) {
            if(response.status === 200)
                vm.likeUs = response.data.like_us;
        }, function(errorResponse) {
            //error response
        });

        // On load Response
        HomeSerivce.getResponse().then(function(response) {
            if(response.status  === 200)
                vm.response = response.data.response;
        }, function(errorResponse) {
            //Error response
        });

        // On load testimonial
        HomeSerivce.getTestimonial().then(function(response) {
            if(response.status === 200)
                vm.testimonial = response.data.testimonial;
        }, function(errorResponse) {

        })


        function changeActiveLike(likeId) {           
            vm.currentActiveLike = likeId;
        }

        function changeResponseActive(currentResponse) {
            vm.responseActive = currentResponse;
        }
    }
})();