$(document).ready(function(){
    $(".navbar-brand").hover(function(){
        $(this).toggleClass("pulse");
    });
    $(".intro__contact").hover(function(){
        $("#arrow").toggleClass("slide-right")
    })
});

