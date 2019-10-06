// Zad 0
function distFromAverage(array) {
    const arraySum = array.reduce((prev, next) => prev + next);
    const averageNumber = arraySum / array.length;
    
    const outputArray = array.map((value) => {
        return value - averageNumber;
    });

    return outputArray;
}

distFromAverage([1,1,1,1]);

// Zad 1
const fruits = [
    'Mango', 'Pineapple', 'Apple', 'Dragonfruit', 'Melon'
];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.forEach((fruit) => console.log(fruit));

// zad 3
function printTable(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i]);
    }
}

printTable(fruits);

// zad 4
function multiply(array) {
    return array.reduce((prev, next) => prev * next);
}

const mul = multiply([2, 4, 5, 10]);
console.log(mul);

// zad 5 
// todo
function getEvenAverage(array) {
    let evenValues = null;
    
    evenValues = array.map((value) => {
        if (value % 2) return value;
    });

    const evenAverageValue = evenValues.reduce((prev, next) => prev + next);
    const averageValue = evenAverageValue / evenValues.length;

    console.log(averageValue);
    return averageValue;
}

getEvenAverage([1, 2, 3, 4, 5, 6]);