Vue.component('products', {
	data() {
		return {
			catalogUrl: '/catalogData.json',
			products: [],
			filteredproducts: [],
		}
	},
	methods: {
		filterProducts(searchLine) {
			const filterStr = new RegExp(searchLine, 'i');
			this.filteredproducts = this.products.filter(product => filterStr.test(product.title));
		}
	},
	mounted() {
		this.$parent.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for (let product of data) {
					this.products.push(product);
					this.filteredproducts.push(product);
				}
			});

		/*
		this.$parent.getJson(`../../db/products`)
		.then(data => {
			console.log(data);
			for (let product of data) {
				this.products.push(product);
				this.filteredproducts.push(product);
			}
		});
		*/
	},
	template: `<div class="content-wrapper products">
					<product
					v-for="product of filteredproducts"
					:key="product.id"
					:product="product"
					></product>
				</div>`
				
});

Vue.component('product', {
	props: ['product'],
	template: `<div class="product-page">
					<a v-bind:href="product.href" class="product-page__title link">{{product.title}}</a>
					<span class="product-page__price">{{product.price}}</span>
					<a v-bind:href="product.href" class="product-page__image"><img v-bind:src="product.img" alt="" width="250" class="catalog-pic"/></a>
					<div class="buttons-wrapper">
						<button class="toBasketBtn" @click="$parent.$parent.$refs.basket.addProduct(product)">Купить</button>
					</div>
			</div>`
});