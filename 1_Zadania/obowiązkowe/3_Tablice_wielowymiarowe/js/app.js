
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

// console.log(even2DArray);

// // zad 1
// console.log(task1Array[3, 2]);
// console.log(task1Array[1].length);
// console.log(task1Array[4, 2]);

// zad 2
for (let i = 0; i < task2Array[0].length; i++) {
    console.log(task2Array[0][i]);   
};

console.log(task2Array[1].length);
// todo 2.3
