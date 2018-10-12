var smallBox = $('.small_img'),
    bigBox = $('.big_img'),
    bigImg = $('.big_img img'),
    mainBox = $('.shopinfo_l_img');
mainBox.on('mouseenter', function () {
    smallBox.show();
    bigBox.show();
});
mainBox.mousemove(function (ev) {
    var x = ev.pageX,
        y = ev.pageY,
        _x = mainBox.offset().left,
        _y = mainBox.offset().top;
    var mx = x - _x,
        my = y - _y,
        mw = smallBox.width() / 2,
        mh = smallBox.height() / 2;
    smallBox.css({
        left: mx - mw + 'px',
        top: my - mh + 'px'
    });
    var lw = smallBox.position().left,
        lh = smallBox.position().top;
    var maxW = mainBox.width() - smallBox.width(),
        maxH = mainBox.width() - smallBox.width();
    if (lw <= 0) {
        smallBox.css('left', '0px');
    } else if (lw >= maxW) {
        smallBox.css('left', maxW + 'px');
    }
    if (lh <= 0) {
        smallBox.css('top', '0px');
    } else if (lh >= maxH) {
        smallBox.css('top', maxH + 'px');
    }
    var lw = smallBox.position().left,
        lh = smallBox.position().top,
        bw = lw * 2,
        bh = lh * 2;
    bigImg.css({
        left: -bw + 'px',
        top: -bh + 'px'
    });
});
mainBox.on('mouseleave', function () {
    smallBox.hide();
    bigBox.hide();
});