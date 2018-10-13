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
        want_price.html(parseInt(count_shop_w.val() * 698) + '.00');
        console.log(want_price.html());
    }
    //购物车增加减少数目
    var add_car = $('.add_car'),
        add_btn = $('.add_btn'),
        re_btn = $('.re_btn'),
        imgSrc = $('.showImg'),
        count = $('.count_shop');
    add_btn.click(function () {
        if (count.val() == "") {
            count.val(1);
        }
        count.val(parseInt(count.val()) + 1);
    });
    re_btn.click(function () {
        if (count.val() == "") {
            count.val(1);
        }
        count.val(parseInt(count.val()) - 1);
        if (count.val() <= 0) {
            count.val(parseInt(count.val()) + 1);
        }
    });
    count.on('input', function () {
        if (count.val() >= 999) {
            count.val(999);
        } else if (count.val() < 0) {
            count.val(1);
        }
    });
    add_car.click(function () {
        var shop_name = $.trim($('.detail_tit').html()),
            new_price = $('.price_now_num').html(),
            my_count = count.val();
        var obj = {
            "count": my_count
        }
        obj = JSON.stringify(obj);
        window.localStorage.setItem("shop", obj);
        var newObj = window.localStorage.getItem("shop");
        newObj = JSON.parse(newObj);
        console.log(newObj);
        alert('添加成功,快去购物车页面结算吧');
    });
});