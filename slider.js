var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  autoplay: false,
  pagination: true,
  arrows: true,
}); splide.mount();

const menuSwitch = document.querySelector('.mobile-menu__switch');
const menuLinks = document.querySelectorAll('.mobile-menu__link');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (menuSwitch) menuSwitch.checked = false;
    });
});
