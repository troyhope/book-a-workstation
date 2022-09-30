import React from "react";
import WorkstationItem from "./WorkstationItem";
import "./WorkstationList.css";

const WorkstationList = (props) => {
  const workstations = props.workstations;
  const selectedTime = props.selectedTime;

  if (workstations.length === 0) {
    return (
      <h2 className="workstations-list__fallback">Found no workstations</h2>
    );
  }
  //reverseWorkstationHandler -> onClick
  // PUT request to update the workstation status?
  // expense.schedule.monday.vacant.pop(selectedTime);
  // expense.schedule.monday.reserved.push(selectedTime);

  for (let workstation of workstations) {
    if (workstation.schedule.monday.vacant.includes(selectedTime)) {
      workstation.status = "Available";
    } else {
      workstation.status = "Unavailable";
    }
  }

  console.log(selectedTime);

  return (
    <ul className="workstations-list">
      {workstations.map((workstation) => (
        <WorkstationItem
          key={workstation.id}
          id={workstation.id}
          name={workstation.name}
          status={workstation.status}
        />
      ))}
    </ul>
  );
};

export default WorkstationList;
