function solve(...data){
    let res = {};

    for (let element of data) {
        let type = typeof(element);
        console.log(`${type}: ${element}`);
        if(!res.hasOwnProperty(type)) {
            res[type] = 0;
        }

        res[type] += 1
    }

    let sortResult = Object.entries(res).sort((a, b) => b[1] - a[1]);

    for (let [k, v] of sortResult) {    
        console.log(`${k} = ${v}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });