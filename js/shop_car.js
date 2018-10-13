$(function () {
    var my_shopcar = $('.my_shop_car'),
        no_shop = $('.no_shop'),
        has_shop = $('.has_shop'),
        count_shop_w = $('.count_shop_w'),
        want_price = $('.want_price');
    if (window.localStorage.getItem('shop')) {
        no_shop.css('display', 'none');
        has_shop.css('display', 'block');
        var my_local = window.localStorage.getItem('shop');
        my_local = JSON.parse(my_local);
        var count = my_local.count;
        count_shop_w.val(parseInt(count));
        want_price.html(parseInt(count_shop_w.val()*698)+".00");
        console.log(want_price.html());
    }
});