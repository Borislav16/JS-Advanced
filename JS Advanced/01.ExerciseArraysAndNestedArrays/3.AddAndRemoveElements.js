function solve(arr){
    let newArr = [];
    let number = 1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "add"){
            newArr.push(number);
            number++;
        }
        else{
            newArr.pop();
            number++;
        }   
    }
    return newArr.length? newArr.join('\n') : "Empty";
}


