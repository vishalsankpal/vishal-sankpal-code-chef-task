
document.onload = function(){}
var header = document.getElementById("tabs-level");
var btns = header.getElementsByClassName("tab-nav");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// carosal
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
// navigation
function scroll(){
    var nav = document.getElementById("navigation");
    var windowScrollPoints = window.pageYOffset;
    console.log(windowScrollPoints);
    if(windowScrollPoints > 176){
        nav.classList.add("sticky-nav");
    }else{
        nav.classList.remove("sticky-nav");
    }
}
window.addEventListener("scroll",scroll);
// scrollspy
(function() {
    'use strict';
  
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.active-nav').setAttribute('class', ' ');
          document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active-nav');
        }
      }
    };
  })();