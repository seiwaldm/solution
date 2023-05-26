
// google map
var map = '';
var center;

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(40.7679619, -73.9800172),
    scrollwheel: false
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  google.maps.event.addDomListener(map, 'idle', function () {
    calculateCenter();
  });

  google.maps.event.addDomListener(window, 'resize', function () {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}



// Flexslider
$(function () {
  /* FlexSlider */
  $('.flexslider').flexslider({
    animation: "fade",
    directionNav: false
  });

  new WOW().init();


});

// isotope
jQuery(document).ready(function ($) {

  if ($('.iso-box-wrapper').length > 0) {

    var $container = $('.iso-box-wrapper'),
      $imgs = $('.iso-box img');

    $container.imagesLoaded(function () {

      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function () {
        $container.isotope('reLayout');
      })

    });

    //filter items on button click
    $('.filter-wrapper li a').click(function () {

      var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      // don't proceed if already selected 
      if ($this.hasClass('selected')) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });

  }

});

// Hide mobile menu after clicking on a link
$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});

document.cookie = "question=What are your favorite cookies?"
document.cookie = "answer=Those with chocolate chips!"