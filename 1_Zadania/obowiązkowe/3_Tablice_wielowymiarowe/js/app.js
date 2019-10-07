
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// zad 0
function checkArray(array2D) {
    const outputArray = [];
    array2D.forEach((el) => {
        const sum = el.reduce((el, prev) => el + prev);

        if (sum % 2 === 0 ) outputArray.push(true);
        else outputArray.push(false);
    });

    return outputArray;
}

const even2DArray = checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]);

console.log(even2DArray);

// // zad 1
console.log(task1Array[2][1]);
console.log(task1Array[1].length);
console.log(task1Array[3][1]);

// zad 2.1
for (let i = 0; i < task2Array[0].length; i++) {
    console.log(task2Array[0][i]);   
};

// zad 2.2
console.log(task2Array[1].length);
// todo 2.3

for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

// zad 3 & 4
const arr2D = [
    [1, 4, 5],
    [3, 24, 12]
];

function print2DArray(array2D) {
    return array2D.forEach((dimension) => dimension.forEach((x) => console.log(x)));
}

print2DArray(arr2D);

// zad 5
function create2DArray(rows, columns) {
    let value = 0;
    let outputArray = [];

    for (let i = 0; i < rows; i++) {
        if (!outputArray[i])
            outputArray[i] = [];
        for (let j = 0; j < columns; j++)
            outputArray[i][j] = value++; 
    }
    return outputArray;
};

const created2DArray = create2DArray(5,3);
console.log(created2DArray);