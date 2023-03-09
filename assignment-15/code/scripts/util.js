import { closeModal, openModal } from "./script.js";

const STATIC_DATA = [
  {
    userId: "USR00001",
    name: "Andrew Grudde",
    profilePicture: "https://robohash.org/AndrewGrudde",
    statusMessage: "We become what we think about!",
    presence: 1,
  },
  {
    userId: "USR00002",
    name: "Steve Hughes",
    profilePicture: "https://robohash.org/SteveHughes",
    statusMessage: "A positive mind set brings positive things.",
    presence: 2,
  },
  {
    userId: "USR00003",
    name: "Kathy Smiley",
    profilePicture: "https://robohash.org/KathySmiley",
    statusMessage: "One small positive thought can change your whole day",
    presence: 3,
  },
  {
    userId: "USR00004",
    name: "Steve Dunk",
    profilePicture: "https://robohash.org/SteveDunk",
    statusMessage: "I am a rockstar",
    presence: 1,
  },
  {
    userId: "USR00005",
    name: "Maria Dropola",
    profilePicture: "https://robohash.org/MariaDropola",
    statusMessage: "I am using Gradious messenger",
    presence: 4,
  },
];

export const loadUserData = () => {
  let loadedData = JSON.parse(localStorage.getItem("users"));
  if (loadedData === null) {
    localStorage.setItem("users", JSON.stringify(STATIC_DATA));
    loadedData = JSON.parse(localStorage.getItem("users"));
  }
  render(loadedData);
};

const givePresenceClass = (type) => {
  switch (Number.parseInt(type)) {
    case 1:
      return "online";
    case 2:
      return "busy";
    case 3:
      return "idle";
    default:
      return "offline";
  }
};

const updateLocalStorate = (data) => {
  localStorage.setItem("users", JSON.stringify(data));
};

const editDataObj = (id, data) => {
  window.currentUser = id;
  for (let i of data) {
    if (i.userId === id) {
      openModal(i);
      break;
    }
  }
};

const delteDataObj = (id, data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].userId === id) {
      data.splice(i, 1);
      break;
    }
  }
  render(data);
};

const render = (data) => {
  window.userList = data;
  const chatList = document.getElementById("chatList");
  chatList.innerHTML = "";
  for (let i of data) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("chatUnit");

    const chatWrapperDiv = document.createElement("div");
    chatWrapperDiv.classList.add("chatWrapper");
    userDiv.appendChild(chatWrapperDiv);

    const profilePictureImg = document.createElement("img");
    profilePictureImg.src = `${i.profilePicture}/bgset_bg2`;
    profilePictureImg.classList.add(givePresenceClass(i.presence));
    chatWrapperDiv.appendChild(profilePictureImg);

    const verticalContainerDiv = document.createElement("div");
    verticalContainerDiv.classList.add("verticalContainer");
    chatWrapperDiv.appendChild(verticalContainerDiv);

    const userNameDiv = document.createElement("div");
    userNameDiv.classList.add("userName");
    userNameDiv.textContent = i.name;
    verticalContainerDiv.appendChild(userNameDiv);

    const userStatusDiv = document.createElement("div");
    userStatusDiv.classList.add("userStatus");
    userStatusDiv.textContent = i.statusMessage;
    verticalContainerDiv.appendChild(userStatusDiv);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");
    userDiv.appendChild(optionsDiv);

    const editButton = document.createElement("div");
    editButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>';
    editButton.addEventListener("click", () => {
      editDataObj(i.userId, data);
    });
    optionsDiv.appendChild(editButton);

    const deleteButton = document.createElement("div");
    deleteButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>';
    deleteButton.addEventListener("click", () => {
      delteDataObj(i.userId, data);
    });
    optionsDiv.appendChild(deleteButton);

    chatList.appendChild(userDiv);
  }
  updateLocalStorate(data);
};
const formatId = (num) => {
  let res = "USR";
  const n = String(num).length;
  for (let i = 0; i < 5 - n; i++) res += "0";
  res += num;
  return res;
};

export const addNewUser = (user) => {
  const ul = window.userList;
  const maxId = Math.max(
    Number.parseInt(ul[0].userId.slice(3)),
    Number.parseInt(ul[ul.length - 1].userId.slice(3))
  );
  const newObj = {
    userId: formatId(maxId + 1),
    ...user,
    profilePicture: "https://robohash.org/" + user.name,
  };
  ul.unshift(newObj);
  render(ul);
  closeModal();
};

export const updateUser = (user, id) => {
  const ul = window.userList;

  for (let i = 0; i < ul.length; i++) {
    if (ul[i].userId === id) {
      ul.splice(i, 1, {
        ...ul[i],
        ...user,
        profilePicture: "https://robohash.org/" + user.name,
      });
      break;
    }
  }
  console.log(ul);
  render(ul);
  closeModal();
};
