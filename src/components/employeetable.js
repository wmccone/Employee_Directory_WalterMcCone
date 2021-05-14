import React from "react";

function EmployeeTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col" onClick={props.sortAsc} value='name.first'>Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            {props.children}
        </table>
    );
}

export default EmployeeTable;