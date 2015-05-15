/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {

/*====================================
SCROLLING SCRIPTS
======================================*/

$('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1200, 'easeInOutExpo');
event.preventDefault();
});


/*====================================
SLIDER SCRIPTS
======================================*/


$('#carousel-slider').carousel({
interval: 4000 //TIME IN MILLI SECONDS
});


/*====================================
VEGAS SLIDESHOW SCRIPTS
======================================*/
/* $.vegas('slideshow', {
backgrounds: [
{ src: 'assets/img/dark_exa.png', fade: 1000, delay: 9000 , cover: 'false'},
{ src: 'assets/img/dark_embroidery.png', fade: 1000, delay: 9000, cover: false },
]
})('overlay', {
/** SLIDESHOW OVERLAY IMAGE **/
/* src: 'assets/js/vegas/overlays/06.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
}); */


/*====================================
POPUP IMAGE SCRIPTS
======================================*/
$('.fancybox-media').fancybox({
openEffect: 'elastic',
closeEffect: 'elastic',
helpers: {
title: {
type: 'inside'
}
}
});


/*====================================
FILTER FUNCTIONALITY SCRIPTS
======================================*/
$(window).load(function () {
var $container = $('#work-div');
$container.isotope({
filter: '*',
animationOptions: {
duration: 750,
easing: 'linear',
queue: false
}
});
$('.caegories a').click(function () {
$('.caegories .active').removeClass('active');
$(this).addClass('active');
var selector = $(this).attr('data-filter');
$container.isotope({
filter: selector,
animationOptions: {
duration: 750,
easing: 'linear',
queue: false
}
});
return false;
});

});



/*====================================
WRITE YOUR CUSTOM SCRIPTS BELOW
======================================*/


$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


function carouselNormalization() {
var items = $('#carousel-example-generic .item'), //grab all slides
    heights = [], //create empty array to store height values
    tallest; //create variable to make note of the tallest slide

if (items.length) {
    function normalizeHeights() {
        items.each(function() { //add heights to array
            heights.push($(this).height()); 
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    };
    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        tallest = 0, heights.length = 0; //reset vars
        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        }); 
        normalizeHeights(); //run it again 
    });
}
}

});
