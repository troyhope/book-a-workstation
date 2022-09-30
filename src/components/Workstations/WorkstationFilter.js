import React from "react";

import "./WorkstationFilter.css";

//receiving dateFilter prop from Expenses parent to communicate the selected value.

const WorkstationFilter = (props) => {
  const dateFilterHandler = (event) => {
    props.dateFilter(event.target.value);
  };

  return (
    <div className="workstations-filter">
      <div className="workstations-filter__control">
        <label>Select a time</label>
        <select value={props.selected} onChange={dateFilterHandler}>
          <option value="9:00">Monday 9:00</option>
          <option value="9:30">Monday 9:30</option>
          <option value="10:00">Monday 10:00</option>
          <option value="10:30">Monday 10:30</option>
          <option value="11:00">Monday 11:00</option>
          <option value="11:30">Monday 11:30</option>
        </select>
      </div>
    </div>
  );
};

export default WorkstationFilter;
