const arrayUnShift = (arr,ele)=>{
    const temp = [...arr];
    for(i=arr.length-1;i>=0;i--){
        arr[i+1]=arr[i];
    }
    arr[0]=ele;
    console.log(`unshift operation on [${temp}] with add parameter as ${ele} resultant array is ${arr}`);
    return arr;
}

arrayUnShift([1,2,3,4,5,6],10);