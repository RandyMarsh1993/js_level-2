const API = 'https://raw.githubusercontent.com/RandyMarsh1993/diagonAlley_API/master/responses';

const app = new Vue({
	el: '#app',
	
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(err => console.log(err))
		},
		postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
		putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        }
	}
});