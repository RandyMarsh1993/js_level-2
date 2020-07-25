'use strict';

const API = 'https://raw.githubusercontent.com/RandyMarsh1993/diagonAlley_API/master/responses';

class ProductsList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = [];
		this.allProducts = [];
		this._getProducts()
			.then(data => {
				this.goods = [...data];
				this.render();
				basket.initBuyBtns();
			});
	}

	/*
	_fetchProducts() {
		this.goods = [
			{ id: 1, title: 'Ковёр-самолёт', price: 700 },
			{ id: 2, title: 'Нимбус 2000', price: 2400 },
			{ id: 3, title: 'Шапка-невидимка', price: 230 },
		];
	}
	*/

	_getProducts() {
		return fetch(`${API}/catalogData.json`)
			.then(result => result.json())
			.catch(err => console.log(err))
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

class Basket {
	constructor() {
		this.products = {};
	}

	initBuyBtns() {
		this.buyBtns = document.querySelectorAll('.toBasketBtn');
		this.buyBtns.forEach(function(button) {
			button.addEventListener('click', (event) => {
				let id = event.srcElement.dataset.id;
				let name = event.srcElement.dataset.name;
				let price = event.srcElement.dataset.price;
				basket.addProduct({id: id, price: price, name: name});
			});
		});
	}

	//метод для добавления товаров в корзину
	addProduct(product) {
		this.addProductToObject(product);
		this.addProductToTable(product);
		this.renderTotalSum();
		this.initRemoveBtnsListeners();
	}

	addProductToObject(product) {
		if (this.products[product.id] == undefined) {
			this.products[product.id] = {
				name: product.name,
				price: product.price,
				count: 1
			}
		} else {
			this.products[product.id].count++;
		}
	}

	addProductToTable(product) {
		let isProductExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
		if (isProductExist) {
			isProductExist.textContent++;
			return;
		}
		let productRow = `
		<tr>
			<td>${product.id}</td>
			<td>${product.name}</td>
			<td>${product.price}$</td>
			<td class="productCount" data-id="${product.id}">1</td>
			<td><i class="far fa-trash-alt removeProductBtn" data-id="${product.id}"></i></td>
		</tr>`;

		let tbody = document.querySelector('tbody');
		tbody.insertAdjacentHTML('beforeend', productRow);
	}

	renderTotalSum() {
		document.querySelector('.sumPrice').textContent = `${this.getSum()}$`;
	}

	getSum() {
		let sum = null;
		for (let product in this.products) {
			sum += this.products[product].price * this.products[product].count;
		}
		return sum;
	}

	initRemoveBtnsListeners() {
		let removeBtns = document.querySelectorAll('.removeProductBtn');
		removeBtns.forEach(button => {
			button.addEventListener('click', this.removeProductListener);
		});
	}

	removeProductListener(event) {
		basket.removeProduct(event);
		basket.renderTotalSum();
	}

	//метод удаления товаров из корзины
	removeProduct(event) {
		let id = event.srcElement.dataset.id;
		this.removeProductFromTable(id);
		this.removeProductFromObject(id);
	}

	removeProductFromTable(id) {
		let countProduct = document.querySelector(`.productCount[data-id="${id}"]`);
		if (countProduct.textContent === '1') {
			countProduct.parentNode.remove();
		} else {
			countProduct.textContent--;
		}
	}

	removeProductFromObject(id) {
		if (this.products[id].count === '1') {
			delete this.products[id];
		} else {
			this.products[id].count--;
		}
	}

	//метод оформления заказа
	buyProducts() {}
}

class BasketItem {
	
}

const list = new ProductsList();
const basket = new Basket();

//const buyBtns = document.querySelectorAll('.toBasketBtn');
const showBasketBtn = document.getElementById('openBasketBtn');
const closeBasketBtn = document.getElementById('closeBasketBtn');
const basketWindow = document.querySelector('.basketWindow');

showBasketBtn.addEventListener('click', () => {
	basketWindow.classList.remove('animate__fadeOut');
	basketWindow.classList.remove('hidden');
	basketWindow.classList.add('animate__fadeIn');
});

closeBasketBtn.addEventListener('click', () => {
	basketWindow.classList.remove('animate__fadeIn');
	setTimeout(() => basketWindow.classList.add('hidden'), 1000);
	basketWindow.classList.add('animate__fadeOut');
});

/*
buyBtns.forEach(function(button) {
	button.addEventListener('click', (event) => {
		let id = event.srcElement.dataset.id;
		let name = event.srcElement.dataset.name;
		let price = event.srcElement.dataset.price;
		basket.addProduct({id: id, price: price, name: name});
	});
});*/

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