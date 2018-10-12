var add_car = $('.add_car'),
    add_btn = $('.add_btn'),
    re_btn = $('.re_btn'),
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
    var shop_name = $('.detail_tit').html(),
        new_price = $('.price_now').html(),
        my_count = count.val();
        var arr= [new_price,my_count];
    window.localStorage.setItem(shop_name, arr);
    console.log(window.localStorage.getItem(shop_name));
});