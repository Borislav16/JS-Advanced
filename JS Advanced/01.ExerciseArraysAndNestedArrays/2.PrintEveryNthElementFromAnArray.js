function solve(arr, step){
    let newArr = [];
    let counter = 0;
    for(let i = 0; i <= arr.length; i+=step){
        newArr[counter++] = arr[i];
    }

    return newArr;
}
