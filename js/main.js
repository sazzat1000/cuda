$(document).ready(function() {

  $(".menu").slicknav({
    brand:
      '<a href="#"><img src="img/logo/logo.png" alt="Logo" title="Logo" /></a>',
  });

  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("nav").removeClass("sticky-bar");
    } else {
      $("nav").addClass("sticky-bar");
    }
  });

  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".slicknav_menu").removeClass("sticky-bar");
    } else {
      $(".slicknav_menu").addClass("sticky-bar");
    }
  });

  // Mixitup
  var mixer = mixitup(".portfolio");
  // Up
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".up").fadeIn();
    } else {
      $(".up").fadeOut();
    }
  });

  $(".up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  new WOW().init();


});
