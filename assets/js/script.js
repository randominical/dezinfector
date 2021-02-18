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

let topSlide = document.querySelector('.top');
let footer = document.querySelector('.footer');

function footerHide() {
    if (topSlide.classList.contains('swiper-slide-active')) {
        footer.classList.remove('active');
    }
    else {
        footer.classList.add('active');
    }
};

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
                on: {
                    init: function () {
                        footerHide()
                    },
                    transitionStart: function () {
                        footerHide()
                    },
                    resize: function () {
                        footerHide()
                    }
                },
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
    footerHide();
});
window.addEventListener('resize', function() {
    swiperMode();
    footerHide();
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



const parent_original = document.querySelector('.body-top');
const parent_original2 = document.querySelector('.body-top__discount');
const parent = document.querySelector('.container_mob');
const item1 = document.querySelector('.body-top__list');
const item2 = document.querySelector('.body-top__number');
const item3 = document.querySelector('.discount__now');

//Слушаем изменение размера экрана
window.addEventListener('resize', move1);

//Функция
function move1(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 768) {
		if (!item1.classList.contains('done')) {
			parent.insertBefore(item1, parent.children[1]);
			item1.classList.add('done');
		}
	} else {
		if (item1.classList.contains('done')) {
			parent_original.insertBefore(item1, parent_original.children[1]);
			item1.classList.remove('done');
		}
	}
}

//Вызываем функцию
move1();

//Слушаем изменение размера экрана
window.addEventListener('resize', move2);

//Функция
function move2(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 768) {
		if (!item2.classList.contains('done')) {
			parent.insertBefore(item2, parent.children[2]);
			item2.classList.add('done');
		}
	} else {
		if (item2.classList.contains('done')) {
			parent_original.insertBefore(item2, parent_original.children[3]);
			item2.classList.remove('done');
		}
	}
}

//Вызываем функцию
move2();

//Слушаем изменение размера экрана
window.addEventListener('resize', move3);

//Функция
function move3(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 768) {
		if (!item3.classList.contains('done')) {
			parent.insertBefore(item3, parent.children[3]);
			item3.classList.add('done');
		}
	} else {
		if (item3.classList.contains('done')) {
			parent_original2.insertBefore(item3, parent_original2.children[2]);
			item3.classList.remove('done');
		}
	}
}

//Вызываем функцию
move3();