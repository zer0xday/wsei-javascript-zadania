// zad 0
class Basket {
	constructor() {
		this.products = [];
		this.sum = 0;
	}

	addProduct(name, price) {
		const { products } = this;
		products.push([name, price]);
		this.sum += price;
	};

	showBasket() {
		const { products, sum } = this;
		for (let index in products)  {
			console.log(products[index]);
		}
		console.log(`Do zapłaty: ${sum}$`);
	}
};
const sampleBasket = new Basket();
sampleBasket.addProduct("pomidor",10);
sampleBasket.addProduct("arbuz",40);
sampleBasket.showBasket();

const secondBasket = new Basket();
secondBasket.addProduct("rice", 10);
secondBasket.addProduct("grzyby mun",50);
secondBasket.addProduct("tofu",20);
secondBasket.showBasket();