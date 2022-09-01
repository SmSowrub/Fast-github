
(function($){
  "use strict"

  $('.meno-bar').on ('click',function(){
    $('.js-meno').animate({'left': 0});
  })


$('.close-icon').on ('click',function(){
  $('.js-meno').animate({'left': -200})
})




$ (window).scroll(function(){

  var destance = $(window).scrollTop();

  if (destance > 200) {
  $ ('.angels').show();
}

else{
  $('.angels').hide();
}
})

$('.angels').on('click',function(){
  $('html').animate({'scrollTop':0})
})


//wow js

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

}) (jQuery);
