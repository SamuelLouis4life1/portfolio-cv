jQuery(document).ready(function ($) {
    "use strict";
    $('#testimonials-list').owlCarousel({
      loop: true,
      center: true,
      items: 4,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 3
        },
        768: {
          items: 4
        },
        1170: {
          items: 4
        }
      }
    });
});