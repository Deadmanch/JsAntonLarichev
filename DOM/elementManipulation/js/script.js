'use strict';

const input = document.querySelector('.input'),
			button = document.querySelector('.button'),
			panel = document.querySelector('.panel'),
			notification = document.querySelector('.notification');

/*button.addEventListener('click', (e) => {
	e.preventDefault();
	if(!input.value) {
		return;
	}
	panel.innerText = input.value;
	input.value = '';
});*/

// Альтернативный метод

function submitForm() {
	if(!input.value) {
		return;
	}
	panel.innerText = input.value;
	input.value = '';
	notification.classList.add('notification__active')
}

function inputChange(e) {
if(e.key === 'Enter') {
	submitForm();
}
}
