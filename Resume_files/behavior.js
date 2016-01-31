$(document).ready(function(){
  
  /* Jumbo images
   * Make the images break out of the grid and span full width 
   * of the screen. 
   */

  // declare our function 

  function jumboImage() {

      // wrap with an element that will give the height

      $('.jumbo-image').wrapAll('<div class="jumbo-image-spacer"></div>');

      // calculate the height

      var jumboImageHeight = $('.jumbo-image').find('img').height();

      // apply height 

      $('.jumbo-image-spacer').height(jumboImageHeight);

  }

  // execute function on load 

  $(window).load(function() {
    jumboImage();
  });

  // add event listener so height is recalculated on window resize

  $(window).resize(jumboImage);

  /*
   * Hamburger menu
   * Activate the hamburger menu only on viewports narrower than 480px
   */

  function hamburger() {
    
    // store window's width

    var windowWidth = $(window).width();

    // do checks

    if (windowWidth < 478) {

      // if we're under 480px hide the nav
      
      $('.regular-nav').addClass('nav-hide');

      // add hamburger functionality by toggling the class

      $('.hamburger').unbind('click').click(function() {
        $('.regular-nav').toggleClass('nav-hide');
        return false;
      });
    }
    else if (windowWidth > 480) {

      // make sure the nav is visible if the screen is wider than 480px

      $('.regular-nav').show();
    }

  }

  hamburger();

  $(window).resize(hamburger);

});
