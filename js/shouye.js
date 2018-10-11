var swiper = (function () {
    return {
        init: function () {
            this.bannerImg = document.querySelectorAll('.banner_img');
            this.circle_li = document.querySelector('.circle_box');
            this.banner = document.querySelector('#banner');
            this.circle_liAll = this.circle_li.children;
            this.index = 0;
            this.timer = null;
            this.event();
            this.autoplay();
            this.stopplay();
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
                        _this.circle_liAll[i].removeAttribute('class');
                    }
                    _this.bannerImg[_this.index].className = "banner_img bannerBlock";
                    _this.circle_liAll[_this.index].className = "circle_active";
                }
            }
        },
        autoplay: function () {
            var _this = this;
            this.timer = setInterval(function () {
                _this.nextplay();
            }, 3000);
        },
        nextplay: function () {
            var _this = this;
            this.index++;
            if (this.index > _this.bannerImg.length - 1) {
                this.index = 0
            }
            for (var i = 0; i < _this.bannerImg.length; i++) {
                _this.bannerImg[i].className = "banner_img bannerImg";
                _this.circle_liAll[i].removeAttribute('class');
            }
            _this.bannerImg[_this.index].className = "banner_img bannerBlock";
            _this.circle_liAll[_this.index].className = "circle_active";
        },
        stopplay: function () {
            var _this = this;
            this.banner.onmouseenter = function () {
                clearInterval(_this.timer);
            }
            this.banner.onmouseleave = function () {
                _this.autoplay();
            }
        }
    }
}());
swiper.init();