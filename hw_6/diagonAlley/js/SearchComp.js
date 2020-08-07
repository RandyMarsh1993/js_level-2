Vue.component('searchfield', {
	data() {
		return {
			searchLine: ''
		}
	},
	template: `<form action="#" @submit.prevent="$parent.$refs.products.filterProducts(searchLine)" class="searh-form">
					<input type="text" class="search-field" v-model="searchLine">
					<button class="btn-search" type="submit">Найти</button>
				</form>`
});