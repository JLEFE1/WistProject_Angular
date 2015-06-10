(function (){
    'use strict';

     angular.module('gamesApp').controller('RulesController',['$state', RulesController]);



     function RulesController($state) {

         var vm = this;

         vm.startWhist = function startWhist(){
             $state.go("app.whist");
         }

    };


})();