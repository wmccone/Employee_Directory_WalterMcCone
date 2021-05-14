import React, { Component } from "react";
import EmployeeTable from "./employeetable";
import Employees from "./employeedata";
import API from "../utils/API";
import compareValues from "../utils/sort";


class MainEmployeeData extends Component {
  state = {
    employees: []
  }
componentDidMount() {
  this.createDirectory();
}

createDirectory = () => {
 API.getEmployees()
 .then(res => {
   console.log(res)
   this.setState({employees: res.data.results})
  })
 .catch(err => console.log(err));
};

sortAsc = (event) => {
  const employeeArr = this.state.employees
  let newOrder = employeeArr.sort(compareValues(event.target.value))
  this.setState(newOrder)
}

sortDesc = (event) => {
  const employeeArr = this.state.employees
  let newOrder = employeeArr.sort(compareValues(event.target.value, 'desc'))
  this.setState(newOrder)
}

  render() {
    return <main className="main">
      <EmployeeTable
      sortAsc={this.sortAsc}
      sortDesc={this.sortDesc}
      >
        <Employees 
        employees={this.state.employees}
        />
      </EmployeeTable>
    </main>;
  }

}
export default MainEmployeeData;