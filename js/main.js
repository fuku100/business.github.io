'use strict'

function showElementAnimation() {
    var element = document.getElementsByClassName('js-animation');
    if (!element) return; 
    var showTiming = window.innerHeight > 768 ? 200 : 40; 
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    for (var i = 0; i < element.length; i++) {
        var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if (scrollY + windowH < elemY) {
            element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);


var pics_src = new Array("img/graph1.png", "img/graph2.png", "img/graph4.png", "img/graph3.png");
var num = 0;

slideshow_timer();

function slideshow_timer() {
    if (num == 3) {
        num = 0;
    }
    else {
        num++;
    }
    document.getElementById("mypic").src = pics_src[num];
    setTimeout("slideshow_timer()", 5000);
}
function go_forward() {
    if (num == 3) {
        num = 0;
    }
    else {
        num++;
    }
    document.getElementById("mypic").src = pics_src[num];
}

function go_back() {
    if (num == 0) {
        num = 3;
    }
    else {
        num--;
    }
    document.getElementById("mypic").src = pics_src[num];
}
