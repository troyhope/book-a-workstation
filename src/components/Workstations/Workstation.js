import "./Workstation.css";
import Card from "../UI/Card";
import React from "react";

const Workstation = (props) => {
  return (
    <li>
      <Card className="workstation-item">
        <div className="workstation-item__description">
          <div className="workstation-date">
            <div className="workstation-date__day">{props.id}</div>
          </div>
          <h2>{props.name}</h2>
          <div
            className={
              props.available ? "status__available" : "status__unavailable"
            }
          ></div>
        </div>
      </Card>
    </li>
  );
};

export default Workstation;
