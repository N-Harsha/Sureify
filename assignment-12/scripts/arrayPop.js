const arryPop = (arr)=>{
    const temp = [...arr];
    const lastEle = temp[temp.length-1];
    arr.length = arr.length-1;
    console.log(`after removing the last element(${lastEle}) from [${temp}] the resultant array is [${arr}]`);
    return lastEle;
}

arryPop([1,2,3,4,5,6,7]);