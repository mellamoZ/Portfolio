/*global $ ,jQuery ,alert, console */

$(document).ready(function () {
  "use strict";

  var sections = $("section"),
    documentEl = $(document),
    nav = $(".nav-item"),
    nav_height = nav.outerHeight(),
    smoothScroll = $("nav ul li"),
    progressBar = $(".progress-bar"),
    // Typed Plugin
    typed = new Typed(".type", {
      strings: [
        "Digital Marketer",
        "Polygot",
        "Data scientist",
        "App Developer",
        "Motion Graphics",
      ] /* Here Type Your Title */,
      typeSpeed: 100,
      loop: true,
      backDelay: 1200,
      backSpeed: 20,
    });

  // Active Class

  $(".nav-item").on("click", function () {
    $(this).addClass("active-nav").siblings().removeClass("active-nav");
  });

  $(".navbar-toggler").on("click", function () {
    $(".navbar-toggler .menu").toggleClass("toggle");
    $(".navbar").toggleClass("open");
  });

  $(".navbar-nav .nav-item").on("click", function () {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-toggler .menu").toggleClass("toggle");
  });

  $(".navbar .btn-nav").on("click", function () {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-toggler .menu").toggleClass("toggle");
  });

  // Smooth Scroll Down

  smoothScroll.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });

  // Progress Bar

  $(window).on("scroll", function () {
    var sc = $(this).scrollTop();

    if (sc > 900) {
      progressBar.each(function () {
        var progressBarWidth = $(this).data("present");
        /*-- Skill Animation --*/
        $(this).css({
          opacity: "1",
          width: progressBarWidth,
        });
      });
    } else {
      progressBar.each(function () {
        var progressBarWidth = $(this).data("present");
        /*-- Skill Animation --*/
        $(this).css({
          opacity: "0",
          width: "0",
        });
      });
    }
  });

  // Active Shuffle

  $(".portfolio .shuffle ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".gallery .col-lg-4").css(
        {
          opacity: 1,
          "pointer-events": "auto",
        },
        200
      );
    } else {
      $(".gallery .col-lg-4").css(
        {
          opacity: 0.2,
          "pointer-events": "none",
        },
        200
      );
      $($(this).data("class")).parent().css(
        {
          opacity: 1,
          "pointer-events": "auto",
        },
        200
      );
    }
  });

  // Show More / Show Less Button

  $(".show-more, .show-less").on("click", function () {
    $(".portfolio .gallery .less").fadeIn(1000, function () {
      $(".show-more").hide();
      $(".show-less").css("display", "inline-block");
      $(".show-less").on("click", function () {
        $(".portfolio .gallery .less").fadeOut(500);
        $(".show-less").hide();
        $(".show-more").css("display", "inline-block");
      });
    });
  });

  // Testim Slider
  $(".testim-slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    draggable: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
