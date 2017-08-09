function Tile(pos) {
    
    this.targetPosition = pos;
    this.currentPosition = function(){
        return gm.data.getContainerPosition(this.container);
    }
    this.shouldMove = function(){
        if(currentPosition().x !== this.targetPosition.x || currentPosition().y !== this.targetPosition.y){
            return true;
        }
    }

    this.onClicked;//callback

    this.type = null; //type of tile
    this.matchesWith = [];//what it can match with
    this.dom = null;//img dom
    this.container = null;//container dom
    
    this.match = function(){}; //behavior on match
    this.clickFocus = false; //is element currently clicked. Will effect on-screen animation
    this.delete = function(){}; //delete element

}