'use strict';

whistApp.controller("GameController",
    function GameController($scope, gameService, rankingService){

        $scope.ranking = new Array();
        $scope.total = new Array();

        $scope.titleObject = {
            name: "Whist",
            imageUrl: "img/whist1.jpg"
        }



        $scope.createGameBool = false;
        $scope.startGameBool = false;
        $scope.showResultsBool = false;

        $scope.players = [];

        $scope.startNewGame = function () {
            $scope.createGameBool = gameService.startNewGame();
        };

        /* Code below should be refactored*/

        $scope.addNewPlayer = function(){
            if($scope.addPlayerForm.$valid) {

                var player = {
                    name: $scope.name,
                    playerIndex: "Player_" + $scope.players.length
                }

                $scope.players.push(player);

                $scope.name = null;

                if ($scope.players.length >= 4) {
                    $scope.startGameBool = true;
                }
            }

        }

        $scope.startGame = function(){
            $scope.showResultsBool = true;
            for(var i = 0; i < $scope.players.length; i++){

                $scope.total[i] = 0;
            }

        }

        $scope.addPoints = function(){

            var rankingRow = rankingService.getRankingRow($scope.players.length);

            var points = document.querySelectorAll(".pointInput");

            for(var i = 0; i < $scope.players.length; i++){

                rankingRow.points[i] = points[i].value;
            }

            if(rankingRow.checkTotalPoints()){
                $scope.ranking.push(rankingRow);
                $scope.total = rankingService.adjustStanding(rankingRow, $scope.total);
                rankingService.addPointsToTable();
            }



        }


    }

);