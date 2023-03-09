inputFeilds = document.querySelectorAll('input');
errorMessage = document.getElementById("errorMessage");
dataOutputFeilds = document.querySelectorAll('h1.number')

const timeObj = {};
const timeConstants = [{name:'days',totalSeconds: 24*60*60,max: Number.MAX_VALUE},{name:'hours',totalSeconds:60*60,max: 23},{name:'minutes',totalSeconds: 60,max: 59},{name:'seconds',totalSeconds:1,max: 59}]
const formatInput = (data)=>{
    timeInSec = 0;

    for(i of timeConstants){
        timeInSec += data[i.name]*i.totalSeconds;
    }
    
    for(i of timeConstants){
        data[i.name] = Math.floor(timeInSec/i.totalSeconds);
        timeInSec = timeInSec%i.totalSeconds;
    }   
}
const formatOutput = (data)=>{
    formatedResult = data.toString();
    if(formatedResult.length<2)
        formatedResult='0'+formatedResult;
    return formatedResult;
}

const writeOutput = ()=>{
    for(i of dataOutputFeilds){
        i.innerHTML = formatOutput(timeObj[i.id]);
    }
}

const clearInputs = ()=>{
    for(i of inputFeilds)
        i.value='';
}

const setTimer = ()=>{
    for(i of inputFeilds){
        if(i.value!==''&&Number.isNaN(Number.parseInt(i.value))&&Number.parseInt(i.value)<0){
            errorMessage.innerHTML = `invalid ${i.name} input`
            return;
        }
        timeObj[i.name] = Number.parseInt(i.value===''?'0':i.value);
    }
    errorMessage.innerHTML = '';

    formatInput(timeObj);
    
    writeOutput();

    clearInputs();
}
document.getElementById('setTimer').addEventListener('click',setTimer);

const updateTime = ()=>{
    for(i=timeConstants.length-1;i>=0;i--){
        const temp = timeConstants[i];
        if(timeObj[temp.name]!=0){
            timeObj[temp.name]--;
            for(j=i+1;j<timeConstants.length;j++){
                const temp1 = timeConstants[j];
                timeObj[temp1.name] = temp1.max;
            }
            break;    
        }
    }
    writeOutput();
    flag = true;
    for(i in timeObj){
        if(timeObj[i]!==0)
            flag=false;
    }
    if(flag){
        pauseTime();
        togglePopup();
    }
}

interval = '';
const startTimer = ()=>{
    clearInterval(interval);
    updateTime();
    interval = setInterval(updateTime,1000);
}
document.getElementById("startResume").addEventListener('click',startTimer);

const pauseTime = ()=>{
    clearInterval(interval);
}
document.getElementById('pause').addEventListener('click',pauseTime);

const resetTime = ()=>{
    clearInterval(interval);
    for(i of timeConstants){
        timeObj[i.name]=0;
    }
    writeOutput();
}
document.getElementById('reset').addEventListener('click',resetTime);

const togglePopup = ()=>{
    document.getElementById('popup').classList.toggle('active');
    document.getElementById('backdrop').classList.toggle('active');
} 

const hidePopup = ()=>{
    togglePopup();
}
document.getElementById("modalBnt").addEventListener('click',hidePopup);