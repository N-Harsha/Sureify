const arrySort = (a)=>{
    const temp = [...a];
    const n = a.length;
    for(i=0;i<n-1;i++){
        for(j=i+1;j<n;j++){
            if(a[i]>a[j]){
                x = a[j];
                a[j] = a[i];
                a[i] = x;
            }
        }
    }
    console.log(`after sorting [${temp}] result : [${a}]`);
    return a;
}

arrySort([10,2,3,4,5,6,7]);