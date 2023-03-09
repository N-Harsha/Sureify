const sendHTTPRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, url);
    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(this.response);
      } else if (this.status >= 400) {
        reject(this.response);
      }
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const baseURL = "https://640493793bdc59fa8f3c0a62.mockapi.io/api/v1/users";
const tableContainer = document.getElementById("container");
const keys = ["username", "name", "email", "gender", "state"];

const table = document.createElement("table");
tableContainer.appendChild(table);
const tableHeader = document.createElement("tr");
for (i of keys) {
  const tableHead = document.createElement("th");
  tableHead.innerHTML = i.charAt(0).toUpperCase() + i.slice(1);
  tableHeader.appendChild(tableHead);
}
const optionsHead = document.createElement("th");
optionsHead.innerHTML = "options";
tableHeader.appendChild(optionsHead);

const render = (data) => {
  window.data = data;
  table.innerHTML = "";
  table.appendChild(tableHeader);
  idx = 0;
  for (i of data) {
    const tr = document.createElement("tr");
    tr.id = i.id;
    table.appendChild(tr);
    for (j of keys) {
      const td = document.createElement("td");
      tr.appendChild(td);
      td.classList.add(j);
      td.innerHTML = i[j];
    }
    const options = document.createElement("td");
    tr.appendChild(options);

    const editBtn = document.createElement("button");
    options.appendChild(editBtn);
    editBtn.innerHTML = "edit";
    editBtn.addEventListener("click", editUserData(data, i.id, idx, tr));

    const deleteBtn = document.createElement("button");
    options.appendChild(deleteBtn);
    deleteBtn.innerHTML = "delete";
    deleteBtn.addEventListener("click", deleteUserData(data, i.id, idx));

    idx++;
  }
};
page = 1;
sendHTTPRequest("GET", `${baseURL}?page=${page}&limit=15`).then((data) => {
  render(data);
});
document.getElementById("prev").addEventListener("click", () => {
  page--;
  if (page <= 0) page = 1;
  sendHTTPRequest("GET", `${baseURL}?page=${page}&limit=15`).then((data) => {
    render(data);
  });
});
document.getElementById("next").addEventListener("click", () => {
  page++;
  sendHTTPRequest("GET", `${baseURL}?page=${page}&limit=15`).then((data) => {
    render(data);
  });
});

const validateInput = (tr, obj) => {
  const usernameRegex = /^[a-zA-Z0-9_@.-]{3,20}$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  const genderCheck = (data) =>
    data.toLowerCase() === "male" || data.toLowerCase() === "female";
  const stateRegex = /^[a-zA-Z\s,'-]+$/;
  const children = tr.children;
  const checkFnList = [
    { checkFunction: (data) => usernameRegex.test(data), name: "username" },
    { checkFunction: (data) => nameRegex.test(data), name: "name" },
    { checkFunction: (data) => emailRegex.test(data), name: "email" },
    { checkFunction: (data) => genderCheck(data), name: "gender" },
    { checkFunction: (data) => stateRegex.test(data), name: "state" },
  ];
  flag = false;
  idx = 0;
  for (i of checkFnList) {
    if (!i.checkFunction(obj[i.name])) {
      children[idx].classList.add("error");
      flag = true;
    } else {
      children[idx].classList.remove("error");
    }
    idx++;
  }

  if (flag) {
    return flag;
  }
};

const editUserData = (data, userId, idx, tr) => {
  return () => {
    const n = tr.children.length;
    const editBtn = tr.children[n - 1].children[0];
    flag = tr.children[0].classList.contains("editable");
    if (!flag) {
      editBtn.classList.toggle("typeOk");
      editBtn.innerHTML = "ok";
      tr.classList.add("editable");
      for (i = 0; i < n - 1; i++) {
        tr.children[i].classList.add("editable");
        tr.children[i].contentEditable = true;
      }
    } else {
      const obj = {};
      for (i = 0; i < n - 1; i++) {
        obj[tr.children[i].classList[0]] = tr.children[i].innerHTML;
      }
      if (validateInput(tr, obj)) {
        return;
      }
      editBtn.innerHTML = "edit";
      editBtn.classList.toggle("typeOk");
      tr.classList.remove("editable");
      for (i = 0; i < n - 1; i++) {
        tr.children[i].classList.remove("editable");
        tr.children[i].contentEditable = false;
      }
      sendHTTPRequest("PUT", `${baseURL}/${userId}`, obj)
        .then((response) => {
          data.splice(idx, 1, response);
        })
        .catch(() => {
          render(data);
        });
    }
  };
};
const openModal = () => {
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  if (!modal.classList.contains("active")) {
    modal.classList.add("active");
    backdrop.classList.add("active");
  }
};
const closeModal = () => {
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
    backdrop.classList.remove("active");
  }
};

document.getElementById("backdrop").addEventListener("click", closeModal);
document.getElementById("cancelDelete").addEventListener("click", closeModal);

const deleteUserData = (data, userId, idx) => {
  return () => {
    openModal();
    const modalMessage = document.getElementById("modalMessage");
    res = "do you want to delete user with the following details:<br>";
    res += "<table>";
    for (i of keys) {
      res += `<tr><td>${i}</td><td> :</td><td>${data[idx][i]}</td></tr>`;
    }
    res += "</table>";
    modalMessage.innerHTML = res;
    document.getElementById("confirmDelete").addEventListener("click", () => {
      closeModal();
      sendHTTPRequest("DELETE", `${baseURL}/${userId}`).then((response) => {
        data.splice(idx, 1);
        render(data);
      });
    });
  };
};

const updateEdits = () => {
  const editableRows = document.querySelectorAll("tr.editable");
  const n = editableRows.length;
  if (n > 0) {
    const target = editableRows[0];
    idx = 0;
    for (i of window.data) {
      if (target.id === i.id) {
        editUserData(window.data, target.id, idx, target)();
        return;
      }
      idx++;
    }
  }
};
window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") updateEdits();
});
