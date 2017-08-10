function View(){
    this.updateTime = function(){
        var time = data.timeLeft;
        var mins = parseInt(time/60);
        var secs = time%60;
        $(".Timer span").text(mins + ":" + ("0"+secs).toString().slice(-2));
    };

    this.displayModalWin = function () {
        $(".modalWinContainer").fadeToggle();
    };
    this.displayModalLose = function () {
        $(".modalLose").fadeToggle();
    }
}