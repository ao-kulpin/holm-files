<script>
const swiper = new Swiper('.swiperCarousel', {
	slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
 
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
		1024: {
			slidesPerView: 3,
      spaceBetween: 20
		}
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
		scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
      }
});
	
const swiper2 = new Swiper('.swiperGallery', {
	slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  //slidesPerView: "auto", 
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
 
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
		1024: {
			slidesPerView: 2,
      spaceBetween: 20
		}
	},
  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev'
  },
		scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
      }
});

const swiperActual = new Swiper('.swiperActual', {
	slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,
  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev'
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 20
    },
 
    800: {
      slidesPerView: 3,
      spaceBetween: 20
    }
	}
});

</script>