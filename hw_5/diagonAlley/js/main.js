const API = 'https://raw.githubusercontent.com/RandyMarsh1993/diagonAlley_API/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		catalogUrl: '/catalogData.json',
		products: [],
		img: 'img/img1.jpg',
		filteredProducts: [],
		basket: [],
		basketUrl: '/getBasket.json',
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
			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						let isFound = this.basket.find(elem => elem.id === product.id);
						if (isFound) {
							isFound.count++;
						} else {
							const prod = Object.assign({count: 1}, product);
							this.basket.push(prod);
						}
					}
					this.getSumPrice();
				});
		},
		removeProduct(product) {
			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						if (product.count > 1) {
							product.count--;
						} else {
							this.basket.splice(this.basket.indexOf(product), 1);
						}
					}
					this.getSumPrice();
				});
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
		}
	},
	mounted() {
		this.getJson(`${API + this.basketUrl}`)
			.then(data => {
				for (let product of data.contents) {
					this.$data.basket.push(product);
				}
				this.getSumPrice();
			});
		this.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for(let product of data) {
					this.products.push(product);
					this.filteredProducts.push(product);
				}
			});
	}
});