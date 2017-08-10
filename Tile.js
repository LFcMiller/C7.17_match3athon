function Tile(pos) {
    this.position = pos;
    this.shouldMove = function(){
        if(currentPosition().x !== this.targetPosition.x || currentPosition().y !== this.targetPosition.y){
            return true;
        }
    };
    this.onClick;//callback
    this.type = null; //type of tile
    this.matchesWith = [];//what it can match with
    this.dom = null;//img dom
    this.container = null;//container dom
    this.match = function(){}; //behavior on match
    this.clickFocus = false; //is element currently clicked. Will effect on-screen animation
}