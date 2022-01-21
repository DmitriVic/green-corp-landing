const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep (i, element, endNumber) {
	if (i <= endNumber) {
		if (i === endNumber) {
			element.innerText = i + '+';
		 } else {
			element.innerText = i;
		 }
		 i+= 100;
	 }
	 setTimeout(function(){increaseNumberAnimationStep (i, element, endNumber)}, INCREASE_NUMBER_ANIMATION_SPEED)
 }

 function initIncreaseNumberAnimation() {
	let element = document.querySelector(".features__clients-count")
	increaseNumberAnimationStep(0, element, 5000)
 }
 initIncreaseNumberAnimation();

 //let element = document.querySelector(".features__clients-count")
 //document.getElementsByClassName('features__clients-count')
 //increaseNumberAnimationStep

 document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
	if (event.target.value === 'other') {
		// Должны добавить еще одно текстовое поле
		const formContainer = document.createElement('div')
		formContainer.classList.add("form__group", "form__other")

		const input = document.createElement('input')
		input.setAttribute('placeholder', 'Введите ваш вариант');
		input.setAttribute('type', 'text');

		formContainer.appendChild(input) 
		document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit'));
	 }
  
	 if (event.target.value !== 'other') {
		// Удаляем ранее добавленное текстовое поле, если оно есть в DOM
	 }
	
 });


 function updateScroll() {
	let header = document.querySelector('header')
	if (window.scrollY > 0) {
		header.classList.add('header__scrolled');
	 } else {
		header.classList.remove("header__scrolled");
	 }
 }

 window.addEventListener("scroll", updateScroll);
//let f = document.querySelector("#form")

//document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit'));