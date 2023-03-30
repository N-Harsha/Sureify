import { React, useState, useEffect } from "react";

function Form() {
  const [forbutton, setforbutton] = useState("Book Appointment");
  const [id, setId] = useState(null);
  const initalUsersState = {
    name: "",
    number: "",
    dname: "",
    gender: "male",
    date: "",
    action: "consult",
    age: "",
    time: "",
  };
  const [users, setusers] = useState(initalUsersState);
  const inputFocusedInitalState = {
    name: false,
    number: false,
    dname: false,
    date: false,
    age: false,
    time: false,
  };
  const [inputFocused, setInputFocused] = useState(inputFocusedInitalState);

  const [allusers, setAllUsers] = useState(
    JSON.parse(localStorage.getItem("users")) ?? [
      {
        name: "John Doe",
        number: "123-456-7890",
        dname: "Dr. Smith",
        gender: "male",
        date: "2022-04-05",
        action: "Consult",
        time: "10:00",
        age: "35",
      },
      {
        name: "Jane Doe",
        number: "234-567-8901",
        dname: "Dr. Johnson",
        gender: "female",
        date: "2022-04-06",
        action: "Consult",
        time: "17:00",
        age: "45",
      },
      {
        name: "Bob Smith",
        number: "345-678-9012",
        dname: "Dr. Patel",
        gender: "male",
        date: "2022-04-07",
        action: "Revisit",
        time: "16:00",
        age: "28",
      },
      {
        name: "Sarah Johnson",
        number: "456-789-0123",
        dname: "Dr. Lee",
        gender: "female",
        date: "2022-04-08",
        action: "Consult",
        time: "11:00",
        age: "50",
      },
      {
        name: "Tom Williams",
        number: "567-890-1234",
        dname: "Dr. Chen",
        gender: "male",
        date: "2022-04-09",
        action: "Revisit",
        time: "9:00",
        age: "42",
      },
      {
        name: "Emily Davis",
        number: "678-901-2345",
        dname: "Dr. Kim",
        gender: "female",
        date: "2022-04-10",
        action: "Consult",
        time: "15:00",
        age: "30",
      },
      {
        name: "David Johnson",
        number: "789-012-3456",
        dname: "Dr. Gupta",
        gender: "male",
        date: "2022-04-11",
        action: "Revisit",
        time: "10:00",
        age: "55",
      },
      {
        name: "Maria Hernandez",
        number: "890-123-4567",
        dname: "Dr. Patel",
        gender: "female",
        date: "2022-04-12",
        action: "Consult",
        time: "14:00",
        age: "38",
      },
      {
        name: "James Lee",
        number: "901-234-5678",
        dname: "Dr. Kim",
        gender: "male",
        date: "2022-04-13",
        action: "Consult",
        time: "11:00",
        age: "47",
      },
      {
        name: "Olivia Chen",
        number: "012-345-6789",
        dname: "Dr. Lee",
        gender: "female",
        date: "2022-04-14",
        action: "Revisit",
        time: "13:00",
        age: "25",
      },
      {
        name: "Harsha",
        number: "7032851778",
        dname: "Dr. Lee",
        gender: "male",
        date: "2022-12-01",
        action: "Consult",
        time: "12:59",
        age: "21",
      },
    ]
  );
  useEffect(() => {
    console.log(allusers);
    localStorage.setItem("users", JSON.stringify(allusers));
  }, [allusers]);

  const handleChange = (event) => {
    setusers((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onBook = (event) => {
    event.preventDefault();
    if (id === null) {
      setAllUsers((prev) => [...prev, users]);
    } else {
      setAllUsers((prev) => {
        prev.splice(id, 1, users);
        return [...prev];
      });
      setInputFocused(inputFocusedInitalState);
      setId(null);
    }
    setusers(initalUsersState);
  };
  const onEdit = (index) => {
    return () => {
      setforbutton("Edit Details");
      setusers(allusers[index]);
      setId(index);
    };
  };
  const onDelete = (index) => {
    return () => {
      setAllUsers(allusers.splice(index, 1));
      setAllUsers([...allusers]);
    };
  };
  const handleOnBlur = (event) => {
    setInputFocused((prev) => {
      return { ...prev, [event.target.name]: true };
    });
  };
  return (
    <>
      <section className="form-content">
        <div className="form">
          <div className="note">
            <p>Welcome to Gradious Doctor Appointment Booking</p>
          </div>

          <form className="form-content" onSubmit={onBook}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Patient Name *"
                    value={users.name}
                    required
                    name="name"
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    focused={inputFocused.name.toString()}
                    pattern={`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`}
                  />
                  <span className="error">
                    <ul>
                      <li>can't be empty</li>
                      <li>can have lower case and uppercase charaters.</li>
                      <li>
                        can have dot(.) comma(,) dash(-) after the inital of
                        name
                      </li>
                    </ul>
                  </span>
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    name="gender"
                    placeholder="Select Male/Female *"
                    value={users.gender}
                    required
                    onChange={handleChange}
                  >
                    <option name="male" value="Male">
                      Male
                    </option>
                    <option name="female" value="Female">
                      Female
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="age"
                    className="form-control"
                    placeholder="Age *"
                    value={users.age}
                    required
                    onChange={handleChange}
                    pattern="[1-9][0-9]?"
                    onBlur={handleOnBlur}
                    focused={inputFocused.age.toString()}
                  />
                  <span className="error">
                    <ul>
                      <li>give a valid age between 1-99</li>
                    </ul>
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    className="form-control"
                    placeholder="Phone Number *"
                    value={users.number}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    focused={inputFocused.number.toString()}
                    required
                    pattern="^\+?\d{0,2}(\d{3}[- ]?){2}\d{4}$"
                  />
                  <span className="error">
                    <ul>
                      <li>Enter a valid Phone Number</li>
                      <li>Country code is optional</li>
                      <li>should have 10 digits</li>
                    </ul>
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date *"
                    value={users.date}
                    required
                    name="date"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Time *"
                    value={users.time}
                    required
                    onChange={handleChange}
                    name="time"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doctor Name *"
                    value={users.dname}
                    name="dname"
                    onChange={handleChange}
                    pattern={`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`}
                    onBlur={handleOnBlur}
                    focused={inputFocused.dname.toString()}
                    required
                  />
                  <span className="error">
                    <ul>
                      <li>can't be empty</li>
                      <li>can have lower case and uppercase charaters.</li>
                      <li>
                        can have dot(.) comma(,) dash(-) after the inital of
                        name
                      </li>
                    </ul>
                  </span>
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    placeholder="Select Consule/Revisit *"
                    value={users.action}
                    name="action"
                    onChange={handleChange}
                  >
                    <option name="Consult" value="Consult">
                      Consult
                    </option>
                    <option name="Revisit" value="Revisit">
                      Revisit
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btnSubmit">
                {id === null ? "Book Appointment" : "Update Appointment"}
              </button>
              {id !== null && (
                <button
                  className="btnCancel"
                  onClick={() => {
                    setId(null);
                    setusers(initalUsersState);
                  }}
                >
                  Cancel Update
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
      <section className="main-content">
        <div className="container">
          <br />
          <br />

          <table className="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Status</th>
                <th>Appointment</th>
                <th>Phone</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allusers.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="user-info">
                      <div className="user-info__img">
                        <img src="./img/prof.png" alt="User Img" />
                      </div>
                      <div className="user-info__basic">
                        <h5 className="mb-0">{item.name}</h5>
                        <p className="text-muted mb-0">{`${item.age} yrs, ${item.gender}`}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`btn btn-${
                        item.action === "Consult" ? "success" : "primary"
                      }`}
                    >
                      {item.action}
                    </span>
                  </td>
                  <td>
                    <h6 className="mb-0">{item.time}</h6>
                    <small>{item.date}</small>
                  </td>
                  <td>
                    <h6 className="mb-0">{item.number}</h6>
                    <a href="#!">
                      <small>Contact</small>
                    </a>
                  </td>
                  <td>
                    <h6 className="mb-0">{`${
                      item.dname.toLowerCase().startsWith("dr.") ? "" : "Dr. "
                    }${item.dname}`}</h6>
                  </td>
                  <td>
                    <div className="btn btn-warning m-1" onClick={onEdit(i)}>
                      Edit
                    </div>
                    <div className="btn btn-danger" onClick={onDelete(i)}>
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Form;
