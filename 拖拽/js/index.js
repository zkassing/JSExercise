window.onload = function(){
    var login = document.getElementById('login');
    function move(event){
        var e = event||window.event;
        login.style.left = e.clientX + "px";
        login.style.top = e.clientY + "px";
    }

    login.onmousedown = function (e){
        login.onmouseover = function(e){
            move(e);
        }
    }


}