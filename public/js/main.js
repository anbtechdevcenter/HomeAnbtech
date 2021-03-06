;(function () {
 
 'use strict';

 var isMobile = {
  Android: function() {
   return navigator.userAgent.match(/Android/i);
  },
   BlackBerry: function() {
   return navigator.userAgent.match(/BlackBerry/i);
  },
   iOS: function() {
   return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
   Opera: function() {
   return navigator.userAgent.match(/Opera Mini/i);
  },
   Windows: function() {
   return navigator.userAgent.match(/IEMobile/i);
  },
   any: function() {
   return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
 };

 var mobileMenuOutsideClick = function() {

  $(document).click(function (e) {
     var container = $("#anb-offcanvas, .js-anb-nav-toggle");
     if (!container.is(e.target) && container.has(e.target).length === 0) {

      if ( $('body').hasClass('offcanvas') ) {

       $('body').removeClass('offcanvas');
       $('.js-anb-nav-toggle').removeClass('active');
    
      }
     
      
     }
  });

 };


 var offcanvasMenu = function() {

  $('#page').prepend('<div id="anb-offcanvas" />');
  $('#page').prepend('<a href="#" class="js-anb-nav-toggle anb-nav-toggle anb-nav-white"><i></i></a>');
  var clone1 = $('.menu-1 > ul').clone();
  $('#anb-offcanvas').append(clone1);
  var clone2 = $('.menu-2 > ul').clone();
  $('#anb-offcanvas').append(clone2);

  $('#anb-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
  $('#anb-offcanvas')
   .find('li')
   .removeClass('has-dropdown');

  // Hover dropdown menu on mobile
  $('.offcanvas-has-dropdown').mouseenter(function(){
   var $this = $(this);

   $this
    .addClass('active')
    .find('ul')
    .slideDown(500, 'easeOutExpo');    
  }).mouseleave(function(){

   var $this = $(this);
   $this
    .removeClass('active')
    .find('ul')
    .slideUp(500, 'easeOutExpo');    
  });


  $(window).resize(function(){

   if ( $('body').hasClass('offcanvas') ) {

       $('body').removeClass('offcanvas');
       $('.js-anb-nav-toggle').removeClass('active');
    
      }
  });
 };

 // Reflect scrolling in navigation
 var navActive = function(section) {

  var $el = $('.main-nav > ul');
  $el.find('li').removeClass('active');
  $el.each(function(){
   $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
  });

 };

 var navigationSection = function() {

  var $section = $('div[data-section]');
  
  $section.waypoint(function(direction) {
     
     if (direction === 'down') {
       navActive($(this.element).data('section'));
     }
  }, {
     offset: '150px'
  });

  $section.waypoint(function(direction) {
     if (direction === 'up') {
       navActive($(this.element).data('section'));
     }
  }, {
     offset: function() { return -$(this.element).height() + 155; }
  });

 };
 
 var burgerMenu = function() {

  $('body').on('click', '.js-anb-nav-toggle', function(event){
   var $this = $(this);


   if ( $('body').hasClass('overflow offcanvas') ) {
    $('body').removeClass('overflow offcanvas');
   } else {
    $('body').addClass('overflow offcanvas');
   }
   $this.toggleClass('active');
   event.preventDefault();

  });
 };

/*  var fullHeight = function() {

  if ( !isMobile.any() ) {
   $('.js-fullheight').css('height', $(window).height());
   $(window).resize(function(){
    $('.js-fullheight').css('height', $(window).height());
   });
  }

 }; */




 var contentWayPoint = function() {
  var i = 0;
  $('.animate-box').waypoint( function( direction ) {

   if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
    
    i++;

    $(this.element).addClass('item-animate');
    setTimeout(function(){

     $('body .animate-box.item-animate').each(function(k){
      var el = $(this);
      setTimeout( function () {
       var effect = el.data('animate-effect');
       if ( effect === 'fadeIn') {
        el.addClass('fadeIn animated-fast');
       } else if ( effect === 'fadeInLeft') {
        el.addClass('fadeInLeft animated-fast');
       } else if ( effect === 'fadeInRight') {
        el.addClass('fadeInRight animated-fast');
       } else {
        el.addClass('fadeInUp animated-fast');
       }

       el.removeClass('item-animate');
      },  k * 200, 'easeInOutExpo' );
     });
     
    }, 100);
    
   }

  } , { offset: '85%' } );
 };


 var dropdown = function() {

  $('.has-dropdown').mouseenter(function(){

   var $this = $(this);
   $this
    .find('.dropdown')
    .css('display', 'block')
    .addClass('animated-fast fadeInUpMenu');

  }).mouseleave(function(){
   var $this = $(this);

   $this
    .find('.dropdown')
    .css('display', 'none')
    .removeClass('animated-fast fadeInUpMenu');
  });

 };


 var goToTop = function() {

  $('.js-gotop').on('click', function(event){
   
   event.preventDefault();

   $('html, body').animate({
    scrollTop: $('html').offset().top
   }, 500, 'easeInOutExpo');
   
   return false;
  });

  $(window).scroll(function(){

   var $win = $(window);
   if ($win.scrollTop() > 200) {
    $('.js-top').addClass('active');
   } else {
    $('.js-top').removeClass('active');
   }

  });
 
 };


 // Loading page
 var loaderPage = function() {
  $(".anb-loader").fadeOut("slow");
 };

 var counter = function() {
  $('.js-counter').countTo({
    formatter: function (value, options) {
       return value.toFixed(options.decimals);
     },
  });
 };

 var counterWayPoint = function() {
  if ($('#anb-counter').length > 0 ) {
   $('#anb-counter').waypoint( function( direction ) {
          
    if( direction === 'down' && !$(this.element).hasClass('animated') ) {
     setTimeout( counter , 400);     
     $(this.element).addClass('animated');
    }
   } , { offset: '90%' } );
  }
 };

 var parallax = function() {

  if ( !isMobile.any() ) {
   $(window).stellar({
    horizontalScrolling: false,
    hideDistantElements: false, 
    responsive: true

   });
  }
 };

 var testimonialCarousel = function(){
  
  var owl = $('.owl-carousel-fullwidth');
  owl.owlCarousel({
   items: 1,
   loop: true,
   margin: 0,
   nav: false,
   dots: true,
   smartSpeed: 800,
   autoHeight: true
  });
 };

 var sliderMain = function() {
  
    $('#main-slide .flexslider').flexslider({
   animation: "slide",
   slideshowSpeed: 5000,
   directionNav: true,
   start: function(){
    setTimeout(function(){
     $('.slider-text').removeClass('animated fadeInUp');
     $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
    }, 500);
   },
   before: function(){
    setTimeout(function(){
     $('.slider-text').removeClass('animated fadeInUp');
     $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
    }, 500);
   }

    });

/*     $('#main-slide .flexslider .slides > li').css('height', $(window).height()); 
    $(window).resize(function(){
     $('#main-slide .flexslider .slides > li').css('height', $(window).height()); 
    }); */

 };

 
 $(function(){
  mobileMenuOutsideClick();
  offcanvasMenu();
  burgerMenu();
  contentWayPoint();
  sliderMain();
  dropdown();
  goToTop();
  loaderPage();
  counterWayPoint();
  counter();
  parallax();
  testimonialCarousel();
/*   fullHeight(); */
 });


}());
