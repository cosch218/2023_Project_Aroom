const sliderItems = document.querySelectorAll("#slider-item");
const prevButton = document.querySelector("#prevbutton");
const nextButton = document.querySelector("#nextbutton");

const maxSlide = sliderItems.length;

let currentSlide = 1;

prevButton.addEventListener("click", function(){
    if (currentSlide > 1) {
        currentSlide--;
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.left = `${100+(-100)*i}%`;
        }
    }
})