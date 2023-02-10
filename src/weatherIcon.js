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
    "01d": pic1,
    "01n": pic2,
    "02d": pic3,
    "02n": pic4,
    "03d": pic5,
    "03n": pic6,
    "04d": pic7,
    "04n": pic8,
    "09d": pic9,
    "09n": pic10,
    "10d": pic11,
    "10n": pic12,
    "11d": pic13,
    "11n": pic14,
    "13d": pic15,
    "13n": pic16,
    "50d": pic17,
    "50n": pic18,
  };
  return <img src={imageMapping[props.code]} alt="weatherICON" />;
}
