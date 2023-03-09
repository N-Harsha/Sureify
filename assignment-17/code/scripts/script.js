const today = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

day = today.getDate();
month = today.getMonth();
year = today.getFullYear();
const monthBuilder = (month, year) => {
  const firstDayOfThisMonth = new Date(year, month, 1);
  const firstDayOfNextMonth = new Date(
    month + 1 > 11 ? year + 1 : year,
    (month + 1) % 12,
    1
  );
  const lastDayOfThisMonth = new Date(
    firstDayOfNextMonth.getTime() - 24 * 60 * 60 * 1000
  );
  dayOfWeekIdx = firstDayOfThisMonth.getDay();
  const monthObj = [[]];
  idx = 0;
  for (i = dayOfWeekIdx - 1; i >= 0; i--) {
    monthObj[idx].push("");
  }
  for (i = 1; i <= lastDayOfThisMonth.getDate(); i++) {
    monthObj[idx].push(i);
    dayOfWeekIdx = (dayOfWeekIdx + 1) % 7;
    if (dayOfWeekIdx === 0) {
      monthObj.push([]);
      idx++;
    }
  }

  return monthObj;
};

const constructCalandar = () => {
  const monthObj = monthBuilder(month, year);
  const monthYearDesc = document.getElementById("monthYear");
  monthYearDesc.innerHTML = `${monthNames[month]}, ${year}`;
  const calendarContainer = document.getElementById("calendarContainer");
  calendarContainer.innerHTML = "";
  for (i of weekdayNames) {
    const dayName = document.createElement("div");
    dayName.innerHTML = i;
    dayName.classList.add("calandarDayName");
    calendarContainer.appendChild(dayName);
  }
  for (i of monthObj) {
    for (j of i) {
      const day = document.createElement("div");
      if (j === "") day.classList.add("hidden");
      day.innerHTML = `<span>${j}</span>`;
      if (
        j === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      )
        day.classList.add("today");
      calendarContainer.appendChild(day);
    }
  }
};

const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const jumpToMonth = document.getElementById("jumpToMonth");
const jumpToYear = document.getElementById("jumpToYear");
const jumpToToday = document.getElementById("jumpToToday");

window.onload = () => {
  constructCalandar();
  for (i = 0; i < monthNames.length; i++) {
    const monthOption = document.createElement("option");
    monthOption.innerHTML = monthNames[i];
    monthOption.value = i;
    if (i === month) {
      monthOption.selected = true;
    }
    jumpToMonth.appendChild(monthOption);
  }
  for (i = 0; i <= 5000; i++) {
    const yearOption = document.createElement("option");
    yearOption.innerHTML = i;
    yearOption.value = i;
    if (i === year) {
      yearOption.selected = true;
    }
    jumpToYear.appendChild(yearOption);
  }
};
const incrementMonth = () => {
  month++;
  if (month === 12) {
    year++;
    month = 0;
  }
  jumpToMonth.value = month;
  jumpToYear.value = year;
  constructCalandar();
};
nextMonthBtn.addEventListener("click", incrementMonth);
const decrementMonth = () => {
  month--;
  if (month == -1) {
    year--;
    month = 11;
  }
  jumpToMonth.value = month;
  jumpToYear.value = year;
  constructCalandar();
};
prevMonthBtn.addEventListener("click", decrementMonth);

jumpToMonth.addEventListener("change", () => {
  month = jumpToMonth.value;
  constructCalandar();
});

jumpToYear.addEventListener("change", () => {
  year = jumpToYear.value;
  constructCalandar();
});

jumpToToday.addEventListener("click", () => {
  month = today.getMonth();
  year = today.getFullYear();
  jumpToYear.value = year;
  jumpToMonth.value = month;
  constructCalandar();
});
