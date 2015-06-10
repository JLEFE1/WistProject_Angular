(function (){
    'use strict';

     angular.module('gamesApp').factory('dataAPI',[dataAPI]);



     function dataAPI() {


         var players = JSON.parse('[{"id":1005,"firstName":"Joris","lastName":"Lefever","isDirty":false,"isArchived":false},{"id":1004,"firstName":"An","lastName":"Scheers","isDirty":false,"isArchived":false},{"id":2008,"firstName":"Sander","lastName":"DeBacker","isDirty":false,"isArchived":false},{"id":1,"firstName":"Geert","lastName":"Visseneacken","isDirty":false,"isArchived":false},{"id":2,"firstName":"Steven","lastName":"Coomans","isDirty":false,"isArchived":false}]');
         var games = JSON.parse('[{"id":1,"title":"Eclipse"},{"id":2,"title":"Le Havre"}]');

         function getPlayers(){
             return players;
         }

         function getGames(){
             return games;
         }

         return{
             getPlayers: getPlayers,
             getGames: getGames
         };

    };


})();