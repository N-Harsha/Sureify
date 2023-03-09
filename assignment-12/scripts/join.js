const join = (arr)=>{
    res = '';
    for(i of arr){
        res+=i+' ';
    }
    console.log(`join result of [${arr}] is ${res}`);
}
 join([1,2,3,4,5,6])