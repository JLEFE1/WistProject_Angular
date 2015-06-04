'use strict';

whistApp.factory('gameService', function () {

    var game = {
        ranking: new Array(),
        total: new Array(),
        titleObject: {
            name: "Whist",
            imageUrl: "img/whist1.jpg"
        },
        bools: {
            createGameBool: true,
            startGameBool: false,
            showResultsBool: false
        },
        players: new Array()
    }

    function startNewGame () {
        return true;
    }
    function startNewGameTest () {
        return game;
    }

    return {
        startNewGame: startNewGame,
        startNewGameTest: startNewGameTest,
        addPlayer: addPlayer
    }

});