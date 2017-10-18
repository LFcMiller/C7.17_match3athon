$(document).ready(function() {
    $("#gameArea").draggable({ //make game window draggable
        cancel: "#gameWindow", //will not drag if user tries to drag playing area
        containment: "window" //can not drag beyond scope of window
    });
});