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