import React from "react";

function SearchForm(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={event => props.handleInputChange(event.target.value)}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an employee"
            id="search"
          />
          <br />
          <button onClick={props.filterResults} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;