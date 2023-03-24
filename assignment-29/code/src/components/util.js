const SEC_IN_MINUTE = 60;
const SEC_IN_HOUR = 60 * SEC_IN_MINUTE;
const SEC_IN_DAY = 24 * SEC_IN_HOUR;
const SEC_IN_YEAR = 365 * SEC_IN_DAY;

const formatTime = (time) => {
  time = time < 0 ? 0 : time;
  const years = Math.floor(time / SEC_IN_YEAR);
  time -= years * SEC_IN_YEAR;
  const days = Math.floor(time / SEC_IN_DAY);
  time -= days * SEC_IN_DAY;
  const hours = Math.floor(time / SEC_IN_HOUR);
  time -= hours * SEC_IN_HOUR;
  const minutes = Math.floor(time / SEC_IN_MINUTE);
  time -= minutes * SEC_IN_MINUTE;
  return `${years > 0 ? years + " Yrs " : ""}${
    days > 0 ? days + " Days " : ""
  }${hours > 0 ? hours + " Hrs " : ""}${minutes > 0 ? minutes + " Mins " : ""}${
    time >= 0 ? time + " Sec " : ""
  }`;
};
export default formatTime;
