//анимация
let wrapper = document.querySelector('.wrapper');
let image = document.querySelector('.top__img_d');
let light = document.querySelector('.top__light');
let virus = document.querySelector('.virus');

window.addEventListener('load', function(){
    wrapper.classList.add('_loaded');
    light.classList.add('_animate');
    virus.classList.add('_animate');
    image.classList.add('_animate');
});

//swiper
let widthS = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
let widthN = window.matchMedia('(min-width: 769px)');
let heightS = window.matchMedia('(min-height: 0px) and (max-height: 570px)');
let heightN = window.matchMedia('(min-height: 571px)');

let swiper = undefined;
let init = false;

function swiperMode() {

    if(widthN.matches && heightN.matches) {
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
                },
            });
        }
    }
    else if(widthS.matches && (swiper != undefined)) {
        swiper.destroy();
        init = false;
    }
    else if(heightS.matches && (swiper != undefined)) {
        swiper.destroy();
        init = false;
    }
}

let topSlide = document.querySelector('.top');
let footer = document.querySelector('.footer');

function footerHide() {
    if ((swiper != undefined) && topSlide.classList.contains('swiper-slide-active')) {
        footer.classList.remove('active');
    }
    else {
        footer.classList.add('active');
    }
};

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
let body = document.querySelector('body');
const formOpeners = document.querySelectorAll(".btn_buy");

for (const formOpener of formOpeners) {
    formOpener.addEventListener('click', function(event) {
        form.classList.add('active');
        body.classList.add('lock');
  })
};

formClose.onclick = function() {
    form.classList.remove('active');
    body.classList.remove('lock');
};
formCover.onclick = function() {
    form.classList.remove('active');
    body.classList.remove('lock');
};

//динамический адаптив
const parent_original = document.querySelector('.body-top');
const parent_original2 = document.querySelector('.body-top__discount');
const parent_original3 = document.querySelector('.specifications__body');
const parent_original4 = document.querySelector('.specifications__illustration');
const parent = document.querySelector('.container_mob-1');
const parent2 = document.querySelector('.container_mob-2');
const parent3 = document.querySelector('.container_mob-3');
const item1 = document.querySelector('.body-top__list');
const item2 = document.querySelector('.body-top__number');
const item3 = document.querySelector('.discount__now');
const item4 = document.querySelector('.body-specifications__title');
const item5 = document.querySelector('.illustration__comment');

function move1(){
	if (widthS.matches) {
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

function move2(){
	if (widthS.matches) {
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

function move3(){
	if (widthS.matches) {
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

function move4(){
	if (widthS.matches) {
		if (!item4.classList.contains('done')) {
			parent2.insertBefore(item4, parent2.children[1]);
			item4.classList.add('done');
		}
	} else {
		if (item4.classList.contains('done')) {
			parent_original3.insertBefore(item4, parent_original3.children[0]);
			item4.classList.remove('done');
		}
	}
}

function move5(){
	if (widthS.matches) {
		if (!item5.classList.contains('done')) {
			parent3.insertBefore(item5, parent3.children[1]);
			item5.classList.add('done');
		}
	} else {
		if (item5.classList.contains('done')) {
			parent_original4.insertBefore(item5, parent_original4.children[2]);
			item5.classList.remove('done');
		}
	}
}

window.addEventListener('load', function() {
    move1();
    move2();
    move3();
    move4();
    move5();
});

window.addEventListener('resize', function() {
    move1();
    move2();
    move3();
    move4();
    move5();
});