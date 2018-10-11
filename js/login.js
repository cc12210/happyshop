this.btn = document.querySelector('.loginBtnA'),
    form = document.querySelector('.login_inp'),
    username = document.querySelector('.username'),
    password = document.querySelector('.password');
var _this = this;
this.btn.onclick = function () {
    if (_this.username.value != "" && _this.password.value != "") {
        var params = {
            method: 'post',
            data: {
                username: username.value,
                password: password.value
            },
            success: function (data) {
                if (data.msg == 200) {
                    location.href = 'shouye.html';
                } else if (data.msg == 1000) {
                    document.querySelector('.errorInfo').innerHTML = '账号或密码有误';
                }
            }
        }
        sendAjax('php/login.php', params);
    } else {
        document.querySelector('.errorInfo').innerHTML = '账号或密码不能为空';
    }
}
document.onkeydown = function (ev) {
    ev = ev || window.event;
    var keyCode = ev.keyCode || ev.which;
    if (keyCode == 13) {
        _this.btn.click();
    }
}