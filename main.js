$(document).ready(init);


var allTiles = [];
var gm = null;


function init(){
    //TODO make all tiles, put all buttons into allTiles
    gm = new GameManager();
    gm.init();
    gm.startGame();



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
        button.on("click",gm.eventManager.raise("onButtonClick",button/*or tile*/));
    }
}

function test(){
    console.log("test success");
}

function test2(){
    console.log("test success 2");
}



