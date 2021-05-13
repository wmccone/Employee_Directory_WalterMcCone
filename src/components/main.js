import React, { Component } from "react";
import "./style.css";
import EmployeeTable from "./employeetable";
import Employees from "./employeedata";


class EmployeeData extends Component {
  state = {
    result: {}
  }

  render() {
    return <main className="main">
      <EmployeeTable>
        <Employees />
      </EmployeeTable>
    </main>;
  }

}
export default Main;