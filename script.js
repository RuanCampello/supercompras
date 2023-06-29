// icon and theme changer
let icon = document.getElementById('toggle-btn');
let themeChanger = document.getElementById('theme');
let buttonPurple = document.querySelectorAll('.btn-outline-purple');
console.log(buttonPurple[0]);
let textPurple = document.querySelectorAll('.text-purple');
let storeText = document.querySelectorAll('.store-text');
let carouselBtn = document.querySelectorAll('.carousel-light');
let nav = document.getElementById('nav');
let cardBackground = document.querySelectorAll('.card-body, .bg-light');

const buttonOutlineToggler = function (event) {
	if(event === 'light'){
		storeText.forEach(element => element.classList.add('store-text-color'));
		carouselBtn.forEach(element => element.classList.replace('carousel-dark', 'carousel-light'));
		nav.classList.replace('bg-dark', 'bg-light');
		cardBackground.forEach(element => element.classList.replace('bg-dark', 'bg-light'));
	}
	else if(event === 'dark'){
		storeText.forEach(element => element.classList.remove('store-text-color'))
		carouselBtn.forEach(element => element.classList.replace('carousel-light', 'carousel-dark'));
		nav.classList.replace('bg-light', 'bg-dark');
		cardBackground.forEach(element => element.classList.replace('bg-light', 'bg-dark'));
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
let scrollPosition = 0
$('#carouselExample .carousel-control-next').on('click', function(){
	if(scrollPosition < (cWidth-(imgWidth*3))){
		scrollPosition += imgWidth;
		$('.carousel-inner').animate({scrollLeft: scrollPosition, behavior: 'smooth'});
	}
});
$('#carouselExample .carousel-control-prev').on('click', function(){
	if(scrollPosition > 0){
		scrollPosition -= imgWidth;
		$('.carousel-inner').animate({scrollLeft: scrollPosition, behavior: 'smooth'});
	}
});

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.querySelectorAll('.navbar-top').forEach(element => element.classList.add('fixed-top'));
        // add padding top to show content behind navbar
        let navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.querySelectorAll('.navbar-top').forEach(element => element.classList.remove('fixed-top'));
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});