const navContainers = document.querySelectorAll(".navContainer");
head = document.head;

link1 = document.createElement("link");
link1.rel = "preconnect";
link1.href = "https://fonts.googleapis.com";
head.appendChild(link1);

link2 = document.createElement("link");
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
link2.crossOrigin = true;
head.appendChild(link2);

link3 = document.createElement("link");
link3.rel = "stylesheet";
link3.href =
  "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500&family=Poppins:wght@100;200&family=Signika+Negative&display=swap";
head.appendChild(link3);

const onHover = (ele) => {
  return () => {
    ele.children[1].classList.add("visible");
    ele.children[0].classList.add("active");
  };
};
const onLeave = (ele) => {
  return () => {
    ele.children[1].classList.remove("visible");
    ele.children[0].classList.remove("active");
  };
};
const changeFrame = (container, assignment, item) => {
  return () => {
    for (i of navContainers) {
      i.children[0].classList.remove("active");
    }
    container.children[0].classList.add("active");
    const frame = document.getElementById("frame");
    frame.src = `./res/${assignment}/${item}.html`;
    frame.classList.add("active");
  };
};

let idx = 1;
for (i of navContainers) {
  i.addEventListener("mouseover", onHover(i));
  i.addEventListener("mouseleave", onLeave(i));
  let idx1 = 1;
  for (j of i.children[1].children) {
    j.addEventListener("click", changeFrame(i, idx, idx1));
    idx1++;
  }
  idx++;
}
