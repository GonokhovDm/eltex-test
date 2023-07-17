//anchors
const anchors = document.querySelectorAll('a[data-goto]');
if(anchors) {
  anchors.forEach(item => {
    item.addEventListener('click', onMenuClick);
  });

  function onMenuClick(e) {
    const anchor = e.target;
    console.log(anchor)
    if(anchor.dataset.goto && document.querySelector(anchor.dataset.goto)) {
      const gotoBlock = document.querySelector(anchor.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.nav').offsetHeight - 20;
      
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

//menu Burger
const iconMenu = document.querySelector('.burger');
if (iconMenu) {
	const bgDark = document.querySelector('.bg-dark');
  const wrapper = document.querySelector('.wrapper');
  const body = document.querySelector('body');
	iconMenu.addEventListener("click", function (e) {
		bgDark.classList.toggle('active');
    wrapper.classList.toggle('active');
    body.classList.toggle('scroll-hiden');
	});
}

function onClickHideMenu() {
	const bgDark = document.querySelector('.bg-dark');
  const wrapper = document.querySelector('.wrapper');
  const body = document.querySelector('body');
	if ((bgDark) && (wrapper)) {
		bgDark.classList.toggle('active');
    wrapper.classList.toggle('active');
    body.classList.toggle('scroll-hiden');
	}
}

//swiper init
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    1440: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//swiper card on hover
let cardItems = document.querySelectorAll('.courses__cards-item')
cardItems.forEach((element, index) => {
  element.addEventListener('mouseenter', function() {
    element.classList.add('active');
  })
  element.addEventListener('mouseleave', function() {
    element.classList.remove('active');
  })
});