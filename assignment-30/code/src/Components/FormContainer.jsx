import { useState } from "react";
import "./formContainer.css";
import FormInput from "./FormInput";

const inputs = [
  {
    id: 1,
    name: "patientName",
    placeholder: "Patient Name",
    label: "Patient Name*",
    type: "text",
    required: true,
    pattern: `^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`,
    errorMessage: (
      <ul>
        <li>can't be empty</li>
        <li>can have lower case and uppercase charaters.</li>
        <li>can have dot(.) comma(,) dash(-) after the inital of name</li>
      </ul>
    ),
  },
  {
    id: 2,
    name: "phoneNumber",
    placeholder: "Phone Number",
    label: "Phone Number*",
    type: "text",
    pattern: "^\\+?\\d{0,2}(\\d{3}[- ]?){2}\\d{4}$",
    required: true,
    errorMessage: (
      <ul>
        <li>Enter a valid Phone Number</li>
        <li>Country code is optional</li>
        <li>should have 10 digits</li>
      </ul>
    ),
  },
  {
    id: 3,
    name: "doctorName",
    placeholder: "Doctor Name",
    label: "Doctor Name*",
    type: "text",
    required: true,
    pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
    errorMessage: (
      <ul>
        <li>can't be empty</li>
        <li>can have lower case and uppercase charaters.</li>
        <li>can have dot(.) comma(,) dash(-) after the inital of name</li>
      </ul>
    ),
  },
  {
    id: 4,
    name: "gender",
    label: "Gender",
    type: "select",
    options: [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
    ],
    required: true,
  },
  {
    id: 5,
    name: "appointmentDate",
    placeholder: "Appointment Date",
    label: "Appointment Date*",
    type: "date",
    required: true,
    // todo min date
  },
  {
    id: 6,
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    options: [
      { label: "Consult", value: "Consult" },
      { label: "Revisit", value: "Revisit" },
    ],
  },
  {
    id: 7,
    name: "appointmentTime",
    label: "Appointment Time*",
    placeholder: "Appointment Time*",
    type: "time",
    required: true,
  },
  {
    id: 8,
    name: "age",
    placeholder: "Age",
    label: "Age*",
    type: "text",
    required: true,
    errorMessage: (
      <ul>
        <li>Enter valid age</li>
      </ul>
    ),
    pattern: `^[1-9][0-9]{0,2}$`,
  },
];

const FormContainer = ({
  formData,
  setFormData,
  visible,
  setShowForm,
  initalFormState,
  setUserData,
  setCurrentlySelectedUser,
  currentlySelectedUser,
}) => {
  const [error, setError] = useState("null");
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentlySelectedUser === null) {
      setUserData((prev) => {
        return [...prev, formData];
      });
    } else {
      setUserData((prev) => {
        const data = [...prev];
        data.splice(currentlySelectedUser, 1, formData);
        return data;
      });
      setCurrentlySelectedUser(null);
    }
    setFormData(initalFormState);
    setShowForm(false);
  };

  return (
    <>
      <div
        className={`backdrop ${visible ? "active" : ""}`}
        onClick={() => {
          setFormData(initalFormState);
          setCurrentlySelectedUser(null);
          setShowForm(false);
        }}
      ></div>
      <div className={`formContainer ${visible ? "active" : ""}`}>
        {currentlySelectedUser !== null ? (
          <h1>Update Your appointment</h1>
        ) : (
          <h1>Book Your appointment</h1>
        )}
        <form onSubmit={handleSubmit}>
          {inputs.map((item) => (
            <FormInput
              value={formData[item.name]}
              key={item.id}
              {...item}
              onChange={handleChange}
            />
          ))}
          <button>
            {currentlySelectedUser !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormContainer;
