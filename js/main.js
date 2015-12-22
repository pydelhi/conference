//Use Strict Mode
(function($) {
  "use strict";

//Remove loading-wrapper class before window load
setTimeout(function(){
  $('.loading-wrapper').removeClass('loading-wrapper-hide');
  return false;
}, 10);


//======= Run on Window Load ============
$(window).load(function(){

  //Viewport
  var windowHeight = $(window).height();

  function adjustViewport() {
    $('.viewport').css('min-height', windowHeight);
    return false;
  }
  adjustViewport();

  $('#loader-name').addClass('loader-left');
  $('#loader-job').addClass('loader-right');
  $('#loader-animation').addClass('loader-hide');
  $('#page-loader').delay(400).fadeOut(400);


  //Owl Carousel
  $("#about-team").owlCarousel({
    navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    items : 4,
    itemsMobile : [479,1],
    //autoPlay: 6000,
    stopOnHover: true,
    pagination: true,
    //singleItem: true,
    navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"]
  });

 $("#testimonial-carousel").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: true,
    navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
  });

  $("#blog-itens-container").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: false,
    navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
    items : 3,
  });

  $("#sponsors-carousel").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 4,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,1],
      pagination: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,
        navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
          // "singleItem:true" is a shortcut for:
          // items : 1,
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
    });

  $("#main-carousel").owlCarousel({
    navigation : false, // Show next and prev buttons
    pagination: true,
    singleItem: true,
    autoPlay : false,
    stopOnHover : false,
    //navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
  });


  //Schedule Item Progress Bar
  var barjH = '200px';
  var pScheduleItem = $( ".schedule-item");

  function adjustProgressBar() {

    pScheduleItem.each(function() {
      var barjH = $(this).find('.schedule-item-content-wrapper').height();
      //alert(barjH);
      $(this).find('.schedule-item-block').css('min-height', barjH);
      $(this).find('.schedule-item-bar').css('min-height', barjH);
    });
  }
  adjustProgressBar();

  //Tabs
  $('.tabs .tab-links a').on('click', function(e)  {
      var currentAttrValue = $(this).attr('href');

      // Show/Hide Tabs
      $('.tabs ' + currentAttrValue).fadeIn(600).siblings().hide();

      // Change/remove current tab to active
      $(this).parent('li').addClass('active').siblings().removeClass('active');

      adjustProgressBar();

      e.preventDefault();
      return false;
  });

  $('.tabs2 .tab-links2 a').on('click', function(e)  {
      var currentAttrValue = $(this).attr('href');

      // Show/Hide Tabs
      $('.tabs2 ' + currentAttrValue).fadeIn(400).siblings().hide();

      // Change/remove current tab to active
      $(this).parent('li').addClass('active').siblings().removeClass('active');

      e.preventDefault();
      return false;
  });

  $('a[href*="#faq-tab1"]').parents('li').addClass('active');
  $('.tab').hide();
  $('#faq-tab1').show();
  $('#schedule-tab1').show();


  //WAYPOINTS
  $('#main-carousel').waypoint(function(direction) {
      if (direction === 'down') {
        $('#header').addClass( 'header-stick');
      }
      else {
        $('#header').removeClass( 'header-stick');
      }
    },
    {
     offset: '-20px'
  });

  //Runs on window Resize
  $(window).resize(function() {
    windowHeight = $(window).height();
    adjustViewport();
    adjustProgressBar();
  });

});

//======= Run on Document Ready ============
$(document).ready(function(){

  //Submenus
  $('.hd-list-menu li ul').hide();
  $('.hd-list-menu li').on('mouseenter', function(e){
    $(this).find('> ul').fadeIn(200);
    return false;
  });
  $('.hd-list-menu li').on('mouseleave', function(e){
    $(this).find('> ul').fadeOut(200);
    return false;
  });

  //Anchor Smooth Scroll
   $('a[href*=#]:not([href=#])').on('click', function () {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

  //=====>  Countdown (Edit this with your own date)  <====
  $("#countdown").countdown("2016/2/28", function(event) {
    var $this = $(this).html(event.strftime(''
       + '<div class="countdown-col-wrapper col-xs-6 col-sm-3"><div class="countdown-col"><span class="countdown-time"> %-D </span> <span class="countdown-type"> Days </span></div></div> '
       + '<div class="countdown-col-wrapper col-xs-6 col-sm-3"><div class="countdown-col"><span class="countdown-time"> %H </span> <span class="countdown-type">Hours </span></div></div>'
       + '<div class="countdown-col-wrapper col-xs-6 col-sm-3"><div class="countdown-col"><span class="countdown-time"> %M </span> <span class="countdown-type">Minutes </span></div></div>'
       + '<div class="countdown-col-wrapper col-xs-6 col-sm-3"><div class="countdown-col"><span class="countdown-time"> %S </span> <span class="countdown-type">Seconds </span></div></div>'));
  });


  //FANCYBOX
  $(".fancybox").fancybox({
    type: 'iframe',
    fitToView: true
  });

  //FANCYBOX - BLOG
  $(".blog-item a", "#section-blog").fancybox({
    type: 'ajax',
    fitToView: true
  });


  //Maps iframe Overlay
  var map = $('#map');
  map.on('click', function () {
      $('#map iframe').css("pointer-events", "auto");
      return false;
  });

  map.on('mouseleave', function () {
      $('#map iframe').css("pointer-events", "none");
      return false;
  });

  //Register Form Validator and Ajax Sender
  var pContactError = $("#contactError");
  var pContactSuccess = $("#contactSuccess");

  $("#register-form").validate({
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/contact-form.php",
        data: {
          "name": $("#register-form #name").val(),
          "email": $("#register-form #email").val(),
          "subject": $("#register-form #subject").val(),
          "phone": $("#register-form #telephone").val()
        },
        dataType: "json",
        success: function (data) {
          if (data.response == "success") {
            pContactSuccess.fadeIn(300);
            pContactError.addClass("hidden");

            $("#register-form #name, #register-form #email, #register-form #subject, #register-form #message")
              .val("")
              .blur()
              .closest(".control-group")
              .removeClass("success")
              .removeClass("error");

          } else {
            pContactError.fadeIn(300);
            pContactSuccess.addClass("hidden");
          }
        }

      });
    }
  });


  //Intro - Register Form Validator and Ajax Sender
  $("#intro-register-form").validate({
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/contact-form.php",
        data: {
          "name": $("#intro-register-form #if-name").val(),
          "email": $("#intro-register-form #if-email").val(),
          "subject": $("#intro-register-form #if-subject").val(),
          "phone": $("#intro-register-form #if-phone").val()
        },
        dataType: "json",
        success: function (data) {
          if (data.response == "success") {
            pContactSuccess.fadeIn(300);
            pContactError.addClass("hidden");

            $("#register-form #name, #register-form #email, #register-form #subject, #register-form #message")
              .val("")
              .blur()
              .closest(".control-group")
              .removeClass("success")
              .removeClass("error");

          } else {
            pContactError.fadeIn(300);
            pContactSuccess.addClass("hidden");
          }
        }

      });
    }
  });

  //Modal for Forms
  function hideModal() {
    $('.modal-wrap').fadeOut(300);
    return false;
  }

  $('.modal-wrap').on('click', function () {
    hideModal();
  });

  $('.modal-bg').on('click', function () {
    hideModal();
  });

});

//End - Use Strict mode
})(jQuery);
