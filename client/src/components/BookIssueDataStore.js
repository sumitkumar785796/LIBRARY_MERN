import React from 'react';

const formatDate = (dateString) => {
  const dateObj = new Date(dateString);

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(dateObj);
};

const BookIssueDataStore = ({ index,id, name, student_name, stud_id, issue, due, return_date, late, is_submmited,returnBook }) => {
  const formattedIssueDate = formatDate(issue);
  const formattedDueDate = formatDate(due);
  const formattedReturnDate = formatDate(return_date);

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{student_name}({stud_id})</td>
        <td>{formattedIssueDate}</td>
        <td>{formattedDueDate}</td>
        <td>{formattedReturnDate}</td>
        <td>&#8377;{late}</td>
        <td>
        {is_submmited === 1 ? (
          <button className='btn btn-primary' style={{color:'white'}} disabled>Return</button>
        ) : (
          <button className='btn btn-danger' style={{color:'white'}} onClick={returnBook}>Not Return</button>
        )}
      </td>
    
      </tr>
    </>
  );
};

export default BookIssueDataStore;
