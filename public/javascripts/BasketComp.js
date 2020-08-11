const API = 'https://raw.githubusercontent.com/RandyMarsh1993/diagonAlley_API/master/responses';

Vue.component('basket', {
	data() {
		return {
			basket: [],
			basketUrl: '/getBasket.json',
			isVisibleBasket: false,
			sumPrice: 0
		}
	},
	methods: {
		addProduct(product) {
			/*
			let isFound = this.basket.find(el => el.id === product.id);
			if (isFound) {
				this.$parent.putJson(`/api/basket/${isFound.id}`, {count: 1})
					.then(data => {
						if (data.result === 1) {
							isFound.count++;
						}
						this.getSumPrice(); 
					})
			} else {
				const prod = Object.assign({count: 1}, product);
				this.$parent.postJson(`api/basket`, prod)
					.then(data => {
						if (data.result === 1) {
							this.basket.push(prod)
						}
						this.getSumPrice(); 
					})
			}
			*/
			
			this.$parent.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						let isFound = this.basket.find(elem => elem.id === product.id);
						if (isFound) {
							isFound.count++;
						} else {
							let prod = Object.assign({count: 1}, product);
							this.basket.push(prod);
						}
					} else {
						console.log('Error');
					}
					this.getSumPrice(); 
				});
				
		},
		removeproduct(product) {
			this.$parent.getJson(`${API}/deleteFromBasket.json`)
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
		}
	},
	mounted() {
		this.$parent.getJson(`${API + this.basketUrl}`)
			.then(data => {
				for (let product of data.contents) {
					this.basket.push(product);
				}
				this.getSumPrice();
			});
	},
	template: `<div class="basketWindow animate__animated"
				v-show="isVisibleBasket">
					<div class="basketWindow__top">
						<h3 class="basket-h3">Корзина</h3>
						<span class="buyAllBtn">Оформить заказ</span>
						<span class="basketWindow__close" id="closeBasketBtn" v-on:click="isVisibleBasket = !isVisibleBasket"></span>
					</div>
					<table class="basketTable">
						<thead>
							<th>ID</th>
							<th>Наименование товара</th>
							<th>Цена</th>
							<th>Количество</th>
						</thead>
						<basket_item v-for="item of basket" :key="item.id"
						@removeproduct="removeproduct" 
						:product="item"></basket_item>
						<tfoot>
							<tr>
								<td colspan="2">Сумма</td>
								<td><span class="sumPrice"></span>{{sumPrice}}</td>
							</tr>
						</tfoot>
					</table>
					<div class="empty" v-if="!sumPrice">Корзина пуста</div>
				</div>
			   </div>`
});

Vue.component('basket_item', {
	props: ['product'],
	template: `<tbody>
					<tr v-if="product.count">
						<td>{{product.id}}</td>
						<td>{{product.title}}</td>
						<td>{{product.price}}</td>
						<td class="productCount">{{product.count}}</td>
						<td @click="$emit('removeproduct', product)"><i class="far fa-trash-alt"></i>X</td>
					</tr>
				</tbody>`
});