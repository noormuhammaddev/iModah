/*
 * Functions
 */

  function navToggle() {
    $('.nav-wrapper').toggle();
    $('body').toggleClass('overflow-hidden');
  }

/* Ready function */
jQuery(document).ready(function($) {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var header = $('#site-header');
    if (scroll >= 50) {
        header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });
  
  $('.toggle-nav').on('click', function(){
    navToggle();
  });
});