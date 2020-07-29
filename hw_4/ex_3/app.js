'use strict';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const error = document.querySelector('.error');

inputs.forEach(input => {
	input.addEventListener('input', event => {
		if (input.validity.valid) {
			error.innerHTML = '';
			error.className = 'error';
		}
	}, false);
});

form.addEventListener('submit', event => {
	inputs.forEach(input => {
		if (!input.validity.valid) {
			error.innerHTML = `Данные в поле ${input.id} некорректны!`;
			error.className = 'error active';
			event.preventDefault();
		}
	}, false);
});