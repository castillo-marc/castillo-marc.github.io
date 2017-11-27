$(document).ready(function() {
    $(".navbar-item").hover(function() { //jQuery Function Number 1
        $(".navbar-item").css("opacity", ".5"); //jQuery Function Number 2
        $(this).css("opacity", "1");
        }, function() {
        $(".navbar-item").css("opacity", "1");
    });

    $(".navbar-button").hover(function() {
        $(".navbar-button").css("opacity", ".5");
        $(this).css("opacity", "1");
        }, function () {
        $(".navbar-button").css("opacity", "1");
    })
});
