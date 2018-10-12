$(function () {
    var login = $('.login'),
        reg = $('.reg'),
        user = $('.userIn'),
        loginOut = $('.loginOut');
    if(window.localStorage.getItem('name')){
        user.show();
        user.html(localStorage.name);
        loginOut.show();
        login.hide();
        reg.hide();
    }
    loginOut.on('click',function(){
        window.localStorage.removeItem('name');
        login.show();
        reg.show();
        user.hide();
        loginOut.hide();
    });
});