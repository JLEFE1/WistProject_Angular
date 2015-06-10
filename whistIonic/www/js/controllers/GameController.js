(function (){
    'use strict';

     angular.module('gamesApp').controller('GameController',['dataAPI','$stateParams', GameController]);



     function GameController(dataAPI, $stateParams) {

         var vm = this;

         var gameId = Number($stateParams.id);
         var data = dataAPI.getGames();

         var game = _.find(data, function(chr) {
             return chr.id === gameId;
         })

         vm.game = game;

    };


})();