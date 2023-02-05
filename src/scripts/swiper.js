// const Swiper = require('swiper').default
import Swiper, {Autoplay} from 'swiper';

const swiper = new Swiper('.designed__swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    speed: 400,
    autoplay: true,
    breakpoints: {
        // when window width is >= 320px
        375: {
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

    autoplay: true
});

const swiperFundMain = new Swiper('.fund__main__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 400,

    autoplay: true
});

const swiperPartners = new Swiper('.partners__swiper', {
    modules: [Autoplay],
    loop: true,
    loopedSlides: 2,
    centeredSlides: true,
    spaceBetween: 100,
    speed: 500,
    autoplay: {
        delay: 500,
    },
    breakpoints: {
        // when window width is >= 320px
        375: {
            slidesPerView: 1.5,
            spaceBetween: 74,
        },
        // when window width is >= 320px
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        // when window width is >= 480px
        1200: {
            slidesPerView: 4,
            spaceBetween: 100,
            loopedSlides: 2,
            centeredSlides: true,
        },
        // when window width is >= 640px
        1600: {
            init: false,
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});


