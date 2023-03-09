const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const expWrapper = document.getElementById('exp-wrapper');
const modalAddBtn = document.getElementById("modal-add-btn");
const modalError = document.getElementById("modal-error")

//to toggle the popup and backdrop
const toggle = ()=>{
    backdrop.classList.toggle('active');
    modal.classList.toggle('active');
    if(modalError.classList.contains('active')){
        modalError.classList.remove('active');
    }
    document.getElementById('exp-form').reset();
}

document.getElementById('modal-cancel-btn').addEventListener("click",toggle);
document.getElementById('add-exp-btn').addEventListener("click",toggle);

const exp = [];


const validateModalInput = ()=>{
    const formData = {};
    const form = modal.children[1];
    for(i=1;i<=3;i++){
        const temp = form.children[i].children[2];
        formData[temp.name] = temp.value;
    }
    console.log(formData);
    const companyRegex = /^[a-zA-Z0-9&.'’ -]{2,100}$/;
    const tenureRegex = /^[1-9][0-9]?$/;
    const descriptionRegex = /^[a-zA-Z0-9&.'’\-(),;:/"\[\]\{\}\|#@\\s ]{0,250}$/;

    if(!companyRegex.test(formData.company)){
        return 'invalid Company name';
    }
    
    if(!tenureRegex.test(formData.tenure)){
        console.log('tenure invalid');
        return 'invalid tenure';
    }

    if(!descriptionRegex.test(formData.description)){
        return 'invalid Description';
    }

    return formData;
}

//populating the exp table 

expTableHead = '';
expTableBody = '';

const cap = (s) =>{
    return s.charAt(0).toUpperCase() + s.slice(1);
}

const processExp = ()=>{
    const response = validateModalInput();
    
    if(typeof response === 'string'){
    if(!modalError.classList.contains('active'))
    modalError.classList.add('active');
    modalError.innerHTML = response;
    return;
    }
    exp.push(response);

    if(expWrapper.innerHTML===''){
        expTableHead += '<tr>'
        for(i in response){
            expTableHead+='<th>'+cap(i)+'</th>';
        }   
        expTableHead += '</tr>';
    }
    
    expTableBody+='<tr>';
    for(i in response)
    {
        expTableBody += '<td>'+response[i]+'</td>'
    }
    expTableBody+='</tr>'

    const finalExpTable = '<table>'+expTableHead+expTableBody+'</table>';
    expWrapper.innerHTML = finalExpTable;
    toggle();
}

modalAddBtn.addEventListener('click',processExp)

//adding the main form submission code here
const formError = document.getElementById("form-error");

function isValidDateOfBirth(dateOfBirth) {

    if(dateOfBirth==='')
    return false;

    const date = new Date(dateOfBirth);

    if (isNaN(date.getTime())) {
      return false;
    }
  
    if (date.getTime() > Date.now()) {
      return false;
    }
  
    const ageMillis = Date.now() - date.getTime();
    const ageYears = ageMillis / (1000 * 60 * 60 * 24 * 365.25);
    if (ageYears < 18) {
      return false;
    }
    return true;
  }
  const isValidPassedOutYear = (year,dob)=>{
    const yearRegex = /^[1-2][0-9]{3}$/;
    if(!yearRegex.test(year))
        return false;
    const currentDate = new Date();
    const DOB = new Date(dob);
    if(Number(year)>currentDate.getFullYear()){
        return false;
    }
    if(Number(year)<=DOB.getFullYear()){
        return false;
    }
    return true;
  }
  
const formValidation = (data)=>{
    const firstNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const lastNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    const phnoRegex = /^\+?\d{1,3}?[- .]?\(?\d{3}\)?[- .]?\d{3}[- .]?\d{4}$/;
    const streetRegex = /^[a-zA-Z0-9\s,'-\/]{10,}$/;
    const cityRegex = /^[a-zA-Z\s,'-]+$/;
    const collageRegex = /^[a-zA-Z\s,'-]{5,}$/;
    const qualificationRegex = /^[a-zA-Z\s,'()\-.]*$/;

    console.log(data);

    if(!firstNameRegex.test(data.firstName)){
        return 'invalid First Name';
    }

    if(!lastNameRegex.test(data.lastName)){
        return 'invalid Last Name';
    }
    if(!emailRegex.test(data.email)){
        return 'invalid Email Address';
    }
    if(!phnoRegex.test(data.phno)){
        return 'invalid Phone Number'
    }
    if(!isValidDateOfBirth(data.dob)){
        return 'invalid Date Of Birth';
    }
    if(!streetRegex.test(data.street)){
        return 'invalid Street Address';
    }
    if(!cityRegex.test(data.city)){
        return 'invalid City Name';
    }
    if(!cityRegex.test(data.state)){
        return 'invalid City Name';
    }
    if(!collageRegex.test(data.collage)){
        return 'invalid Collage Name';
    }
    if(!qualificationRegex.test(data.qualification)){
        return 'invalid Qualification.';
    }
    if(!isValidPassedOutYear(data.passedOutYear)){
        return 'invalid Passed Out Year';
    }
    return ''
}
const processForm = () =>{
    const form = document.getElementById("main-form");
    const formInputFields = form.querySelectorAll('input');
    const formData = {};
    for(i of formInputFields){
        formData[i.name]=i.value;
    }

    const response = formValidation(formData);
    if(response !== ''){
        if(!formError.classList.contains('active'))
            formError.classList.add('active')
        formError.innerHTML = response;
    }
    else{
        formError.classList.remove('active')
    }

}
document.getElementById('submit-btn').addEventListener('click',processForm)