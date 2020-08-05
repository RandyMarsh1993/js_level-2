Vue.component('basket', {
	props: ['basket', 'visibility', 'sumPrice'],
	template: `<div class="basketWindow animate__animated"
				v-show="visibility">
					<div class="basketWindow__top">
						<h3 class="basket-h3">Корзина</h3>
						<span class="buyAllBtn">Оформить заказ</span>
						<span class="basketWindow__close" id="closeBasketBtn" v-on:click="visibility = !visibility"></span>
					</div>
					<table class="basketTable">
						<thead>
							<th>ID</th>
							<th>Наименование товара</th>
							<th>Цена</th>
							<th>Количество</th>
						</thead>
						<basket-item v-for="product of basket" :key="product.id" :basket-item="product"></basket-item>
						<tfoot>
							<tr>
								<td colspan="2">Сумма</td>
								<td><span class="sumPrice"></span>{{sumPrice}}</td>
							</tr>
						</tfoot>
					</table>
					<div class="empty" v-if="basket.length">Корзина пуста</div>
				</div>
			   </div>`
});

Vue.component('basket-item', {
	props: ['product'],
	template: `<tbody>
					<tr v-if="product.count">
						<td>{{product.id}}</td>
						<td>{{product.title}}</td>
						<td>{{product.price}}</td>
						<td class="productCount">{{product.count}}</td>
						<td v-on:click="$parent.$emit('removeProduct', product)"><i class="far fa-trash-alt removeProductBtn"></i></td>
					</tr>
				</tbody>`
});