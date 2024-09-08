function solve(arr){
    let result = [];
    let biggestOne = arr.shift();
    result.push(biggestOne);

    arr.forEach(x => {
        if(biggestOne <= x) {
            biggestOne = x;
            result.push(biggestOne);
        }
    });

    return result;
}