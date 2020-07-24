'use strict';

window.onload = () => {
	document.getElementById('calculate').addEventListener('click', () => {
		let burger = new Burger('size', 'stuffing', 'topping');
		console.log(burger);
		burger.showSum("#price", "#calories");
	});
}