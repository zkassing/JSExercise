window.onload = function(){
    var box = document.getElementById('box');
    console.log(box.offsetLeft);
    
    setInterval(function(){
        // console.log('fsa')
        var lWidth = box.offsetLeft;
        box.style.left = lWidth + 1 + "px";
    },50)
}