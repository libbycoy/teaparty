
$( document ).ready( function() {

  $(function() {
      $('.tea-description').hide();
      $('div .description').hide();
      $('div .description-two').hide();
      $('div .findout-more').hide();
      $('.main-nav').hide();
      $('div .description-three').hide();
  });

  $('#particles').particleground({
         dotColor: '#E5C4C9',
         lineColor: '#E5C4C9'
       });

  $("#the-tea").click(function() {
    $('html, body').animate({
        scrollTop: $("#welcome").offset().top
    }, 800);
      $('.tea-description').fadeIn(1000);
      $('.tea-description').addClass('appeared');
    });

  $("#about-title").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutus").offset().top
    }, 800);
    $('.tea-description').fadeIn(1000);
    $('.tea-description').addClass('appeared');
    });

  $("#stockist-title").click(function() {
    $('html, body').animate({
        scrollTop: $("#stockists").offset().top
    }, 800);
    });

    $(".findout-more").click( function() {
      $('.main-nav').slideDown("slow", function() {
      });
    });

    $(window).scroll(function() {

    if ($(this).scrollTop() > 260) {
      $('div .description').fadeIn(1000);
     }
    else {
      $('div .description').fadeOut(1000);
     }

     if ($(this).scrollTop() > 500) {
       $('div .description-two').fadeIn(1000);
      }
     else {
       $('div .description-two').fadeOut(1000);
      }

      if ($(this).scrollTop() > 1000) {
        $('div .description-three').fadeIn(1000);
       }
      else {
        $('div .description-three').fadeOut(1000);
       }


      if ($(this).scrollTop() > 1300) {
        $('div .findout-more').fadeIn(1000);
       }
      else {
        $('div .findout-more').fadeOut(1000);
       }

     if ($('.tea-description').hasClass('appeared') === false) {

       if ($(this).scrollTop() > 1700) {
        $('.tea-description').fadeIn(1000);
       }
      else {
        $('.tea-description').fadeOut(1000);
       }
     } else {
       return;
     }

   });



    //   $(this).scrollTop() > 70 &&  {
    //    $('img').fadeIn(1000);
    //   }
    //  else {
    //    $('img').fadeOut(1000);
    //   }


     // if .dissapear has class appeared, return, else on scroll, execute this function



    //  if ($(this).scrollTop() > 400) {
    //    $('.dissapear').fadeIn(1000);
    //  } else {
    //    $('.dissapear').fadeOut(1000);

    //  else {
    //    $('.dissapear').hide();
    //   }


 // if


});
