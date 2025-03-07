(function ($) {
  "use strict";

  // mobail menu ///
  $(".mobail-menu-active").meanmenu();

  /* ----------------------------
	   wow js active
	  ------------------------------ */
  new WOW().init();

  // click //
  $(".maincart-wrap a").on("click", function () {
    $(".cart").toggle();
  });

  /* ----------------------------
	   owl active
	  ------------------------------ */
  // nivo slider ////
  $("#slider-active").nivoSlider({
    directionNav: true,
    animSpeed: 1000,
    slices: 18,
    pauseTime: 5000,
    pauseOnHover: false,
    manualAdvance: false,
    controlNav: false,
    prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
    nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>',
  });
  // nivo slider ////

  /* ---------------------
	  countdown
	  --------------------- */
  $("[data-countdown]").each(function () {
    var $this = $(this);

    var finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'
        )
      );
    });
  });

  // product slider ////
  $(".product-active").owlCarousel({
    smartSpeed: 1000,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // tab slider ////
  $(".tab-active").owlCarousel({
    smartSpeed: 1000,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // test slider ////
  $(".test-active").owlCarousel({
    smartSpeed: 1000,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // blog slider ////
  $(".blog-active").owlCarousel({
    smartSpeed: 1000,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // brand-active///
  $(".brand-active").owlCarousel({
    smartSpeed: 1000,
    loop: false,
    rewind: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      768: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  /* --------------------------------
	  home two js here
	  --------------------------------------- */
  // featureproduct-slider-active///
  $(".featureproduct-slider-active").owlCarousel({
    smartSpeed: 1000,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  /* --------------------------------
	  home two js here
	  --------------------------------------- */
  // featureproduct-slider-active///
  $(".featureproduct-slider-active2").owlCarousel({
    smartSpeed: 1000,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1100: {
        items: 5,
      },
    },
  });

  // new-product-slider-active///
  $(".new-product-slider-active").owlCarousel({
    smartSpeed: 1000,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 1,
      },
    },
  });

  /* --------------------------------
	  home three js here
	  --------------------------------------- */
  // home3-blog-active///
  $(".home3-blog-active").owlCarousel({
    smartSpeed: 1000,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  /* --------------------------------
	  home three js here
	  --------------------------------------- */
  // Drinks-active///
  $(".drinks-active").owlCarousel({
    smartSpeed: 1000,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  /* --------------------------------
	  shop js here
	  --------------------------------------- */
  // Drinks-active///
  $(".mostviewed-slider-active").owlCarousel({
    smartSpeed: 1000,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 1,
      },
    },
  });
  /* --------------------------------
	  blog js here
	  --------------------------------------- */
  // Drinks-active///
  $(".single-blog-active").owlCarousel({
    smartSpeed: 1000,
    margin: 0,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // single-protfolio-active///
  $(".single-product-active").owlCarousel({
    smartSpeed: 1000,
    margin: 0,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      450: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  /*--------------------------
    tab active
    ---------------------------- */
  var ProductDetailsSmall = $(".single-product-active .single-img a");

  ProductDetailsSmall.on("click", function (e) {
    e.preventDefault();

    var $href = $(this).attr("href");

    ProductDetailsSmall.removeClass("active");
    $(this).addClass("active");

    $(".single-product-tab .tab-content .tab-pane").removeClass("active");
    $(".single-product-tab .tab-content " + $href).addClass("active");
  });

  // cart-active///
  $(".cart-active").owlCarousel({
    smartSpeed: 1000,
    margin: 15,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  // click function//////////
  $(".opener-1").on("click", function () {
    $(".toggle-1").slideToggle(500);
  });
  $(".opener-2").on("click", function () {
    $(".toggle-2").slideToggle(500);
  });

  /* login form click */
  $(".login-form-click").on("click", function () {
    $(".login-form").slideToggle(500);
  });

  // /// show-code///
  $(".code").on("click", function () {
    $(".code-form").slideToggle(500);
  });

  // /// Account password///
  $(".show-password").on("click", function () {
    $(".account-password").slideToggle(500);
  });

  /* ----------------------------
	   price-slider active
	  ------------------------------ */
  $("#slider-range").slider({
    range: true,
    min: 40,
    max: 600,
    values: [0, 600],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });

  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );

  /* --------------------------
	   scrollUp
	  ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-chevron-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  /* --
	  Magnific Popup
	  ------------------------ */
  $(".popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
})(jQuery);
