console.log('swiper.js')

const Swiper = require('swiper').default
// import Swiper from 'swiper';

// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles


const swiper = new Swiper('.designed__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    speed: 400,

    autoplay: true
});

