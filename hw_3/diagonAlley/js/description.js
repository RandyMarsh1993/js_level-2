'use strict';

/*
Использовал одну из страниц с самого первого задания вводного курса по верстке
*/

let productPages = document.querySelectorAll('.product-page');
let descriptionButtons = document.querySelectorAll('.description-button');
let images = document.querySelectorAll('.product-page__image');

descriptionButtons.forEach((button, index) => {
	button.addEventListener('click', function() {
		toggleImageVisibility(index);
		if (descriptionButtons[index].innerHTML == 'Отмена') {
			deleteDescription(index);
		} else {
			getDescriptionText(index);
		}
		replaceButtonText(index);
	});
});

/**
 * функция добавляет элементу класс hiden если его нет
 * и удаляет его, если класс есть
 * @param {number} index 
 */
function toggleImageVisibility(index) {
	images[index].classList.toggle('hidden');
}

/**
 * функция меняет текст на кнопке
 * @param {number} index 
 */
function replaceButtonText(index) {
	if (descriptionButtons[index].innerHTML == 'Отмена') {
		descriptionButtons[index].innerHTML = 'Подробнее'
	} else {
		descriptionButtons[index].innerHTML = 'Отмена';
	}
}

/**
 * функция генерирует div с заданными классом и соержимым
 * и вставляет его со страницы
 * @param {number} index 
 */
function getDescriptionText(index) {
	let textDiv = document.createElement('div');
	textDiv.className = 'textDescription';
	textDiv.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quos modi ratione. Voluptatem, atque molestiae.';
	images[index].after(textDiv);
}

/**
 * функция удаляет элемент с заданным классом со страницы
 * @param {number} index 
 */
function deleteDescription(index) { 
	let description = productPages[index].querySelector('.textDescription');
	description.remove();
}