'use strict';

whistApp.factory('gameService', function () {

    function startNewGame () {
        return true;
    }

    return {
        startNewGame: startNewGame,
        addPlayer: addPlayer
    }

});