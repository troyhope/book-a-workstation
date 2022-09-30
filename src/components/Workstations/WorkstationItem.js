import "./WorkstationItem.css";
import Card from "../UI/Card";
import React from "react";
import WorkstationID from "./WorkstationID";

const WorkstationItem = (props) => {
  const statusAvail = "status__available";
  const statusUnavail = "status__unavailable";

  const currClass = props.status === "Available" ? statusAvail : statusUnavail;

  return (
    <li>
      <Card className="workstation-item">
        <div className="workstation-item__description">
          <WorkstationID id={props.id} />
          <h2>{props.name}</h2>
          <div className={currClass}></div>
        </div>
      </Card>
    </li>
  );
};

export default WorkstationItem;
