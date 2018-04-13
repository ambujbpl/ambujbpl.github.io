jQuery(document).ready(function($) {
  /*======= Skillset *=======*/
  $('.level-bar-inner').css('width', '0');

  $(window).on('load', function() {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut("slow"); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
      'overflow': 'visible'
    });

    $('.level-bar-inner').each(function() {

      var itemWidth = $(this).data('level');

      $(this).animate({
        width: itemWidth
      }, 800);

    });

  });
  // Back to Top
  backToTop();
});
