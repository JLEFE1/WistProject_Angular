$("document").ready(function () {
  
    $("#startNewGameBlock").show();
    $("#addPlayersBlock").hide();
    $("#startGameBlock").hide();
    $("#rankingBlock").hide();
  
    var $playerButton = $("#playerButton")
    var $clearPlayersButton = $("#clearPlayersButton");
    var $startNewGameButton = $("#startNewGameButton");
    var $startGameButton = $("#startGameButton");
    var $addPointsButton = $("#addPointsButton");
  
    
    var players = document.querySelectorAll("#players")[0];
    var rankingTableHeader = document.querySelectorAll("#rankingTableHeader")[0];
    var rankingTableBody = document.querySelectorAll("#rankingTableBody")[0];
    var pointInputTable = document.querySelectorAll("#pointsInput")[0];
    
    var ranking = new Array();
    var standing = new Array();
  
    var PlayerList = (function () {
        this.players = new Array();
    });
    
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
  
    var currentPlayers = null;

    currentPlayers = JSON.parse(localStorage.getItem('players'));
    if (!currentPlayers) {
        createCurrentPlayers();
    }
  
    $startNewGameButton.on("click",function(){
    
        $("#startNewGameBlock").hide();
        $("#addPlayersBlock").show();

        updatePlayersList();
        checkMinimalNumberOfPlayetsNecessaryToStartGame();
        
    
    });
  
    $startGameButton.on("click",function(){

    if (currentPlayers.players.length >= 4){
        $("#addPlayersBlock").hide();
        $("#rankingBlock").show();

        createPointInputTable();
        createRankingTable();
        createTotalRowForTable();

    }

    });
  
    $playerButton.on("click",function(){

        addPlayer();

        document.getElementById('addPlayer').value = "";

        checkMinimalNumberOfPlayetsNecessaryToStartGame();
    });
  
    $clearPlayersButton.on("click",function(){

        currentPlayers.players.length  = 0;
        localStorage.setItem('players', JSON.stringify(currentPlayers));

        updatePlayersList();

    });
    
    $addPointsButton.on("click", function(){
        
        
        
        var puntjes = new RankingRow(currentPlayers.players.length);
        
        var points = document.querySelectorAll(".pointInput");
        
        for(var i = 0; i < currentPlayers.players.length; i++){
            
            puntjes.points[i] = points[i].value;
        }
        
        if(puntjes.checkTotalPoints()){
            ranking.push(puntjes);
            adjustStanding(puntjes);
            addPointsToTable();
        }
        
        
        
    });
    
    
    
    
    
  
    function createCurrentPlayers() {
        localStorage.setItem("players", JSON.stringify(new PlayerList()));
        currentPlayers = JSON.parse(localStorage.getItem("players"));
    }

    function updatePlayersList(){

        players.innerHTML = "";
        for (var i = 0; i < currentPlayers.players.length; i++) {
            var liElement = document.createElement('li');
            liElement.innerHTML = currentPlayers.players[i];
            players.appendChild(liElement);
        }

    }
  
    function addPlayer() {

        if(document.getElementById('addPlayer').value !== ""){
            var name = $("#addPlayer").val();
            currentPlayers.players.push(name);
            localStorage.setItem('players', JSON.stringify(currentPlayers));

            updatePlayersList();
        }
    }
  
    function checkMinimalNumberOfPlayetsNecessaryToStartGame(){
        if (currentPlayers.players.length >= 4){
            $startGameButton.removeClass("unclickable");
            
            for (var i = 0; i < currentPlayers.players.length; i++){
                standing.push(0);
            }
            
        }
    }
    
    function adjustStanding(pointsToAdd){
    
        for (var i = 0; i < pointsToAdd.points.length; i++){
            standing[i] += parseInt(pointsToAdd.points[i]);
            
            var idToFind = "#total" + i;
            var fieldToUpdate = document.querySelectorAll(idToFind)[0];
            fieldToUpdate.innerHTML = standing[i];
            
        }
        
    };
  
    function createRankingTable(){
        
        

        var trElement = document.createElement('tr');

        var thElement = document.createElement('th');
        thElement.innerHTML = "Nbr.";
        trElement.appendChild(thElement);
        
        for (var i = 0; i < currentPlayers.players.length; i++) {
            var thElement = document.createElement('th');
            thElement.innerHTML = currentPlayers.players[i];
            trElement.appendChild(thElement);
        }
        
       
        rankingTableHeader.appendChild(trElement);
        
        
    }
    
    function createTotalRowForTable(){

        
        var trElement = document.createElement('tr');

        var tdElement = document.createElement('td');
        tdElement.innerHTML = "Total";
        trElement.appendChild(tdElement);

        for (var k = 0; k < currentPlayers.players.length; k++) {
            var tdElement = document.createElement('td');
            tdElement.innerHTML = standing[k];
            tdElement.setAttribute("class","total");
            tdElement.setAttribute("id","total" + k);
            trElement.appendChild(tdElement);
        }

        rankingTableBody.appendChild(trElement);
        

        
    }
    
    function addPointsToTable(){

        
        var trElement = document.createElement('tr');

        var tdElement = document.createElement('td');
        tdElement.innerHTML = ranking.length;
        trElement.appendChild(tdElement);

        for (var k = 0; k < currentPlayers.players.length; k++) {
            var tdElement = document.createElement('td');
            tdElement.innerHTML = ranking[ranking.length-1].points[k];
            trElement.appendChild(tdElement);
        }

        rankingTableBody.appendChild(trElement);
        

        
    }
    
    function createPointInputTable(){
        
        var inputElement = document.createElement('input');

        inputElement.setAttribute("readonly","readonly");
        inputElement.setAttribute("class","invisible");
        pointInputTable.appendChild(inputElement);
        
        for (var i = 0; i < currentPlayers.players.length; i++) {
            var inputElement = document.createElement('input');

            inputElement.setAttribute("id","id" + i);
            inputElement.setAttribute("type","number");
            inputElement.setAttribute("name","test");
            inputElement.setAttribute("placeholder","Give points");
            inputElement.setAttribute("class","pointInput");
            inputElement.setAttribute("value",0);
            
            pointInputTable.appendChild(inputElement);
            
        }
    }
  
});

