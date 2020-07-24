'use strict';

class Burger {
	constructor (size, stuffing, topping) {
		this.size = new Param(this._select(size));
		this.stuffing = new Param(this._select(stuffing));
		this.toppings = this._getToppings(topping);
	}

	_getToppings(name) {
		let result = [];
		this._selectAll(name).forEach(el => {
			result.push(new Param(el));
		});
		return result;
	}

	_select(name) {
		return document.querySelector(`input[name=${name}]:checked`);
	}

	_selectAll(name) {
		return [...document.querySelectorAll(`input[name=${name}]:checked`)];
	}

	_calculatePrice() {
		let sumPrice = this.size.price + this.stuffing.price;
		this.toppings.forEach(topping => sumPrice += topping.price);
		return sumPrice;
	}

	_calculateCalories() {
		let sumCalories = this.size.calories + this.stuffing.calories;
		this.toppings.forEach(topping => sumCalories += topping.calories);
		return sumCalories
	}

	showSum(price, calories) {
		document.querySelector(price).textContent = this._calculatePrice();
		document.querySelector(calories).textContent = this._calculateCalories();
	}
}