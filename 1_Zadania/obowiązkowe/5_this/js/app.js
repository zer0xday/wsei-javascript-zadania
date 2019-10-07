// zad 0
const car = {
	brand: 'Lexus',
	color: 'srebrny',
	numberOfKilometers: 0,
	printCarInfo() {
		const { brand, color, numberOfKilometers } = this;
		console.log(`${color} ${brand}, ${numberOfKilometers} km`);
	},
	drive(km) {
		this.numberOfKilometers = km;
	}
};

// car.printCarInfo();
// car.drive(420);
// car.printCarInfo();

// zad 1
car.inspectionDates = [
	'2015-09-04',
	'2016-09-04',
	'2017-09-04',
	'2018-09-04'
];

function addInspectionDate(date) {
	this.inspectionDates.push(date);
};

function getInspectionDates() {
	console.log(this.inspectionDates);
}

car.addInspectionDate = addInspectionDate;
car.addInspectionDate('2019-09-04');

car.getInspectionDates = getInspectionDates;
car.getInspectionDates();

// zad 3
const stairs = {
	step: 0,
	up() {
		this.step++;
	},
	down() {
		this.step--;
	},
	printStep() {
		console.log(this.step);
	}
};

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2
