import React from "react";
import "./styles.css";
import pic1 from "./icon/clear-sky-day.svg";
import pic2 from "./icon/clear-sky-night.svg";
import pic3 from "./icon/few-clouds-day.svg";
import pic4 from "./icon/few-clouds-night.svg";
import pic5 from "./icon/scattered-clouds-day.svg";
import pic6 from "./icon/scattered-clouds-night.svg";
import pic7 from "./icon/broken-clouds-day.svg";
import pic8 from "./icon/broken-clouds-night.svg";
import pic9 from "./icon/shower-rain-day.svg";
import pic10 from "./icon/shower-rain-night.svg";
import pic11 from "./icon/rain-day.svg";
import pic12 from "./icon/rain-night.svg";
import pic13 from "./icon/thunderstorm-day.svg";
import pic14 from "./icon/thunderstorm-night.svg";
import pic15 from "./icon/snow-day.svg";
import pic16 from "./icon/snow-night.svg";
import pic17 from "./icon/mist-day.svg";
import pic18 from "./icon/mist-night.svg";

export default function WeatherIcon(props) {
  const imageMapping = {
    "clear-sky-day": pic1,
    "clear-sky-night": pic2,
    "few-clouds-day": pic3,
    "few-clouds-night": pic4,
    "scattered-clouds-day": pic5,
    "scattered-clouds-night": pic6,
    "broken-clouds-day": pic7,
    "broken-clouds-night": pic8,
    "shower-rain-day": pic9,
    "shower-rain-night": pic10,
    "rain-day": pic11,
    "rain-night": pic12,
    "thunderstorm-day": pic13,
    "thunderstorm-night": pic14,
    "snow-day": pic15,
    "snow-night": pic16,
    "mist-day": pic17,
    "mist-night": pic18,
  };
  return <img src={imageMapping[props.code]} alt="weather" />;
}
