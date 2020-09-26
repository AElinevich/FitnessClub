const slider = () => {
  const slider = document.querySelector('.gallery-slider'),
  slide = slider.querySelectorAll('.slide'),
  galleryDots = document.querySelector('.gallary-dots');

let currentSlide = 0;
let interval;

function createDots() {
  const dotsCollection = galleryDots.querySelectorAll('.dot');
  const dotElement = document.createElement('li');
  dotElement.classList.add('dot');
  galleryDots.append(dotElement);

  if (dotsCollection.length < slide.length - 1) {
    createDots();
  } else if (dotsCollection.length === slide.length) {
    dotsCollection[0].classList.add('dot-active');
    return dotsCollection;
  }
}

createDots();

const dot = galleryDots.querySelectorAll('.dot');
const prevSlide = (elem, index, strClass) => {
  elem[index].classList.remove(strClass);
};

const nextSlide = (elem, index, strClass) => {
  elem[index].classList.add(strClass);
};

const autoPlaySlide = () => {
  prevSlide(slide, currentSlide, 'active');
  prevSlide(dot, currentSlide, 'dot-active');
  currentSlide++;
  if (currentSlide >= slide.length) {
    currentSlide = 0;
  }
  nextSlide(slide, currentSlide, 'active');
  nextSlide(dot, currentSlide, 'dot-active');	 
};

const startSlide = (time = 2500) => {
  interval = setInterval(autoPlaySlide, time);
};

const stoptSlide = () => {
  clearInterval(interval);
};

slider.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;

  if (!target.matches('.gallery-arrow, .dot')) {
    return;
  }

  prevSlide(slide, currentSlide, 'active');
  prevSlide(dot, currentSlide, 'dot-active');

  if (target.matches('#next')) {
    currentSlide++;
  } else if (target.matches('#prev')) {
    currentSlide--;
  } else if (target.matches('.dot')) {
    dot.forEach((elem, index) => {
      if (target === elem) {
        currentSlide = index;
      }
    });
  }

  if (currentSlide >= slide.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slide.length - 1;
  }

  nextSlide(slide, currentSlide, 'active');
  nextSlide(dot, currentSlide, 'dot-active');
});

slider.addEventListener('mouseover', event => {
  if (event.target.matches('.gallery-arrow') || event.target.matches('.dot')) {
    stoptSlide();
  }

});
slider.addEventListener('mouseout', event => {
  if (event.target.matches('.gallery-arrow') || event.target.matches('.dot')) {
    startSlide();
  }
});
startSlide(2000);

};

export default slider;