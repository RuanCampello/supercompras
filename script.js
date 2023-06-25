// icon and theme changer
let icon = document.getElementById('toggle-btn');
let themeChanger = document.getElementById('theme');
let buttonPurple = document.querySelectorAll('.btn-outline-purple');
console.log(buttonPurple[0]);
let textPurple = document.querySelectorAll('.text-purple');
let storeText = document.querySelectorAll('.store-text');

const buttonOutlineToggler = function (event) {
	if(event === 'light'){
		for(let i = 0; i < 3; i++){
			buttonPurple[i].classList.remove('btn')
			buttonPurple[i].classList.replace( 'btn-outline-light', 'btn-outline-purple');
			textPurple[i].classList.replace('text-light', 'text-purple');
		}
		storeText.forEach(element => element.classList.add('store-text-color'))
	}
	else if(event === 'dark'){
		for(let i = 0; i < 3; i++){
			buttonPurple[i].classList.add('btn')
			buttonPurple[i].classList.replace( 'btn-outline-purple', 'btn-outline-light');
			textPurple[i].classList.replace('text-purple', 'text-light')
		}
		storeText.forEach(element => element.classList.remove('store-text-color'))
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