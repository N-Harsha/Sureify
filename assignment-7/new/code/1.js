const btn = document.getElementById("darkLight");
const styleEle = document.getElementById("styleEle");
flag = false;
btn.addEventListener("click", () => {
  flag = !flag;
  if (flag) {
    styleEle.href = "2.css";
  } else {
    styleEle.href = "1.css";
  }
});
