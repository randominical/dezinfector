//анимация
let wrapper = document.querySelector('.wrapper');
let image = document.querySelector('.top__img');
let light = document.querySelector('.top__light');
let virus = document.querySelector('.virus');

document.addEventListener('DOMContentLoaded', function(){
    wrapper.classList.add('_loaded');
    image.classList.add('_animate');
    light.classList.add('_animate');
    virus.classList.add('_animate');
});

//swiper
let swiper = Swiper;
let init = false;

function swiperMode() {
    let widthS = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let widthN = window.matchMedia('(min-width: 769px)');
    let heightS = window.matchMedia('(min-height: 0px) and (max-height: 475px)');
    let heightN = window.matchMedia('(min-height: 476px)');

    if(widthN.matches & heightN.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.page', {
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
            });
        }
    }
    else if(widthS.matches) {
        swiper.destroy();
        init = false;
    }
    else if(heightS.matches) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
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