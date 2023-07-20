import './scss/main.scss'
import { menu } from './js/menu'
import { search } from './js/search'
import { theme } from './js/theme'

menu()
search()
theme()


// import Swiper JS
import Swiper from 'swiper/bundle';

const swiper1 = new Swiper('.swiper1', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  }
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  }
});