$(document).ready(function() {
    $("#gameArea").draggable({
        cancel: "#gameWindow",
        containment: "window"
    });
});