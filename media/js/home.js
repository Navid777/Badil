//TODO: use r_ = Math.round to round the pixel

var updateHomeUI = function() {
    var $body = $(document);
    var docWidth = Math.max($body.width(), 800);
    var docHeight = Math.max($body.height(), 600);
    var width = $("#outlet").width();
    var height = $("#content").height();
    var $homeBookArray = $(".home-book");
    var $homeBookImageArray = $homeBookArray.find("img.book");
    var $homeBookDescArray = $homeBookArray.find(".home-book-desc");
    $homeBookArray.width(width/2-40*docWidth/IS.width)
        .css('padding-left', 20*docWidth/IS.width)
        .css('padding-right', 20*docWidth/IS.width)
        .css('padding-top', 20*docHeight/IS.height)
        .css('padding-bottom', 20*docHeight/IS.height);
    $homeBookImageArray.height(height-40*docHeight/IS.height)
        /* TODO: color */
        .css('box-shadow', 5*docWidth/IS.width + 'px ' + 5*docHeight/IS.height + 'px 0px 0px darkslategray');
    $homeBookDescArray.css('bottom', 20*docHeight/IS.height)
        .css('right', $homeBookImageArray.width()+30*docWidth/IS.width);
};

$(document).ready(updateHomeUI);
$(window).resize(updateHomeUI);
