'use strict'

angular.module('eventizerApp')
    .controller('EventDetailCtrl', function ($scope, $stateParams, $meteor) {
        if($stateParams.eventId == "add"){
            $scope.title = "Add a new event";
            $scope.event = $scope.$meteorObject(Events, Random.id());
        }else{
            $scope.title = "Edit event";
            $scope.event = $scope.$meteorObject(Events, $stateParams.eventId);
        }
        $scope.categories = ['General', 'Hackathon', 'Meetup'];
        
        $scope.$meteorSubscribe('events');

        $scope.save = function () {
            $scope.event.dateModified = new Date();
            if ($scope.form.$valid) {
                $scope.event.save().then(
                    function (numberOfDocs) {
                        console.log('save successful, docs affected ', numberOfDocs);
                    },
                    function (error) {
                        console.log('save error ', error);
                    }
                )
            }
        };
    });