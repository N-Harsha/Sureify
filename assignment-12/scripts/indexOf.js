const indexOf = (arr,target)=>{
    res=-1;
    i=0;
    for(;i<arr.length;i++)
        if(arr[i]===target)
            break;
    console.log(`first occurence of ${target} in [${arr}] is ${i===arr.length?-1:i}`);
}

indexOf([1,2,3,4,4,5],4)