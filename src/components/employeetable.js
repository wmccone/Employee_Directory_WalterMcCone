import React from "react";
import "../styles/Table.css";

function EmployeeTable(props) {
    return (
        <div className="col-md-10">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col" onClick={props.sort} value='name.first'>Name <i className="fas fa-arrows-alt-v"></i></th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            {props.children}
        </table>
        </div>
    );
}

export default EmployeeTable;