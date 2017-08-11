function GameManager(){

    this.startGame = function(){
        $(".position").off();
        data.reset();
        tileHandler.createGameBoard(data.boardWidth,data.boardHeight);
        this.checkAllMatch();
        this.Timer();
        $(".position").on("click", function(){
            data.allTiles[$(this).attr("yValue")][$(this).attr("xValue")].onClick();
        });
        view.updateTime();
    };


    this.checkAllMatch = function(){
        var hasMatch = false;
        for(var i = 0; i < data.boardHeight; ++i){
            for(var j = 0; j< data.boardWidth; ++j){
                if(data.allTiles[j][i] !== null){
                    data.allTiles[j][i].checkMatch();
                    hasMatch = true;
                }
            }
        }
        return hasMatch;
    };

    this.deleteAllMatch = function() {
        var deleted = data.shouldDeletePosition.length > 0;
        data.score+=(data.shouldDeletePosition.length*5);
        console.log(data.shouldDeletePosition);
        for (var i = 0; i < data.shouldDeletePosition.length; i++) {
            tileHandler.deleteTile(data.shouldDeletePosition[i]);
        }
        data.shouldDeletePosition = [];
        tileHandler.dropTile();
        if(deleted){
            if(tileHandler.refillEmptySpace()){
                tileHandler.checkTile();
            }
        }
        return deleted;
    };

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
        view.displayModalLose();
        if (data.score > localStorage.highScore) {
            localStorage.highScore = data.score;
        }
        $(".localHighScore").text(localStorage.highScore);
        $(".position").off();
        this.onLose();
    };

    //when add score, check score,if higher then goal, call this func
    this.onWin = function(){

    };

    this.onLose = function(){
        view.displayModalLose();
        if (data.score > localStorage.highScore) {
            localStorage.highScore = data.score;
        }
        $(".localHighScore").text(localStorage.highScore);
        $(".position").off();
    };
}