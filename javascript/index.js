$(window).load(function() {
    $(this).scrollTop(0);
    // progress bar animation
        fallback = document.getElementById('download-progress'),
        loaded = 0;
    var load = function() {
        loaded += Math.floor((Math.random() * 2) + 3);
        $(fallback).empty().append("HTML5 progress tag not supported: ");
        if (loaded == 100) {
            clearInterval(beginLoad);
            console.log('Load was performed.');
        }
    };

    var beginLoad = setInterval(function() {
        load();
    }, 10);
    // Set extra timeout for loading page
    $(this).scrollTop(0);
    window.setTimeout(hideLanding,1750);
  });
function hideLanding(){
    $(this).scrollTop(0);
    $('#loading').fadeOut(500);
}


// Parallax Scrolling
$(document).ready(function(){
	$window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '50% ' + yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });

        }); 
    });
    $(window).scroll( function(){
        $('.parallax').each( function(i){
            var adjust = 0;
            if(i == 0)
                adjust = 1000;
            else if(i ==1)
                adjust = 3100;
            var yPos =  -(($window.scrollTop() - adjust)/ 3); 
            // Put together our final background position
            var coords = '0% '+yPos+'px';
            // Move the background
            $(this).css({ backgroundPosition: coords });
        });
    });
    // Fading of logo
    var fadeStart=000 // 100px scroll or less will equiv to 1 opacity
        ,fadeUntil=300 // 200px scroll or more will equiv to 0 opacity
        ,fading = $('#article-name')
        ,fading2 = $('#article-triangles')
    ;

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        fading.css('opacity',opacity);
        fading2.css('opacity',opacity);
    });

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.row').each( function(i){
            var adjust = 0;
            if(i == 1 || i == 5){
                adjust = 700;
            }else if(i > 1)
                adjust = 200;
            var bottom_of_object = $(this).position().top + $(this).height() + $(this).height() + adjust;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},1700);
            }
        }); 

    });
});


// Create HTML5 elements for IE
  
document.createElement("article");
document.createElement("section");