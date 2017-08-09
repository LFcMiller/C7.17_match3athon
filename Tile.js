function Tile(x,y) {
    
    this.x = x;
    this.y = y;

    this.matchesWith = [];

    this.type = null; //type of tile
    this.matchesWith = null; //what it can match with
    this.match = function(){}; //behavior on match
    this.clickFocus = false; //is element currently clicked. Will effect on-screen animation
    this.delete = function(){}; //delete element

    this.button = null;//the button hook up with tile
}