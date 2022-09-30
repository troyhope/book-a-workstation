import { useEffect, useState } from "react";
import Workstations from "./components/Workstations/Workstations";

function App() {
  const [workstations, setWorkstations] = useState([]);

  useEffect(() => {
    //DUMMY_DATA could be fetched from a database then stored in useState
    const DUMMY_DATA = [
      {
        id: "W1",
        name: "Workstation One",
        status: "Unavailable",
        schedule: {
          monday: {
            vacant: ["10:30", "11:00", "11:30"],
            reserved: ["9:00", "9:30", "10:00"],
          },
          tuesday: {
            vacant: ["10:30", "11:00", "11:30"],
            reserved: ["9:00", "9:30", "10:00"],
          },
        },
      },
      {
        id: "W2",
        name: "Workstation Two",
        status: "Available",
        schedule: {
          monday: {
            vacant: ["9:00", "9:30", "10:00"],
            reserved: ["10:30", "11:00", "11:30"],
          },
          tuesday: {
            vacant: ["9:00", "9:30", "10:00"],
            reserved: ["10:30", "11:00", "11:30"],
          },
        },
      },
    ];

    setWorkstations(DUMMY_DATA);
  }, []);

  return (
    <div>
      <Workstations workstations={workstations} />
    </div>
  );
}

export default App;
