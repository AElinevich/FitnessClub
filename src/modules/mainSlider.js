function mainSlider() {
let currentSlide = 0;
const mainSlider = document.querySelectorAll('.main-slider .slide');

setInterval(nextSlide, 2000);
 
function nextSlide() {
    mainSlider[currentSlide].style.display = "none";
    currentSlide = (currentSlide+1)%mainSlider.length;
    mainSlider[currentSlide].style.display = "block";
}

}

export default mainSlider;