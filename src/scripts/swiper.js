// const Swiper = require('swiper').default
import Swiper, {Autoplay, Navigation} from 'swiper';

const swiper = new Swiper('.designed__swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    speed: 400,
    autoplay: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        // when window width is >= 320px
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        // when window width is >= 480px
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
            loopedSlides: 2,
            centeredSlides: true,
        },
        // when window width is >= 640px
        1600: {
            init: false,
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

const swiperTokenMain = new Swiper('.token__main__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 400,
    autoplay: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 40,
            centeredSlides: false,
        },
        992: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

const swiperTeam = new Swiper('.team-swiper', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: {
        nextEl: '.team__swiper-button-next',
        prevEl: '.team__swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        375: {
            spaceBetween: 10,
        }
    }
});

const swiperFundMain = new Swiper('.fund__main__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 400,
    autoplay: true,
    breakpoints: {
        320: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 40,
            centeredSlides: false,
        },
        992: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});


