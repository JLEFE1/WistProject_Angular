'use strict';

whistApp.controller("GameController",
    function GameController($scope, gameService, rankingService){

        $scope.titleObject = gameService.getTitleObject();

        $scope.game =  gameService.startNewGame();

        /* Code below should be refactored*/

        $scope.startNewGame = function(){
            $scope.game.bools.createGameBool = false;
            $scope.game.bools.addPlayersBool = true;
        }

        $scope.startGame = function(){
            $scope.game.bools.addPlayersBool = false;
            $scope.game.bools.startGameBool = false;
            $scope.game.bools.showResultsBool = true;
            for(var i = 0; i < $scope.game.players.length; i++){

                $scope.game.total[i] = 0;
            }

        }

        $scope.addNewPlayer = function(){
            if($scope.addPlayerForm.$valid) {

                var player = {
                    name: $scope.name,
                    playerIndex: "Player_" + $scope.game.players.length
                }

                $scope.game.players.push(player);

                $scope.name = null;

                if ($scope.game.players.length >= 4) {
                    $scope.game.bools.startGameBool = true;
                }
            }

        }



        $scope.addPoints = function(){

            var rankingRow = rankingService.getRankingRow($scope.game.players.length);

            var points = document.querySelectorAll(".pointInput");

            for(var i = 0; i < $scope.game.players.length; i++){

                rankingRow.points[i] = points[i].value;
            }

            if(rankingRow.checkTotalPoints()){
                $scope.game.ranking.push(rankingRow);
                $scope.game.total = rankingService.adjustStanding(rankingRow, $scope.game.total);
            }



        }


    }

);