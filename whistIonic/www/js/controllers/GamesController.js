(function (){
    'use strict';

     angular.module('gamesApp').controller('GamesController',['$state','dataAPI', GamesController]);



     function GamesController($state, dataAPI) {

         var vm = this;
         var games = dataAPI.getGames();

         vm.games = games;
         vm.selectGame = function selectGame(gameId) {
             $state.go("games.game", {id: gameId});
         }

    };


})();