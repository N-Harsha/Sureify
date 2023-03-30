import "./tableRow.css";
const TableRow = (props) => {
  const formatTime = (time) => {
    const hoursAndMins = time.split(":").map((item) => Number(item));
    let timeMode = "PM";
    if (hoursAndMins[0] >= 0 && hoursAndMins[0] < 12) {
      timeMode = "AM";
    } else {
      if (hoursAndMins[0] !== 12) hoursAndMins[0] -= 12;
    }

    return (
      hoursAndMins
        .map((item) => (String(item).length === 2 ? item : "0" + item))
        .join(":") +
      " " +
      timeMode
    );
  };
  return (
    <tr>
      <td className="verticalContainer">
        {/* todo: add the image of the user here */}
        <div>{props.patientName}</div>
        <div>{`${props.age}yrs,${props.gender}`}</div>
      </td>
      <td>
        <div className={`statusContainer ${props.status}`}>{props.status}</div>
      </td>
      <td>
        <div>{formatTime(props.appointmentTime)}</div>
        <div>{props.appointmentDate}</div>
      </td>
      <td>
        <div>{props.phoneNumber}</div>
        <a href={`tel:${props.phoneNumber}`}>Contact</a>
      </td>
      <td className="doctorName">{props.doctorName}</td>
      <td>
        <svg
          onClick={() => props.editUser(props.phoneNumber)}
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Edit / Edit_Pencil_01">
              {" "}
              <path
                id="Vector"
                d="M12 8.00012L4 16.0001V20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001"
                stroke="#0068d6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <svg
          onClick={() => props.deleteUser(props.phoneNumber)}
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7.69231 8.70833H5V8.16667H9.84615M7.69231 8.70833V19H16.3077V8.70833M7.69231 8.70833H16.3077M16.3077 8.70833H19V8.16667H14.1538M9.84615 8.16667V6H14.1538V8.16667M9.84615 8.16667H14.1538"
              stroke="#ff0000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M10 11V17"
              stroke="#ff0000"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M12 11V17"
              stroke="#ff0000"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M14 11V17"
              stroke="#ff0000"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </td>
    </tr>
  );
};

export default TableRow;
