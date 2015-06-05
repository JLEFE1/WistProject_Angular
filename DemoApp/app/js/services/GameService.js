'use strict';

whistApp.factory('gameService', function () {

    var game = {
        ranking: new Array(),
        total: new Array(),
        bools: {
            createGameBool: true,
            addPlayersBool: false,
            startGameBool: false,
            showResultsBool: false
        },
        players: new Array()
    }

    var titleObject = {
        name: "Whist",
        imageUrl: "img/whist1.jpg"
    }

    function startNewGame () {
        return game;
    }

    function getTitleObject(){
        return titleObject;
    }

    return {
        startNewGame: startNewGame,
        getTitleObject: getTitleObject,
        addPlayer: addPlayer
    }

});