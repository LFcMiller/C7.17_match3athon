function GameManager(){

    this.startGame = function(){
        $("div > img").off();
        data.reset();
        tileHandler.createGameBoard(data.boardWidth,data.boardHeight);
        this.checkAllMatch();
        console.log(data.shouldDeletePosition);
        this.Timer();
        $(".position").on("click", tileHandler.checkTile);
    };


    this.checkAllMatch = function(){
        for(var i = 0; i < data.boardHeight; ++i){
            for(var j = 0; j< data.boardWidth; ++j){
                data.allTiles[j][i].checkMatch();
            }
        }
    };

    this.deleteAllMatch = function() {
        data.score+=(data.shouldDeletePosition.length*5)
        for (var i = 0; i < data.shouldDeletePosition.length; i++) {
            tileHandler.deleteTile(data.shouldDeletePosition[i]);
        }
        data.shouldDeletePosition = [];
        tileHandler.dropTile();
    };

    this.handleMatch = function(matchArray, resetTrigger){ //handle match if actual match
        if(resetTrigger){
            tileHandler.deleteTile(matchArray[0].pos);
            return true;
        }
        if(matchArray.length = 5) {
            data.score+=20;
        } else if(matchArray.length = 4) {
            data.score+=15;
        } else {
            data.score+=10
        }
        for(var i = 0; i < matchArray.length; i++) {
            data.allTiles[matchArray[i].pos.y][matchArray[i].pos.x] = null;
            $("div[xValue="+(matchArray[i].pos.x)+"][yValue="+(matchArray[i].pos.y)+"]").html("");
        }
        tileHandler.dropTile();
        for (var i = 0; i <matchArray.length; i++){
            var tile = new Tile(new Position(matchArray[i].pos.x, 0));
        }

        this.checkForAllMatch();
    };
    this.switchTiles = function(){}; //Can switch even if no match? If no match, squiggly red line under switched tiles?
    this.shrinkBoard = function(){};

    this.Timer = function(){
        
        count();

        function count(){
            setTimeout(function(){
            data.timeLeft -= 1;
            view.updateTime();
            if(data.timeLeft <=0){
                gm.onTimeOut();
                return;
            }
            count();
        },1000);
        }
    };

    this.onTimeOut = function(){
        console.log("time out");
    }
}