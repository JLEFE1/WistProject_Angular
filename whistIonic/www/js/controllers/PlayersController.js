(function (){
    'use strict';

     angular.module('gamesApp').controller('PlayersController',['$state', 'dataAPI', PlayersController]);



     function PlayersController($state, dataAPI) {

         var vm = this;
         var players = dataAPI.getPlayers();

         vm.players = players;
         vm.selectPlayer = function selectPlayer(playerId){
             $state.go("players.player", { id: playerId });
         }

    };


})();