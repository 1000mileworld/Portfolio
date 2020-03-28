$(document).ready(function(){
    $(".navbar-brand").hover(function(){
        $(this).toggleClass("pulse");
    });
    $(".intro__contact").hover(function(){
        $("#arrow").toggleClass("slide-right");
    });

    //Project.html
    $(".carousel-control.left").hover(function(){
        $(this).toggleClass("control-hover");
        $(".arrow.left").toggleClass("arrow-hover");
    });

    $(".carousel-control.right").hover(function(){
        $(this).toggleClass("control-hover");
        $(".arrow.right").toggleClass("arrow-hover");
    });
});