import React from "react";

function Employees(props) {
    return (
        <tbody>
        {props.employees.map(employee => (
            
                <tr key={employee.login.uuid}>
                    <th scope="row"><img alt={employee.name.first} src={employee.picture.thumbnail} /></th>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.dob.date}</td>
                </tr>
            ))}
        </tbody>

    );
}

export default Employees;