import React from "react";
import Workstation from "./Workstation";
import "./WorkstationList.css";

const WorkstationList = (props) => {
  if (props.workstations.length === 0) {
    return (
      <h2 className="workstations-list__fallback">Found no workstations</h2>
    );
  }
  //reverseWorkstationHandler
  // PUT method http request to update the workstation status and schedule
  // expense.schedule.monday.vacant.pop(selectedTime);
  // expense.schedule.monday.reserved.push(selectedTime);

  props.workstations.map(
    (workstation) =>
      (workstation.available = workstation.schedule.monday.vacant.includes(
        props.selectedTime
      ))
  );

  return (
    <ul className="workstations-list">
      {props.workstations.map((workstation) => (
        <Workstation
          key={workstation.id}
          id={workstation.id}
          name={workstation.name}
          available={workstation.available}
        />
      ))}
    </ul>
  );
};

export default WorkstationList;
