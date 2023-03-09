const sendHTTPRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, url);
    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status < 400) {
        resolve(this.response);
      } else if (this.status >= 400) {
        reject(this.response);
      }
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
};
const validateUserInput = (obj) => {
  const usernameRegex = /^[a-zA-Z0-9_@.-]{3,20}$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  const genderCheck = (data) =>
    data === "male" || data === "female" || data === "other";
  const stateRegex = /^[a-zA-Z\s,'-]+$/;
  const checkFnList = [
    { checkFunction: (data) => usernameRegex.test(data), name: "username" },
    { checkFunction: (data) => nameRegex.test(data), name: "name" },
    { checkFunction: (data) => emailRegex.test(data), name: "email" },
    {
      checkFunction: (data) => genderCheck(data.toLowerCase()),
      name: "gender",
    },
    { checkFunction: (data) => stateRegex.test(data), name: "state" },
  ];
  for (i of checkFnList) {
    if (!i.checkFunction(obj[i.name])) {
      return `Invalid ${i.name}`;
    }
  }
  return "";
};
const processInput = () => {
  const inputFeilds = document.querySelectorAll("input, select");
  const errorRow = document.querySelector(".error");
  const errorMessage = document.getElementById("errorMessage");
  const obj = {};
  for (i of inputFeilds) {
    obj[i.name] = i.value;
  }
  const response = validateUserInput(obj);
  if (response !== "") {
    errorRow.classList.add("active");
    errorMessage.innerHTML = response;
    return;
  }
  errorMessage.innerHTML = "";
  errorRow.classList.remove("active");
  sendHTTPRequest(
    "POST",
    "https://640493793bdc59fa8f3c0a62.mockapi.io/api/v1/users",
    obj
  ).then((response) => {
    alert("user creation successful");
  });
  document.querySelector("form").reset();
};
document.getElementById("formBtn").addEventListener("click", processInput);
