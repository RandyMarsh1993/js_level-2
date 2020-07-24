'use strict';

class Param {
	constructor(element) {
		this.name = element.value;
		this.price = +element.dataset['price'];
		this.calories = +element.dataset['calories'];
	}
}