$(document).ready(function(){
	   

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

document.querySelector('#defaultIcon1').href = 'https://www.sugarlabs.org/assets/favicon_' + logoID + '.png';
var h = document.querySelector('.logo1').innerHTML;
h = h.replace(/033cd2/g, COLORS[color][0]);
h = h.replace(/78e600/g, COLORS[color][1]);
document.querySelector('.logo1').innerHTML = h;

var h = document.querySelector('.logo2').innerHTML;
h = h.replace(/033cd2/g, COLORS[color][0]);
h = h.replace(/78e600/g, COLORS[color][1]);
document.querySelector('.logo2').innerHTML = h;
var h = document.querySelector('.logo3').innerHTML;
h = h.replace(/033cd2/g, COLORS[color][0]);
h = h.replace(/78e600/g, COLORS[color][1]);
document.querySelector('.logo3').innerHTML = h;
$( ".widget h4" ).click(
    function() {
      $(this).parent().toggleClass('active');
    }); 

$('[data-toggle="tooltip"]').tooltip(); 
$('[data-toggle="popover"]').popover();
$('.popover-dismiss').popover({
  trigger: 'focus'
}) 

 
var _originalSize = $(window).width() + $(window).height()
$(window).resize(function(){
	if($(window).width() + $(window).height() != _originalSize){
	  $(".ifr").css("height","50%");  
	}
	else{
	  $(".ifr").css("height","100%");  
	}
});

// var $this = $(".panel-heading span.icon_minim");

// $this.addClass('panel-collapsed');

// $this.removeClass('ion-minus-round').addClass('ion-plus-round');
// 


$("#portfolio-contant-active").mixItUp();

$("#testimonial-slider1").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
});

$("#testimonial-slider2").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
});
        
$("#testimonial-slider3").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
});
$('#oc1').on('click',function(){
$('#testimonial-slider3').trigger('owl.next');
})
$('#oc2').on('click',function(){
$('#testimonial-slider3').trigger('owl.next');
})
$('#oc3').on('click',function(){
$('#testimonial-slider3').trigger('owl.next');
})
$('#oc1').on('tap',function(){
$('#testimonial-slider3').trigger('owl.next');
})
$('#oc2').on('tap',function(){
$('#testimonial-slider3').trigger('owl.next');
})
$('#oc3').on('tap',function(){
$('#testimonial-slider3').trigger('owl.next');
})
$('#oc1').on('taphold',function(){
$('#testimonial-slider3').trigger('owl.next');
})
$('#oc2').on('taphold',function(){
$('#testimonial-slider3').trigger('owl.next');
})
$('#oc3').on('taphold',function(){
$('#testimonial-slider3').trigger('owl.next');
})


$("#testimonial-slider4").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
});
$("#testimonial-slider5").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
});
$("#testimonial-slider6").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
});

$("#testimonial-slider7").owlCarousel({
    paginationSpeed : 500,      
    singleItem:true,
    autoPlay: 3000,
});

$("#clients-logo").owlCarousel({
	autoPlay: 3000,
	items : 5,
	itemsDesktop : [1199,5],
	itemsDesktopSmall : [979,5],
});

$("#works-logo").owlCarousel({
	autoPlay: 3000,
	items : 5,
	itemsDesktop : [1199,5],
	itemsDesktopSmall : [979,5],
});

// google map
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 8
	  });
	}

		
var fullHeight = function() {
	$('.js-fullheight').css('height', $(window).height());
	$(window).resize(function(){
		$('.js-fullheight').css('height', $(window).height());
	});
};

});



