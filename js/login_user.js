var loginUser = (function () {
    return {
        init: function () {
            this.login = document.querySelector('.login');
            this.reg = document.querySelector('.reg');
            this.event();
        },
        event: function () {
            var _this = this;
            if (localStorage.getItem('name')) {
                var name = localStorage.name;
                this.login.innerHTML = name;
                this.login.removeAttribute('href');
                this.login.className = "userIn";
                this.reg.innerHTML = "退出";
                this.reg.removeAttribute('href');
                this.reg.className = "loginOut";
                this.login_out();
            }
        },
        login_out: function () {
            var _this = this;
            this.userIn = document.querySelector('.userIn');
            this.loginOut = document.querySelector('.loginOut');
            this.loginOut.onclick = function () {
                localStorage.removeItem('name');
                _this.userIn.innerHTML = "登陆";
                _this.userIn.setAttribute('href', 'login.html');
                _this.userIn.className = "login";
                _this.loginOut.innerHTML = "注册";
                _this.loginOut.setAttribute('href', 'reg.html');
                _this.loginOut.className = "reg";
            }
        },
        login_in: function () {
            this.login = document.querySelector('.login');
            this.reg = document.querySelector('.reg');
            this.event();
        }
    }
}());
loginUser.init();