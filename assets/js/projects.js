$(document).ready(function() {
    $(".photo1").click(function() {
        if ($(this).hasClass("photo-inactive")) { //jQuery Function Number 5
            $(this).removeClass("photo-inactive"); //jQuery Function Number 6
            $(this).addClass("photo-active");
            $(".project-title1").css("display", "none");
            $(".project-description1").css("display", "block");
        } else {
            $(this).removeClass("photo-active");
            $(this).addClass("photo-inactive");
            $(".project-description1").css("display", "none");
            $(".project-title1").css("display", "block");

        }
    })
    $(".photo2").click(function() {
        if ($(this).hasClass("photo-inactive")) {
            $(this).removeClass("photo-inactive");
            $(this).addClass("photo-active");
            $(".project-title2").css("display", "none");
            $(".project-description2").css("display", "block");
        } else {
            $(this).removeClass("photo-active");
            $(this).addClass("photo-inactive");
            $(".project-description2").css("display", "none");
            $(".project-title2").css("display", "block");

        }
    })
    $(".photo3").click(function() {
        if ($(this).hasClass("photo-inactive")) {
            $(this).removeClass("photo-inactive");
            $(this).addClass("photo-active");
            $(".project-title3").css("display", "none");
            $(".project-description3").css("display", "block");
        } else {
            $(this).removeClass("photo-active");
            $(this).addClass("photo-inactive");
            $(".project-description3").css("display", "none");
            $(".project-title3").css("display", "block");

        }
    })
});
