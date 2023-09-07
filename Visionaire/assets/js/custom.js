$(document).ready(function(){


// ----sticky-header--
$(window).scroll(function() {
    if ($(this).scrollTop() > 120){  
      $('.inner-header-wrapper').addClass("sticky-header");
      }
      else{
      $('.inner-header-wrapper').removeClass("sticky-header");
      }
    });
// sticky header end
// scroll on top button

$(window).scroll(function() {
  var btn = $('#button'); 
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
  
});
var btn = $('#button'); 
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
// ----------------------------------
$("#formButton").click(function(){
        $(".search-form").fadeToggle(300);

    });

// -----------------------------

// ------------slicknav------------------------

$('.menubar').slicknav({
  prependTo:'.inner-header-wrapper'
});
// $('.menubar').slicknav('toggle');
$('.menubar').slicknav('open'); 
$('.menubar').slicknav('close'); 

// -------------------------

var windowSize = window.outerWidth;
 if (windowSize <=1199) {
  $('.slicknav_menu').show();
 } 
 else {
  $('.slicknav_menu').hide();
}


// ---------------product-slider---------------------
var minnnextSlide,maxnextSlide,widthnextSlide,nextslidewidth;
function windowWidthnext(){
     if(($(window).width()<=1199) && ($(window).width()>=980)){
          minnnextSlide=3;
          maxnextSlide=3;
          widthnextSlide= 350;
     }
     else if(($(window).width()<=979) && ($(window).width()>=568)){
          minnnextSlide=2;
          maxnextSlide=2;
          widthnextSlide= 450;     
    }
    else if(($(window).width()<=567) && ($(window).width()>=320)){
        minnnextSlide=1;
          maxnextSlide=1;
          widthnextSlide= 1200;
                    
     }
     else{
          minnnextSlide=4;
          maxnextSlide=5;
          widthnextSlide= 400;
          slideMargin=10;
                    
     }
}
windowWidthnext();
$('.product-slider').bxSlider({
      captions: true,
      slideWidth: widthnextSlide,
       minSlides: minnnextSlide,
       maxSlides:maxnextSlide,
       auto: true,
   touchEnabled:false,
   slideMargin:10,
    pager: false,
    controls:false,
    autoControls: false,
    stopAutoOnClick: true,
    prevText:'',
    nextText:'',
    speed:6000,
    infiniteLoop:true,
    pause: 100

    });
$(window).on('resize',function(){
     windowWidthnext();
});
// ----------------------product-slider-end----------------------

// inspiring-lighting-box-wrapper-slidet---------------------
 var minnSlide,maxSlide,widthSlide,slidewidth;
function windowWidth(){
     if(($(window).width()<=1199) && ($(window).width()>=980)){
          minSlide=3;
          maxSlide=3;
          widthSlide= 400;
     }
     else if(($(window).width()<=979) && ($(window).width()>=568)){
          minSlide=2;
          maxSlide=2;
          widthSlide= 400;     
     }
     else if(($(window).width()<=767) && ($(window).width()>=568)){
          minSlide=2;
          maxSlide=2;
          widthSlide= 200;     
     }
     else if(($(window).width()<=649) && ($(window).width()>=567)){
          minSlide=2;
          maxSlide=2;
          widthSlide= 200;          
     }
     else if(($(window).width()<=567) && ($(window).width()>=320)){
        minSlide=1;
          maxSlide=1;
          widthSlide= 1200;
                    
     }
     else{
          minSlide=3;
          maxSlide=4;
       widthSlide= 1200;
          slideMargin=10;
                    
     }
}
windowWidth();
$('.inspiring-lighting-box-wrapper').bxSlider({
      captions: true,
      slideWidth: widthSlide,
       minSlides: minSlide,
       maxSlides:maxSlide,
       auto: true,
    autoControls: false,
   touchEnabled:false,
   slideMargin:30,
    pager: false,
    controls:false
    });
$(window).on('resize',function(){
     windowWidth();
});

// inspiring-lighting-box-wrapper-slidet---------------------
 var minnupnextSlide,maxupnextSlide,widthupnextSlide,slidewidth;
function windowupnextWidth(){
     if(($(window).width()<=1199) && ($(window).width()>=980)){
          minupnextSlide=4;
          maxupnextSlide=5;
          widthupnextSlide= 400;
     }
     else if(($(window).width()<=979) && ($(window).width()>=568)){
          minupnextSlide=4;
          maxupnextSlide=4;
          widthupnextSlide= 300;     
    }
    else if(($(window).width()<=567) && ($(window).width()>=320)){
        minupnextSlide=1;
          maxupnextSlide=1;
          widthupnextSlide= 450;
                    
     }
     else{
          minupnextSlide=8;
          maxupnextSlide=9;
       widthupnextSlide= 300;
          slideMargin=10;
                    
     }
}
windowupnextWidth();
$('.our-clint-img-box-slider').bxSlider({
      captions: true,
      slideWidth: widthupnextSlide,
       minSlides: minupnextSlide,
       maxSlides:maxupnextSlide,
      autoControls: false,
    pager: false,
    controls:false,
     touchEnabled:false,
    slideMargin:10,
     auto: true,
     autoStart:true,
    stopAutoOnClick: true,
    prevText:'',
       nextText:'',
    speed:10000,
    infiniteLoop:true,
  pause: 10
    });
$(window).on('resize',function(){
     windowupnextWidth();
});


});