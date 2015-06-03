'use strict';

whistApp.controller("StartGameController",
    function StartGameController($scope){

        $scope.titleObject = {
            name: "Whist",
            imageUrl: "img/whist1.jpg"
        }

        $scope.startNewGame = function () {
            console.log("function called");
            $scope.createGame = true;
        };

        $scope.createGame = false;
        $scope.startGame = false;

        $scope.players = [];

        $scope.addNewPlayer = function(){
            var player = {
                name: $scope.name
            }

            $scope.players.push(player);

            $scope.name = null;

            if ($scope.players.length >= 4){
                $scope.startGame = true;
            }
        }


    }

);