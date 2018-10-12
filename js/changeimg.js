var imgUl = $('.gra_img'),
    imgLiAll = $('.gra_img').children(),
    showImg = $('.showImg'),
    showBigImg = $('.showBigImg');
imgUl.on('mouseenter', 'img', function () {
    imgLiAll.removeClass('gra_active');
    $(this).parent().addClass('gra_active');
    showImg[0].src = $(this)[0].src;
    showBigImg[0].src = $(this)[0].src;
})