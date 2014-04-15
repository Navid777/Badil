var updateUI = function() {
    var IS = {
        width: 800,
        height: 600,
        headerH: 118,
        searchbarH: 29,
        searchinputH: 19,
        searchinputW: 80,
        searchinputL: 40,
        searchinputT: 123,
        searchbuttonH: 19,
        searchbuttonW: 20,
        searchbuttonL: 20,
        searchbuttonT: 123,
        menubarH: 20,
        logoH: 123,
        logoW: 78,
        logoT: 12,
        logoR: 20,
        sidemenuW: 78,
        sidemenuT: 187,
        sidemenuR: 20,
        footerH: 49,
        footerB: 0,
        footerContentMR: 138,
        contentH: 344,
        contentW: 659,
        contentR: 138,
        contentT: 187
    }
    var $body = $(document);
    var width = $body.width();
    var height = $body.height();
    var $img = $("img.logo");
    var $topHeader = $("#top-header");
    var $searchBar = $("#search-bar");
    var $searchInput = $("#search-input");
    var $searchButton = $("#search-button");
    var $menuBar = $("#menu-bar");
    var $sideMenu = $("#side-menu");
    var $footer = $("#footer");
    var $footerContent = $("#footer-content");
    var $content = $("#content");
    $img.height(IS.logoH*height/IS.height)
        .width(IS.logoW*width/IS.width)
        .css('top', IS.logoT*height/IS.height)
        .css('right', IS.logoR*width/IS.width);
    $topHeader.height(IS.headerH*height/IS.height)
        .css('top', 0);
    $searchBar.height(IS.searchbarH*height/IS.height)
        .css('top', $topHeader.height());
    $searchInput.height(IS.searchinputH*height/IS.height)
        .width(IS.searchinputW*width/IS.width)
        .css('left', IS.searchinputL*width/IS.width)
        .css('top', IS.searchinputT*height/IS.height);
    $searchButton.height(IS.searchbuttonH*height/IS.height)
        .width(IS.searchbuttonW*width/IS.width)
        .css('top', IS.searchbuttonT*height/IS.height)
        .css('left', IS.searchbuttonL*width/IS.width)
        .css('font-size', IS.searchbuttonH*height/IS.height);
    $menuBar.height(IS.menubarH*height/IS.height)
        .css('top', $topHeader.height() + $searchBar.height());
    $sideMenu.width(IS.sidemenuW*width/IS.width)
        .css('right', IS.sidemenuR*width/IS.width)
        .css('top', IS.sidemenuT*height/IS.height);
    $footer.height(IS.footerH*height/IS.height);
    $footerContent.css('margin-right', IS.footerContentMR*width/IS.width);
    $content.height(IS.contentH*height/IS.height)
        .width(IS.contentW*width/IS.width)
        .css('right', IS.contentR*width/IS.width)
        .css('top', IS.contentT*height/IS.height);

    $("#allcontent").fadeIn();
};

$(document).ready(updateUI);
$(window).resize(updateUI);