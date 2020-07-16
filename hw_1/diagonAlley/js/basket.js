'use strict';

let buyBtn = document.querySelectorAll('.toBasketBtn');
let showBasketBtn = document.getElementById('openBasketBtn');
let closeBasketBtn = document.getElementById('closeBasketBtn');
let basketWindow = document.querySelector('.basketWindow');

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

buyBtn.forEach(function(button) {
	button.addEventListener('click', (event) => {
		let id = event.srcElement.dataset.id;
		let name = event.srcElement.dataset.name;
		let price = event.srcElement.dataset.price;
		basket.addProduct({id: id, price: price, name: name});
	});
});

let basket = {
	products: {},

	addProduct(product) {
		this.addProductToObject(product);
		this.addProductToBasket(product);
		this.renderTotalSum();
		this.initRemoveBtnsListeners();
	},

	addProductToObject(product) {
		if (this.products[product.id] == undefined) {
			this.products[product.id] = {
				price: product.price,
				name: product.name,
				count: 1
			}
		} else {
			this.products[product.id].count++;
		}
	},

	addProductToBasket(product) {
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
	},

	renderTotalSum() {
		document.querySelector('.sumPrice').textContent = `${this.getSum()}$`;
	},

	getSum() {
		let sum = null;
		for (let key in this.products) {
			sum += this.products[key].price * this.products[key].count;
		}
		return sum;
	},

	initRemoveBtnsListeners() {
		let removeBtns = document.querySelectorAll('.removeProductBtn');
		removeBtns.forEach((button) => {
			button.addEventListener('click', this.removeProductListener);
		});
	},

	removeProductListener(event) {
		basket.removeProduct(event);
		basket.renderTotalSum();
	},

	removeProduct(event) {
		let id = event.srcElement.dataset.id;
		this.removeProductFromBasket(id);
		this.removeProductFromObject(id);
	},

	removeProductFromBasket(id) {
		let countProduct = document.querySelector(`.productCount[data-id="${id}"]`);
		if (countProduct.textContent === '1') {
			countProduct.parentNode.remove();
		}  else {
			countProduct.textContent--;
		}
	},

	removeProductFromObject(id) {
		if (this.products[id].count === '1') {
			delete this.products[id];
		} else {
			this.products[id].count--;
		}
	}
};