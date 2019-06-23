var header = document.getElementById("tabs-level");
var btns = header.getElementsByClassName("tab-nav");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

const carosalSlide = document.querySelector('.slider-center');
const carosalImages = document.querySelectorAll('.mySlides');

// buttons
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter = 1;
const size = carosalImages[0].clientWidth;

carosalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', () => {
    carosalSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carosalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click', () => {
    carosalSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carosalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carosalSlide.addEventListener('transitionend', () => {
    if (carosalImages[counter].id == 'lastClone') {
        carosalSlide.style.transition = 'none';
        counter = carosalImages.length - 1;
        carosalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carosalImages[counter].id === 'firstClone') {
        carosalSlide.style.transition = 'none';
        counter = carosalImages.length - counter;
        carosalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
