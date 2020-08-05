Vue.component('products', {
	props: ['products', 'img'],
	template: `<div class="content-wrapper products">
					<product
					v-for="product of products"
					:key="product.id"
					:img="img"
					:product="product"></product>
				</div>`
				
});

Vue.component('product', {
	props: ['product', 'img'],
	template: `<div class="product-page">
					<a href="#" class="product-page__title link">{{product.title}}</a>
					<span class="product-page__price">{{product.price}}</span>
					<a href="#" class="product-page__image"><img :src="img" alt="" width="250" class="catalog-pic"/></a>
					<div class="buttons-wrapper">
						<button class="toBasketBtn" @click="$parent.$emit('add-product', product)">Купить</button>
					</div>
			</div>`
});