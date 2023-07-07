// icon and theme changer
let icon = document.getElementById('toggle-btn');
let themeChanger = document.getElementById('theme');
let buttonPurple = document.querySelectorAll('.btn-outline-purple');
let textPurple = document.querySelectorAll('.text-purple');
let storeText = document.querySelectorAll('.store-text');
let carouselBtn = document.querySelectorAll('.carousel-light');
let cardBackground = document.querySelectorAll('.btn-outline-purple');
let nav = document.querySelectorAll('.navbar');
const buttonOutlineToggler = function (event) {
	if(event === 'light'){
		carouselBtn.forEach(element => element.classList.replace('carousel-dark', 'carousel-light'));
		cardBackground.forEach(element => element.classList.replace('btn-purple', 'btn-outline-purple'));
		nav.forEach(element => element.classList.replace('bg-dark', 'bg-light'));
	}
	else if(event === 'dark'){
		carouselBtn.forEach(element => element.classList.replace('carousel-light', 'carousel-dark'));
		cardBackground.forEach(element => element.classList.replace('btn-outline-purple', 'btn-purple'));
		nav.forEach(element => element.classList.replace('bg-light', 'bg-dark'));
	}
};
const setIcon = function () {
	icon.classList.toggle('bi-moon')
	if(icon.classList[3] === 'bi-moon') {
		themeChanger.setAttribute('data-bs-theme', 'dark');
		buttonOutlineToggler('dark');
	}
	else {
		themeChanger.setAttribute('data-bs-theme', 'light');
		buttonOutlineToggler('light');
	}
}
// icon toggler offcanvas 
let iconOffCanvas = document.getElementById('icon-offcanvas');
const iconCanvasToggler = function () {
	iconOffCanvas.classList.toggle('bi-chevron-up');
}
const offcanvasCoupom = document.getElementById('offcanvas-coupom');
offcanvasCoupom.addEventListener('hidden.bs.offcanvas', () => {
	iconCanvasToggler(); //if offcanvas has closed by backdrop hidden.bs.offcanvas will toggle the icon anyway
});
// carousel controller 
let cWidth = $('.carousel-inner')[0].scrollWidth;
let imgWidth = $('.carousel-item').width();
let scrollPosition = $('.first-item').width();
$('#discount-carousel .carousel-control-next').on('click', function(){
	if(scrollPosition < (cWidth-(imgWidth*3))){
		scrollPosition += imgWidth;
		$('.carousel-inner').animate({scrollLeft: scrollPosition, behavior: 'smooth'}, 600);
	}
});
$('#discount-carousel .carousel-control-prev').on('click', function(){
	if(scrollPosition > 0){
		scrollPosition -= imgWidth;
		$('.carousel-inner').animate({scrollLeft: scrollPosition, behavior: 'smooth'}, 600);
	}
});

/* mobile nav icons */
const personIcon = document.getElementById('person-icon');
const homeIcon = document.getElementById('house-icon');
const bagIcon = document.getElementById('bag-icon');
const profileCanvas = document.getElementById('profile-offcanvas');
const cartCanvas = document.getElementById('cart-offcanvas');

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 25) {
        document.querySelectorAll('.navbar-top').forEach(element => element.classList.add('fixed-top'));
				homeIcon.classList.replace('bi-bag-fill', 'bi-bag');
        // add padding top to show content behind navbar
        let navbarHeight = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbarHeight + 'px';
      } 
			if (window.scrollY > 250) {
				homeIcon.classList.replace('bi-house-fill', 'bi-house');
			}
			else {
				document.querySelectorAll('.navbar-top').forEach(element => element.classList.remove('fixed-top'));
				// remove padding top from body
        document.body.style.paddingTop = '0';
				homeIcon.classList.replace('bi-house', 'bi-house-fill');
      } 
  });
}); 
/* profile */
profileCanvas.addEventListener('show.bs.offcanvas', () => {
	personIcon.classList.replace('bi-person', 'bi-person-fill');
})
profileCanvas.addEventListener('hidden.bs.offcanvas', () => {
	personIcon.classList.replace('bi-person-fill', 'bi-person');
})
/* cart */
cartCanvas.addEventListener('show.bs.offcanvas', () => {
	bagIcon.classList.replace('bi-bag', 'bi-bag-fill');
})
cartCanvas.addEventListener('hidden.bs.offcanvas', () => {
	bagIcon.classList.replace('bi-bag-fill', 'bi-bag');
})