import React, { Component } from "react";
import EmployeeTable from "./employeetable";
import Employees from "./employeedata";
import API from "../utils/API";
import compareValues from "../utils/sort";
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
   console.log(res)
   this.setState({...this.state, employees: res.data.results})
  })
 .catch(err => console.log(err));
};

handleInputChange = searchvalue => {
  this.setState({...this.state, search: searchvalue });
  console.log(this.state.search)
  this.filterResults()
};

filterResults = () => { 
  const employeeArr = this.state.employees
  console.log(this.state.search)
  const finalArr = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()))
  this.setState({ filteredemployees: finalArr})
}

sortAsc = (event) => {
  const employeeArr = this.state.employees
  // let newOrder = employeeArr.sort(compareValues(event.target.value))
  let newOrder =  employeeArr.sort((a,b)=>{ return a.name.first > b.name.first ? 1 : -1 })
  
  this.setState(newOrder)
}

sortDesc = (event) => {
  const employeeArr = this.state.employees
  let newOrder = employeeArr.sort(compareValues(event.target.value, 'desc'))
  this.setState(newOrder)
}

  render() {
    return <main className="main">
      <SearchForm 
      handleInputChange={this.handleInputChange}
      filterResults={this.filterResults}
      />
      <EmployeeTable
      sortAsc={this.sortAsc}
      sortDesc={this.sortDesc}
      >
        <Employees 
        employees= {this.state.search.length ? this.state.filteredemployees : this.state.employees}
        />
      </EmployeeTable>
    </main>;
  }

}
export default MainEmployeeData;