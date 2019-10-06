// 1.
function distFromAverage(array) {
    const arraySum = array.reduce((prev, next) => prev + next);
    const averageNumber = arraySum / array.length;
    
    const outputArray = array.map((variable) => {
        return variable - averageNumber;
    });

    console.log(outputArray);
    return outputArray;
}

distFromAverage([1,1,1,1]);

// 2.
const array 