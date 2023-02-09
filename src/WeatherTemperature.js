import React, { useState } from "react";
import "./styles.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span className="tempreture">{Math.round(props.celsius)}</span>
        <sup>
          <span className="CF">
            <sup>
              {" "}
              °C |{" "}
              <a href="/" onClick={showFahrenheit} className="link">
                °F
              </a>
            </sup>
          </span>
        </sup>
      </div>
    );
  } else {
    return (
      <div>
        <span className="tempreture">{Math.round(fahrenheit())}</span>
        <sup>
          <span className="CF">
            <sup>
              {" "}
              <a href="/" onClick={showCelsius} className="link">
                °C
              </a>{" "}
              | °F
            </sup>
          </span>
        </sup>
      </div>
    );
  }
}
