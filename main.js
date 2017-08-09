$(document).ready(init);
var tileTypes = ["icons/Css.png","icons/html5.png","icons/js.png","icons/php.png","icons/react.png"];
var specialTileTypes = ["icons/IE.png","icons/chrome.png"];
var allTiles = [];
var gm = null;

function init(){
    //TODO make all tiles, put all buttons into allTiles
    setButtonEvent(allTiles);
    gm = new GameManager();
    gm.init();
    $(".startButton").on("click", gm.startGame.bind(gm));



    //below is test
    setButtonEvent(allTiles);
    gm.eventManager.add_listener("onButtonClick",test);
    gm.eventManager.add_listener("onButtonClick",test2);
    
}

//tile not finished, each tile store it's button
function setButtonEvent(tileArray){
    for(var t in tileArray){
        var tile = tileArray[t];
        var button = tile.button;
        $(button).on("click",gm.eventManager.raise("onButtonClick",button/*or tile*/));
    }
}

function test(){
    console.log("test success");
}

function test2(){
    console.log("test success 2");
}



