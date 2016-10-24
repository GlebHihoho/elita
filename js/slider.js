function click() {
  var btn = document.querySelectorAll('.slider__radio');
  var btnIcon = document.querySelectorAll('.slider__btn');

  btn[0].onclick = btn_1;
  btn[0].addEventListener('click', function() {
    btnIcon[0].classList.add('slider__btn--active');

    if (btnIcon[0].classList.contains('slider__btn--active')) {
      btnIcon[0].classList.remove('slider__btn--active');
    };
  });

  btn[1].onclick = btn_2;
  btn[1].addEventListener('click', function() {
    btnIcon[1].classList.add('slider__btn--active');

    if (btnIcon[1].classList.contains('slider__btn--active')) {
      btnIcon[1].classList.remove('slider__btn--active');
    };
  });

  btn[2].onclick = btn_3;
  btn[2].addEventListener('click', function() {
    btnIcon[2].classList.add('slider__btn--active');

    if (btnIcon[2].classList.contains('slider__btn--active')) {
      btnIcon[2].classList.remove('slider__btn--active');
    };
  });
};

click();

function btn_1() {
    var sliderSlide = document.querySelectorAll('.slider__slide');
    var btn = document.querySelectorAll('.slider__radio');
    var slide1 = sliderSlide[0];
    var slide2 = sliderSlide[1];
    var slide3 = sliderSlide[2];

    slide1.classList.remove('slider__js-none');
    slide1.classList.add('slider__js-flex');

    slide2.classList.add('slider__js-none');
    slide2.classList.remove('slider__js-flex');

    slide3.classList.add('slider__js-none');
    slide3.classList.remove('slider__js-flex');
}

function btn_2() {
    var sliderSlide = document.querySelectorAll('.slider__slide');
    var btn = document.querySelectorAll('.slider__radio');
    var slide1 = sliderSlide[0];
    var slide2 = sliderSlide[1];
    var slide3 = sliderSlide[2];

    slide1.classList.remove('slider__js-flex');
    slide1.classList.add('slider__js-none');

    slide2.classList.add('slider__js-flex');
    slide2.classList.remove('slider__js-none');

    slide3.classList.add('slider__js-none');
    slide3.classList.remove('slider__js-flex');
}

function btn_3() {
    var sliderSlide = document.querySelectorAll('.slider__slide');
    var btn = document.querySelectorAll('.slider__radio');
    var slide1 = sliderSlide[0];
    var slide2 = sliderSlide[1];
    var slide3 = sliderSlide[2];

    slide1.classList.remove('slider__js-flex');
    slide1.classList.add('slider__js-none');

    slide2.classList.add('slider__js-none');
    slide2.classList.remove('slider__js-flex');

    slide3.classList.add('slider__js-flex');
    slide3.classList.remove('slider__js-none');
}
