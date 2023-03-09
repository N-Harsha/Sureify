const lastIndexOf = (arr,target)=>{
    i = arr.length-1;
    for(;i>=0;i--){
        if(arr[i]==target)
            break;
    }
    console.log(`last index of the ${target} in ${arr} is ${i}`);
}
lastIndexOf([1,2,3,4,4,5,6],4);