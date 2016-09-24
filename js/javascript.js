
$( document ).ready( function() {

  $(function() {
      $('.dissapear').hide();
      $('div .description').hide();
  });

  $('#particles').particleground({
         dotColor: '#E5C4C9',
         lineColor: '#E5C4C9'
       });

  $("#the-tea").click(function() {
    $('html, body').animate({
        scrollTop: $("#welcome").offset().top
    }, 800);
      $('.dissapear').fadeIn(1000);
      $('.dissapear').addClass('appeared');
    });

  $("#about-title").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutus").offset().top
    }, 800);
    });

  $("#stockist-title").click(function() {
    $('html, body').animate({
        scrollTop: $("#stockists").offset().top
    }, 800);
    });

    $(window).scroll(function() {

    if ($(this).scrollTop() > 70) {
      $('div .description').fadeIn(1000);
     }
    else {
      $('div .description').fadeOut(1000);
     }

     if ($('.dissapear').hasClass('appeared') === false) {

       if ($(this).scrollTop() > 70) {
        $('.dissapear').fadeIn(1000);
       }
      else {
        $('.dissapear').fadeOut(1000);
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
