import React from "react";

function Employees(props) {
    return (
        <tbody>
        {props.employees.map(employee => (
                <tr>
                    <th scope="row"><img alt={employee.name} src={employee.image} /></th>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.dob}</td>
                </tr>
            ))}
        </tbody>

    );
}

export default Employees;