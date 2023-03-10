import React , { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function LocalTime(props) {
  let [loaded, setLoaded] = useState(false);
  let [time, setTime] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function FormatDate(formatted) {
    let date = new Date(formatted);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  function showLocalTime(response) {
    setTime(FormatDate(response.data.formatted));
    setLoaded(true);
  }

  if (loaded) {
    return <span className="localTime"> {time} </span>;
  } else {
    let apiU = `https://api.timezonedb.com/v2.1/get-time-zone?key=17XRENCNP355&format=json&by=position&lat=${props.data.latitude}&lng=${props.data.longitude}`;
    axios.get(apiU).then(showLocalTime);
    return null;
   }
}
