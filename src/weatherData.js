import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherData(props) {
  return (
    <div>
      <div className="cityName text-capitalize">{props.data.city}</div>
 
      <div>
        <span className="currentlyText"> Currently </span>{" "}
        <span className="localTime">1122</span>
      </div>
      <div className="p-2">
        <span className="icon">
          {" "}
          <img src={props.data.iconUrl} alt={props.data.description} />{" "}
        </span>
        <span className="tempreture">{Math.round(props.data.temperature)}</span>
        <span className="CF">
          <sup>
            <span className="degreeIcon">°</span>
            <sup>
              <span className="celsius">C</span>
              <span className="fahrenheit m-1 p-1">F</span>
            </sup>
          </sup>
        </span>
      </div>
      <div className="description text-capitalize">
        {props.data.description}
      </div>
      <div className="humadityText">
        <span> Humadity: </span>
        <span className="humadity">{props.data.humidity}</span>
        <span>
          <small>%</small>
        </span>
      </div>
      <div className="windText">
        <span> Wind: </span>
        <span className="wind">{props.data.wind}</span>
        <span>
          <small>m/s</small>
        </span>
      </div>
    </div>
  );
}
