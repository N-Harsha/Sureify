import { useEffect, useState } from "react";
import "./TableContainer.css";
import TableRow from "./TableRow";

const TableContainer = (props) => {
  const {
    setShowForm,
    data,
    setUserData,
    setFormData,
    setCurrentlySelectedUser,
  } = props;
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filterFunction = (name, phoneNumber) => {
    const searchTextInLowerCase = searchText.toLowerCase();
    name = name.toLowerCase();
    phoneNumber = phoneNumber.toLowerCase();
    return (
      name.includes(searchTextInLowerCase) ||
      phoneNumber.includes(searchTextInLowerCase)
    );
  };

  const itemsPerPage = 10;
  const lastIndexOfPage = itemsPerPage * currentPage;
  const firstIndexOfPage = lastIndexOfPage - itemsPerPage;

  const dataToRender = data.filter((item) =>
    filterFunction(item.patientName, item.phoneNumber)
  );

  const handlePageDecrease = () => {
    setCurrentPage((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  const maxPages = Math.ceil(dataToRender.length / itemsPerPage);

  const handlePageIncrease = () => {
    setCurrentPage((prev) => {
      if (prev >= maxPages) return prev;
      return prev + 1;
    });
  };

  const deleteUser = (idx) => {
    return () => setUserData((prev) => prev.filter((item, i) => i !== idx));
  };
  const editUser = (idx) => {
    // const user = data.find((item) => item.phoneNumber === phno);
    // setFormData(user);
    return () => {
      setCurrentlySelectedUser(idx);
      setFormData(data[idx]);
      setShowForm(true);
    };
  };

  return (
    <div className="TableWrapper">
      <div>
        <input
          type="text"
          placeholder="🔎 Search by name or phone number"
          value={searchText}
          onChange={(e) => {
            setCurrentPage(1);
            setSearchText(e.target.value);
          }}
        ></input>
        <button onClick={() => setShowForm(true)}>Book Appointments</button>
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th className="textCenter">Status</th>
              <th>Appointment</th>
              <th>Phone</th>
              <th>Doctor</th>
              <th className="textCenter">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataToRender
              .slice(firstIndexOfPage, lastIndexOfPage)
              .map((item, i) => (
                <TableRow
                  {...item}
                  key={i}
                  deleteUser={deleteUser(firstIndexOfPage + i)}
                  editUser={editUser(firstIndexOfPage + i)}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div className="paginationBtns">
        <span
          onClick={handlePageDecrease}
          className={currentPage === 1 ? "disabled" : ""}
        >
          {"<"}
        </span>
        <div>{currentPage}</div>
        <span
          onClick={handlePageIncrease}
          className={currentPage >= maxPages ? "disabled" : ""}
        >
          {">"}
        </span>
      </div>
    </div>
  );
};

export default TableContainer;
