import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperParams = {
  modules: [Pagination, Navigation, Scrollbar, Keyboard, Mousewheel],

  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 16 },

    1280: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },

  mousewheel: true,
};

const swiper = new Swiper('.swiper-gallery-init', swiperParams);
