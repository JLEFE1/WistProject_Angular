'use strict';

whistApp.factory('rankingService', function () {

    function getRankingRow(maxLength) {
        return new RankingRow(maxLength);
    }

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

    function adjustStanding(pointsToAdd, total){

        for (var i = 0; i < pointsToAdd.points.length; i++){
            total[i] += parseInt(pointsToAdd.points[i]);

        }

        return total;

    };

    function addPointsToTable(){

    };

    return {
        getRankingRow:getRankingRow,
        adjustStanding:adjustStanding,
        addPointsToTable:addPointsToTable
    }

});