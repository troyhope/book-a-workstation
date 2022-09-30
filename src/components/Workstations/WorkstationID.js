import "./WorkstationID.css";

function WorkstationID(props) {
  return (
    <div className="workstation-date">
      <div className="workstation-date__day">{props.id}</div>
    </div>
  );
}

export default WorkstationID;
