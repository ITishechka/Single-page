/*burger*/

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle ('stop-scrol');
})

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scrol');
  })
})

/*search*/

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('form-search').classList.add('header-form--active')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('form-search').classList.remove('header-form--active')
  })

  document.getElementById('header-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

/*slider*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

/*tabs*/

let tabsBtn = document.querySelectorAll('.working__step-btn');
let tabsItem = document.querySelectorAll('.working__blocks');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('working__step-btn--active')});
    e.currentTarget.classList.add('working__step-btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('working__blocks--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('working__blocks--active');
  });
});

/*accordion*/

let accordion = document.querySelectorAll('.questions__link');

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

accordion.forEach(function(el) {
  el.addEventListener('click', function() {
    el.querySelector('.questions__svg').classList.toggle('questions__svg--active');
  });
})


