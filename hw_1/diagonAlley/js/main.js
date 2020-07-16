'use strict';

/*
Использовал для задания одну из страниц с первого курса по HTML/CSS, поэтому верстка так себе) Корзину и пару кнопок делал на курсе JS level-1, с того времени их н трогал.
*/

const products = [
	{ id: 1, title: 'Ковёр-самолёт', price: 700 },
	{ id: 2, title: 'Нимбус 2000', price: 2400 },
	{ id: 3, title: 'Шапка-невидимка', price: 230 },
];

const renderProduct = (productItem = {id: 0, title: 'Волшебная палочка', price: 1000}) => {
	return `<div class="product-page">
				<a href="#" class="product-page__title link">${productItem.title}</a>
				<span class="product-page__price">${productItem.price}$</span>
				<a href="#" class="product-page__image"><img src="img/img${productItem.id}.jpg" alt="${productItem.title}" width="250" class="catalog-pic"/></a>
				<div class="buttons-wrapper">
					<button class="description-button">Подробнее</button>
					<button class="toBasketBtn" data-id="${productItem.id}" data-price="${productItem.price}" data-name="${productItem.title}">Купить</button>
				</div>
			</div>`
};

const renderPage = list => {
	const productsList = list.map(productItem => renderProduct(productItem));
	console.log(productsList);
	document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);