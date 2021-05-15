import React from "react";
import "../styles/Search.css";

function SearchForm(props) {
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <form className= "searchbox">
          <div className="form-group">
            <label htmlFor="search">Virtual Rolodex</label>
            <input
              onChange={event => props.handleInputChange(event.target.value)}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For an employee namegi below"
              id="search"
            />
          </div>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

export default SearchForm;