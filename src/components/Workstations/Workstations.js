import "./Workstations.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import WorkstationFilter from "./WorkstationFilter";
import WorkstationList from "./WorkstationList";

function Workstations(props) {
  const [changeyear, setChangeYear] = useState("10:00");

  const filterChangeHandler = (selectedTime) => {
    setChangeYear(selectedTime);
  };

  // console.log(props.workstations);

  return (
    <div>
      <Card className="workstations">
        <WorkstationFilter
          selected={changeyear}
          dateFilter={filterChangeHandler}
        />
        <WorkstationList
          selectedTime={changeyear}
          workstations={props.workstations}
        />
      </Card>
    </div>
  );
}

export default Workstations;
