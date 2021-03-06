
jQuery(document).ready(function($) {


    /* --------------------------------------------------------------------------- */
    /*  0.  Clear Form Inputs
    /* --------------------------------------------------------------------------- */

    $('input, textarea').bind('focusin', function() { if($(this).val() == $(this).attr('default-value')) { $(this).val(''); } });
    $('input, textarea').bind('focusout', function() { if($(this).val() == '') { $(this).val( $(this).attr('default-value') ); } });
    
    /* --------------------------------------------------------------------------- */
    /*  1.  Main Nav
    /* --------------------------------------------------------------------------- */   
    $('.sf-menu').superfish({  
            delay:       200,                            // one second delay on mouseout  
            animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation  
            speed:       'fast',                          // faster animation speed  
            autoArrows:  false,                           // disable generation of arrow mark-up  
            dropShadows: false                            // disable drop shadows  
    });  
    /* --------------------------------------------------------------------------- */
    /*  2.  Main Slider
    /* --------------------------------------------------------------------------- */

    $('#main-slider').flexslider({
        namespace           : "flex-",           //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector            : ".slides > li",    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation           : "fade",            //String: Select your animation type, "fade" or "slide"
        easing              : "swing",           //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction           : "horizontal",      //String: Select the sliding direction, "horizontal" or "vertical"
        reverse             : false,             //{NEW} Boolean: Reverse the animation direction
        animationLoop       : true,              //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight        : false,             //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt             : 0,                 //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow           : true,              //Boolean: Animate slider automatically
        slideshowSpeed      : 7000,              //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed      : 600,               //Integer: Set the speed of animations, in milliseconds
        initDelay           : 0,                 //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize           : false,             //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction       : true,              //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover        : false,             //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS              : true,              //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch               : true,              //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video               : false,             //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav          : true,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
        nextText            : "Next",            //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : ""              //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });





    /* --------------------------------------------------------------------------- */
    /*  3.  Image Slider
    /* --------------------------------------------------------------------------- */

    $('#image-slider').flexslider({
        namespace           : "flex-",           //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector            : ".slides > li",    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation           : "slide",            //String: Select your animation type, "fade" or "slide"
        easing              : "swing",           //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction           : "horizontal",      //String: Select the sliding direction, "horizontal" or "vertical"
        reverse             : false,             //{NEW} Boolean: Reverse the animation direction
        animationLoop       : true,              //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight        : false,             //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt             : 0,                 //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow           : false,              //Boolean: Animate slider automatically
        slideshowSpeed      : 7000,              //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed      : 600,               //Integer: Set the speed of animations, in milliseconds
        initDelay           : 0,                 //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize           : false,             //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction       : true,              //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover        : false,             //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS              : true,              //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch               : true,              //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video               : false,             //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav          : false,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
        nextText            : "Next",            //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : ""               //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });





    /* --------------------------------------------------------------------------- */
    /*  4.  Project Carousel & Blog Carousel
    /* --------------------------------------------------------------------------- */

    var $carousel = $('#project-wrapper, #blog-wrapper');


    // Project Carousel external controls
    function projectCarousel_initCallback( carousel ) {
        $('.jcarousel-control a').bind('click', function() { carousel.scroll(jcarousel.intval((this).text())); return false; });
        $('#project-next').bind('click', function() { carousel.next(); return false; });
        $('#project-prev').bind('click', function() { carousel.prev(); return false; });
    };
    $("#project-wrapper").jcarousel( {
        initCallback   : projectCarousel_initCallback,
        buttonNextHTML : null,
        buttonPrevHTML : null
    });


    // Blog Carousel external controls
    function blogCarousel_initCallback( carousel ) {
        $('.jcarousel-control a').bind('click', function() { carousel.scroll(jcarousel.intval((this).text())); return false; });
        $('#blog-next').bind('click', function() { carousel.next(); return false; });
        $('#blog-prev').bind('click', function() { carousel.prev(); return false; });
    };
    $("#blog-wrapper").jcarousel( {
        initCallback   : blogCarousel_initCallback,
        buttonNextHTML : null,
        buttonPrevHTML : null
    });


    if( $carousel.length ) {
        var scrollCount;

        function getWindowWidth() {
            if( $(window).width() < 480 ) {
                scrollCount = 1;
            } else if( $(window).width() < 768 ) {
                scrollCount = 1;
            } else if( $(window).width() < 960 ) {
                scrollCount = 2;
            } else {
                scrollCount = 3;
            }
        }

        function initCarousel( carousels ) {
            carousels.each(function() {
                var $this  = $(this);
                $this.jcarousel({
                    animation     : 600,
                    easing        : 'easeOutCubic',
                    scroll        : scrollCount
                });

            });
        }

        function adjustCarousel() {
            $carousel.each(function() {
                var $this    = $(this),
                    $lis     = $this.children('li')
                    newWidth = $lis.length * $lis.first().outerWidth( true ) + 100;
                getWindowWidth();

                if( $this.width() !== newWidth ) {
                    $this.css('width', newWidth )
                         .data('resize','true');
                    initCarousel( $this );
                    $this.jcarousel('scroll', 1);
                    var timer = window.setTimeout( function() {
                        window.clearTimeout( timer );
                        $this.data('resize', null);
                    }, 600 );
                }
            });
        }

        getWindowWidth();
        initCarousel( $carousel );

        // Window resize
        $(window).on('resize', function() {
            var timer = window.setTimeout( function() {
                window.clearTimeout( timer );
                adjustCarousel();
            }, 30 );
        });
    }





    /* --------------------------------------------------------------------------- */
    /*  5.  Project Carousel (Alt. Version)
    /* --------------------------------------------------------------------------- */

    var $carouselAlt = $('#project-wrapper-alt');

    if( $carouselAlt.length ) {
        var scrollCount;

        function getWindowWidth() {
            if( $(window).width() < 480 ) {
                scrollCount = 1;
            } else if( $(window).width() < 768 ) {
                scrollCount = 2;
            } else if( $(window).width() < 960 ) {
                scrollCount = 3;
            } else {
                scrollCount = 4;
            }
        }

        function initCarousel( carousels ) {
            carousels.each(function() {
                var $this  = $(this);
                $this.jcarousel({
                    animation     : 600,
                    easing        : 'easeOutCubic',
                    scroll        : scrollCount
                });
            });
        }

        function adjustCarousel() {
            $carouselAlt.each(function() {
                var $this    = $(this),
                    $lis     = $this.children('li')
                    newWidth = $lis.length * $lis.first().outerWidth( true ) + 100;
                getWindowWidth();

                if( $this.width() !== newWidth ) {
                    $this.css('width', newWidth )
                         .data('resize','true');
                    initCarousel( $this );
                    $this.jcarousel('scroll', 1);
                    var timer = window.setTimeout( function() {
                        window.clearTimeout( timer );
                        $this.data('resize', null);
                    }, 600 );
                }
            });
        }

        getWindowWidth();
        initCarousel( $carouselAlt );

        // Window resize
        $(window).on('resize', function() {
            var timer = window.setTimeout( function() {
                window.clearTimeout( timer );
                adjustCarousel();
            }, 30 );
        });
    }


    /* --------------------------------------------------------------------------- */
    /*  8.  Accordion
    /* --------------------------------------------------------------------------- */
       $("#accordion").accordion({
            //accordion: true,
            speed: 500,
            closedSign: "<i class='accordion-btn accordion-close'>关闭</i>",
            openedSign: "<i class='accordion-btn accordion-open'>开启</i>"
        });




    /* --------------------------------------------------------------------------- */
    /*  9.  Tabs
    /* --------------------------------------------------------------------------- */

    $("#tabs li").click(function() {
        $("#tabs li").removeClass('active');
        $(this).addClass("active");
        $(".tab-content").hide();
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).fadeIn();
        return false;
    });

    $("#tabs").each(function() {
        var $this = $(this);
        $this.next().children('.tab-content').stop(true,true).hide().first().show();
        $this.children('li').first().addClass('active').stop(true,true).show();
    });





    /* --------------------------------------------------------------------------- */
    /*  10. Isotope
    /* --------------------------------------------------------------------------- */

    $(window).load(function(){
        var $container          = $('.project-feed');
        var $filter             = $('.project-feed-filter');
        
        // Initialize isotope 
        $container.isotope({
            filter              : '*',
            layoutMode          : 'fitRows',
            animationOptions    : {
                duration            : 750,
                easing              : 'linear'
            }
        }); 
        
        // Filter items when filter link is clicked
        $filter.find('a').click(function() {
            var selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('current');
            $(this).addClass('current');
            $container.isotope({ 
                filter             : selector,
                animationOptions   : {
                    animationDuration  : 750,
                    easing             : 'linear',
                    queue              : false
                }
            });
            return false;
        }); 
    });

    /* --------------------------------------------------------------------------- */
    /*  12. Contact Form
    /* --------------------------------------------------------------------------- */

    var $contactform  = $('#contact-form'),
        $success      = '<strong>Success!</strong> Your message was sent.';

    // Send the email
    $contactform.submit(function(){
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $(this).serialize(),
            success: function(msg) {
                if (msg == 'SEND') {
                    response = '<div class="success">'+ $success +'</div>';
                }
                else {
                    response = '<div class="error">'+ msg +'</div>';
                }
                $(".error,.success").remove();
                $contactform.prepend(response);
            }
         });
        return false;
    });

    var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
        .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 120);
    }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 166);
        }
    };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });

});




