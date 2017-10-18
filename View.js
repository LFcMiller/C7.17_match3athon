/**
 * Creates an instance of View
 *
 * @constructor
 * @this {Painting}
 */
function View(){
    /**
     * Method to update timer
     * @param none
     */
    this.updateTime = function(){
        var time = data.timeLeft;
        var mins = parseInt(time/60);
        var secs = time%60;
        $(".Timer span").text(mins + ":" + ("0"+secs).toString().slice(-2));
    };
    /**
     * Method to display modal upon game end
     * @param none
     * @return {boolean} if tile space was refilled
     */
    this.displayGameEndModal = function (imgUrl) {
        if(imgUrl){ //if url was passed in, set url. Otherwise, modal is being clicked to close modal.
            $(".gameEndImg").attr("src", imgUrl);            
        }
        $(".gameEndModal").fadeToggle();
    };
}