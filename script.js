// icon and theme changer
const icon = document.getElementById('toggle-btn');
/* const iconMobile = document.getElementById('toggle-btn-mobile'); */
const themeChanger = document.getElementById('theme');
const buttonPurple = document.querySelectorAll('.btn-outline-purple');
const textPurple = document.querySelectorAll('.text-purple');
const storeText = document.querySelectorAll('.store-text');
const carouselBtn = document.querySelectorAll('.carousel-light');
const shipping = document.querySelectorAll('.text-green');
const cardBackground = document.querySelectorAll('.btn-outline-purple');
const linkTheme = document.querySelectorAll('.link-dark');

const nav = document.querySelectorAll('.navbar');
function buttonOutlineToggler(event) {
	if(event === 'light'){
		localStorage.setItem('theme', 'light')
		carouselBtn.forEach(element => element.classList.replace('carousel-dark', 'carousel-light'));
		cardBackground.forEach(element => element.classList.replace('btn-purple', 'btn-outline-purple'));
		shipping.forEach(element => element.classList.replace('text-orange', 'text-green'));
		nav.forEach(element => element.classList.replace('bg-dark', 'bg-light'));
		linkTheme.forEach(element => element.classList.replace('link-light-gray', 'link-dark'));
	}
	else if(event === 'dark'){
		localStorage.setItem('theme', 'dark')
		carouselBtn.forEach(element => element.classList.replace('carousel-light', 'carousel-dark'));
		cardBackground.forEach(element => element.classList.replace('btn-outline-purple', 'btn-purple'));
		shipping.forEach(element => element.classList.replace('text-green', 'text-orange'));
		nav.forEach(element => element.classList.replace('bg-light', 'bg-dark'));
		linkTheme.forEach(element => element.classList.replace('link-dark', 'link-light-gray'));
		icon.classList.add('bi-moon')
		/* iconMobile.classList.add('bi-moon') */
	}
}
buttonOutlineToggler(localStorage.getItem('theme'))
function setTheme () {
	themeChanger.setAttribute('data-bs-theme', localStorage.getItem('theme'));
}
function setIcon () {
	icon.classList.toggle('bi-moon')
	// iconMobile.classList.toggle('bi-moon')
/* 	if(icon.classList.contains('bi-moon') || iconMobile.classList.contains('bi-moon')) */ 
	if(icon.classList.contains('bi-moon')){
		buttonOutlineToggler('dark');
	}
	else {
		buttonOutlineToggler('light');
	}
}
setTheme()
// icon toggler offcanvas 
const offcanvasCoupom = document.getElementById('offcanvas-coupom');
let iconOffCanvas = document.getElementById('icon-offcanvas');
const iconCanvasToggler = function () {
	iconOffCanvas.classList.toggle('bi-chevron-up');
}
offcanvasCoupom.addEventListener('show.bs.offcanvas', () => {
	iconCanvasToggler();
});
offcanvasCoupom.addEventListener('hide.bs.offcanvas', () => {
	iconCanvasToggler(); //if offcanvas has closed by backdrop, hide.bs.offcanvas will toggle the icon anyway
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
      if (window.scrollY > 140) {
				homeIcon.classList.replace('bi-bag-fill', 'bi-bag');
      } 
			if (window.scrollY > 100) {
				homeIcon.classList.replace('bi-house-fill', 'bi-house');
			}
			if(window.scrollY < 150) {
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
