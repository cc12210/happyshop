var add_btn = $('.add_btn_w'),
    re_btn = $('.re_btn_w'),
    count = $('.count_shop_w');
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