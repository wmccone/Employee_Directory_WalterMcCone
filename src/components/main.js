import React, { Component } from "react";
import "./style.css";
import EmployeeTable from "./employeetable";
import Employees from "./employeedata";
import API from "../utils/API";


class MainEmployeeData extends Component {
  state = {
    result: {}
  }
componentDidMount() {
  this.createDirectory();
}

createDirectory = () => {
 API.getEmployees()
 .then(res => this.setState({result: res.data}))
 .catch(err => console.log(err));
};

  render() {
    return <main className="main">
      <EmployeeTable>
        <Employees />
      </EmployeeTable>
    </main>;
  }

}
export default MainEmployeeData;