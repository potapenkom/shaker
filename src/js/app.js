$('#carousel__icon').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:["<i class='fas fa-angle-double-left'></i>","<i class='fas fa-angle-double-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})