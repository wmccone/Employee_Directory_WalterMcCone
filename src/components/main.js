import React, { Component } from "react";
import EmployeeTable from "./employeetable";
import Employees from "./employeedata";
import API from "../utils/API";
import SearchForm from "./search";



class MainEmployeeData extends Component {
  state = {
    employees: [],
    search: "",
    filteredemployees: [],
    ascending: true
  }
  componentDidMount() {
    this.createDirectory();
  }

  createDirectory = () => {
    API.getEmployees()
      .then(res => {
        this.setState({ ...this.state, employees: res.data.results })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = searchvalue => {
    this.setState({ ...this.state, search: searchvalue });
    this.filterResults()
  };

  filterResults = () => {


    const finalArr = this.state.employees.filter(employee => (employee.name.first + " " + employee.name.last).toLowerCase().includes(this.state.search.toLowerCase()))
    this.setState({ filteredemployees: finalArr })
  }

  sort = () => {
    const employeeArr = this.state.employees
    // let newOrder = employeeArr.sort(compareValues(event.target.value))
    const newOrder = this.state.ascending ? employeeArr.sort((a, b) => { return a.name.first > b.name.first ? 1 : -1 }) : employeeArr.sort((a, b) => { return a.name.first > b.name.first ? -1 : 1 })
    this.setState({ ...this.state, employees: newOrder })
    this.state.ascending ? this.setState({ ...this.state, ascending: false }) : this.setState({ ...this.state, ascending: true })
  }


  render() {
    return <main className="main container">
      <SearchForm
        handleInputChange={this.handleInputChange}
        filterResults={this.filterResults}
      />
      <div className="row">
        <div className="col-md-1"></div>
        <EmployeeTable
          sort={this.sort}
          sortDesc={this.sortDesc}
        >
          <Employees
            employees={this.state.search.length ? this.state.filteredemployees : this.state.employees}
          />
        </EmployeeTable>
        <div className="col-md-1"></div>
      </div>
    </main>;
  }

}
export default MainEmployeeData;