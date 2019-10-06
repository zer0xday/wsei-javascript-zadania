// 1.
function distFromAverage(array) {
    const arraySum = array.reduce((prev, next) => prev + next);
    const averageNumber = arraySum / array.length;
    
    const outputArray = array.map((value) => {
        return value - averageNumber;
    });

    return outputArray;
}

distFromAverage([1,1,1,1]);