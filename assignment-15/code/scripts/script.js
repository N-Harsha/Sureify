import { addNewUser, loadUserData, updateUser } from "./util.js";

window.onload = () => {
  loadUserData();
};

const addBtn = document.getElementById("addBtn");
const backDrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");

export const closeModal = () => {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
    backDrop.classList.remove("active");
  }
  window.currentUser = undefined;
};

backDrop.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

export const openModal = (data) => {
  const objKeys = Object.keys(data);
  const inputFeilds = document.querySelectorAll("input,select");
  for (let j of inputFeilds) {
    j.value = objKeys.length === 5 ? data[j.name] : "";
  }
  if (!modal.classList.contains("active")) {
    modal.classList.add("active");
    backDrop.classList.add("active");
  }
};
addBtn.addEventListener("click", openModal);

const validateInput = (obj) => {
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const statusRegex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
  if (!nameRegex.test(obj.name)) {
    return "invalid Name.";
  }
  if (obj.presence === "none") {
    return "select a presence type.";
  }
  if (!statusRegex.test(obj.statusMessage)) {
    return "invalid status Message";
  }

  return "";
};

const processFormSubmit = () => {
  const inputFeilds = document.querySelectorAll("input,select");
  const obj = {};
  for (let i of inputFeilds) {
    obj[i.name] = i.value;
  }
  const error = validateInput(obj);
  document.getElementById("errorMessage").innerHTML = error;
  if (error !== "") {
    return;
  }
  if (window.currentUser === undefined) {
    addNewUser(obj);
  } else {
    updateUser(obj, window.currentUser);
  }
};
okBtn.addEventListener("click", processFormSubmit);
