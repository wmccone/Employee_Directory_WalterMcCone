import React from "react";

function EmployeeTable(props) {
    return (
      <table className="table">
        <thead>
            <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
      </table>
    );
  }
  
  export default EmployeeTable;