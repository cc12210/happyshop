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
        "shop_name":shop_name,
        "price":new_price,
        "count":my_count,
        "img":imgSrc[0].src
    }
    obj = JSON.stringify(obj);
    window.localStorage.setItem("shop", obj);
    var newObj = window.localStorage.getItem("shop");
    newObj = JSON.parse(newObj);
    console.log(newObj);
    alert('添加成功,快去购物车页面结算吧');
});