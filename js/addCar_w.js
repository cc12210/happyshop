var add_btn = $('.add_btn_w'),
    re_btn = $('.re_btn_w'),
    count = $('.count_shop_w'),
    want_price = $('.want_price');
add_btn.click(function () {
    if (count.val() == "") {
        count.val(1);
    }
    count.val(parseInt(count.val()) + 1);
    var newObj = window.localStorage.getItem('shop');
    newObj = JSON.parse(newObj);
    want_price.html(parseInt(count.val() * 698) + ".00");
    var newCount = {
        "count": count.val()
    }
    newCount = JSON.stringify(newCount);
    window.localStorage.setItem('shop', newCount);
});
re_btn.click(function () {
    if (count.val() == "") {
        count.val(1);
    }
    count.val(parseInt(count.val()) - 1);
    var newObj = window.localStorage.getItem('shop');
    newObj = JSON.parse(newObj);
    want_price.html(parseInt(count.val() * 698) + ".00");
    if (count.val() <= 0) {
        count.val(parseInt(count.val()) + 1);
        want_price.html(parseInt(count.val() * 698) + ".00");
    }
    var newCount = {
        "count": count.val()
    }
    newCount = JSON.stringify(newCount);
    window.localStorage.setItem('shop', newCount);
});
count.on('input', function () {
    if (count.val() >= 999) {
        count.val(999);
    } else if (count.val() < 0) {
        count.val(1);
    }
    if (count.val() != "") {
        want_price.html(parseInt(count.val() * 698) + ".00");
    }
    var newCount = {
        "count": count.val()
    }
    newCount = JSON.stringify(newCount);
    window.localStorage.setItem('shop', newCount);
});