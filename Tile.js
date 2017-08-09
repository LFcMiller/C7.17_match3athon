function Tile(x,y) {
    this.x = x;
    this.y = y;
    this.type = null; //type of tile
    this.matchesWith = [];//what it can match with
    this.dom = null;//dom
    
    this.match = function(){}; //behavior on match
    this.clickFocus = false; //is element currently clicked. Will effect on-screen animation
    this.delete = function(){}; //delete element
}