import React, { Component } from "react";
import EmployeeTable from "./employeetable";
import Employees from "./employeedata";
import API from "../utils/API";


class MainEmployeeData extends Component {
  state = {
    employees: {}
  }
componentDidMount() {
  this.createDirectory();
}

createDirectory = () => {
 API.getEmployees()
 .then(res => this.setState({employees: res.results}))
 .catch(err => console.log(err));
};

  render() {
    return <main className="main">
      <EmployeeTable>
        <Employees 
        employees={this.state.employees}
        />
      </EmployeeTable>
    </main>;
  }

}
export default MainEmployeeData;