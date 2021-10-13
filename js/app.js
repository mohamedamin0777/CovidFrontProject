/* wow anmi */
new WOW().init();
/* owl carousle */
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });
/* smooth scroll */  
var scroll = new SmoothScroll('a[href*="#"]');
/* nice scroll */
$(function() {  
    $("body").niceScroll();
});
/* fit text */
jQuery("#responsive_headline").fitText();

$(document).ready(function(){
  let menu = $(".menue");
  let navUl = $(".navbar-nav");

  menue.click(function(){
      if(menue.textContent == ""){
          navUl.fadeToggle();
          $("body").css("background", "blue");
      } else {
          navUl.fadeToggle();
      }
  });
});


jQuery("#responsive_headline").fitText();
$(document).ready(function(){
$(".l-one").click(function(){
    $(".ull").fadeIn();
    $(".ull2").hide();
    $(".ull3").hide();
    $(".ull4").hide();
    $(".ull5").hide();
    $(".ull6").hide();
}); // l-one
}); // document


// show box select in common section//
$(document).ready(function(){
$(".listing.one").click(function(){
    $(".listing.one p").slideToggle();
}); // listing
$(".listing.two").click(function(){
    $(".listing.two p").slideToggle();
}); // listing
$(".listing.three").click(function(){
    $(".listing.three p").slideToggle();
}); // listing
$(".listing.four").click(function(){
    $(".listing.four p").slideToggle();
}); // listing
}); // document

//========================================================//

// show listing from l-two
$(document).ready(function(){
$(".l-two").click(function(){
    $(".ull").hide();
    $(".ull2").fadeIn();
    $(".ull3").hide();
    $(".ull4").hide();
    $(".ull5").hide();
    $(".ull6").hide();
}); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
$(".listing.five").click(function(){
    $(".listing.five p").slideToggle();
}); // listing
$(".listing.six").click(function(){
    $(".listing.six p").slideToggle();
}); // listing
$(".listing.seven").click(function(){
    $(".listing.seven p").slideToggle();
}); // listing
$(".listing.eight").click(function(){
    $(".listing.eight p").slideToggle();
}); // listing
$(".listing.nine").click(function(){
    $(".listing.nine p").slideToggle();
}); // listing
$(".listing.ten").click(function(){
    $(".listing.ten p").slideToggle();
}); // listing
}); // document

//===================================================//

// show listing from l-three
$(document).ready(function(){
$(".l-three").click(function(){
    $(".ull").hide();
    $(".ull2").hide();
    $(".ull3").fadeIn();
    $(".ull4").hide();
    $(".ull5").hide();
    $(".ull6").hide();
}); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
$(".listing.eleven").click(function(){
    $(".listing.eleven p").slideToggle();
}); // listing
$(".listing.twelve").click(function(){
    $(".listing.twelve p").slideToggle();
}); // listing
$(".listing.thirteen").click(function(){
    $(".listing.thirteen p").slideToggle();
}); // listing
$(".listing.fourteen").click(function(){
    $(".listing.fourteen p").slideToggle();
}); // listing
$(".listing.fifteen").click(function(){
    $(".listing.fifteen p").slideToggle();
}); // listing
}); // document

//===================================================//

// show listing from l-four
$(document).ready(function(){
$(".l-four").click(function(){
    $(".ull").hide();
    $(".ull2").hide();
    $(".ull3").hide();
    $(".ull4").fadeIn();
    $(".ull5").hide();
    $(".ull6").hide();
}); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
$(".listing.sixteen").click(function(){
    $(".listing.sixteen p").slideToggle();
}); // listing
$(".listing.seventeen").click(function(){
    $(".listing.seventeen p").slideToggle();
}); // listing
$(".listing.eighteen").click(function(){
    $(".listing.eighteen p").slideToggle();
}); // listing
$(".listing.nineteen").click(function(){
    $(".listing.nineteen p").slideToggle();
}); // listing
}); // document

//====================================================//

// show listing from l-five
$(document).ready(function(){
$(".l-five").click(function(){
    $(".ull").hide();
    $(".ull2").hide();
    $(".ull3").hide();
    $(".ull4").hide();
    $(".ull5").fadeIn();
    $(".ull6").hide();
}); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
$(".listing.twenty").click(function(){
    $(".listing.twenty p").slideToggle();
}); // listing
$(".listing.twenty-one").click(function(){
    $(".listing.twenty-one p").slideToggle();
}); // listing
$(".listing.twenty-two").click(function(){
    $(".listing.twenty-two p").slideToggle();
}); // listing
$(".listing.twenty-three").click(function(){
    $(".listing.twenty-three p").slideToggle();
}); // listing
$(".listing.twenty-four").click(function(){
    $(".listing.twenty-four p").slideToggle();
}); // listing
$(".listing.twenty-five").click(function(){
    $(".listing.twenty-five p").slideToggle();
}); // listing
}); // document

//====================================================//

// show listing from l-six
$(document).ready(function(){
$(".l-six").click(function(){
    $(".ull").hide();
    $(".ull2").hide();
    $(".ull3").hide();
    $(".ull4").hide();
    $(".ull5").hide();
    $(".ull6").fadeIn();
}); // l-one
}); // document

// show box select in common section//
$(document).ready(function(){
$(".listing.twenty-six").click(function(){
    $(".listing.twenty-six p").slideToggle();
}); // listing
$(".listing.twenty-seven").click(function(){
    $(".listing.twenty-seven p").slideToggle();
}); // listing
$(".listing.twenty-eight").click(function(){
    $(".listing.twenty-eight p").slideToggle();
}); // listing
$(".listing.twenty-nine").click(function(){
    $(".listing.twenty-nine p").slideToggle();
}); // listing
$(".listing.thirty").click(function(){
    $(".listing.thirty p").slideToggle();
}); // listing
$(".listing.thirty-one").click(function(){
    $(".listing.thirty-one p").slideToggle();
}); // listing
}); // document
