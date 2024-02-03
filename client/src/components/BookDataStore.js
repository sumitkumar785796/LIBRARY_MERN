import React from "react";
import { NavLink } from "react-router-dom";

const BookDataStore = ({index,id,name,department,student_class,deleteBook}) => {
  return (
    <>
      <tr>
        <td>{index + 1 }</td>
        <td>{name}(id:{id})</td>
        <td>{department}</td>
        <td>{student_class}</td>
        <td>
          <NavLink to={`/bookEntry/${id}`} className="btn btn-success">
            Update
          </NavLink>
          <button style={{ margin: '10px' }} onClick={deleteBook}  className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default BookDataStore;
