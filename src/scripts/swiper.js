// const Swiper = require('swiper').default
import Swiper, {Autoplay} from 'swiper';

const swiper = new Swiper('.designed__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    speed: 400,

    autoplay: true
});

const swiperPartners = new Swiper('.partners__swiper', {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 100,
    speed: 400,
    autoplay: {
        delay: 400,
    },
});


