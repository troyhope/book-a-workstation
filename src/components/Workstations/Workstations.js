import "./Workstations.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import WorkstationFilter from "./WorkstationFilter";
import WorkstationList from "./WorkstationList";

function Workstations(props) {
  const [changetime, setChangeTime] = useState("10:00");

  const filterChangeHandler = (selectedTime) => {
    setChangeTime(selectedTime);
  };

  return (
    <div>
      <Card className="workstations">
        <WorkstationFilter
          selected={changetime}
          dateFilter={filterChangeHandler}
        />
        <WorkstationList
          selectedTime={changetime}
          workstations={props.workstations}
        />
      </Card>
    </div>
  );
}

export default Workstations;
