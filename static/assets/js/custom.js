// ==================================================
// * Project Name   :  Organic Food E-commerce Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  01 Jan 2022
// * Author         :  JThemes (https://themeforest.net/user/jthemes)
// * Developer      :  Imran Hosain
// ==================================================
(function($) {
  "use strict";
  
  // sticky header-1 - start ===============
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 122) {
      $('.header_bottom_main').addClass("sticky")
    } else {
      $('.header_bottom_main').removeClass("sticky")
    }
  });
  // sticky header-1 - end ==================
  
  // sticky header-4 - start ===============
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.top_inner_main').addClass("sticky")
    } else {
      $('.top_inner_main').removeClass("sticky")
    }
  });
  // sticky header-4 - end ==================
  
  // sticky header-4 - start ===============
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.top_inner_main').addClass("sticky")
    } else {
      $('.top_inner_main').removeClass("sticky")
    }
  });
  // sticky header-4 - end ==================
  
  // =============== back-to-top start ===============
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // back to top - end
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  
  // =============== hero nice select start ===============
  $('select').niceSelect();
  // =============== hero nice select end ===============
  // =============== aos js start ===============
  AOS.init();
  // =============== aos js end ===============
  
  // multiple countdown-1 - start ===============
  $('.countdown_timer[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      var $this = $(this).html(event.strftime(''
      + '<li class="days_count"><strong>%D</strong><span>Days</span></li>'
      + '<li class="hours_count"><strong>%H</strong><span>Hours</span></li>'
      + '<li class="minutes_count"><strong>%M</strong><span>Mins</span></li>'
      + '<li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'));
    });
  });
  // multiple countdown-1 - end =================
  
  // multiple countdown-2 - start ===============
  $('.countdown_timer3[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      var $this = $(this).html(event.strftime(''
      + '<li>: <strong>Expires in</strong></li>'
      + '<li>: <strong>%H</strong></li>'
      + '<li>: <strong>%M</strong></li>'
      + '<li>: <strong>%S</strong></li>'));
    });
  });
  // multiple countdown-2 - end =================
  
  // multiple countdown-3 - start
  $('.countdown_timer2').each(function(){
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime(''
        + '<li class="days_count"><strong>%D</strong><span>days</span></li>'
        + '<li class="hours_count"><strong>%H</strong><span>hours</span></li>'
        + '<li class="minutes_count"><strong>%M</strong><span>mins</span></li>'
        + '<li class="seconds_count"><strong>%S</strong><span>secs</span></li>'));
      });
    });
  });
  // multiple countdown-3 - end
  
  
  // quantity - start ================
  
  function neoncart_quantity(){
    $(document).on('click', '.quantity_input .input_number_decrement, .quantity_input .input_number_increment', function (e) {
      var target = $(e.target),
      qty = target.closest('.quantity_input').find('input.input_number'),
      min, max, step, value;
      
      if (qty.length) {
        min = qty.attr('min') || 0;
        max = qty.attr('max') || 0;
        step = qty.attr('step') || 1;
        min = parseInt(min);
        max = parseInt(max);
        step = parseInt(step);
        value = parseInt(qty.val());
        
        if (target.is('.input_number_increment')) {
          value += step;
        } else {
          value -= step;
        }
        
        value = Math.max(min, value);
        if (max) {
          value = Math.min(max, value);
        }
        
        qty.val(value).change();
      }
    });
  }
  neoncart_quantity();
  // quantity - end ================
  
  // google map - start
  if ( $('#mapBox').length ){
    var $lat = $('#mapBox').data('lat');
    var $lon = $('#mapBox').data('lon');
    var $zoom = $('#mapBox').data('zoom');
    var $marker = $('#mapBox').data('marker');
    var $info = $('#mapBox').data('info');
    var $markerLat = $('#mapBox').data('mlat');
    var $markerLon = $('#mapBox').data('mlon');
    var map = new GMaps({
      el: '#mapBox',
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
    });
    map.addMarker({
      lat: $markerLat,
      lng: $markerLon,
      icon: $marker,    
      infoWindow: {
        content: $info
      }
    })
  }
  // google map - end
  
  // price range - start
  // --------------------------------------------------
  if($("#slider-range").length){
    $( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 10000,
      values: [ 10, 3409 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }
  
  $('.ar_top').on('click', function () {
    var getID = $(this).next().attr('id');
    var result = document.getElementById(getID);
    var qty = result.value;
    $('.proceed_to_checkout .update-cart').removeAttr('disabled');
    if( !isNaN( qty ) ) {
      result.value++;
    }else{
      return false;
    }
  });
  // price range - end
  // --------------------------------------------------
  
  // main slider - start ===================
  $('.main_slider').slick({
    dots: true,
    fade: true,
    arrows: true,
    // speed: 1000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    // pauseOnHover: true,
    autoplaySpeed: 6000,
    prevArrow: ".main_left_arrow",
    nextArrow: ".main_right_arrow",
    customPaging: function (slider, i) {
      console.log(slider);
      var slideNumber   = (i + 1),
      totalSlides = slider.slideCount;
      return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '</span></a>';
    }
  });
  
  $('.main_slider').on('init', function (e, slick) {
    var $firstAnimatingElements = $('div.item:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });
  $('.main_slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });
  var slideCount = null;
  
  $('.main_slider').on('init', function (event, slick) {
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });
  $('.main_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setCurrentSlideNumber(nextSlide);
  });
  
  function setSlideCount() {
    var $el = $('.slide_count_wrap').find('.total');
    if (slideCount < 10) {
      $el.text('0' + slideCount);
    } else {
      $el.text(slideCount);
    }
  }
  
  function setCurrentSlideNumber(currentSlide) {
    var $el = $('.slide_count_wrap').find('.current');
    $el.text(currentSlide + 1);
  }
  
  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  var $timer = 6000;
  function progressBar() {
    $(".slick-progress").find("span").removeAttr("style");
    $(".slick-progress").find("span").removeClass("active");
    setTimeout(function () {
      $(".slick-progress").find("span").css("transition-duration", $timer / 1000 + "s").addClass("active");
    }, 100);
  }
  
  progressBar();
  $('.main_slider').on("beforeChange", function (e, slick) {
    progressBar();
  });
  // main slider - end
  // --------------------------------------------------
  
  
  // slick slider-1 start
  $('.slideshow1_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    margin: 20,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".ss1_left_arrow",
    nextArrow: ".ss1_right_arrow",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });
  
  // slick slider-2 start
  $('.slideshow2_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".ss2_left_arrow",
    nextArrow: ".ss2_right_arrow",
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 1
    //         }
    //     },
    //     {
    //         breakpoint: 1025,
    //         settings: {
    //             slidesToShow: 2
    //         }
    //     },
    //     {
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 4
    //         }
    //     }
    // ]
    
  });
  
  // slick slider-3 start
  $('.slideshow3_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".ss3_left_arrow",
    nextArrow: ".ss3_right_arrow",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  // slick slider-4 start
  $('.slideshow4_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".ss3_left_arrow",
    nextArrow: ".ss3_right_arrow",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      }
    ]
  });
  
  // slick slider-5 start
  $('.slideshow5_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".ss5_left_arrow",
    nextArrow: ".ss5_right_arrow",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  
  
  // slick slider-6 start
  $('.slideshow6_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".ss6_left_arrow",
    nextArrow: ".ss6_right_arrow",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  // slick slider-7 start
  $('.slideshow7_slider').slick({
    dots: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  // slick slider-8 start
  $('.slideshow8_slider').slick({
    dots: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  // slick slider-9 start
  $('.slideshow9_slider').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".ss9_left_arrow",
    nextArrow: ".ss9_right_arrow",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      }
    ]
  });
  
  
  // center slider start
  
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  
  // vertical slider start ================
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
      {
        breakpoint: 992,
      },
      {
        breakpoint: 768,
        settings: {
          vertical: true,
        }
      },
      {
        breakpoint: 580,
        settings: {
          vertical: true,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 380,
        settings: {
          vertical: true,
          slidesToShow: 2,
        }
      }
    ]
  });
  
  // vertical slider end ================
  
  // vertical slider start ================
  $('.product7_slide_items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: '.product7_slide_thumb'
  });
  $('.product7_slide_thumb').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.product7_slide_items',
    dots: false,
    arrows: true,
    autoplay: true,
    vertical:true,
    infinite: true,
    focusOnSelect: true,
    verticalSwiping:true,
    prevArrow: ".ss9_up_arrow",
    nextArrow: ".ss9_down_arrow",
    responsive: [
      {
        breakpoint: 992,
      },
      {
        breakpoint: 768,
      },
      {
        breakpoint: 580,
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  // vertical slider start ================
  $('.testimonial3_slider_items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: '.testimonial3_slider_thmb'
  });
  $('.testimonial3_slider_thmb').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.testimonial3_slider_items',
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
      {
        breakpoint: 992,
      },
      {
        breakpoint: 768,
      },
      {
        breakpoint: 580,
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  // vertical slider start ================
  $('.product11_slide_item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: '.product11_slide_thumb'
  });
  $('.product11_slide_thumb').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.product11_slide_item',
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
      {
        breakpoint: 992,
      },
      {
        breakpoint: 768,
      },
      {
        breakpoint: 580,
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  // main search btn - start // --------------------------------------------------
  $('.main_search_btn').on('click', function() {
    $(this).toggleClass('active');
  });
  // main search btn - end // --------------------------------------------------
  
  // main search btn - start // --------------------------------------------------
  $('.main_search_btn2').on('click', function() {
    $(this).toggleClass('active');
  });
  // main search btn - end // --------------------------------------------------
  
  // main search btn - start // --------------------------------------------------
  $('.main_search_btn3').on('click', function() {
    $(this).toggleClass('active');
  });
  // main search btn - end // --------------------------------------------------
  
  
  // popup images & videos - start ===============
  $('.popup_video').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });
  
  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
  // popup images & videos - end =================
  
  
  // chart bar - start
  // --------------------------------------------------
  var revenue_chart = $("#revenue_chart");

  if(revenue_chart.length > 0) {
    var ctx = document.getElementById("revenue_chart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["JAN", "FEB", "MAC", "APR", "MEY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
          label: 'Invest',
          data: [80, 30, 100, 60, 70, 90, 85, 95, 20, 75, 99, 110],
          backgroundColor: "#3385da"
        }, {
          label: 'Revenue',
          data: [100, 60, 130, 90, 50, 120, 70, 110, 40, 80, 125, 135],
          backgroundColor: "#07c8fa"
        }]
      }
    });
  }
  // chart bar - end
  // --------------------------------------------------
  
  // chart pie - start
  // --------------------------------------------------
  var BAChartDataValue = [5, 20, 25, 50];
  var BAChartDataLabel = [
    "Recent Order",
    "Recived Payment",
    "Mexican Wave",
    "Pending Payment"
  ];
  var BAChartJobErrColors = [
    "#ff9801",
    "#7cb31a",
    "#fec107",
    "#01a1ff"
  ];
  
  var BAChartCountTotal = 0;
  if (BAChartDataValue.length > 0) {
    BAChartCountTotal = BAChartDataValue.reduce(function (
      acc,
      currentVal,
      currentIdx,
      arr
      ) {
        return acc + currentVal;
      },
      0);
    }
    
    window.addEventListener("load", function () {
      var BAChartCtx = document
      .getElementById("overall_sale_chart")
      .getContext("2d");
      var BAChartJobErr = new Chart(BAChartCtx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: BAChartDataValue,
              backgroundColor: BAChartJobErrColors,
              borderColor: "#fff",
              borderWidth: 1
            }
          ],
          labels: BAChartDataLabel
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          title: {
            display: true,
            position: "top",
            fontSize: 12,
            fontColor: "#000",
            fontStyle: "bold",
            padding: 24,
            text: "Title"
          },
          plugins: {
            labels: [
              {
                render: "label",
                fontColor: "#000",
                position: "outside"
              },
              {
                render: "percentage",
                fontColor: "#fff"
              }
            ],
            doughnutlabel: {
              labels: [
                {
                  text: "Total: " + BAChartCountTotal
                }
              ]
            }
          },
          legend: {
            display: false
          }
        }
      });
    });
    // chart pie - end
    // --------------------------------------------------
    
    
  })(jQuery);
  
  