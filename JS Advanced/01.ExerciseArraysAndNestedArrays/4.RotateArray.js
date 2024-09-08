function solve(arr, count){
    for(let i = 0; i < count; i++){
        arr.unshift(arr.pop());
    }

    return arr.join(" ");
}


console.log(solve(['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15
    ))