const concat = (arr1,arr2)=>{
    const res = [];
    
    for(i of arr1)
        res.push(i);
    
    for(i of arr2)
        res.push(i);

    console.log(`concat [${arr1}] and [${arr2}] gives [${res}]`);
}

concat([1,2,3,4],[5,6,7,8]);