$(document).ready(function() {
    sections = $(document.body).children('section');
    curr_section = 0;
    is_scrolling = false;

});

var page = $("body");

function removeContent(section) {
    if (section == 1) {
        $('#MIT-0').css({
            opacity: 0,
            y: 0
        });
        $('#MIT-1').css({
            opacity: 0,
            y: 330
        });
        $('#MIT-2').css({
            opacity: 0,
            y: 0
        });
        $('#MIT-3').css({
            opacity: 0
        });
        $('#MIT-4').css({
            opacity: 0,
            y: 332
        });
        $('#MIT-5').css({
            opacity: 0,
            x: 300
        });
        $('#MIT-6').css({
            opacity: 0,
            y: 332
        });
    }
}

function fadeInContent(section) {
    if (section == 1) {
        $('#MIT-0').animate({
            opacity: [1, 'linear'],
            y: 166,
        }, {
            queue: false,
            duration: 400,
            done: function(){
                $('#MIT-4').animate({
                    opacity: [1, 'linear'],
                    y: 220,
                }, {
                    duration: 400,
                    done: function() {
                        $('#MIT-5').animate({
                            opacity: [1, 'linear'],
                            x: 229
                        }, {
                            duration: 400,
                            queue: false
                        });

                        $('#MIT-6').animate({
                            opacity: [1, 'linear'],
                            y: 220
                        }, {
                            duration: 400,
                            queue: false,
                            done: function(){
                                $('#MIT-3').animate({
                                    opacity: 1,
                                }, {
                                    duration: 600, 
                                    done: function(){
                                        is_scrolling = false;
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        $('#MIT-1, #MIT-2').animate({
            opacity: [1, 'linear'],
            y: 166,
        }, {
            queue: false,
            duration: 400
        });

        return;

    } else if(section == 2) {

    } else if (section == 3) {

    } else if (section == 4) {

    } else if (section == 5) {

    } else if (section == 6) {

    }
    is_scrolling = false;
}

function scrollPage(scrollDown) {
    if (curr_section > sections.length - 2 && scrollDown) {
        is_scrolling = false;
        return;
    } else if (curr_section <= 0 && !scrollDown){
        is_scrolling = false;
        return;
    }

    if (scrollDown)
        sections.eq(curr_section).animate({
            top: "-100%"
        }, 600, "easeInCubic", function(){
            removeContent(curr_section);

            curr_section += 1;

            fadeInContent(curr_section);
        });
    else
        sections.eq(curr_section - 1).animate({
            top: "0%"
        }, 600, "easeInCubic", function(){
            removeContent(curr_section);

            curr_section -= 1;

            fadeInContent(curr_section);
        });
}

page.on('DOMMouseScroll mousewheel', function(e) {
    e.preventDefault()
    if (is_scrolling)
        return;

    is_scrolling = true;

    var scrollDown = true;
    if (e.originalEvent.wheelDelta > 0)
        scrollDown = false;

    scrollPage(scrollDown);
});

$(document).keydown(function(e) {
    if (is_scrolling)
        return;

    is_scrolling = true;

    var scrollDown = true;
    switch(e.which) {
        case 38: // up
        scrollDown = false;
        break;

        case 40: // down
        break;

        default: 
        is_scrolling = false;
        return; 
    }

    scrollPage(scrollDown);

    e.preventDefault(); 
});