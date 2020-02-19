$(document).ready(function() {

    if($(window).width() > 767) {
        // Create a clone of the menu, right next to original.
        $('.navigation-wrapper').addClass('original').clone().insertAfter('.navigation-wrapper').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();


        if ($('.navigation-wrapper').length !== 0){
            var orgElementPos = $('.navigation-wrapper').offset();
            scrollIntervalID = setInterval(stickIt, 10);
        }
        function stickIt() {
            var orgElementTop = orgElementPos.top;

            if ($(window).scrollTop() >= (orgElementTop)) {
                // scrolled past the original position; now only show the cloned, sticky element.
                // Cloned element should always have same left position and width as original element.
                orgElement = $('.original');
                coordsOrgElement = orgElement.offset();
                leftOrgElement = coordsOrgElement.left;
                widthOrgElement = orgElement.css('width');
                $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
                $('.original').css('visibility','hidden');
            } else {
                // not scrolled past the menu; only show the original menu.
                $('.cloned').hide();
                $('.original').css('visibility','visible');
            }
        }
    }
});