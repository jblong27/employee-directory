import React, { Component } from "react";
import Search from "../Search";
import DataTable from "../DataTable";
import "./styles.css";

class Container extends Component {

  state = {
    //setting the component's original state
    search: "",
    employees: [],
    sortedEmployees: [],
    order: ""
  };

  componentDidMount() {

    API.getUsers().then(res => this.setState({
      employees: res.data.results,
      sortedEmployees: res.data.results
    })).catch(err => console.log(err))
  }
  //show employees by ascending / descending order
  sortByName = () => {

    const sorted = this.state.sortedEmployees;

    if (this.state.order === "asc") {
      const filtered = sorted.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
      console.log(filtered);

      this.setState({
        sortedEmployees: filtered,
        order: "desc"
      })
    } else {

        const filtered = sorted.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1);
        console.log(filtered);

        this.setState({
          sortedEmployees: filtered,
          order: "asc"
        })
    }
  }
  
  handleInputChange = event => {

    const employees = this.state.employees;
    const UserInput = event.target.value;
    const sortedEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1)
    this.setState({
      sortedEmployees,
    })
  }

  employeeSearch = () => {
    API.getUsers()
      .then(res => this.setState({
        sortedEmployees: res.data.results,
        employees: res.data.results
      }))
      .catch(err => console.log(err))
  }

  handleSearch = event => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Enter a name")
    }
    const { employees, search } = this.state;

    const sortedEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLocaleLowerCase()));

    this.setState({
      sortedEmployees
    })
  }

  render() {

    return (
      
      <div>

        <Search
          employee={this.state.employees}
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange} />
        <DataTable results={this.state.sortedEmployees}
          sortByName={this.sortByName} />

      </div>
    )
  }
}

export default Container