Vue.component('searchfield', {
	props: ['search'],
	template: `<form action="#" @submit.prevent="$emit('filter-products')" class="searh-form">
					<input type="text" class="search-field" v-model="search">
					<button class="btn-search" type="submit">Найти</button>
				</form>`
});