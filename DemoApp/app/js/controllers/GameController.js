'use strict';

whistApp.controller("GameController",
    function GameController($scope, gameService, rankingService){

        $scope.startNewGame = function () {
            $scope.createGameBool = gameService.startNewGame();
        };





        /* Code below should be refactored*/




        function RankingRow (maxLength) {
            this.points = new Array();
            this.maxLength = maxLength;
        }

        RankingRow.prototype.checkTotalPoints = function() {

            var sum = 0;
            for (var i = 0; i < this.maxLength; i++){
                sum += parseInt(this.points[i]);
            }

            return sum == 0;
        };

        RankingRow.prototype.checkNumberOfPLayers = function(numberOfPlayers) {
            return numberOfPlayers == this.maxLength;
        };

        function adjustStanding(pointsToAdd){

            for (var i = 0; i < pointsToAdd.points.length; i++){
                $scope.total[i] += parseInt(pointsToAdd.points[i]);

            }

        };

        function addPointsToTable(){

        };

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

        $scope.setFocus = function(bool){
            var focus = true;
            if (!bool){
                focus = false;
            }
            return focus;
        }

        $scope.addPoints = function(){

            var rankingRow = new RankingRow($scope.players.length);

            var points = document.querySelectorAll(".pointInput");

            for(var i = 0; i < $scope.players.length; i++){

                rankingRow.points[i] = points[i].value;
            }

            if(rankingRow.checkTotalPoints()){
                $scope.ranking.push(rankingRow);
                adjustStanding(rankingRow);
                addPointsToTable();
            }



        }


    }

);