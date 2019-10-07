function showProps(obj) {
	for (let prop in obj) {
		let value = obj[prop];
		console.log(prop, ':', value);
	}
}

// zad 0a
const city = {
	capital: 'Krakow',
	population: 120000,
	president: 'Unknown',
	primeMinisters: [
		'first', 'second', 'third'
	]
};

showProps(city);

// zad 0b
const timeMachine = {
	shape: 'rect',
	model: 'sample',
	run(date, place) {
		console.log(`You've visited ${place} in ${date}`);
	}
};

console.log(timeMachine.shape, timeMachine.model);
timeMachine.run();

// zad 1
const book = {
	title: 'Title',
	author: 'Author',
	numberOfPages: 420
};

showProps(book);

// zad 2
const person = {
	name: 'john',
	age: 25,
	sayHello() {
		console.log('Hello');
	}
};
const { name, age } = person;
console.log(name, age);
person.sayHello();

// zad 3
const recipe = {
	title: 'burrito',
	servings: 5
};

recipe.ingredients = [
	'bean', 'corn', 'tomatoes', 'eggs', 'meat'
];

showProps(recipe);
