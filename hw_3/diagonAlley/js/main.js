'use strict';

class ProductsList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = [];
		this.allProducts = [];
		this._fetchProducts();
		this.render();
	}

	_fetchProducts() {
		this.goods = [
			{ id: 1, title: 'Ковёр-самолёт', price: 700 },
			{ id: 2, title: 'Нимбус 2000', price: 2400 },
			{ id: 3, title: 'Шапка-невидимка', price: 230 },
		];
	}

	render() {
		const block = document.querySelector(this.container);
		for (let product of this.goods) {
			const item = new ProductItem(product);
			this.allProducts.push(item);
			block.insertAdjacentHTML('beforeend', item.render());
		}
	}

	/**
	 * метод вычисляет суммарную стоимость всех товаров
	 * и выводит её в консоль
	 */
	sumPrices() {
		let sum = 0;
		for (let product of this.goods) {
			sum += product.price;
		}
		console.log(sum);
	}
	//не стал вызывать метод в конструкторе - вызвал его после создания объекта list
}

class ProductItem {
	constructor (product) {
		this.title = product.title;
		this.id = product.id;
		this.price = product.price;
	}

	render() {
		return `<div class="product-page">
					<a href="#" class="product-page__title link">${this.title}</a>
					<span class="product-page__price">${this.price}$</span>
					<a href="#" class="product-page__image"><img src="img/img${this.id}.jpg" alt="${this.title}" width="250" class="catalog-pic"/></a>
					<div class="buttons-wrapper">
						<button class="description-button">Подробнее</button>
						<button class="toBasketBtn" data-id="${this.id}" data-price="${this.price}" data-name="${this.title}">Купить</button>
					</div>
				</div>`
	}
}

//Очень сильно сомневаюсь в правильности выполнения 1 задания.

class Basket {
	constructor() {
		this.products = {};
	}

	//метод для добавления товаров в корзину
	addProductToBasket() {}

	//метод удаления товаров из корзины
	removeProductFromBasket() {}

	//метод рассчета общей стоимости товаров  в корзине
	getTotalSum() {}
	
	//метод вывода общей стоимости товаров в корзине
	renderTotalSum() {}

	//метод оформления заказа
	buyProducts() {}
}

class BasketItem {
	constructor() {
		
	}

	//метод проверки доступности товара
	checkProductAvailability() {}

	renderProductInBasket() {}
}

const list = new ProductsList();
list.sumPrices();


/*
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
*/