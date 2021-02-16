//swiper
let wrapper = document.querySelector('.wrapper');
let image = document.querySelector('.top__img');
let light = document.querySelector('.top__light');
let virus = document.querySelector('.virus');

let pageSlider = new Swiper('.page', {
    wrapperClass: "page__wrapper",
    slideClass: "section",
    direction: 'horizontal',
    slidesPerView: 'auto',
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.section'
    },
    watchOverflow: true,
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    on: {
        init: function () {
            wrapper.classList.add('_loaded');
            image.classList.add('_animate');
            light.classList.add('_animate');
            virus.classList.add('_animate');
        },
    },
});
//form
let form = document.querySelector('.form');
let formCover = document.querySelector('.form__cover');
let formClose = document.querySelector('.form__exit');
const formOpeners = document.querySelectorAll(".btn_buy");

for (const formOpener of formOpeners) {
    formOpener.addEventListener('click', function(event) {
        form.classList.add('active');
  })
};

formClose.onclick = function() {
    form.classList.remove('active');
};
formCover.onclick = function() {
    form.classList.remove('active');
};