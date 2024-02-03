import React from "react";
import { NavLink } from "react-router-dom";

const StudentDataStore = ({index,id,name,student_class,mobile,password,deleteStudent}) => {
  return (
    <>
      <tr>
        <td>{index + 1 }</td>
        <td>{name}(id:{id})</td>
        <td>{student_class}</td>
        <td>{mobile}</td>
        <td>{password}</td>
        <td>
          <NavLink to={`/studentEntry/${id}`} className="btn btn-success">
            Update
          </NavLink>
          <button style={{ margin: '10px' }} onClick={deleteStudent}  className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default StudentDataStore;
