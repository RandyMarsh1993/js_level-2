'use strict';

const API = 'https://raw.githubusercontent.com/RandyMarsh1993/diagonAlley_API/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		catalogUrl: '/catalogData.json',
		products: [],
		img: 'img/img1.jpg',
		filteredProducts: [],
		basket: [],
		isVisibleBasket: false,
		sumPrice: 0,
		searchLine: '',
		isBasketEmpty: true
	},
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(err => console.log(err))
		},
		addProduct(product) {
			if (!product) {
				basket.push(product);
				this.getSumPrice();
				this.checkBasket();
			}
			if (product) {
				product.product.count++;
				this.getSumPrice();
				this.checkBasket();
			}
		},
		removeProduct(product) {
			product.product.count--;
			this.getSumPrice();
			this.checkBasket();
		},
		getSumPrice() {
			this.sumPrice = 0;
			for (let product of this.basket) {
				this.sumPrice += product.price * product.count;
			}
		},
		filterProducts() {
			const filter = new RegExp(this.searchLine, 'i');
			this.filteredProducts = this.products.filter(product => filter.test(product.title));
		},
		checkBasket() {
			if (this.sumPrice > 0) {
				this.isBasketEmpty = false;
			} else {
				this.isBasketEmpty = true;
			}
		}
	},
	mounted() {
		this.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for(let product of data) {
					this.products.push(product);
					this.filteredProducts.push(product);
					this.basket.push(product);
					this.checkBasket();
				}
			})
	}
});