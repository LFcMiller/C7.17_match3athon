function View(){
    this.handleClick = function(){}; //click handlers within screen
    this.updateDisplay = function(){}; //updates display to reflect changes
    this.startGame = function(){}; //init for game
    this.lose = function(){}; //lose effects
    this.win = function(){}; //win effects


    this.updateTime = function(){
        var time = data.timeLeft;
        var mins = parseInt(time/60);
        var secs = time%60;
        $(".Timer span").text(mins + ":" + ("0"+secs).toString().slice(-2));
    }
}