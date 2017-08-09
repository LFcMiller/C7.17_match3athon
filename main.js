$(document).ready(init);

var tileTypes = ["icons/Css.png","icons/html5.png","icons/js.png","icons/php.png","icons/react.png"];
var specialTileTypes = ["icons/IE.png","icons/chrome.png"];
var allTiles = [];
var gm = null;
function createGameBoard () {
    $("#gameWindow").html("");
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            var tile = new Tile(i,j);
            tile.type = tileTypes[Math.floor(Math.random()*tileTypes.length)];
            var image = $("<img>").attr("src", tile.type).addClass("tile");
            var containerDiv = $("<div>").addClass("position").attr({"xValue": i, "yValue": j});
            containerDiv.append(image);
            $("#gameWindow").append(containerDiv);
        }
    }
}

function init(){
    //TODO make all tiles, put all buttons into allTiles
    setButtonEvent(allTiles);
    $(".startButton").on("click", createGameBoard);
    gm = new GameManager();
    gm.init();
    gm.startGame();

    gm.eventManager.add_listener("onButtonClick",test);
    gm.eventManager.add_listener("onButtonClick",test2);
    
}

//tile not finished, each tile store it's button
function setButtonEvent(tileArray){
    for(var t in tileArray){
        var tile = tileArray[t];
        var button = tile.button;
        button.on("click",gm.eventManager.raise("onButtonClick",button/*or tile*/));
    }
}

function test(){
    console.log("test success");
}

function test2(){
    console.log("test success 2");
}



