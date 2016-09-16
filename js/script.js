/*Nina Kong*/
$(document).ready(function(){
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $('#fadeIn').click(function() {
        $('.displayPart').fadeIn('slow');
    });
    $('#fadeOut').click(function() {
        $('.displayPart').fadeOut('fast');
    });
    $('#fadeTo25').click(function() {
        $('.displayPart').fadeTo('fast', 0.25);
    });
    $('#fadeTo75').click(function() {
        $('.displayPart').fadeTo('fast', 0.75);
    });
    $('#pluse').click(function() {
        $('.displayPart').fadeTo('fast', 0.25)
                         .fadeTo('fast', 0.99)
                         .fadeTo('fast', 0.25)
                         .fadeTo('fast', 0.99);
    });
    function done() {
        $(this).text('Finished.');
    }
});
