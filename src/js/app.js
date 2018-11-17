$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    items:4,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$(document).ready(function(){
    var $carousel = $(".owl-carousel"),
        $left = $(".carousel__prew"),
        $right = $(".carousel__next")
    
    $carousel.owlCarousel();
    $right.click(function() {
      $carousel.trigger('next.owl.carousel',500);
    });
    $left.click(function() {
      $carousel.trigger('prev.owl.carousel',500);
    }); 
    console.log($carousel)
  });



window.fbAsyncInit = function() {
    FB.init({
      appId            : 'fb-root',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.2'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));  