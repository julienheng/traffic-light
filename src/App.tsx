import { useState, useEffect } from "react";

import "./App.css";

// DEFINE THE TRAFFIC LIGHTS WITH THEIR DURATION AND NEXT LIGHT
const trafficLights = [
  {
    color: "red",
    next: "green",
    duration: 4000,
  },
  {
    color: "yellow",
    next: "red",
    duration: 500,
  },
  {
    color: "green",
    next: "yellow",
    duration: 3000,
  },
];

function App() {
  // DEFINE THE STATE TO TRACK THE CURRENT LIGHT COLOR
  const [currentLight, setCurrentLight] = useState("red");

  // USE EFFECT TO CHANGE THE LIGHT COLOR BASED ON THE DURATION
  useEffect(() => {

    // SET THE TIME INTERVAL TO CHANGE THE LIGHT COLOR
    const lightInterval = () => {}

    // CLEAN UP FUNCTION FOR SET TIME INTERVAL
    return () => clearInterval(lightInterval);

  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-black rounded-md flex flex-col p-8 gap-4">
        {trafficLights.map((light, index) => (
          <div
            key={index}
            // SET THE BACKGROUND COLOR TO THE CURRENT LIGHT COLOR
            className={`bg-gray-500 rounded-full h-[75px] w-[75px] ${
              currentLight === light.color ? light.color : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
