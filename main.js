$(document).ready(init);
var tileTypes = ["icons/Css.png","icons/html5.png","icons/js.png","icons/php.png","icons/react.png"];
var specialTileTypes = ["icons/IE.png","icons/chrome.png"];
var allTiles = [];
var gm = null;

function init(){
    
    gm = new GameManager();
    gm.init();
    $(".startButton").on("click", function(){gm.eventManager.raise("startGame")});


    
    gm.eventManager.add_listener("onTileClick",test);
    
}

//tile not finished, each tile store it's button
function setTileOnClick(tileArray){
    for(var t in tileArray){
        var tile = tileArray[t];
        var img = tile.dom;
        $(img).on("click",function(){gm.eventManager.raise("onTileClick", img)});
    }
}

function test(){
    console.log("test success");
}




