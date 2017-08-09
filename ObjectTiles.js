var chrome = new Tile();
chrome.type = "tile";
chrome.matchesWith = ["chrome", "css", "html", "IE", "php", "react"];
//chrome.match will decide late

var ie = new Tile();
ie.type = "tile";
ie.matchesWith = ["IE"];
//ie.match will decide later

var css = new Tile();
css.type = "tile";
css.matchesWith = ["css", "chrome"];
//css.match will decide later

var react = new Tile();
react.type = "tile";
react.matchesWith = ["react", "chrome"];
//react.match will decide later

var php = new Tile();
php.type = "tile";
php.matchesWith = ["php", "chrome"];
//php.match will decide later

var js = new Tile();
js.type = "tile";
js.matchesWith = ["js", "chrome"];
//js.match will decide later

