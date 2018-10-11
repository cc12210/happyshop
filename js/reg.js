this.btn = document.querySelector('.loginBtnA'),
    form = document.querySelector('.login_inp'),
    username = document.querySelector('.username'),
    password = document.querySelector('.password'),
    password2 = document.querySelector('.password2'),
    errorInfo = document.querySelector('.errorInfo'),
    flag = false;
var _this = this;
this.username.onchange = function () {
    if (_this.username.value != "") {
        var params = {
            method: 'post',
            data: {
                username: this.value,
                password: ""
            },
            success: function (data) {
                if (data.msg == 200) {
                    _this.errorInfo.innerHTML = '账号已经存在';
                    _this.errorInfo.className = 'errorInfo loginFail';
                    _this.flag = false;
                } else if (data.msg == 1000) {
                    _this.errorInfo.innerHTML = '账号可以使用';
                    _this.errorInfo.className = 'errorInfo loginSucc';
                    _this.flag = true;
                }
            }
        }
        sendAjax('php/res.php', params);
    }
}
this.btn.onclick = function () {
    if (_this.username.value != "" && _this.password.value != "" && _this.flag == true) {
        if (_this.password.value == _this.password2.value) {
            var params = {
                method: 'post',
                data: {
                    username: _this.username.value,
                    password: _this.password.value
                },
                success: function (data) {
                    if (data.msg == 201) {
                        localStorage.setItem('name', _this.username.value);
                        location.href = 'shouye.html';
                    }
                }
            }
            sendAjax('php/res.php', params);
        } else {
            _this.errorInfo.innerHTML = '两次密码不一致';
            _this.errorInfo.className = 'errorInfo loginFail';
        }
    } else {
        _this.errorInfo.innerHTML = '您的输入有误';
        _this.errorInfo.className = 'errorInfo loginFail';
    }
}
document.onkeydown = function (ev) {
    ev = ev || window.event;
    var keyCode = ev.keyCode || ev.which;
    if (keyCode == 13) {
        _this.btn.click();
    }
}