let wrapper = document.querySelector('.wrapper');

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
});