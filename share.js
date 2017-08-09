function Tile() {
    this.type = null; //type of tile
    this.matchesWith = null; //what it can match with
    this.match = function(){}; //behavior on match
    this.clickFocus = false; //is element currently clicked. Will effect on-screen animation
    this.delete = function(){}; //delete element
}
function Game() {
    this.size = null; //board size
    this.score = null; //current score
    this.timer = null; //current timer
    this.firstTile = null; //first tile clicked
    this.secondTile = null; //second tile clicked
    this.createTile = function(){}; //create new tile(s)
    this.createBoard = function(){}; //build initial board
}
function View() {
    this.handleClick = function(){}; //click handlers within screen
    this.updateDisplay = function(){}; //updates display to reflect changes
    this.startGame = function(){}; //init for game
    this.lose = function(){}; //lose effects
    this.win = function(){}; //win effects
}
function Controller() {
    this.checkTile = function(){}; //check if tile is first or second clicked
    this.checkMatch = function(){}; //check for match
    this.handleMatch = function(){}; //handle match if actual match
    this.switchTiles = function(){}; //Can switch even if no match? If no match, squiggly red line under switched tiles?
}