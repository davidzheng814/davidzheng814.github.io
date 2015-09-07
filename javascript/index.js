$(document).ready(function() {
    sections = $(document.body).children('section');
    curr_section = 0;
    is_scrolling = true;

    $('#background-image').delay(500).animate({
        opacity: [1, 'linear'],
    }, {
        duration: 1000,
        done: function(){
            $('#landing-content').animate({
                opacity: [1, 'linear'],
                top: '50%'
            }, {
                duration: 300,
                done: function() {
                    is_scrolling = false;
                }
            })
        }
    });
});

var page = $("body");

$(function() {
  $.fn.swipe = function( callback ) {
    var touchDown = false,
      originalPosition = null,
      $el = $( this );

    function swipeInfo( event ) {
      var x = event.originalEvent.pageX,
        y = event.originalEvent.pageY,
        dx, dy;

      dx = ( x > originalPosition.x ) ? "right" : "left";
      dy = ( y > originalPosition.y ) ? "down" : "up";

      return {
        direction: {
          x: dx,
          y: dy
        },
        offset: {
          x: x - originalPosition.x,
          y: originalPosition.y - y
        }
      };
    }

    $el.on( "touchstart mousedown", function ( event ) {
        event.preventDefault();
      touchDown = true;
      originalPosition = {
        x: event.originalEvent.pageX,
        y: event.originalEvent.pageY
      };
    } );

    $el.on( "touchend mouseup", function () {
        touchDown = false;
        originalPosition = null;
    } );

    $el.on( "touchmove mousemove", function ( event ) {
        event.preventDefault();
      if ( !touchDown ) { return;}
      var info = swipeInfo( event );
      callback( info.direction, info.offset );
    } );

    return true;
  };
});

function removeContent(section) {
    if (section == 1) {
        $('#MIT-0').css({
            opacity: 0,
            y: '0%'
        });
        $('#MIT-1').css({
            opacity: 0,
            y: '66%'
        });
        $('#MIT-2').css({
            opacity: 0,
            y: '0%'
        });
        $('#MIT-3').css({
            opacity: 0
        });
        $('#MIT-4').css({
            opacity: 0,
            y: '67%'
        });
        $('#MIT-5').css({
            opacity: 0,
            x: '77%'
        });
        $('#MIT-6').css({
            opacity: 0,
            y: '67%'
        });
    } else if (section == 2) {
        $('.work-box').css({
            opacity: 0
        });
    } else if (section == 3 || section == 4) {
        $('.projects-box').css({
            opacity: 0
        });
    }
}

function fadeInContent(section) {
    if (section == 1) {
        $('#MIT-0').animate({
            opacity: [1, 'linear'],
            y: '33%',
        }, {
            queue: false,
            duration: 400,
            done: function(){
                $('#MIT-4').animate({
                    opacity: [1, 'linear'],
                    y: '44%',
                }, {
                    duration: 400,
                    done: function() {
                        $('#MIT-5').animate({
                            opacity: [1, 'linear'],
                            x: '59%'
                        }, {
                            duration: 400,
                            queue: false
                        });

                        $('#MIT-6').animate({
                            opacity: [1, 'linear'],
                            y: '44%'
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
            y: '33%',
        }, {
            queue: false,
            duration: 400
        });

        return;

    } else if(section == 2) {
        $('#work-box-0').animate({
            opacity: [1, 'linear']
        }, {
            duration: 400,
            done: function() {
                $('#work-box-1').animate({
                    opacity: [1, 'linear']
                }, {
                    duration: 400,
                    done: function() {
                        $('#work-box-2').animate({
                            opacity: [1, 'linear']
                        }, {
                            duration: 400,
                            done: function() {
                                is_scrolling = false;
                            }
                        })
                    }
                })
            }
        });
        return;
    } else if (section == 3) {
        $('#projects-box-2').animate({
            opacity: [1, 'linear']
        }, {
            duration: 400,
            done: function() {
                $('#projects-box-1').animate({
                    opacity: [1, 'linear']
                }, {
                    duration: 400,
                    done: function() {
                        $('#projects-box-0').animate({
                            opacity: [1, 'linear']
                        }, {
                            duration: 400,
                            done: function() {
                                is_scrolling = false;
                            }
                        })
                    }
                })
            }
        });
        return;
    } else if (section == 4) {
        $('#projects-box-3').animate({
            opacity: [1, 'linear']
        }, {
            duration: 400,
            done: function() {
                $('#projects-box-4').animate({
                    opacity: [1, 'linear']
                }, {
                    duration: 400,
                    done: function() {
                        $('#projects-box-5').animate({
                            opacity: [1, 'linear']
                        }, {
                            duration: 400,
                            done: function() {
                                is_scrolling = false;
                            }
                        })
                    }
                })
            }
        });
        return;
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
            top: "-100%",

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
    e.preventDefault();
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