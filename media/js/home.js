//TODO: use r_ = Math.round to round the pixel

var updateHomeUI = function() {
    var $body = $(document);
    var docWidth = Math.max($body.width(), 800);
    var docHeight = Math.max($body.height(), 600);
    var width = $("#outlet").width();
    var height = $("#content").height();
    var $homeContent = $("#home-content");
    var $homeBookArray = $(".home-book");
    $homeContent.width(width).height(height);
    $homeBookArray.width(width/2-40*docWidth/IS.width)
        .css('padding-left', 20*docWidth/IS.width)
        .css('padding-right', 20*docWidth/IS.width)
        .css('padding-top', 20*docHeight/IS.height)
        .css('padding-bottom', 20*docHeight/IS.height)
        .hide();
    $homeBookArray.each(function() {
        var $self = $(this);
        var $image = $self.find("img.book");
        var $desc = $self.find(".home-book-desc");
        var $ribbon = $self.find(".home-book-ribbon");
        var imgHeight = $image.attr('data-height'),
            imgWidth = $image.attr('data-width');
        var newHeight = height-40*docHeight/IS.height;
        var newWidth = newHeight*imgWidth/imgHeight;
        $image.height(newHeight)
            .width(newWidth)
            /* TODO: color */
            .css('box-shadow', 5*docWidth/IS.width+'px '+5*docHeight/IS.height+'px 0px 0px darkslategray');
        $desc.css('bottom', 20*docHeight/IS.height)
            .css('right', newWidth+30*docWidth/IS.width);
        $ribbon.width(newWidth+25*docWidth/IS.width)
            .css('right', 15*docWidth/IS.width)
            .css('bottom', height/2);
    });
};

document.bookIndex = 0;
document.intervalHandle = null;

var animateBooks = function() {
    var len = $("#home-content").attr('data-book-size');
    var $first = $("#home-book-" + document.bookIndex);
    var $second = $("#home-book-" + (document.bookIndex+1)%len);
    var $next = $("#home-book-" + (document.bookIndex+2)%len);
    $first.css('right', 0).show();
    $second.css('right', $("#outlet").width()/2).show();
    if (document.intervalHandle) clearInterval(document.intervalHandle);
    document.intervalHandle = setInterval(function() {
        var width = $("#outlet").width();
        $first.animate({right: -width/2}, function() {
            //$first.hide();
        });
        $second.animate({right: 0});
        $next.css('right', width).show().animate({right: width/2});
        document.bookIndex = (document.bookIndex+1)%len;
        $first = $("#home-book-" + document.bookIndex);
        $second = $("#home-book-" + (document.bookIndex+1)%len);
        $next = $("#home-book-" + (document.bookIndex+2)%len);
    }, 2000);
};

$(document).ready(updateHomeUI);
$(document).ready(animateBooks);
$(window).resize(updateHomeUI);
$(window).resize(animateBooks);