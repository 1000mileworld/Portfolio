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

    $(".project__img").hover(function(){
        $(this).toggleClass("project__img--hover");
    })

    //smooth scrolling to anchor links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});