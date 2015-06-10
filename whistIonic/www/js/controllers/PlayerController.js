(function (){
    'use strict';

     angular.module('gamesApp').controller('PlayerController',['$stateParams', 'dataAPI', PlayerController]);



     function PlayerController($stateParams, dataAPI) {

         var vm = this;

         var playerId = Number($stateParams.id);
         var data = dataAPI.getPlayers();

         var player = _.find(data, function(chr) {
             return chr.id === playerId;
         })

         vm.player = player;

    };


})();