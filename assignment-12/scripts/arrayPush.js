const arrayPush = (arr,ele) => {
    arr[arr.length]=ele;
}
const arr = [1,2,3,4,5];
const ele = 9;
const tempArray = [...arr];
arrayPush(arr,ele)
console.log(`after adding the [${ele}] to [${tempArray}] resultant array is : [${arr}]`);