import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import FormContainer from "./Components/FormContainer.jsx";
import TableContainer from "./Components/TableContainer.jsx";
import useLocalStorageState from "./Hooks/useLocalStorageState";

function App() {
  const initalFormState = {
    patientName: "",
    phoneNumber: "",
    doctorName: "",
    gender: "male",
    appointmentDate: "",
    status: "Consult",
    appointmentTime: "",
    age: "",
  };
  const [formData, setFormData] = useState(initalFormState);
  const [showForm, setShowForm] = useState(false);
  const [currentlySelectedUser, setCurrentlySelectedUser] = useState(null);
  const [userData, setUserData] = useLocalStorageState("userData", [
    {
      patientName: "John Doe",
      phoneNumber: "123-456-7890",
      doctorName: "Dr. Smith",
      gender: "male",
      appointmentDate: "2022-04-05",
      status: "Consult",
      appointmentTime: "10:00",
      age: "35",
    },
    {
      patientName: "Jane Doe",
      phoneNumber: "234-567-8901",
      doctorName: "Dr. Johnson",
      gender: "female",
      appointmentDate: "2022-04-06",
      status: "Consult",
      appointmentTime: "17:00",
      age: "45",
    },
    {
      patientName: "Bob Smith",
      phoneNumber: "345-678-9012",
      doctorName: "Dr. Patel",
      gender: "male",
      appointmentDate: "2022-04-07",
      status: "Revisit",
      appointmentTime: "16:00",
      age: "28",
    },
    {
      patientName: "Sarah Johnson",
      phoneNumber: "456-789-0123",
      doctorName: "Dr. Lee",
      gender: "female",
      appointmentDate: "2022-04-08",
      status: "Consult",
      appointmentTime: "11:00",
      age: "50",
    },
    {
      patientName: "Tom Williams",
      phoneNumber: "567-890-1234",
      doctorName: "Dr. Chen",
      gender: "male",
      appointmentDate: "2022-04-09",
      status: "Revisit",
      appointmentTime: "9:00",
      age: "42",
    },
    {
      patientName: "Emily Davis",
      phoneNumber: "678-901-2345",
      doctorName: "Dr. Kim",
      gender: "female",
      appointmentDate: "2022-04-10",
      status: "Consult",
      appointmentTime: "15:00",
      age: "30",
    },
    {
      patientName: "David Johnson",
      phoneNumber: "789-012-3456",
      doctorName: "Dr. Gupta",
      gender: "male",
      appointmentDate: "2022-04-11",
      status: "Revisit",
      appointmentTime: "10:00",
      age: "55",
    },
    {
      patientName: "Maria Hernandez",
      phoneNumber: "890-123-4567",
      doctorName: "Dr. Patel",
      gender: "female",
      appointmentDate: "2022-04-12",
      status: "Consult",
      appointmentTime: "14:00",
      age: "38",
    },
    {
      patientName: "James Lee",
      phoneNumber: "901-234-5678",
      doctorName: "Dr. Kim",
      gender: "male",
      appointmentDate: "2022-04-13",
      status: "Consult",
      appointmentTime: "11:00",
      age: "47",
    },
    {
      patientName: "Olivia Chen",
      phoneNumber: "012-345-6789",
      doctorName: "Dr. Lee",
      gender: "female",
      appointmentDate: "2022-04-14",
      status: "Revisit",
      appointmentTime: "13:00",
      age: "25",
    },
    {
      patientName: "Harsha",
      phoneNumber: "7032851778",
      doctorName: "Dr. Lee",
      gender: "male",
      appointmentDate: "2022-12-01",
      status: "Consult",
      appointmentTime: "12:59",
      age: "21",
    },
  ]);
  return (
    <>
      {createPortal(
        <FormContainer
          formData={formData}
          setFormData={setFormData}
          visible={showForm}
          setShowForm={setShowForm}
          initalFormState={initalFormState}
          setUserData={setUserData}
          setCurrentlySelectedUser={setCurrentlySelectedUser}
          currentlySelectedUser={currentlySelectedUser}
        />,
        document.getElementById("inputForm")
      )}
      <div className="App">
        <TableContainer
          setShowForm={setShowForm}
          setFormData={setFormData}
          data={userData}
          setUserData={setUserData}
          setCurrentlySelectedUser={setCurrentlySelectedUser}
        />
      </div>
    </>
  );
}

export default App;
