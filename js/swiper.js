import Swiper from 'swiper/bundle';

export function swiper() {
  const swiper1 = new Swiper('.swiper1', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,

    autoplay: {
      delay: 3000, // Set the delay in milliseconds (3 seconds in this example)
      disableOnInteraction: false, // Autoplay will continue even when the user interacts with the slider
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    }
  });

  const swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,

    autoplay: {
      delay: 3000, // Set the delay in milliseconds (3 seconds in this example)
      disableOnInteraction: false, // Autoplay will continue even when the user interacts with the slider
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  });
}