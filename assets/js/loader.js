$(document).ready(function(){
    var hidden = setInterval(function(){
        $(".loader__circle").addClass("loader__circle--hidden");
        $(".loader__overlay").addClass("move-loader");
        clearInterval(hidden);
    },1000);
    var moveTop = setInterval(function(){
        $(".loader").addClass("move-top");
        clearInterval(moveTop);
    },2000);
});