const arrayShift = (arr)=>{
    // const first = arr[0];
    const first = [...arr][0];
    for(i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr.length = arr.length-1;
    return first;
}
const arr1 = [1,2,3,4,5,6,6];
console.log(`after performing the unshift operation on ${[...arr1]}, result  of unshift : ${arrayShift(arr1)} resultant array is ${arr1}`);