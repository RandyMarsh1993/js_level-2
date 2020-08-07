const API = 'https://raw.githubusercontent.com/RandyMarsh1993/diagonAlley_API/master/responses';

const app = new Vue({
	el: '#app',
	
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(err => console.log(err))
		},
		/*
		getSumPrice() {
			this.sumPrice = 0;
			for (let product of this.basket) {
				this.sumPrice += product.price * product.count;
			}
		},
		*/
	}
});