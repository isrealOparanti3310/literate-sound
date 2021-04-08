$(document).ready(function(){
  $("h1").fadeOut(1000)
  $('h1').fadeIn(10)


///anchor link animation//////////
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  //*****wp animations on scroll using animate.css****//

  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated', 'fadeInUp');
  }, {
      offset: '50%'
  });

  //***mobile navigation****///
  $('.js--nav-icon2').css('display', 'none')
  $('.js--nav-icon').click(function() {
     $('.js--nav-icon').css('display','none')
     $('.js--nav-icon2').css('display', 'block')
      var nav = $('.js--main-nav')
      nav.slideToggle()
  })


  $('.js--nav-icon2').click(function() {
     $('.js--nav-icon2').css('display','none')
     $('.js--nav-icon').css('display', 'block')
      var nav = $('.js--main-nav')
      nav.slideToggle()
  })
})
