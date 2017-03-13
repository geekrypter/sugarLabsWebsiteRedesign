;(function () {
  
  'use strict';

  // iPad and iPod detection  
  var isiPad = function(){
    return (navigator.platform.indexOf("iPad") != -1);
  };

  var isiPhone = function(){
      return (
      (navigator.platform.indexOf("iPhone") != -1) || 
      (navigator.platform.indexOf("iPod") != -1)
      );
  };

  // Parallax
  var parallax = function() {
    $(window).stellar();
  };



  // Burger Menu
  var burgerMenu = function() {

    $('body').on('click', '.js-fh5co-nav-toggle', function(event){

      event.preventDefault();

      if ( $('#navbar').is(':visible') ) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active'); 
      }

      
      
    });

  };


  var testimonialCarousel = function(){
    var owl = $('.owl-carousel-fullwidth');
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
      animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
  };

  // Page Nav
  var clickMenu = function() {

    $('#navbar a:not([class="external"])').click(function(event){
      var section = $(this).data('nav-section'),
        navbar = $('#navbar');

        if ( $('[data-section="' + section + '"]').length ) {
            $('html, body').animate({
                scrollTop: $('[data-section="' + section + '"]').offset().top - 55
            }, 500);
         }

        if ( navbar.is(':visible')) {
          navbar.removeClass('in');
          navbar.attr('aria-expanded', 'false');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }

        event.preventDefault();
        return false;
    });


  };

  // Reflect scrolling in navigation
  var navActive = function(section) {

    var $el = $('#navbar > ul');
    $el.find('li').removeClass('active');
    $el.each(function(){
      $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
    });

  };

  var navigationSection = function() {

    var $section = $('section[data-section]');
    
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

  // Window Scroll
  var windowScroll = function() {
    var lastScrollTop = 0;

    $(window).scroll(function(event){

        var header = $('#fh5co-header'),
        scrlTop = $(this).scrollTop();

      if ( scrlTop > 500 && scrlTop <= 2000 ) {
        header.addClass('navbar-fixed-top fh5co-animated slideInDown');
      } else if ( scrlTop <= 500) {
        if ( header.hasClass('navbar-fixed-top') ) {
          header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
          setTimeout(function(){
            header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
          }, 100 );
        }
      } 
      
    });
  };


  // Animations
  // Home
  var homeAnimate = function() {
    if ( $('#fh5co-home').length > 0 ) {  

      $('#fh5co-home').waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {


          setTimeout(function() {
            $('#fh5co-home .to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  var exploreAnimate = function() {

    var explore = $('#fh5co-explore');
    if ( explore.length > 0 ) { 

      explore.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {


          setTimeout(function() {
            explore.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          setTimeout(function() {
            explore.find('.to-animate-2').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('bounceIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 700);

          setTimeout(function() {
            explore.find('.to-animate-3').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInRight animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 1000);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  var testimonyAnimate = function() {
    var testimony = $('#fh5co-testimony');
    if ( testimony.length > 0 ) { 

      testimony.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {


          setTimeout(function() {
            testimony.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  var gettingStartedAnimate = function() {
    var started = $('.getting-started-1');
    if ( started.length > 0 ) { 

      started.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {


          setTimeout(function() {
            started.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          setTimeout(function() {
            started.find('.to-animate-2').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInRight animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  var gettingStarted2Animate = function() {
    var started = $('.getting-started-2');
    if ( started.length > 0 ) { 

      started.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {


          setTimeout(function() {
            started.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          setTimeout(function() {
            started.find('.to-animate-2').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInRight animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  var pricingAnimate = function() {
    var pricing = $('#fh5co-pricing');
    if ( pricing.length > 0 ) { 

      pricing.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {


          setTimeout(function() {
            pricing.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          setTimeout(function() {
            pricing.find('.to-animate-2').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };


  var servicesAnimate = function() {
    var services = $('#fh5co-services');
    if ( services.length > 0 ) {  

      services.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {


          var sec = services.find('.to-animate').length,
            sec = parseInt((sec * 200) + 400);

          setTimeout(function() {
            services.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          setTimeout(function() {
            services.find('.to-animate-2').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('bounceIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, sec);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };


  var teamAnimate = function() {
    var team = $('#fh5co-team');
    if ( team.length > 0 ) {  

      team.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {

          var sec = team.find('.to-animate').length,
            sec = parseInt((sec * 200) + 400);

          setTimeout(function() {
            team.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          setTimeout(function() {
            team.find('.to-animate-2').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, sec);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  
  var faqAnimate = function() {
    var faq = $('#fh5co-faq');
    if ( faq.length > 0 ) { 

      faq.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {

          var sec = faq.find('.to-animate').length,
            sec = parseInt((sec * 200) + 400);
            
          setTimeout(function() {
            faq.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          setTimeout(function() {
            faq.find('.to-animate-2').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeInUp animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, sec);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  var trustedAnimate = function() {
    var trusted = $('#fh5co-trusted');
    if ( trusted.length > 0 ) { 

      trusted.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {

          var sec = trusted.find('.to-animate').length,
            sec = parseInt((sec * 200) + 400);
            
          setTimeout(function() {
            trusted.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          setTimeout(function() {
            trusted.find('.to-animate-2').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('bounceIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, sec);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };


  var footerAnimate = function() {
    var footer = $('#fh5co-footer');
    if ( footer.length > 0 ) {  

      footer.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {

          setTimeout(function() {
            footer.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  var blogAnimate = function() {
    var footer = $('#fh5co-blog');
    if ( footer.length > 0 ) {  

      footer.waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {

          setTimeout(function() {
            footer.find('.to-animate').each(function( k ) {
              var el = $(this);
              
              setTimeout ( function () {
                el.addClass('fadeIn animated');
              },  k * 200, 'easeInOutExpo' );
              
            });
          }, 200);

          
          $(this.element).addClass('animated');
            
        }
      } , { offset: '80%' } );

    }
  };

  var counter = function() {
    $('.js-counter').countTo({
       formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };
var sliderMain = function() {
    
      $('#fh5co-hero .flexslider').flexslider({
      animation: "fade",
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

      $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());  
      $(window).resize(function(){
        $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());  
      });

  };
  var counterWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('animated') ) {
        
        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .animate-box.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              el.addClass('fadeInUp animated');
              el.removeClass('item-animate');
            },  k * 200, 'easeInOutExpo' );
          });
          
        }, 100);
        
      }

    } , { offset: '95%' } );
    if ($('#fh5co-counter-section').length > 0 ) {
      $('#fh5co-counter-section').waypoint( function( direction ) {
                    
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {
          setTimeout( counter , 400);         
          $(this.element).addClass('animated');
            
        }
      } , { offset: '90%' } );
    }
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
  var fullHeight = function() {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  // Document on load.
  $(function(){

    parallax();
    burgerMenu();
    clickMenu();
    windowScroll();
    navigationSection();
    testimonialCarousel();
    goToTop();
    sliderMain();
    fullHeight();
    // Animations
    homeAnimate();
    exploreAnimate();
    testimonyAnimate();
    gettingStartedAnimate();
    gettingStarted2Animate();
    pricingAnimate();
    servicesAnimate();
    teamAnimate();
    faqAnimate();
    trustedAnimate();
    footerAnimate();
    blogAnimate();
    counter();
    counterWayPoint();

  });


}());
// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3-or-later

var COLORS = [['006E00', '78E600'], ['68008C', '78E600'],
              ['006E00', '00BEFF'], ['033CD2', '00BEFF'],
              ['6E008C', '00BEFF'], ['A00000', 'FF7800'],
              ['033CD2', 'FF64D2'], ['6E008C', 'FF64D2'],
              ['6E008C', 'FF7800'], ['033CD2', 'FF7800'],
              ['006E00', 'FFD732'], ['6E008C', 'FFD732']];

var color = Math.floor((Math.random() * 12));
var logoID = color + 1;
if (color < 10) {
    logoID = "0" + logoID;
}

document.querySelector('#defaultIcon').href = 
    'assets/favicon_' + logoID + '.png';

var h = document.querySelector('.logo').innerHTML;
h = h.replace(/033cd2/g, COLORS[color][0]);
h = h.replace(/78e600/g, COLORS[color][1]);
document.querySelector('.logo').innerHTML = h;


function hide(e) {
    e.style.display = 'none';
}

var ua = navigator.userAgent.toLowerCase();
var get = {
    soas: document.querySelector('#get-soas'),
    desktop: document.querySelector('#get-desktop'),
    linux: document.querySelector('#get-sugar-linux'),
    sugarizer: document.querySelector('#get-sugarizer')
};
var l = document.querySelector('.creator-link');

if (ua.indexOf('mobile') !== -1 || ua.indexOf('tablet') !== -1) {
    hide(get.soas);  hide(get.linux);
} else if (ua.indexOf('linux') !== -1) {
    hide(get.desktop);  hide(get.sugarizer);
    //l.href = '/creator/linux';
} else if (ua.indexOf('windows') !== -1) {
    hide(get.desktop);  hide(get.linux);  hide(get.sugarizer);
    //l.href = '/creator/windows';
} else {}

// @license-end
