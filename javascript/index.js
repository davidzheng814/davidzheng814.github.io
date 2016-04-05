isMobileOrTablet = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

$(document).ready(function() {
    if(isMobileOrTablet()) {
        $('#background-image').css({opacity:1});
        $('section').css({position:'relative'});
        $('#landing-content').css({opacity:1, top:'50%'});
        $('#MIT-0').css({opacity:1, y:'33%'});
        $('#MIT-4').css({opacity:1, y:'44%'});
        $('#MIT-5').css({opacity:1, x:'59%'});
        $('#MIT-6').css({opacity:1, y:'44%'});
        $('#MIT-3').css({opacity:1});
        $('#MIT-1').css({opacity:1, y:'33%'});
        $('#MIT-2').css({opacity:1, y:'33%'});
        $('#work-box-0').css({opacity:1});
        $('#work-box-1').css({opacity:1});
        $('#work-box-2').css({opacity:1});
        $('#projects-box-0').css({opacity:1});
        $('#projects-box-1').css({opacity:1});
        $('#projects-box-2').css({opacity:1});
        $('#projects-box-3').css({opacity:1});
        $('#projects-box-4').css({opacity:1});
        $('#projects-box-5').css({opacity:1});
        $('#skills .cell').css({display:'block','margin-bottom':'10px','font-size':'2.5vw','width':'100%'});
        $('#skills .title').css({'font-size':'3vw'});
        $('#skills .row').css({'display':'block'});
        var typewriter = require('typewriter');
        var tw = typewriter(document.querySelector('#landing-text')).withAccuracy(100).withMinimumSpeed(18).withMaximumSpeed(21).build();
        tw.wait(800).type(' David Zheng.').wait(200).type(' Thinker and Creator.').wait(200).type(' Lifelong Student.').put('',function(){
            $('#resources').animate({opacity:1},500);
        });
        return;
    }
    $('#MIT-0').css({y:'0%'});
    $('#MIT-4').css({y:'67%'});
    $('#MIT-5').css({x:'77%'});
    $('#MIT-6').css({y:'67%'});
    $('#MIT-1').css({y:'66%'});
    $('#MIT-2').css({y:'0%'});
    sections = $(document.body).children('section');
    curr_section = 0;

    // $('#background-image').delay(0).animate({
    //     opacity: [1, 'linear'],
    // }, {
    //     duration: 1000,
    //     done: function(){
    //         $('#landing-content').animate({
    //             opacity: [1, 'linear'],
    //             top: '50%'
    //         }, {
    //             duration: 300,
    //             done: function() {
    //                 is_scrolling = false;
    //             }
    //         })
    //     }
    // });
    var typewriter = require('typewriter');
    var tw = typewriter(document.querySelector('#landing-text')).withAccuracy(100).withMinimumSpeed(18).withMaximumSpeed(21).build();
    tw.wait(800).type(' David Zheng.').wait(200).type(' Thinker and Creator.').wait(200).type(' Lifelong Student.').put('', function(){
        $('#resources').animate({opacity:1}, 500);
        $('#arrow').animate({opacity:1},500);
        $('#arrow').click(function(){
            is_scrolling = true;
            scrollPage(true);
        });
        is_scrolling = false;
    });
    $('#landing-content').css({opacity:1});

});

var page = $("body");

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
        
        setTimeout(function() {
        },300);

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
        setTimeout(function() {
        },300);
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
        setTimeout(function() {
        },300);
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
        setTimeout(function() {
        },300);
        return;
    } else if (section == 5) {

    } else if (section == 6) {

    }
    is_scrolling = false;
}

function scrollPage(scrollDown) {
    if(isMobileOrTablet()) return; 
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
    if(isMobileOrTablet()) return;
    e.preventDefault();
    if (is_scrolling || Math.abs(e.originalEvent.wheelDelta) < 10)
        return;

    is_scrolling = true;

    var scrollDown = true;
    if (e.originalEvent.wheelDelta > 0)
        scrollDown = false;

    scrollPage(scrollDown);
});

$(document).keydown(function(e) {
    if(isMobileOrTablet()) return;
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