var swiper = (function () {
    return {
        init: function () {
            this.bannerImg = document.querySelectorAll('.banner_img');
            console.log(this.bannerImg);
            this.circle_li = document.querySelector('.circle_box');
            this.index = 0;
            this.event();
        },
        event: function () {
            var _this = this;
            this.circle_li.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName == "LI") {
                    _this.index = target.getAttribute("index");
                    for (var i = 0; i < _this.bannerImg.length; i++) {
                        _this.bannerImg[i].className = "banner_img bannerImg";
                    }
                    _this.bannerImg[_this.index].className = "banner_img bannerBlock";
                }
            }
        }
    }
}());
swiper.init();